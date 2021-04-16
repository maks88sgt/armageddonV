
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './App.css';
import {reduxStore} from "./config/configureRedux";
import { Header } from "./components/Header/Header";
import { AppRouter } from "./components/AppRouter/AppRouter";

function App() {
    return (
            <BrowserRouter >
                <Header/>
                <Provider store={reduxStore}>
                    <AppRouter/>
                </Provider>
            </BrowserRouter >
    );
}

export default App;
