import React from "react";
import Header from "../../Header/Header";
import SwiperBox from "../../Swiper/Swiper";
import styles from "./Homepage.module.css";

import {
  faCamera,
  faVideo,
  faPhotoVideo,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Header />
      <SwiperBox />
      <article className={styles.about}>
        <div className={styles.sub_about}>
          <p>
            VS Picasso is portrait photography team that exudes passion and
            creativity. We caputure moments of Beauty and Beauty is Art in its
            Finest{" "}
          </p>
          <div className={styles.contact_us}>
            <button>Contact us</button>
          </div>
        </div>
      </article>
      <section className={styles.our_service}>
        <div className={styles.our_service_title}>
          <h3>Our Service</h3>
        </div>
        <div className={styles.service_container}>
          <div className={styles.service_list}>
            <div className={styles.service_list_title}>
              <span>
                {" "}
                <FontAwesomeIcon icon={faCamera} />
              </span>
              <span>
                <p>PHOTOGRAPHY</p>
              </span>
            </div>
          </div>
          <div className={styles.service_list}>
            <div className={styles.service_list_title}>
              <span>
                {" "}
                <FontAwesomeIcon icon={faVideo} />
              </span>
              <span>
                <p>VIDEOGRAPHY</p>
              </span>
            </div>
          </div>
          <div className={styles.service_list}>
            <div className={styles.service_list_title}>
              <span>
                <FontAwesomeIcon icon={faPhotoVideo} />{" "}
              </span>
              <span>
                <p>PHOTO EDITING</p>
              </span>
            </div>
          </div>
          <div className={styles.service_list}>
            <div className={styles.service_list_title}>
              <span>
                <FontAwesomeIcon icon={faFilm} />
              </span>
              <span>
                <p>VIDEO EDITING</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <article className={styles.more_Project}>
        <div className={styles.more_Project_sub}>
          <p className={styles.more_Project_text}>
            We take photography to the next level
          </p>
          <button>
            <Link to='/portfolio'>View more of our works</Link>
          </button>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Homepage;
