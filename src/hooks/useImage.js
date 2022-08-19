import { useQuery } from "@tanstack/react-query";
import { BASE_API } from "../config";
import axios from "axios";
import auth from "../Auth/Firebase/Firebase.init";

const useJob = () => {
  const { data: image, isLoading } = useQuery(["imageUrl"], () =>
    axios.get(`${BASE_API}/users?uid=${auth?.currentUser?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  return [image?.data?.result?.profileUrl, isLoading];
};

export default useJob;
