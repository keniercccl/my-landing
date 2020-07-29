import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './component/Wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LANDING PAGE KENIER
          <Wrapper />
        </p>
        
          Learn React
        
      </header>
    </div>
  );
}

export default App;
