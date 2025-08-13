import React, { useState } from "react";
import style from "./PostJop.module.css";
import { useJobs } from "../../context/JopContext";
import { useNavigate } from "react-router-dom";

export default function PostJop() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [educationExperience, setEducationExperience] = useState("");
  const [benefits, setBenefits] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState("");
  const [image, setImage] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [salary, setSalary] = useState("");
  const [gender, setGender] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");

  const { createJob } = useJobs();
  const navigate = useNavigate();

  function removeValue() {
    setJobTitle("");
    setLocation("");
    setJobType("");
    setJobDescription("");
    setResponsibilities("");
    setEducationExperience("");
    setBenefits("");
    setCompanyName("");
    setLogo("");
    setImage("");
    setVacancy("");
    setSalary("");
    setGender("");
    setApplicationDeadline("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      // id: Date.now(),
      logo,
      title: jobTitle,
      company: companyName,
      location,
      type: jobType,

      image,
      description: jobDescription
        .split("\n")
        .filter((line) => line.trim() !== ""),
      responsibilities: responsibilities
        .split("\n")
        .filter((line) => line.trim() !== ""),
      education_experience: educationExperience
        .split("\n")
        .filter((line) => line.trim() !== ""),
      benefits: benefits.split("\n").filter((line) => line.trim() !== ""),
      summary: {
        published_on: new Date().toLocaleDateString(),
        vacancy,
        employment_status: jobType,

        job_location: location,
        salary,
        gender,
        application_deadline: applicationDeadline,
        share_links: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
        },
      },
    };

    // console.log(newJob);
    createJob(newJob);
    removeValue();
    navigate("/AllJobs");
  };

  return (
    <>
      <section className="w-100 m-0">
        <div className={style.contactImg}>
          <div className={style.layer}></div>
        </div>
        <div className={style.contactTitle}>
          <h1 className="fw-bold">Post Job</h1>
        </div>
      </section>

      <div className="container my-5">
        <h3 className="mb-4">Post A Job</h3>

        <div className="border p-4 rounded bg-light">
          <form id="jobForm" onSubmit={handleSubmit}>
            {/* Logo */}
            <div className="mb-3">
              <label className="form-label">Logo</label>
              <input
                type="text"
                className="form-control"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </div>

            {/* Image */}
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            {/* Job Title */}
            <div className="mb-3">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                className="form-control"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            {/* Location */}
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Job Type */}
            <div className="mb-3">
              <label className="form-label">Job Type</label>
              <input
                type="text"
                className="form-control"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              />
            </div>

            {/* Job Description */}
            <div className="mb-3">
              <label className="form-label">Job Description</label>
              <input
                type="text"
                className="form-control"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            {/* Responsibilities */}
            <div className="mb-3">
              <label className="form-label">Responsibilities</label>
              <textarea
                className="form-control"
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
              />
            </div>

            {/* Education & Experience */}
            <div className="mb-3">
              <label className="form-label">Education & Experience</label>
              <textarea
                className="form-control"
                value={educationExperience}
                onChange={(e) => setEducationExperience(e.target.value)}
              />
            </div>

            {/* Benefits */}
            <div className="mb-3">
              <label className="form-label">Benefits</label>
              <textarea
                className="form-control"
                value={benefits}
                onChange={(e) => setBenefits(e.target.value)}
              />
            </div>

            {/* Company Name */}
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            {/* Vacancy */}
            <div className="mb-3">
              <label className="form-label">Vacancy</label>
              <input
                type="text"
                className="form-control"
                value={vacancy}
                onChange={(e) => setVacancy(e.target.value)}
              />
            </div>

            {/* Salary */}
            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="text"
                className="form-control"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            {/* Application Deadline */}
            <div className="mb-3">
              <label className="form-label">Application Deadline</label>
              <input
                type="text"
                className="form-control"
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
              />
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label className="form-label">Gender</label>

              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
              </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="Any"
                checked={gender === "Any"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Any
            </div>
            </div>

            {/* Submit */}
            <div className="text-center my-4">
              <button type="submit" className="btn btn-primary">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
