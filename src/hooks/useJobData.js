import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_API } from "../config";

const useJobData = () => {
  const [jobData , setJobData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_API}/jobs`)
      .then((response) => {
        setJobData(response.data.reverse())
        setLoading(false);
      })
  }, [])
  return [jobData,setJobData, loading];
}

export default useJobData 