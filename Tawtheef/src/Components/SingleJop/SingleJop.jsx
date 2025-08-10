import React, { useEffect } from "react";
import logoJop from "../../assets/job_logo_5.jpg";
import pictureJop from "../../assets/job_single_img_1.jpg";
import style from './SingleJop.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const job = {
  id: 1,
  logo: logoJop,
  img: pictureJop,
  title: "Product Designer",
  company: "Puma",
  location: "New York City",
  employmentType: "Full Time",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus.Velit unde aliquam et voluptas reiciendis non sapiente labore, deleniti asperiores blanditiis nihil quia officiis dolor vero iste dolore vel molestiae saepe. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!",
  responsibilities: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  ],
  educationExperience: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  ],
  otherBenefits: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  ],
  summary: {
    publishedOn: "2023-01-01",
    vacancy: "20",
    employmentStatus: "Full Time",
    experience: "2to 3 years",
    jobLocation: "New York City",
    salary: "$60k - $100k",
    gender: "Any",
    applicationDeadline: "April 28, 2019",
  },
};

export default function SingleJop() {
  const navigator = useNavigate();
  const [savedJobs, setSavedJobs] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const handleSavedJobs = () => {
    console.log("انا دوست علي الزرار");

    const token = localStorage.getItem("userToken");
    if (!token) {
      alert("Please login first to save jobs.");
      navigator("/login");
      return;
    }

    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    const exists = savedJobs.some((item) => item.id === job.id);

    if (exists) {
      alert("The job is already saved.");
      return;
    }

    const newSavedJobs = [...savedJobs, job];
    localStorage.setItem("savedJobs", JSON.stringify(newSavedJobs));
    setIsSaved(true);
  };

  return (
    <>
      <section className="w-100">
      <div className={style.contactImg}>
        
      <div className={style.layer}></div>
      </div>
      <div className={style.contactTitle}>
        <h1 className='fw-bold'>Single Jop</h1>
      </div>
    </section>
      <div className=" container p-5 my-5 ">
        <div className=" w-50 d-flex ">
          <img
            src={job.logo}
            alt=""
            className=" border border-2 w-25 rounded-4"
          />
          <div className="w-50 d-flex justify-content-center align-items-start flex-column ms-4">
            <h3 className=" fw-bold ">{job.title}</h3>

            <div className="d-flex justify-content-center align-items-center mt-3">
              <p className="me-4 text-secondary ">
                <i class="fa-solid fa-briefcase me-2"></i>
                {job.company}
              </p>
              <p className="me-4 text-secondary">
                <i class="fa-solid fa-location-dot me-2"></i>
                {job.location}
              </p>
              <p className="me-4 text-primary">
                <i class="fa-regular fa-clock me-2 text-secondary"></i>
                {job.employmentType}
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex mt-4">
          <div className="  '" style={{ width: "65%" }}>
            <img src={pictureJop} alt="" className="w-100 mb-b-4 rounded-4" />

            <div className="my-5">
              <h3 className=" text-primary mb-4">
                <i class="fa-solid fa-align-left me-4"></i>Job Description
              </h3>
              <p className=" text-secondary">{job.description}</p>
            </div>

            <div className="my-5">
              <h3 className=" text-primary mb-4">
                <i class="fa-solid fa-rocket-launch me-3"></i>Responsibilities
              </h3>
              <ul className="list-unstyled">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className=" text-secondary">
                    <i class="fa-solid fa-circle-check me-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-5">
              <h3 className=" text-primary mb-4">
                <i class="fa-solid fa-circle-check me-3"></i>Education +
                Experience
              </h3>
              <ul className="list-unstyled">
                {job.educationExperience.map((item, index) => (
                  <li key={index} className=" text-secondary">
                    <i class="fa-solid fa-circle-check me-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-5">
              <h3 className=" text-primary mb-4">
                <i class="fa-solid fa-bookmark me-3"></i>Other Benifits
              </h3>
              <ul className="list-unstyled">
                {job.otherBenefits.map((item, index) => (
                  <li key={index} className=" text-secondary">
                    <i class="fa-solid fa-circle-check me-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-100 my-5">
              <button
                onClick={() => handleSavedJobs()}
                className={`btn ${
                  isSaved ? "btn-success" : "btn-outline-secondary"
                } px-5 py-3 rounded-3 text-dark `}
                style={{ width: "45%" }}
              >
                {isSaved ? "Saved ✅" : "Save Job"}
              </button>
              <button
                className="btn  btn-primary px-5 py-3 rounded-3 text-white  ms-4"
                style={{ width: "45%" }}
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="d-flex flex-column ms-4" style={{ width: "33%" }}>
            <div className=" bg-body-secondary p-5 pb-4 rounded-4">
              <h3 className="mb-2 fw-bold text-primary">Job Summary</h3>
              <p className=" text-secondary fs-6 mt-3">
                <span className=" fw-bold fs-5 text-dark">Published on : </span>
                {job.summary.publishedOn}
              </p>
              <p className=" text-secondary fs-6 mt-3">
                <span className=" fw-bold fs-5 text-dark">Vacancy: </span>
                {job.summary.vacancy}
              </p>
              <p className=" text-secondary fs-6 mt-3">
                <span className=" fw-bold fs-5 text-dark">
                  Employment Status:{" "}
                </span>
                {job.summary.employmentStatus}
              </p>
              <p className=" text-secondary fs-6 mt-3">
                <span className=" fw-bold fs-5 text-dark">Experience: </span>
                {job.summary.experience}
              </p>
              <p className=" text-secondary fs-6 mt-3">
                <span className=" fw-bold fs-5 text-dark">Job Location: </span>
                {job.summary.jobLocation}
              </p>
              <p className=" text-secondary fs-6 mt-3">
                <span className=" fw-bold fs-5 text-dark">Salary: </span>
                {job.summary.salary}
              </p>
              <p className=" text-secondary fs-6 mt-3">
                <span className=" fw-bold fs-5 text-dark">Gender: </span>
                {job.summary.gender}
              </p>
              <p className=" text-secondary fs-6 mt-3">
                <span className=" fw-bold fs-6 text-dark">
                  Application Deadline:{" "}
                </span>
                {job.summary.applicationDeadline}
              </p>
            </div>

            <div className="bg-body-secondary  p-4 mt-5  rounded-4">
              <h3 className=" fw-bold text-primary">Share</h3>
              <div className="d-flex justify-content-start mt-3">
                <i class="fa-brands fa-facebook-f text-primary me-4 fs-5"></i>
                <i class="fa-brands fa-twitter text-primary me-4 fs-5"></i>
                <i class="fa-brands fa-linkedin-in text-primary me-4 fs-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
