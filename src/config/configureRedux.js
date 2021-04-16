import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

import {asteroidReducer} from "../redux/asteroid.reducer";


const addReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(applyMiddleware(thunk), addReduxDevTools);

export const  reduxStore = createStore(asteroidReducer, enhancer);

