import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Car(props) {
  const [color, setColor] = useState("red");
  return <>
    <h2>I am a {props.marca} Car color {color}!</h2>
    <button
      type="button"
      onClick={() => {
        let cc = prompt("color:")
        if (cc) {
          setColor(cc)
        }
      }
      }
    >Botó</button>
    </>
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Garage />
      </header>
    </div>
  );
}

export default App;
