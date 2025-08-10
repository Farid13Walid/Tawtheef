import { createContext, useContext, useEffect, useReducer } from "react";
// 1) create a context
const JobsContext = createContext();

const BASE_URL = "http://localhost:8000";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "jobs/loaded":
      return {
        ...state,
        jobs: action.payload,
        isLoading: false,
      };

    case "job/loaded":
      return {
        ...state,
        currentJob: action.payload,
        isLoading: false,
      };

    case "job/created":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
        currentJob: action.payload,
        isLoading: false,
      };

    case "job/deleted":
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
        isLoading: false,
        currentJob: {},
      };

    case "rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  jobs: [],
  isLoading: false,
  currentJob: {},
  error: "",
};

// 2) create a provider and add the context to it
function JobsProvider({ children }) {
  const [{ jobs, isLoading, currentJob, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchJobs() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/jobs`);
        const data = await res.json();
        dispatch({ type: "jobs/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "there was an error loading data",
        });
      }
    }
    fetchJobs();
  }, []);

  async function getJob(id) {
    if (Number(id) === Number(currentJob.id)) return;
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/jobs/${id}`);
      const data = await res.json();
      dispatch({ type: "job/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "there was an error loading data",
      });
    }
  }

  async function createJob(newJob) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/jobs`, {
        method: "POST",
        body: JSON.stringify(newJob),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to create city");

      const data = await res.json();
      dispatch({ type: "job/created", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: error.message || "there was an error loading creating city",
      });
    }
  }

  async function deleteJob(id) {
    dispatch({ type: "loading" });

    try {
      await fetch(`${BASE_URL}/jobs/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "job/deleted", payload: id });
    } catch {
      dispatch({ type: "rejected", payload: "there was an error delete city" });
    }
  }

  return (
    <JobsContext.Provider
      value={{
        jobs,
        isLoading,
        error,
        getJob,
        currentJob,
        createJob,
        deleteJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

// custom hook

function useJobs() {
  const context = useContext(JobsContext);
  if (context === undefined)
    throw new Error("useJobs must be used within a JobsProvider");
  return context;
}

export { JobsProvider, useJobs };
