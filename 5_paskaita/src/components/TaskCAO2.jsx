import PropTypes from "prop-types";
import imgTag from "../assets/imgTag.png";

const TaskCAO2 = ({
  topTitle,
  topText,
  text,
  btnText,
  bottomTitle,
  pText,
  imgText,
}) => {
  return (
    <div>
      <div className="hero">
        <h1>{topTitle}</h1>
        <h3>
          {topText}
          <br />
          {text}
        </h3>
        <button className="button">{btnText}</button>
      </div>
      <div className="main">
        <h2>{bottomTitle}</h2>
        <p>{pText}</p>
        <div className="gallery">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div key={index} className="card">
                <img className="img" src={imgTag} alt="Image" />
                <p className="imgDescription">{imgText}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

TaskCAO2.propTypes = {
  topTitle: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  bottomTitle: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired,
  imgText: PropTypes.string.isRequired,
};

export default TaskCAO2;
