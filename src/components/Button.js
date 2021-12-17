import React, { Component } from 'react';

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, local: currentLocal } = this.props;
    const { change: nextChange, local : nextLocal } = nextProps;

    if (currentChange === nextChange && currentLocal === nextLocal) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log('button component rendered');
    const { change, local } = this.props;

    return (
      <div>
        <button type='button' onClick={() => change(local)}>
          Click here
        </button>
      </div>
    );
  }
}
export default Button;
