import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useAppliedCandidates = (job) => {
  const { data, isLoading, refetch } = useQuery(
    ["count", auth, job?.createdDate],
    () =>
      axios.get(
        `${BASE_API}/applicants/appliedCandidate?email=${auth?.currentUser?.email}&createdDate=${job?.createdDate}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
  );
  return {data,isLoading,refetch}
}

export default useAppliedCandidates 