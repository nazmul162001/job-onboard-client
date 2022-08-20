import axios from "axios";
import { useEffect, useState } from "react";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useHrJob = () => {
  const [hrJobs, setGetJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_API}/jobs/hrJobs?email=${auth?.currentUser?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => setGetJobs(res.data));
  }, []);

  return [hrJobs]
}

export default useHrJob