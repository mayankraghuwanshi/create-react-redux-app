import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Provider store = {store}>
      <Router basename="">
          <div className="App">
             <h1>Hello, World!</h1>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
