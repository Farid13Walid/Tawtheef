import React, { forwardRef } from "react";
import styles from "./StateSectionContainer.module.css";

const StateSectionContainer = forwardRef(({ children, className }, ref) => {
  return (
    <section
      ref={ref}
      id="next"
      className={`py-5 ${className} ${styles.bgImage} ${styles.overlayPrimary}`}
      style={{ backgroundImage: `url('images/hero_1.jpg')` }}
    >
      <div className={`container ${styles["stats-section"]}`}>{children}</div>
    </section>
  );
});

export default StateSectionContainer;
