import logoInstagram from "../assets/instagram.png";
import logoLinkedin from "../assets/linkedin.png";
import logoFacebook from "../assets/facebook.png";
import sections from "./footerTopData";

const FooterTop = () => {
  return (
    <div className="topFooter">
      <div className="content">
        {sections.map((section, index) => (
          <div className="row" key={index}>
            <h5>{section.title}</h5>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="followUs">
        <span>Sekite mūsų naujienas</span>
        <div className="icons">
          <ul>
            <li>
              <a href="#">
                <img src={logoFacebook} alt="Facebook Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoLinkedin} alt="Linkedin Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoInstagram} alt="Instagram Icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerInfo">
        <div className="infoContainer">
          <ul>
            <li>
              <a href="#">Svetainės medis</a>
            </li>
            <li>
              <a href="">Duomenų apsauga</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
