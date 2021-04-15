import './App.css';
import { Header } from "./components/Header/Header";
import { AppRouter } from "./components/AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter >
                <Header/>
                <AppRouter/>
            </BrowserRouter >
        </>

    );
}

export default App;
