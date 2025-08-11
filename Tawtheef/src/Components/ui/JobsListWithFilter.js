import React, { useState } from "react";
import { useJobs } from "../../context/JopContext";
import Spinner from "./Spinner";
import JopItem from "./JobItem";

import styles from "./JobListings.module.css";

export default function JobsListWithFilter() {
  const { jobs, isLoading } = useJobs();

  const [filterText, setFilterText] = useState("");
  const [region, setRegion] = useState("");
  const [jobType, setJobType] = useState("");

  if (isLoading) {
    return <Spinner />;
  }

  const uniqueRegions = [...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const lowerFilter = filterText.toLowerCase();

    const matchesText =
      (job.title?.toLowerCase() || "").includes(lowerFilter) ||
      (job.company?.toLowerCase() || "").includes(lowerFilter) ||
      (job.location?.toLowerCase() || "").includes(lowerFilter) ||
      (job.type?.toLowerCase() || "").includes(lowerFilter);

    const matchesRegion = region ? job.location === region : true;
    const matchesJobType = jobType ? job.type === jobType : true;

    return matchesText && matchesRegion && matchesJobType;
  });

  return (
    <section className={styles.siteSection}>
      <div className="container">
        {/* Search and Filter Inputs */}
        <form
          className="search-jop-form mb-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Job title, Company..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select form-select-lg"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="">Select Region</option>
                {uniqueRegions.map((loc, idx) => (
                  <option key={idx} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <select
                className="form-select form-select-lg"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">Select Job Type</option>
                <option value="Part Time">Part Time</option>
                <option value="Full Time">Full Time</option>
              </select>
            </div>
          </div>
        </form>

        <div className="row mb-4 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className={`${styles.sectionTitle} mb-2`}>
              {filteredJobs.length.toLocaleString()} Job
              {filteredJobs.length !== 1 ? "s" : ""} Listed
            </h2>
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <p className="text-center">No jobs match your filter.</p>
        ) : (
          <ul className={`${styles.jobListings} mb-5`}>
            {filteredJobs.map((job) => (
              <JopItem key={job.id} job={job} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
