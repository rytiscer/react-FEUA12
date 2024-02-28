/* eslint-disable react/prop-types */
import FuncButton from "./FuncButton";
const FuncDiv = (props) => (
  <div>
    <h3>{props.h3Text}</h3>
    <p>{props.pText}</p>
    <FuncButton text="Click me" />
  </div>
);

export default FuncDiv;
