const getStoredJobApplications = () => {
  const jobApplications = localStorage.getItem("jobApplications");
  if (jobApplications) {
    return JSON.parse(jobApplications);
  } else {
    return [];
  }
};
const saveJobApplication = (id) => {
  const jobApplications = getStoredJobApplications();
  const exists = jobApplications.find((jobId) => jobId === id);
  if (!exists) {
    jobApplications.push(id);
    localStorage.setItem("jobApplications", JSON.stringify(jobApplications));
  }
};

export { getStoredJobApplications, saveJobApplication };
