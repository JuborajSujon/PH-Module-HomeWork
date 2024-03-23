import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../Utility/loacalStorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const jobs = useLoaderData();

  useEffect(() => {
    const jobApplications = getStoredJobApplications();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) =>
      //   jobApplications.includes(job.id)
      // );
      const jobApplied = [];
      for (const id of jobApplications) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }

      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
      // console.log(jobsApplied);
    }
  }, [jobs]);

  const handleJobFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  return (
    <div>
      <h2>AppliedJobs: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobFilter("All")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobFilter("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobFilter("Onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>{job.job_title}</span> <span>{job.remote_or_onsite}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
