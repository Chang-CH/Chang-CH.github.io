import { useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as LogoL } from "_assets/LogoL2.svg";
import { ReactComponent as LogoR } from "_assets/LogoR2.svg";
import styles from "./s.module.scss";
import { Link } from "react-router-dom";
import { STAGE_1_DELAY } from "./constants";
import Magic from "./components/Magic";

function Home() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    setTimeout(() => setStage(1), STAGE_1_DELAY);
  }, []);

  return (
    <div className={styles.root}>
      <div>
        <div
          className={styles.divHello}
          style={{
            right: "calc(50% + 10rem)",
          }}
        >
          <p
            className={`${styles.title} ${styles.animated}`}
            style={{ opacity: stage === 0 ? "0%" : "100%" }}
          >
            Hey,
          </p>
          <p
            className={`${styles.title} ${styles.animated}`}
            style={{
              opacity: stage === 0 ? "0%" : "100%",
              transitionDelay: "0.5s",
            }}
          >
            i'm
          </p>
        </div>
        <div>
          <div
            style={{
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4rem",
              width: stage === 0 ? "9ch" : "16ch",
              height: "9ch",
            }}
          >
            <LogoL
              className={styles.animated}
              stroke="black"
              height="9ch"
              width="9ch"
              style={{
                position: "absolute",
                left: "calc(50% - 4.5ch)",
              }}
            />
            <p
              className={styles.animated}
              style={{
                position: "absolute",
                left: "calc(50% + 1.5ch)",
                opacity: stage === 0 ? "0%" : "100%",
                transitionDelay: "1.5s",
              }}
            >
              huan
            </p>
            <LogoR
              className={styles.animated}
              stroke="orange"
              height="9ch"
              width="9ch"
              style={{
                position: "absolute",
                left: `calc(50% - ${stage === 0 ? "4.5ch" : "0.25ch"})`,
                transitionDelay: "1s",
              }}
            />
            <p
              className={styles.animated}
              style={{
                position: "absolute",
                left: "calc(50% + 8.5ch)",
                color: "orange",
                opacity: stage === 0 ? "0%" : "100%",
                transitionDelay: "1.5s",
              }}
            >
              ao
            </p>
          </div>
        </div>
      </div>
      <div className={styles.divLinks}>
        <Link to="/about" className={styles.linkText}>
          About
        </Link>
        <Link to="/resume" className={styles.linkText}>
          Resume
        </Link>
        <Link to="/contact" className={styles.linkText}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Home;
