import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useTitle from "../../../hooks/useTitle";
import auth from "../../../components/Firebase/Firebase.init";

const WelcomeDashboard = () => {
  useTitle("Welcome Dashboard");
  const [user] = useAuthState(auth);
  return (
    <div className="p-5 grid place-items-center min-h-[80vh]">
      {user && (
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <img
              src='https://gadgets-destination.web.app/static/media/welcome.0c54329eeb89bcc30c2d.png'
              alt="welcome"
              className="w-full lg:max-w-2xl md:max-w-xl h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeDashboard;
