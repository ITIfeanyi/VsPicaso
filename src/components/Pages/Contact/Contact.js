import React from "react";
import Header from "../../Header/Header";
import styles from "./Contact.module.css";
import Footer from "../../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className={styles.reachus}>
        <p>You can contact us with any of the following</p>
      </div>
      <div className={styles.contact_container}>
        <div className={styles.contact_icon}>
          <span className={styles.facebook}>
            <i className='fab fa-facebook-square'></i>
          </span>
          <span className={styles.twitter}>
            <i className='fab fa-twitter-square'></i>
          </span>
          <span className={styles.insta}>
            <i className='fab fa-instagram-square'></i>
          </span>
        </div>
      </div>
      <section className={styles.contact}>
        <div className={styles.subcontact}>
          <div className={styles.address_subcontainer_header}>
            <div className={styles.contact_icon_text}>
              <span>
                <i className='fas fa-map-marker-alt'></i>
              </span>
              <span>Address</span>
            </div>
            <p className={styles.contact_text}>
              27, mafoluku street lagos island, Lagos Nigeria
            </p>
          </div>

          <div className={styles.address_subcontainer_header}>
            <div className={styles.contact_icon_text}>
              <span>
                <i className='fas fa-phone'></i>
              </span>
              <span>Phone</span>
            </div>
            <p className={styles.contact_text}>
              <a href='tel:081490294049'>081490294049</a>
            </p>
          </div>
          <div className={styles.address_subcontainer_header}>
            <div className={styles.contact_icon_text}>
              <span>
                <i className='fas fa-envelope'></i>
              </span>
              <span>Email Address</span>
            </div>
            <p className={styles.contact_text}>
              <a href='mailto:valPicasso@gmail.com'>valPicasso@gmail.com </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
