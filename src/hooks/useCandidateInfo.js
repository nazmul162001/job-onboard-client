
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import auth from "../Auth/Firebase/Firebase.init"
import { BASE_API } from "../config"

const useCandidateInfo=() =>{
  const { data, isLoading, refetch } = useQuery(['candidateInfo'], () => axios.get(`${BASE_API}/users?uid=${auth?.currentUser?.uid}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }
  }))

  return {data,isLoading,refetch}

}

export default useCandidateInfo ;