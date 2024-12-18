// import { useEffect, useState } from "react";
import fetchData from "../../../utilities/fetchData";
import useSWR from "swr";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  // ! Normal data fetching
  //   const [jobs, setJobs] = useState([]);
  //   useEffect(() => {
  //     const fetchAllJobs = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:5000/jobs", fetchData);
  //         setJobs(res.data);
  //       } catch (error) {
  //         console.error("Error fetching jobs:", error);
  //       }
  //     };
  //     fetchAllJobs();
  //   }, []);
  //   console.log(jobs);
  // const { data, error } = useSWR("http://localhost:5000/jobs", fetchData, {
  //   Suspense: true,
  // });
  // !Difference between normal data fetching and data fetching with SWR
  // ! SWR
  const { data } = useSWR("http://localhost:5000/jobs", fetchData, {
    suspense: true,
  });
  // console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
