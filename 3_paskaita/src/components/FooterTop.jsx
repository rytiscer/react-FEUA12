import logoInstagram from "../assets/instagram.png";
import logoLinkedin from "../assets/linkedin.png";
import logoFacebook from "../assets/facebook.png";
const FooterTop = () => {
  const sections = [
    {
      title: "Įrankiai",
      links: [
        "Siuntų sekimas",
        "Tarptautinė siuntų paieška",
        "Kainų skaičiuoklė",
        "Pašto kodai ir adresai",
        "Paslaugų teikimo vietos",
        "Sąskaitų faktūrų išrašymas",
      ],
    },
    {
      title: "Paslaugos",
      links: [
        "Siuntimas ir kitos paslaugos",
        "LP EXPRESS savitarna",
        "Finansinės paslaugos",
        "Filatelija",
        "Verslui",
      ],
    },
    {
      title: "Pagalba",
      links: [
        "Dažniausiai užduodami klausimai",
        "Reikalavimai ir patarimai",
        "Duomenų apsauga",
        "Rašykite mums",
        "Slapukų nustatymai",
      ],
    },
    {
      title: "Lietuvos paštas",
      links: [
        "Apie įmonę",
        "Darnus vystymasis",
        "Skaidrumas ir teisinė informacija",
        "Patalpų nuoma ir pardavimai",
        "Karjera",
        "Naujienos",
        "Kontaktai",
        "Kontaktai žiniasklaidai",
        "Praneškite apie korupciją",
      ],
    },
  ];

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
