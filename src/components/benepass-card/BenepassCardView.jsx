import React, { useState } from "react";
import BenepassCard from "./BenepassCard";

import styles from "./BenepassCardView.module.less";

const BenepassCardView = ({ cardData }) => {
  const [isMasked, setIsMasked] = useState(true);

  const toggleMask = () => {
    setIsMasked(!isMasked);
  };

  ("•••• ");
  return (
    <div className={styles.benepassView}>
      <header>
        <h1>Flex card</h1>
        <h2>Used for pre-tax purchases</h2>
      </header>

      <BenepassCard isMasked={isMasked} cardData={cardData} />
      <label className={styles.customCheckbox}>
        <input id="detailsCheckbox" type="checkbox" onClick={toggleMask} checked={!isMasked} value={!isMasked} />
        <span className={styles.checkmark}></span>
        <span className={styles.text} htmlFor="show-details">
          {isMasked ? "Show details" : "Hide details"}
        </span>
      </label>
    </div>
  );
};

export default BenepassCardView;
