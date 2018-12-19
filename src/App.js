import React, { Component } from 'react';
import './App.css';
import Router from "./router";
import Navbar from "./components/common/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
