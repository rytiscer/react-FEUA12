import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Porfolio</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </div>
  );
};

export default Header;
