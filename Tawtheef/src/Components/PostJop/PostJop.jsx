import React, { useState } from "react";
import style from './PostJop.module.css'

export default function PostJop() {
  const [jobDescription, setJobDescription] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      jobDescription,
      companyDescription,
      email: e.target.email.value,
      jobTitle: e.target.jobTitle.value,
      location: e.target.location.value,
      jobRegion: e.target.jobRegion.value,
      jobType: e.target.jobType.value,
      companyName: e.target.companyName.value,
      tagline: e.target.tagline.value,
      website: e.target.website.value,
      facebook: e.target.facebook.value,
      twitter: e.target.twitter.value,
      linkedin: e.target.linkedin.value,
    });
  };

  return <>
        <section className="w-100 m-0">
      <div className={style.contactImg}>
        
      <div className={style.layer}></div>
      </div>
      <div className={style.contactTitle}>
        <h1 className='fw-bold'>Post Jop</h1>
      </div>
    </section>
       
    <div className="container my-5">
      <h3 className="mb-4">Post A Job</h3>

      <div className="border p-4 rounded bg-light">
        <h5 className="mb-4 border-bottom pb-2">Job Details</h5>

        <form id="jobForm" onSubmit={handleSubmit}>
          {/* Featured Image */}
          <div className="mb-3">
            <label className="form-label">Upload Featured Image</label>
            <input type="file" className="form-control" name="featuredImage" />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="you@yourdomain.com"
            />
          </div>

          {/* Job Title */}
          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              placeholder="Product Designer"
            />
          </div>

          {/* Location */}
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              placeholder="e.g. New York"
            />
          </div>

          {/* Job Region */}
          <div className="mb-3">
            <label className="form-label">Job Region</label>
            <select className="form-select" name="jobRegion" defaultValue="">
              <option value="" disabled>
                Select Region
              </option>
              <option>AnyWhere</option>
              <option>San Francisco</option>
              <option>Palo Alto</option>
              <option>New York</option>
              <option>Manhattan</option>
              <option>Ontario</option>
              <option>Toronto</option>
              <option>Kansas</option>
              <option>Mountain View</option>
            </select>
          </div>

          {/* Job Type */}
          <div className="mb-3">
            <label className="form-label">Job Type</label>
            <select className="form-select" name="jobType" defaultValue="">
              <option value="" disabled>
                Select Job Type
              </option>
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
          </div>

          {/* Job Description */}
          <div className="mb-4">
            <label className="form-label">Job Description</label>
            <textarea
              className="form-control"
              rows="6"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Write the job description here..."
            />
          </div>

          {/* Company Details */}
          <h5 className="mb-4 border-bottom pb-2">Company Details</h5>

          {/* Company Name */}
          <div className="mb-3">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              name="companyName"
              placeholder="e.g. New York"
            />
          </div>

          {/* Tagline */}
          <div className="mb-3">
            <label className="form-label">Tagline (Optional)</label>
            <input
              type="text"
              className="form-control"
              name="tagline"
              placeholder="e.g. We build the future"
            />
          </div>

          {/* Company Description */}
          <div className="mb-4">
            <label className="form-label">Company Description (Optional)</label>
            <textarea
              className="form-control"
              rows="6"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              placeholder="Write the company description here..."
            />
          </div>

          {/* Website */}
          <div className="mb-3">
            <label className="form-label">Website (Optional)</label>
            <input
              type="url"
              className="form-control"
              name="website"
              placeholder="http://"
            />
          </div>

          {/* Social Media */}
          <div className="mb-3">
            <label className="form-label">Facebook Username (Optional)</label>
            <input
              type="text"
              className="form-control"
              name="facebook"
              placeholder="companyname"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Twitter Username (Optional)</label>
            <input
              type="text"
              className="form-control"
              name="twitter"
              placeholder="@companyname"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">LinkedIn Username (Optional)</label>
            <input
              type="text"
              className="form-control"
              name="linkedin"
              placeholder="companyname"
            />
          </div>

          {/* Logo */}
          <div className="mb-4">
            <label className="form-label">Upload Logo</label>
            <input type="file" className="form-control" name="companyLogo" />
          </div>

          {/* Submit Button */}
          <div className="text-center my-5">
            <button type="submit" className="btn  btn-primary btn-lg px-5">
              Save Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </>;
}
