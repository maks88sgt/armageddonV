import {INITIALIZED_SUCCESS} from "./asteroid.actions";

class AsteroidStore {
    constructor() {
        this.initialized = false;
        this.asteroids = [
            {
                id: "2519354",
                name: "519354 (2011 KR12)",
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1344481952,
                        estimated_diameter_max: 0.3006353038
                    },
                },
                is_potentially_hazardous_asteroid: false,
        },
        ];
    }
}

const initialState = new AsteroidStore();


export function asteroidReducer (state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };

        default:
            return state;
    }
}

