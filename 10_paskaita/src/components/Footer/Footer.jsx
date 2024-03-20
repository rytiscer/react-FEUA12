import { Link } from "react-router-dom";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  const currDate = new Date().toLocaleDateString();
  return (
    <div className={styles.footerMain}>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Porfolio</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <div className={styles.footerText}>
        <p>All rights reserved</p>
        <p>{currDate}</p>
      </div>
    </div>
  );
};

export default Footer;
