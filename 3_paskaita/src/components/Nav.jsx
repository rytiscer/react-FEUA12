/* eslint-disable react/prop-types */
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
          {props.fithItemNav}
        </a>
        <button className="navBtn">
          <img src={props.fourthLogoNav} alt="Logo" />
          {props.navButtonText}
        </button>
      </div>
    </div>
  );
};

export default Nav;
