import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      math: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.mathMethod = this.mathMethod.bind(this);
  }
  handleChange(key, value) {
    console.log({ [key]: value });
    this.setState({ [key]: value });
  }
  mathMethod(value) {
    this.setState({ math: value });
  }
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <Calculator
          number1={this.state.number1}
          number2={this.state.number2}
          handleChange={this.handleChange}
          mathMethod={this.mathMethod}
          math={this.state.math}
        />
      </div>
    );
  }
}

export default App;
