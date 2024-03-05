import "./App.css";
import "./index.css";
import Top from "./components/Top";
import locationIcon from "./assets/location.png";
import letterIcon from "./assets/letter.png";
import phoneIcon from "./assets/mobile.png";
import Nav from "./components/Nav";
import mainLogo from "./assets/logo.svg";
import settingsLogo from "./assets/settings.png";
import questionLogo from "./assets/question.png";
import searchLogo from "./assets/search.png";
import userLogo from "./assets/user.png";
import PhotoSlider from "./components/PhotoSlider";
import FooterBottom from "./components/FooterBottom";

function App() {
  return (
    <div>
      <Top
        firstItemLogo={locationIcon}
        firstItem="Kur mus rasti"
        secondItemLogo={letterIcon}
        secondItem="Rašykite mums"
        thirdItemLogo={phoneIcon}
        thirdItem="1842"
        fourthItem="Apie įmonę"
        fifthItem="E.prenumerata"
        sixthItem="E.filatelija"
        seventhItem="EN"
      />
      <Nav
        mainLogo={mainLogo}
        firstItemNav="Privatiems"
        secondItemNav="Verslui"
        firstLogoNav={settingsLogo}
        thirdItemNav="Įrankiai"
        secondLogoNav={questionLogo}
        fourthItemNav="Pagalba"
        thirdLogoNav={searchLogo}
        fifthItemNav="Paieška"
        fourthLogoNav={userLogo}
        navButtonText="SIŲSTI SIUNTĄ"
      />
      <PhotoSlider />
      <footer>
        <FooterBottom />
      </footer>
    </div>
  );
}

export default App;
