import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';

class Quiz extends Component {
    render() {
      return (
        <div className="quiz">test quiz
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Create a quiz!</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
  
  export default Quiz;