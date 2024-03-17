import PropTypes from "prop-types";

const Product = ({ item, onDelete }) => {
  return (
    <div className="item">
      <div className="itemImage">
        <img src={[item.image]} alt={item.title} />
      </div>
      <div className="itemSettings">
        <span className="itemTitle">{item.title}</span>
        <span className="itemPrice">&euro;{item.price}</span>
        <br />
        <button onClick={onDelete}>Ištrinti</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default Product;
