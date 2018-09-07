// Pure components do less renders in comparison to a class and functional component
// better performance
import React, { PureComponent } from 'react';

class Result extends PureComponent {
  render() {
    return <li>{this.props.result}</li>
  }
}

export default Result;
