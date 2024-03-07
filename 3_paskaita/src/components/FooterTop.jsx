import logoInstagram from "../assets/instagram.png";
import logoLinkedin from "../assets/linkedin.png";
import logoFacebook from "../assets/facebook.png";
const FooterTop = () => {
  return (
    <div className="topFooter">
      <div className="content">
        <div className="row">
          <h5>Įrankiai</h5>
          <ul>
            <li>
              <a href="#">Siuntų sekimas</a>
            </li>
            <li>
              <a href="#">Tarptautinė siuntų paieška</a>
            </li>
            <li>
              <a href="#">Kainų skaičiuoklė</a>
            </li>
            <li>
              <a href="#">Pašto kodai ir adresai</a>
            </li>
            <li>
              <a href="#">Paslaugų teikimo vietos</a>
            </li>
            <li>
              <a href="#">Sąskaitų faktūrų išrašymas</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <h5>Paslaugos</h5>
          <ul>
            <li>
              <a href="#">Siuntimas ir kitos paslaugos</a>
            </li>
            <li>
              <a href="#">LP EXPRESS savitarna</a>
            </li>
            <li>
              <a href="#">Finansinės paslaugos</a>
            </li>
            <li>
              <a href="#">Filatelija</a>
            </li>
            <li>
              <a href="#">Verslui</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <h5>Pagalba</h5>
          <ul>
            <li>
              <a href="#">Dažniausiai užduodami klausimai</a>
            </li>
            <li>
              <a href="#">Reikalavimai ir patarimai</a>
            </li>
            <li>
              <a href="#">Duomenų apsauga</a>
            </li>
            <li>
              <a href="#">Rašykite mums</a>
            </li>
            <li>
              <a href="#">Slapukų nustatymai</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <h5>Lietuvos paštas</h5>
          <ul>
            <li>
              <a href="#">Apie įmonę</a>
            </li>
            <li>
              <a href="#">Darnus vystymasis</a>
            </li>
            <li>
              <a href="#">Skaidrumas ir teisinė informacija</a>
            </li>
            <li>
              <a href="#">Patalpų nuoma ir pardavimai</a>
            </li>
            <li>
              <a href="#">Karjera</a>
            </li>
            <li>
              <a href="#">Naujienos</a>
            </li>
            <li>
              <a href="#">Kontaktai</a>
            </li>
            <li>
              <a href="#">Kontaktai žiniasklaidai</a>
            </li>
            <li>
              <a href="#">Praneškite apie korupciją</a>
            </li>
          </ul>
        </div>
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
