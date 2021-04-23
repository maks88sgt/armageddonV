import {
    ADD_ASTEROID_FOR_DESTROYING,
    DATA_FETCHING_ERROR,
    DATA_FETCHING_FINISHED,
    DATA_FETCHING_STARTED,
    SAVE_FETCHED_DATA
} from "./asteroid.actions";

export type Asteroid = {
    name: string,
    id: string,
    isDangerous: boolean,
    diameter: number,
    minRange: {
        kilometers: number,
        lunar: number,
    },
    minRangeDate: string,
}

export type AsteroidStoreType = {
        asteroids: Array<Asteroid>,
        forDestroying: Array<string>,
        isFetching: boolean,
        isFetchingError: boolean,
};

const initialState: AsteroidStoreType = {
    asteroids:[],
    forDestroying:[],
    isFetching: false,
    isFetchingError: false,
}

export function asteroidReducer(state: AsteroidStoreType = initialState, action: any): AsteroidStoreType {
    switch (action.type) {
        case DATA_FETCHING_STARTED:
            return {
                ...state,
                isFetching: true,
            };
        case DATA_FETCHING_FINISHED:
            return {
                ...state,
                isFetching: false,
            }

        case SAVE_FETCHED_DATA:
            return {
                ...state,
                asteroids: action.payload,
            };

        case DATA_FETCHING_ERROR:
            return {
                ...state,
                isFetchingError: true,
            }

        case ADD_ASTEROID_FOR_DESTROYING:
            return {
                ...state,
                forDestroying: [...state.forDestroying, action.payload],
            }

        default:
            return state;
    }
}

