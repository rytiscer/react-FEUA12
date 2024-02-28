/* eslint-disable react/prop-types */
import React from "react";
import ClassButton from "./ClassButton";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.h3Text}</h3>
        <p>{this.props.pText}</p>
        <ClassButton name="Click click me" />
      </div>
    );
  }
}

export default ClassDiv;
