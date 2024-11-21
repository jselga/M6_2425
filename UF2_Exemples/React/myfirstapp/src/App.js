import logo from './logo.svg';
import './App.css';

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
   return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car />
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
