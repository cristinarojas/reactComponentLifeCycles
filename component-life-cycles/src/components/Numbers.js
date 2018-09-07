import React, { Component } from 'react';

import Result from './Result';

import './Numbers.css';

class Numbers extends Component {
  // Declaring state
  state = {
    numbers: '', // save the input value
    results: [] // save the results sum
  };

  handleNumberChange = e => {
    const { target: { value } } = e;

    // converting the string value to array
    const numbers = Array.from(value);

    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    this.setState({
      numbers: value,
      results: [...this.state.results, result]
    });
  }

  render() {
    return(
      <div className="Numbers">
        <input
          type="number"
          value={this.state.numbers}
          onChange={this.handleNumberChange} />

          {/*Rendering the results*/}
          <ul>
            {this.state.results.map((result, i) => (
              <Result key={i} result={result} />
            ))}
          </ul>
      </div>
    )
  }
}

export default Numbers;
