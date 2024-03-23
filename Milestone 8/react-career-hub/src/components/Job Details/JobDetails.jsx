import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  // console.log(jobs, id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 p-4 rounded-md">
          <h2 className="text-4xl">Details coming here</h2>
          <h2 className="text-2xl">Job Details of : {job.job_title}</h2>

          <p className="text-xl">Company Name: {job.company_name}</p>
          <p>
            <span className="font-semibold">Job Description:</span>{" "}
            {job.job_description}
          </p>
        </div>
        <div className="border">
          <h2 className="text-2xl">Side things</h2>
          <button
            onClick={() => toast("Applied Successfully")}
            className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default JobDetails;
