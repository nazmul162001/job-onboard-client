import { useEffect, useState } from "react";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useHrManager = () => {
  const [isHR, setIsHR] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await fetch(`${BASE_API}/hr?uid=${auth?.currentUser?.uid}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setIsHR(result?.isHr);
          setLoading(false);
        });
    })();
  }, []);
  return [isHR, loading];
};

export default useHrManager;
