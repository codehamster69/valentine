"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const [gif, setGif] = useState("/cute-love-bear-roses-ou7zho5oosxnpo6k.gif");
  const [saidYes, setSaidYes] = useState(false);
  const [positionNo, setPositionNo] = useState({});
  const [confetti, setConfetti] = useState(false);

  const handleNoClick = () => {
    setPositionNo({
      position: "absolute",
      left: `${Math.random() * windowSize.width - 20}px`,
      top: `${Math.random() * windowSize.height - 20}px`,
    });
  };

  return (
    <div className={styles.main}>
      <Confetti active={confetti} />
      <img className={styles["valentine-gif"]} src={gif} alt="valentine-gif" />

      {saidYes ? (
        <div className={styles["after-yes"]}>Ok Yayy!!</div>
      ) : (
        <h1>Will you be my Valentine?</h1>
      )}
      {!saidYes && (
        <div className={styles["buttons"]}>
          <button
            className={styles["yes-btn"]}
            onClick={() => {
              setGif("/bear-kiss-bear-kisses.gif");
              setSaidYes(true);
              setConfetti(true);
            }}
          >
            Yes
          </button>
          <button
            style={positionNo}
            className={styles["confirmation-btn"]}
            onClick={handleNoClick}
            onMouseOver={handleNoClick}
            onTouchStart={handleNoClick}
            tabIndex={-1}
          >
            No
          </button>
        </div>
      )}
        <div classname = "credit">Developed by Rohan Bansal </div>
    </div>
  );
}
