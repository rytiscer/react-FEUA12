import PropTypes from "prop-types";

const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="cardContent">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
