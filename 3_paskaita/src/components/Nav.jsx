import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <div className="navigation">
      <div className="leftSideNav">
        <img className="mainLogo" src={props.mainLogo} alt="LP Logo" />
        <a href="#">{props.firstItemNav}</a>
        <a href="#">{props.secondItemNav}</a>
      </div>
      <div className="rightSideNav">
        <a href="#">
          <img className="navLogo" src={props.firstLogoNav} alt="Logo" />
          {props.thirdItemNav}
        </a>
        <a href="#">
          <img className="navLogo" src={props.secondLogoNav} alt="Logo" />
          {props.fourthItemNav}
        </a>
        <a href="#">
          <img className="navLogo" src={props.thirdLogoNav} alt="Logo" />
          {props.fifthItemNav}
        </a>
        <button className="navBtn">
          <img className="navLogo" src={props.fourthLogoNav} alt="Logo" />
          {props.navButtonText}
        </button>
      </div>
    </div>
  );
};

Nav.propTypes = {
  mainLogo: PropTypes.string.isRequired,
  firstItemNav: PropTypes.string.isRequired,
  secondItemNav: PropTypes.string.isRequired,
  firstLogoNav: PropTypes.string.isRequired,
  thirdItemNav: PropTypes.string.isRequired,
  secondLogoNav: PropTypes.string.isRequired,
  thirdLogoNav: PropTypes.string.isRequired,
  fourthItemNav: PropTypes.string.isRequired,
  fourthLogoNav: PropTypes.string.isRequired,
  navButtonText: PropTypes.string.isRequired,
  fifthItemNav: PropTypes.string.isRequired,
};

export default Nav;
