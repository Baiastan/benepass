import styles from "./BenepassCard.module.less";

import benepassLogo from "../../assets/benepass-logo.png";
import visaLogo from "../../assets/visa-logo.png";

const BenepassCard = ({ isMasked = true, cardData }) => {
  return (
    <div className={styles.benepassCard}>
      <section className={styles.benepassBodyWrapper}>
        <div className={styles.header}>
          <img src={benepassLogo} alt="Benepass Logo" />
          <h3 className={styles.virtualText}>{cardData.type}</h3>
        </div>
        <div className={styles.cardNumber}>
          {isMasked ? (
            <>
              <span className={styles.maskedDots}>{"•••• "}</span> {cardData?.cardNumber.slice(-4)}
            </>
          ) : (
            cardData.cardNumber
          )}
        </div>
        <div className={styles.cardDetailsWrapper}>
          <div>
            <span>VALID THRU</span>
            <span>{cardData.expDate}</span>
          </div>
          <div>
            <span>CVC</span>
            <span>{isMasked ? <span className={styles.maskedDots}>{"•••"}</span> : cardData.cvc}</span>
          </div>
        </div>
      </section>
      <div className={styles.cardFooter}>
        <span>ZIP {cardData.zipCode}</span>
        <img src={visaLogo} />
      </div>
    </div>
  );
};

export default BenepassCard;
