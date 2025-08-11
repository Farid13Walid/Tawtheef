import JobsListWithFilter from "../ui/JobsListWithFilter";
import styles from "./AllJobs.module.css";

export default function AllJobs() {
  return (
    <>
      <section className={styles.firstSection}>
        <div className={styles.contactImg}>
          <div className={styles.layer}></div>
        </div>
        <div className={styles.contactTitle}>
          <h1>Jobs</h1>
        </div>
      </section>

      <JobsListWithFilter />
    </>
  );
}
