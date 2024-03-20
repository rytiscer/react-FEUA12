import styles from "../Services/Services.module.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Paslauga 1",
      description: "Ši paslauga suteikia tai ir tai.",
    },
    {
      id: 2,
      title: "Paslauga 2",
      description: "Ši paslauga suteikia kitą ir aną.",
    },
    {
      id: 3,
      title: "Paslauga 3",
      description: "Ši paslauga suteikia dar ką nors.",
    },
  ];

  return (
    <div className={styles.services}>
      <h1>Services page</h1>
      <div className={styles.serviceCards}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
