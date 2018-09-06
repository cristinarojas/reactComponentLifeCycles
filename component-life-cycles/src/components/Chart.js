import React, { Component } from 'react';
import c3 from 'c3';
//import './Chart.css';

class Chart extends Component {
  componentDidMount() {
    // When the component mounts the first time we update the chart.
    this.updateChart();
  }

  /* Normally used to manage third party UI elements and interact with native uI */
  componentDidUpdate() { // executed every time the user receive a new prop from app.js
    // When we receive a new prop then we update the chart again.
    this.updateChart();
  }

  updateChart() {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: this.props.chartType
      }
    });
  }

  render() {
    return <div id="chart" />;
  }
}

export default Chart;
