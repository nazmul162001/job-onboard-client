import { useEffect, useState } from "react";
import auth from "../Auth/Firebase/Firebase.init";
import { BASE_API } from "../config";

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await fetch(`${BASE_API}/admin?uid=${auth?.currentUser?.uid}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setIsAdmin(result.isAdmin);
          setLoading(false);
        });
    })();
  }, []);
  return [isAdmin, loading];
};

export default useAdmin;
