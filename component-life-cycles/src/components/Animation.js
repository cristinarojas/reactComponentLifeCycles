import React, { Component } from 'react';
import './Animation.css';

class Animation extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  // allows to manipulate a component just before it receive new props or a new state.
  componentWillUpdate(newProps, newState) { // you can't use this.setState here, cause another call to the same method.
    if (!newState.show) {
      document.getElementById('fade').style = 'opacity: 1';
    } else {
      document.getElementById('fade').style = 'opacity: 0';
    }
  }

  toggleCollapse = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="Animation">
        <button onClick={this.toggleCollapse}>
          {this.state.show ? 'collapse' : 'Expand'}
        </button>

        <div
          id="fade"
          className={
            this.state.show ? 'transition show' : 'transition'
          }
        >
          This text will desappear
        </div>
      </div>
    );
  }
}

export default Animation;
