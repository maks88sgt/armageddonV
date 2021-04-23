import { api } from "../api/AsteroidApi";
import {Asteroid} from "./asteroid.reducer";

export const FETCH_ASTEROIDS_DATA = 'FETCH_ASTEROIDS_DATA';
export const DATA_FETCHING_STARTED = 'DATA_FETCHING_STARTED';
export const DATA_FETCHING_FINISHED = 'DATA_FETCHING_FINISHED';
export const SAVE_FETCHED_DATA = 'SAVE_FETCHED_DATA';
export const DATA_FETCHING_ERROR = 'DATA_FETCHING_ERROR';
export const ADD_ASTEROID_FOR_DESTROYING = 'ADD_ASTEROID_FOR_DESTROYING';

type addAsteroidForDestroyingActionType = {
    type: typeof ADD_ASTEROID_FOR_DESTROYING,
    payload: string,
}

export function addAsteroidForDestroying (payload: string): addAsteroidForDestroyingActionType {
    return {type: ADD_ASTEROID_FOR_DESTROYING, payload: payload};
}

type asteroidsDataFetchingStartedActionType = {
    type: typeof DATA_FETCHING_STARTED,
}

export function asteroidsDataFetchingStarted (): asteroidsDataFetchingStartedActionType {
    return {type: DATA_FETCHING_STARTED}
}

type asteroidsDataFetchingFinishedActionType = {
    type: typeof DATA_FETCHING_FINISHED,
}

export function asteroidsDataFetchingFinished (): asteroidsDataFetchingFinishedActionType  {
    return {type: DATA_FETCHING_FINISHED}
}

type saveFetchedDataActionType = {
    type: typeof SAVE_FETCHED_DATA,
    payload: Array<Asteroid>,
}

export function saveFetchedData (payload: Array<Asteroid>): saveFetchedDataActionType {
    return {type: SAVE_FETCHED_DATA, payload: payload};
}

type asteroidsDataFetchingErrorActionType = {
    type: typeof DATA_FETCHING_ERROR,
}

export function asteroidsDataFetchingError (): asteroidsDataFetchingErrorActionType {
    return {type: DATA_FETCHING_ERROR}
}

export function fetchAsteroidsData (): any {
    return (dispatch: any) => {
        dispatch(asteroidsDataFetchingStarted());
        api.getAsteroids()
            .then(res => {
                dispatch(asteroidsDataFetchingFinished());
                const asteroids = extractAsteroidsFromResponse(res.data);
                const normalizedAsteroids = mapAsteroids(asteroids);
                dispatch(saveFetchedData(normalizedAsteroids.sort((a: Asteroid,b: Asteroid) => sortByDate(a,b))));
            })
            .catch((err) => {
                console.log(err);
                dispatch(asteroidsDataFetchingError());
                dispatch(asteroidsDataFetchingFinished());
            });
    }
}

function extractAsteroidsFromResponse (response: any) {
    const asteroidsInDates = response.near_earth_objects;
    let result: Array<any> = [];
    for (let data in asteroidsInDates){
        if (asteroidsInDates.hasOwnProperty(data)) {
            result = result.concat(asteroidsInDates[data]);
        }
    }
    return result;
}

function mapAsteroids (asteroids: any): Array<Asteroid> {
    return asteroids.map((item: any) => {
        const itemDiameter = (item.estimated_diameter.meters.estimated_diameter_min + item.estimated_diameter.meters.estimated_diameter_max)/2;
        const minKilometerRange: Array<number>= [];
        const minLunarRange: Array<number> = [];
        const minRangeDate: Array<string> = [];

        item.close_approach_data.forEach((item: any) => {
            minKilometerRange.push(Math.round(item.miss_distance.kilometers));
            minLunarRange.push(Math.round(item.miss_distance.lunar));
            minRangeDate.push(item.close_approach_date);
        });

        return {
            name: item.name,
            id: item.id,
            isDangerous: item.is_potentially_hazardous_asteroid,
            diameter: Math.round(itemDiameter),
            minRange: {
                kilometers: minKilometerRange,
                lunar: minLunarRange,
            },
            minRangeDate: minRangeDate,
        };
    });
}

function sortByDate(a: Asteroid,b: Asteroid): number {
    return  Number(new Date(a.minRangeDate[0])) - Number(new Date(b.minRangeDate[0]));
}


