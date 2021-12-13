import React, { Component } from 'react';

class Clock extends Component {
  state = {
    date: new Date(),
    local: 'bn-BD',
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (local) => {
    this.setState({
      local,
    });
  };

  render() {
    const { date, local } = this.state;

    return (
      <div>
        <h1>
          <span>{this.state.date.toLocaleTimeString(local)}</span>
        </h1>
        <button type='button' onClick={() => this.handleClick('en-US')}>
          Click here
        </button>
      </div>
    );
  }
}

export default Clock;
