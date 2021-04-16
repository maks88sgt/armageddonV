export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
export const FETCH_ASTEROIDS_DATA = 'FETCH_ASTEROIDS_DATA';


export function initializedSuccess () {
    return { type: INITIALIZED_SUCCESS };
}

export function fetchAsteroidsData () {
    return { type: FETCH_ASTEROIDS_DATA };
}
