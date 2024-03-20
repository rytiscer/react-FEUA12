import { useState } from "react";
import styles from "../Contacts/Contacts.module.css";

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <h1>Contact Us</h1>
      <div className={styles.contactsMain}>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className={styles.thankYou}>
            <p>Thank you for contacting us!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Contacts;
