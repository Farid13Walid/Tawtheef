import React, { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";
import Counter from "./Counter";
import StateSectionContainer from "./StateSectionContainer";

const stats = [
  { label: "Candidates", value: 1930 },
  { label: "Jobs Posted", value: 54 },
  { label: "Jobs Filled", value: 120 },
  { label: "Companies", value: 550 },
];

export default function StatsSection() {
  const [startCounter, setStartCounter] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StateSectionContainer ref={sectionRef}>
      <div className="row mb-5 justify-content-center">
        <div className="col-md-7 text-center">
          <h2 className={`section-title mb-2 ${styles.sectionTitle}`}>
            JobBoard Site Stats
          </h2>
          <p className={`lead ${styles.leadText}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            unde officiis recusandae sequi excepturi corrupti.
          </p>
        </div>
      </div>

      <div className="row pb-0">
        {stats.map((stat, index) => (
          <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0" key={index}>
            <div className="d-flex align-items-center justify-content-center mb-2">
              <Counter targetValue={stat.value} start={startCounter} />
            </div>
            <span className={`${styles.caption} `}>{stat.label}</span>
          </div>
        ))}
      </div>
    </StateSectionContainer>
  );
}
