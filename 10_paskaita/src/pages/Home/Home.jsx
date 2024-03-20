import styles from "../Home/Home.module.css";
import image from "../../assets/imgTag.png";
const Home = () => {
  return (
    <div className={styles.homeMain}>
      <h1>Home page</h1>
      <img src={image} alt="image" />
    </div>
  );
};

export default Home;
