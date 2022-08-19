import { useEffect, useState } from "react";
import { BASE_API } from "../config";
import axios from "axios";
import auth from "../Auth/Firebase/Firebase.init";

const useJob = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API}/users?uid=${auth?.currentUser?.uid}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setImage(res.data);
        setLoading(false);
      });
  }, []);

  return [image, loading];
};

export default useJob;
