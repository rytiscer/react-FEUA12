/* eslint-disable react/prop-types */
import React from "react";

class ClassButton extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.name}</button>
      </div>
    );
  }
}

export default ClassButton;
