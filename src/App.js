import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StatesField from "./Components/DropDown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ width: "30%" }}>
          <StatesField />
          <StatesField />
        </div>
      </div>
    );
  }
}

export default App;
