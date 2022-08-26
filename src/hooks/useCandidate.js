import { useQuery } from "@tanstack/react-query";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useCandidate = () => {
  const { data: getApplicants, isLoading,refetch } = useQuery(["getApplicants"], () =>
    fetch(`${BASE_API}/applicants/show?email=${auth?.currentUser?.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return {getApplicants, isLoading,refetch}
}

export default useCandidate 