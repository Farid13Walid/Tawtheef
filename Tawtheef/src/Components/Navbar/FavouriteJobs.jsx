import React from "react";
import { useFavouriteJobs } from "../../context/FavouriteJobsContext";
export default function FavouriteJobs() {
  const { storageJobs, removeJob } = useFavouriteJobs();

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <h6 className="fw-bold text-primary px-2">Favourite Jobs</h6>
      {storageJobs.length === 0 ? (
        <p className="text-secondary px-2">No saved jobs yet.</p>
      ) : (
        <ul className="list-unstyled m-0">
          {storageJobs.map((job) => (
            <li
              key={job.id}
              className="d-flex align-items-center justify-content-between p-2 border-bottom"
            >
              {/* صورة + تفاصيل الوظيفة */}
              <div className="d-flex align-items-center">
                <img
                  src={job.logo}
                  alt="logo"
                  className="rounded-circle border me-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <strong className="d-block">{job.title}</strong>
                  <small className="text-muted">{job.company}</small>
                </div>
              </div>

              {/* زر الحذف */}
              <button
                onClick={() => removeJob(job.id)}
                className="btn btn-sm btn-outline-danger"
                style={{ padding: "2px 6px" }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
