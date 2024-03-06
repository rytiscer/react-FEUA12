import PropTypes from "prop-types";
const HeroCAO1 = ({ title, subtitle }) => {
  if (!title && !subtitle) {
    return <div>Title or subtitle is missing</div>;
  } else {
    return (
      <div className="hero">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
};
HeroCAO1.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default HeroCAO1;
