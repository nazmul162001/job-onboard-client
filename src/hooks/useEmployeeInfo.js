import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useEmployeeInfo = () => {

  const { data , isLoading, refetch } = useQuery(['hrEmployees'], () => axios.get(`${BASE_API}/userEmployees?email=${auth?.currentUser?.email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }
  }))
  return {data,isLoading,refetch}
}

export default useEmployeeInfo