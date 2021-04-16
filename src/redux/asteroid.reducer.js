class AsteroidStore {
    constructor() {
        this.initialized = false;
    }
}


export function asteroidReducer (state = new AsteroidStore(), action) {
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

