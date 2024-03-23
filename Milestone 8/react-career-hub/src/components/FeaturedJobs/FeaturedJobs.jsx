import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  // this is not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-center py-5">Featured Jobs</h2>
        <p className="text-center">
          Explore thousands of job oppertunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={`${
          dataLength === jobs.length ? "hidden" : "block"
        } text-center py-8`}>
        <button
          className="btn btn-primary"
          onClick={() => setDataLength(jobs.length)}>
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
