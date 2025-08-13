import React from "react";
import styles from "./JopItem.module.css";
import { Link } from "react-router-dom";

export default function JopItem({ job }) {
  return (
    <>
      <li
        key={job.id}
        className={`${styles.jobListing} d-block d-sm-flex pb-3 pb-sm-0 align-items-center`}
      >
        <Link to={`/SingleJop/${job.id}`} className={styles.jobLink}></Link>
        <div className={styles.jobListingLogo}>
          <img
            src={job.logo}
            alt={`${job.company} Logo`}
            className="img-fluid"
          />
        </div>

        <div
          className={`${styles.jobListingAbout} d-sm-flex custom-width w-100 justify-content-between mx-4`}
        >
          <div
            className={`${styles.jobListingPosition} custom-width w-50 mb-3 mb-sm-0`}
          >
            <h2>{job.title}</h2>
            <strong>{job.company}</strong>
          </div>
          <div
            className={`${styles.jobListingLocation} mb-3 mb-sm-0 custom-width w-25`}
          >
            <span className={styles.iconRoom}></span> {job.location}
          </div>
          <div className={styles.jobListingMeta}>
            <span
              className={`badge ${
                job.type === "Full Time" ? "bg-success" : "bg-danger"
              }`}
            >
              {job.type}
            </span>
          </div>
        </div>
      </li>
    </>
  );
}
