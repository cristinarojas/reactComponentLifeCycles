import React, { Component } from 'react';
//import './Coins.css';

class Coins extends Component {
  constructor() {
    super();

    // initial state
    this.state = {
      dollars: 0
    };
  }

  /* It receives two
    parameters (props, state)
    every time we update a local state / prop this method is executed
    The returned value must be boolean if is false your component
     will never update because this method will block it from updating
     the default behavior of React is always to update the component.
     performance issue when we are rendering vast views and handling
     a lot of data that changes regularly
  */
  shouldComponentUpdate(props, state) {
    // We are only updating if the dollars are multiple of 10
    return state.dollars % 10 === 0;
  }

  handleOnChange = e => {
    this.setState({
      dollars: Number(e.target.value || 0)
    });
  }

  render() {
    return (
      <div className="Coins">
        <h1>Buy Crypto Coins!</h1>

        <div className="question">
          <p>How much dollars do you have?</p>

          <p>
            <input
              placeholder="0"
              onChange={this.handleOnChange}
              type="text" />
          </p>
        </div>

        <div className="answer">
          <p>Crypto Coin Price: $10</p>
          <p>You can Buy <strong>{ this.state.dollars / 10 }</strong></p>
        </div>
      </div>
    );
  }
}

export default Coins;
