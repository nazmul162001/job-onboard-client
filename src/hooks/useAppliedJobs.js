import { useQuery } from "@tanstack/react-query";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useAppliedJobs = () => {
  const { data: appliedJobs, isLoading } = useQuery(["appliedJobs"], () =>
    fetch(`${BASE_API}/applicants/applied?email=${auth?.currentUser?.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return {appliedJobs , isLoading}
}

export default useAppliedJobs ;