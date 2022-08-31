import axios from "axios";
import { useEffect, useState } from "react";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useHrJob = () => {
  const [hrJobs, setGetJobs] = useState([]);
  const [hrJobsLoading, setHrJobsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${BASE_API}/jobs/hrJobs?email=${auth?.currentUser?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setGetJobs(res.data);
        setHrJobsLoading(false);
      });
  }, []);

  return [hrJobs, hrJobsLoading];
};

export default useHrJob;
