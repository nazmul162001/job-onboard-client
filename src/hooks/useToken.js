import { useEffect, useState } from "react";
import { BASE_API } from "../config";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (user) {
      (async () => {
        await fetch(`${BASE_API}/login`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: user?.user?.uid,
            email: user?.user?.email,
          }),
        })
          .then((res) => res.json())
          .then(({ token }) => {
            localStorage.setItem("accessToken", token);
            setToken(token);
          });
      })();
    }
  }, [user]);
  return [token];
};

export default useToken;
