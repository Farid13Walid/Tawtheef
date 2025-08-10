import React, { useState } from "react";
import {useJobs} from '../../context/JopContext'

export default function HeaderSearch() {
  const [region, setRegion] = useState("");
  const [jobType, setJobType] = useState("");
  const [jopTitle , setJopTitle] = useState("")
const {jobs} = useJobs()
  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for jobs...");
  };
  return (
    <form className="search-jop-form  container" onSubmit={handleSearch}>
      <div className=" row  mb-5 ">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Job title, Company..."
            value={jopTitle}
            onChange={(e) => setJopTitle(e.target.value)}
          />
        </div>
        {/*  select region */}
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <select
            className="form-select form-select-lg w-100"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Select Region</option>
            {jobs.map((job) =>   <option value={job.location}>{job.location}</option>)}
           

          </select>
        </div>
        {/* select jop */}
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <select
            className="form-select form-select-lg w-100"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select Job Type</option>
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block text-white btn-search w-100"
          >
            <span className="icon-search icon mr-2"></span>
            Search Job
          </button>
        </div>
      </div>
    </form>
  );
}
