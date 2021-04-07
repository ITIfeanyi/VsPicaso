import React from "react";
import Header from "../../Header/Header";
import styles from "./PortFolio.module.css";
import { Link } from "react-router-dom";

import img1 from "../../../img/img1.jpg";
import img2 from "../../../img/img2.jpg";
import img3 from "../../../img/img3.jpg";
import Footer from "../../Footer/Footer";

const PortFolio = () => {
  return (
    <div>
      <Header />
      <div className={styles.ourportfolio}>
        <p className={styles.PortFolio_title}>[OUR PORTFOLIO]</p>
        <p className={styles.PortFolio_main}>
          We have touched hearts and created smiles with our camera.
        </p>
        <p className={styles.PortFolio_main}>
          We are also dedicated in helping our clients keep wonderful memories
          in the most perfect way.
        </p>
      </div>

      <div className={styles.accountable}>
        We hold ourselves accountable to a high standard of delivering a high
        quality works.
        <hr />
      </div>
      <div className={styles.portfolio_list}>
        <div className={styles.portfolio}>
          <Link to='/' className={styles.portfolio_link}>
            <img src={img1} alt='img' />
            <div className={styles.btn}>
              <span>Weddings</span>
            </div>
          </Link>
        </div>
        <div className={styles.portfolio}>
          <Link to='/' className={styles.portfolio_link}>
            <img src={img2} alt='img' />
            <div className={styles.btn}>
              <span>Studio shoots</span>
            </div>
          </Link>
        </div>
        <div className={styles.portfolio}>
          <Link to='/' className={styles.portfolio_link}>
            <img src={img3} alt='img' />
            <div className={styles.btn}>
              <span>Birthdays</span>
            </div>
          </Link>
        </div>
      </div>
      <article className={styles.think_photoshoot}>
        <div className={styles.think_photoshoot_text}>
          <p className={styles.think_photoshoot_text_small}>
            Thinking of taking a photoshoot?
          </p>
          <p className={styles.think_photoshoot_text_large}>
            Let's Create Memories Together
          </p>
          <Link to='/contact'>
            <button>Contact Us</button>
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default PortFolio;
