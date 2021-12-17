import React, { Component } from 'react';
import Button from './Button';

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
    console.log('clock component rendered');
    const { date, local } = this.state;

    return (
      <div>
        <h1>
          <span>{date.toLocaleTimeString(local)}</span>
        </h1>
        <Button change={this.handleClick} local='en-US'></Button>
      </div>
    );
  }
}

export default Clock;
