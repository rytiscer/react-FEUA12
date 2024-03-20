import styles from "../Portfolio/Portfolio.module.css";
import image from "../../assets/imgTag.png";

const Portfolio = () => {
  const items = [
    { id: 1, image: image },
    { id: 2, image: image },
    { id: 3, image: image },
    { id: 4, image: image },
    { id: 5, image: image },
    { id: 6, image: image },
    { id: 7, image: image },
    { id: 8, image: image },
  ];

  return (
    <div className={styles.mainPortfolio}>
      <h1>Portfolio page</h1>
      <div className={styles.portfolioItems}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={`img-${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
