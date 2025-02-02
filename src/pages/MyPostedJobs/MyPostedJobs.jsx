import useSWR from "swr";
import useAuth from "../../hooks/useAuth";
import fetchData from "../../utilities/fetchData";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  //   console.log(user.email)
  const {
    data: jobs = [],
    error,
    isLoading,
  } = useSWR(
    user?.email ? `http://localhost:5000/jobs?email=${user?.email}` : null,
    fetchData
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading applications!</div>;
  return (
    <div>
      My Posted Jobs: {jobs.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Company</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.company}</td>
                <td>{job.jobApplicationCount}</td>
                <td>
                  <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-xs btn-outline btn-error">
                      View Applications
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
