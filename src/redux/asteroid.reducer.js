import {
    ADD_ASTEROID_FOR_DESTROYING,
    DATA_FETCHING_ERROR,
    DATA_FETCHING_FINISHED,
    DATA_FETCHING_STARTED,
    INITIALIZED_SUCCESS,
    SAVE_FETCHED_DATA
} from "./asteroid.actions";

class AsteroidStore {
    constructor() {
        this.initialized = false;
        this.asteroids = [];
        this.forDestroying = [];
        this.isFetching = false;
        this.isFetchingError = false;
    }
}

const initialState = new AsteroidStore();

export function asteroidReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };

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

