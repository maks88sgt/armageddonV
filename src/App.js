import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './App.scss';
import {reduxStore} from "./config/configureRedux";
import {Header} from "./components/Header/Header";
import {AppRouter} from "./components/AppRouter/AppRouter";

function App() {
    return (
        <Provider store={reduxStore}>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
