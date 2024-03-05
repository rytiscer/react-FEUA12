import PropTypes from "prop-types";
const Top = (props) => {
  return (
    <div className="topLine">
      <div className="leftSide">
        <a href="#">
          <img src={props.firstItemLogo} alt="First Item Logo" />
          {props.firstItem}
        </a>
        <a href="#">
          <img src={props.secondItemLogo} alt="Second Item Logo" />
          {props.secondItem}
        </a>
        <a href="#">
          <img src={props.thirdItemLogo} alt="Third Item Logo" />
          {props.thirdItem}
        </a>
      </div>
      <div className="rightSide">
        <a href="#">{props.fourthItem}</a>
        <a href="#">{props.fifthItem}</a>
        <a href="#">{props.sixthItem}</a>
        <a href="#">{props.seventhItem}</a>
      </div>
    </div>
  );
};

Top.propTypes = {
  firstItemLogo: PropTypes.string.isRequired,
  firstItem: PropTypes.string.isRequired,
  secondItemLogo: PropTypes.string.isRequired,
  secondItem: PropTypes.string.isRequired,
  thirdItemLogo: PropTypes.string.isRequired,
  thirdItem: PropTypes.string.isRequired,
  fourthItem: PropTypes.string.isRequired,
  fifthItem: PropTypes.string.isRequired,
  sixthItem: PropTypes.string.isRequired,
  seventhItem: PropTypes.string.isRequired,
};

export default Top;
