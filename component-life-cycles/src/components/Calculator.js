import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super(); // extends the parent class.

    this.state = {
      number1: 0,
      number2: 0,
      result: 0
    };

    // Binding the methods here.
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  // Normal methods.
  handleOnChange(e) { // I need to bind (unir) this methods to the class to have access to the class.
    const { target: { value, name } } = e;

    this.setState({
      [name]: Number(value)
    });
  }

  // using arrow functions automatically bind our methods to the class.
  // less code use arrow functions...that binding in the constructor
  handleResult = e => {
    this.setState({
      result: this.state.number1 + this.state.number2
    });
  }

  render() {
    return (
      <div className="Calculator">
        <input
          type="text"
          name="number1"
          value = {this.state.number1}
          onChange={this.handleOnChange}
        />
        {' + '}
        <input
          name="number2"
          type="text"
          value={this.state.number2}
          onChange={this.handleOnChange}
        />
        <p><button onClick={this.handleResult}>=</button></p>
        <p className="result">{this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
