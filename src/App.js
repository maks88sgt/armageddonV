import logo from './logo.svg';
import './App.css';
import {FunctionalComponent} from "./FunctionalComponent/FunctionalComponnt";
import {ClassComponent} from "./ClassComponent/ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FunctionalComponent/>
      <ClassComponent/>
    </div>
  );
}

export default App;
