import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useJobTasks = () => {
  const { data, isLoading } = useQuery(["getHrTask"], () =>
    axios.get(`${BASE_API}/getJobTask?email=${auth?.currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  return {data,isLoading}
}

export default useJobTasks ;