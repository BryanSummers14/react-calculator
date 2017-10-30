import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <div className="button-calculator">{props.value}</div>
    );
  }
}

export default Button;