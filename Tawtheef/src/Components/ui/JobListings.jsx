
import { useJobs } from "../../context/JopContext";
import styles from "./JobListings.module.css";

import Spinner from "./Spinner";
import JopItem from "./JobItem";

const JobListings = () => {
  // Jobs array containing all job listings data
  const {jobs , isLoading} = useJobs();
  

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className={styles.siteSection}>
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className={`${styles.sectionTitle} mb-2`}>
              {jobs.length.toLocaleString()} Job Listed
            </h2>
          </div>
        </div>

        <ul className={`${styles.jobListings} mb-5`}>
          {jobs.map((job) => (
            <JopItem key={job.id} job={job} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JobListings;
