"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const confirmations = [
    "No",
    "Are you sure?",
    "Really?",
    "Certain?",
    "Final call?",
    "Positive?",
    "Pleaseeeeee?",
    "Confirm?",
    "Decided?",
    "Final answer?",
    "Pretty please?",
    "I'll be sad",
    "I'll be very very sad",
    "I'll be very very very sad",
    "Ok, I'll stop asking...",
    "Just kidding, please say yes!!",
    "Convinced?",
    "Stand by it?",
    "Confident?",
    "Final choice?",
    "Sure about this?",
    "Proceed?",
    "Go on?",
    "Your decision?",
    "Sticking to it?",
    "Continue?",
    "Go through?",
    "This is it?",
    "Pleaseeeeee?",
    "Are we good?",
    "Is it okay?",
    "Can we go?",
    "Okay to continue?",
    "Confirm this?",
    "Is it right?",
    "Ready to finalize?",
    "Proceed with this?",
    // ... add more phrases here until you reach 100
  ];
  const [gif, setGif] = useState("/cute-love-bear-roses-ou7zho5oosxnpo6k.gif");
  const [saidYes, setSaidYes] = useState(false);
  const [confirmation, setConfirmation] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  return (
    <div className={styles.main}>
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
            style={{ fontSize }}
            onClick={() => {
              setGif("/bear-kiss-bear-kisses.gif");
              setSaidYes(true);
            }}
          >
            Yes
          </button>
          <button
            className={styles["confirmation-btn"]}
            onClick={() => {
              setConfirmation((confirmation + 1) % confirmations.length);
              setFontSize(fontSize + 20);
            }}
          >
            {confirmations[confirmation]}
          </button>
        </div>
      )}
    </div>
  );
}
