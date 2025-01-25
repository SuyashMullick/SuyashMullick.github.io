import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptop.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mlIcon.png")} alt="ML icon" />
            <div className={styles.aboutItemText}>
              <h3>Aspiring ML Engineer</h3>
              <p>
                I have been learning ML through online courses and hands-on projects on topics
                such as Linear Regression on PyTorch. I want to continue building my skills in ML
                by working on real-world projects, exploring advanced techniques like deep learning,
                and applying AI to solve practical problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Java Developer</h3>
              <p>
                I have experience on projects working back-end using Java and MySQL. Throughout
                my studies, I have also gained knowedge & experience on various software development
                methodologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I have designed and deployed multiple webpages with knowledge in HTML, CSS and JavaScript.
                I also have worked with React and Streamlit, and I am learning React Native with the aim to build
                a mobile app.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
