import { useEffect, useState } from "react";
import { BASE_API } from "../config";
import axios from 'axios';

const useJob = (jobId) => {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState();
  
  useEffect(() => {
    axios.get(`${BASE_API}/jobs/${jobId}`)
      .then((response) => {
        setJob(response.data);
        setLoading(false);
      })
  }, [jobId])

  return [job, loading];
};

export default useJob;
