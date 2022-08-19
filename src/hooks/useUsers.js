import { useEffect, useState } from "react";
import { BASE_API } from "../config";

const useUsers = () => {
  const [users, setUsers] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_API}/users/all`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setUsers(result?.result);
          setLoading(false);
        });
    })();
  }, []);
  return [users, loading];
};

export default useUsers;
