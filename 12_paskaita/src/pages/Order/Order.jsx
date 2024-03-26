// FINISH THIS
import { useParams } from "react-router-dom";
import { fakeOrders } from "../Orders/consts";
import styles from "./Order.module.scss";

const Order = () => {
  const { id } = useParams();
  const order = fakeOrders.find((order) => order.id === parseInt(id));
  return (
    <div className={styles.mainOrder}>
      <div className={styles.leftSide}>
        <img src={order.hotel.imageUrl} alt="image" />
      </div>
      <div className={styles.rightSide}>
        <h1>{order.hotel.title}</h1>
        <h3>Price: {order.price} $</h3>
        <h3>Persons: {order.persons.join(", ")} </h3>
        <h3>Start date: {order.startDate.split("T")[0]}</h3>
        <h3>End date: {order.endDate.split("T")[0]}</h3>
      </div>
    </div>
  );
};

export default Order;
