import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

import {asteroidReducer} from "../redux/asteroid.reducer";
//@ts-ignore
const addReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(applyMiddleware(thunk), addReduxDevTools);

export const rootReducer = combineReducers({
    asteroidReducer,
})

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

export const  reduxStore = createStore(rootReducer, enhancer);

