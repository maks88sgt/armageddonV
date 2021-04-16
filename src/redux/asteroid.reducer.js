import {
    DATA_FETCHING_ERROR,
    DATA_FETCHING_FINISHED,
    DATA_FETCHING_STARTED,
    INITIALIZED_SUCCESS,
    SAVE_FETCHED_DATA
} from "./asteroid.actions";

class AsteroidStore {
    constructor() {
        this.initialized = false;
        this.asteroids = [
            {
                links: {
                    self: "http://www.neowsapp.com/rest/v1/neo/2008176?api_key=DEMO_KEY"
                },
                id: "2008176",
                neo_reference_id: "2008176",
                name: "8176 (1991 WA)",
                nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2008176",
                absolute_magnitude_h: 16.9,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 1.1080388213,
                        estimated_diameter_max: 2.4776501261
                    },
                    meters: {
                        estimated_diameter_min: 1108.0388212642,
                        estimated_diameter_max: 2477.6501260554
                    },
                    miles: {
                        estimated_diameter_min: 0.6885031904,
                        estimated_diameter_max: 1.5395399365
                    },
                    feet: {
                        estimated_diameter_min: 3635.2980863563,
                        estimated_diameter_max: 8128.7736395675
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2021-04-17",
                        close_approach_date_full: "2021-Apr-17 11:29",
                        epoch_date_close_approach: 1618658940000,
                        relative_velocity: {
                            kilometers_per_second: "38.5655534185",
                            kilometers_per_hour: "138835.9923067724",
                            miles_per_hour: "86267.2864419498"
                        },
                        miss_distance: {
                            astronomical: "0.4862853675",
                            lunar: "189.1650079575",
                            kilometers: "72747255.190167225",
                            miles: "45203048.281968705"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://www.neowsapp.com/rest/v1/neo/2519354?api_key=DEMO_KEY"
                },
                id: "2519354",
                neo_reference_id: "2519354",
                name: "519354 (2011 KR12)",
                nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2519354",
                absolute_magnitude_h: 21.48,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1344481952,
                        estimated_diameter_max: 0.3006353038
                    },
                    meters: {
                        estimated_diameter_min: 134.4481951604,
                        estimated_diameter_max: 300.6353038309
                    },
                    miles: {
                        estimated_diameter_min: 0.0835422095,
                        estimated_diameter_max: 0.1868060594
                    },
                    feet: {
                        estimated_diameter_min: 441.1030166101,
                        estimated_diameter_max: 986.3363302205
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2021-04-17",
                        close_approach_date_full: "2021-Apr-17 22:55",
                        epoch_date_close_approach: 1618700100000,
                        relative_velocity: {
                            kilometers_per_second: "10.264335458",
                            kilometers_per_hour: "36951.6076487824",
                            miles_per_hour: "22960.2919859892"
                        },
                        miss_distance: {
                            astronomical: "0.3856777919",
                            lunar: "150.0286610491",
                            kilometers: "57696576.174543253",
                            miles: "35850990.0023647714"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://www.neowsapp.com/rest/v1/neo/3555072?api_key=DEMO_KEY"
                },
                id: "3555072",
                neo_reference_id: "3555072",
                name: "(2011 AH5)",
                nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3555072",
                absolute_magnitude_h: 26,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0167708462,
                        estimated_diameter_max: 0.0375007522
                    },
                    meters: {
                        estimated_diameter_min: 16.7708462163,
                        estimated_diameter_max: 37.5007521798
                    },
                    miles: {
                        estimated_diameter_min: 0.0104209175,
                        estimated_diameter_max: 0.0233018799
                    },
                    feet: {
                        estimated_diameter_min: 55.0224631002,
                        estimated_diameter_max: 123.0339677816
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2021-04-17",
                        close_approach_date_full: "2021-Apr-17 13:33",
                        epoch_date_close_approach: 1618666380000,
                        relative_velocity: {
                            kilometers_per_second: "8.9637302431",
                            kilometers_per_hour: "32269.428875335",
                            miles_per_hour: "20050.9681808991"
                        },
                        miss_distance: {
                            astronomical: "0.2598029724",
                            lunar: "101.0633562636",
                            kilometers: "38865971.290708788",
                            miles: "24150194.7006377544"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
        ];
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

        default:
            return state;
    }
}

