import axios from "axios";

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
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-15&end_date=2021-04-22&api_key=DEMO_KEY')
            .then(res => {
                dispatch(asteroidsDataFetchingFinished());
                dispatch(saveFetchedData(res.data));
            })
            .catch(() => {
                dispatch(asteroidsDataFetchingError());
                dispatch(asteroidsDataFetchingFinished());
            });
    }
}
