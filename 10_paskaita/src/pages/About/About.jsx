import styles from "./About.module.css";
import image from "../../assets/imgTag.png";
const About = () => {
  return (
    <div className={styles.mainAbout}>
      <div>
        <h1>About us page</h1>
      </div>
      <div className={styles.content}>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptas eius vel voluptate minus corporis amet, cumque maiores sed
          provident numquam dolore repellat unde? Blanditiis eaque quod
          voluptates laborum unde.
        </h3>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default About;
