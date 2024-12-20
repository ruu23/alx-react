import React from 'react';
import './App.css';
import logo from '../assets/Holberton Logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email'></input>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password'></input>
          <button>OK</button>
        </form>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
