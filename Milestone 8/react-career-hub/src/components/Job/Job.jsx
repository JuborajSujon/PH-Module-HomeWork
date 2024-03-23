import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="py-4">
        <img className="w-32" src={logo} alt={job_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="btn font-extrabold border rounded border-violet-400 mr-4 text-violet-400">
            {remote_or_onsite}
          </button>
          <button className="btn font-extrabold border rounded border-violet-400 mr-4 text-violet-400">
            {job_type}
          </button>
        </div>
        <div className="my-4 flex gap-6">
          <h2 className="flex items-center text-xl">
            <MdLocationOn className=" mr-2" /> {location}
          </h2>
          <h2 className="flex items-center text-xl">
            <AiOutlineDollar className=" mr-2" />
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
