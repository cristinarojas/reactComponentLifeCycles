import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Coins from './components/Coins';
import Notes from './components/Notes';
import Chart from './components/Chart';
import Animation from './components/Animation';
import Numbers from './components/Numbers';
import Header from './components/FunctionalComponent';
import Xss from './components/Xss';
import Calculator from './components/Calculator';

// Data
import { notes1, notes2 } from './components/data';

class App extends Component {
  constructor(props) {
    super(props);

    // The first time we load the note1
    this.state = {
      notes: notes1,
      chartType: 'line'
    };

    this.columns = [
      ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
      ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
      ['XRP', 100, 200, 300, 500, 400, 300],
    ];
  }

  setBarChart = () => {
    this.setState({
      chartType: 'bar'
    });
  }

  setLineChart = () => {
    this.setState({
      chartType: 'line'
    });
  }

  /*
    immediately before the component is removed from the DOM.
    Generally, is used to perform a clean- up for any DOM elements
    or timers created by the componentWillMount method.
  */
  componentDidMount() {
    // After 10 seconds (10000 milliseconds) we concatenate our data with notes2
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2]
      });
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Coins />

        <Notes notes={this.state.notes} />

        <Chart
          columns={this.columns}
          chartType={this.state.chartType} />

        <Animation />

        <p>
          Chart type
          <button type="button" onClick={this.setBarChart}>Bar</button>
          <button type="button" onClick={this.setLineChart}>Line</button>
        </p>

        <Numbers />

        <Header />

        <Xss />

        <Calculator />
      </div>
    );
  }
}

export default App;
