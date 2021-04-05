import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_container}>
        <div className={styles.more}>
          <span>Privacy</span>
          <span>Terms and Condition</span>
          <span>site</span>
        </div>
        <p>&copy; 2020 VsPicasso, All right reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
