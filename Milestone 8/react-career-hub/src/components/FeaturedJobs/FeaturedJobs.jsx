import { useEffect, useState } from "react";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
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
      <div>
        {jobs.map(job=>)}
      </div>
    </div>
  );
};

export default FeaturedJobs;
