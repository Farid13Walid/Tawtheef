// FavouriteJobsContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const FavouriteJobsContext = createContext();

export function FavouriteJobsProvider({ children }) {
  const [storageJobs, setStorageJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setStorageJobs(jobs);
  }, []);

  const addJob = (job) => {
    const exists = storageJobs.some((item) => item.id === job.id);
    if (!exists) {
      const updatedJobs = [...storageJobs, job];
      setStorageJobs(updatedJobs);
      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
    }
  };

  const removeJob = (id) => {
    const updatedJobs = storageJobs.filter((job) => job.id !== id);
    setStorageJobs(updatedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  };

  return (
    <FavouriteJobsContext.Provider value={{ storageJobs, addJob, removeJob }}>
      {children}
    </FavouriteJobsContext.Provider>
  );
}

export function useFavouriteJobs() {
  return useContext(FavouriteJobsContext);
}
