import { api } from "../api/AsteroidApi";

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
export const FETCH_ASTEROIDS_DATA = 'FETCH_ASTEROIDS_DATA';
export const DATA_FETCHING_STARTED = 'DATA_FETCHING_STARTED';
export const DATA_FETCHING_FINISHED = 'DATA_FETCHING_FINISHED';
export const SAVE_FETCHED_DATA = 'SAVE_FETCHED_DATA';
export const DATA_FETCHING_ERROR = 'DATA_FETCHING_ERROR';



export function initializedSuccess () {
    return { type: INITIALIZED_SUCCESS };
}

export function asteroidsDataFetchingStarted () {
    return {type: DATA_FETCHING_STARTED}
}

export function asteroidsDataFetchingFinished () {
    return {type: DATA_FETCHING_FINISHED}
}

export function saveFetchedData (payload) {
    return {type: SAVE_FETCHED_DATA, payload: payload};
}

export function asteroidsDataFetchingError () {
    return {type: DATA_FETCHING_ERROR}
}

export function fetchAsteroidsData () {
    return dispatch => {
        dispatch(asteroidsDataFetchingStarted());
        api.getAsteroids()
            .then(res => {
                dispatch(asteroidsDataFetchingFinished());
                const asteroids = extractAsteroidsFromResponse(res.data);
                const normalizedAsteroids = mapAsteroids(asteroids);
                dispatch(saveFetchedData(normalizedAsteroids));
            })
            .catch((err) => {
                console.log(err);
                dispatch(asteroidsDataFetchingError());
                dispatch(asteroidsDataFetchingFinished());
            });
    }
}

function extractAsteroidsFromResponse (response) {
    const asteroidsInDates = response.near_earth_objects;
    let result = [];
    for (let data in asteroidsInDates){
        if (asteroidsInDates.hasOwnProperty(data)) {
            result = result.concat(asteroidsInDates[data]);
        }
    }
    return result;
}

function mapAsteroids (asteroids) {
    return asteroids.map(item => {
        const itemDiameter = (item.estimated_diameter.meters.estimated_diameter_min + item.estimated_diameter.meters.estimated_diameter_max)/2;
        const minKilometerRange = [];
        const minLunarRange = [];
        const minRangeDate = [];

        item.close_approach_data.forEach(item => {
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
