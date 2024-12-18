import { Suspense, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import useSWR from "swr";
import fetchData from "../../utilities/fetchData";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  //   const [jobs, setJobs] = useState([]);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/job-applications/?email=${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setJobs(data);
  //         console.log(data);
  //       })
  //       .catch((error) => console.error(error));
  //   }, [user.email]);
  //   const { data } = useSWR(
  //     `http://localhost:5000/job-applications/?email=${user.email}`,
  //     fetchData,
  //     { suspense: false }
  //   );
  //   console.log(data);
  // SWR fetcher with conditional fetch
  //   const { data: jobs = [], error } = useSWR(
  //     user?.email
  //       ? `http://localhost:5000/job-applications/?email=${user.email}`
  //       : null,
  //     fetchData
  //   );

  //   if (error) return <div>Error loading applications!</div>;
  //   if (!jobs) return <div>Loading...</div>;
  // Conditional fetch: fetch only when user.email exists
  const {
    data: jobs = [],
    error,
    isLoading,
  } = useSWR(
    user?.email
      ? `http://localhost:5000/job-applications/?email=${user.email}`
      : null,
    fetchData
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading applications!</div>;
  return <div>My Applications: {jobs.length}</div>;
};

export default MyApplications;
