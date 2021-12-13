import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return <div>
      <h1>
        <span>{new Date().toLocaleTimeString(this.props.local)}</span>
      </h1>
    </div>;
  }
}

export default Clock;
