import React, { Component } from 'react';
//import logo from './traceofwind-flat.svg';
import logo from './images/traceofwind-rgb.svg';
import './App.css';

class App extends Component {
  // class App
  // extends Component
  // which comes from import React
  // which renders...
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Author: Gary Hicks <a href="traceofwind.com">traceofwind.com</a>
        </p>
      </div>
    );
  }
}

export default App;
