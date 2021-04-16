import {createStore} from "redux";

import {asteroidReducer} from "../redux/asteroid.reducer";

export const  reduxStore = createStore(asteroidReducer);
