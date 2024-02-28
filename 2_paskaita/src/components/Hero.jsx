/* eslint-disable react/prop-types */
const Hero = (props) => {
  return (
    <div className="hero">
      <h1>{props.title}</h1>
      <h3>
        {props.text}
        <br />
        {props.text2}
      </h3>
      <button className="button">{props.btnText}</button>
    </div>
  );
};

export default Hero;
