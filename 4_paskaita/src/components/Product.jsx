import PropTypes from "prop-types";

const Product = ({ category, name, price }) => {
  return (
    <div className="product">
      <h4>{category}</h4>
      <p>{name}</p>
      <p>☆☆☆☆☆</p>
      <p className="price">{price}</p>
    </div>
  );
};
Product.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};
export default Product;
