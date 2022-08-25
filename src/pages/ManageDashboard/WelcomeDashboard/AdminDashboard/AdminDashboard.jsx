import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Auth/Firebase/Firebase.init";
import useTitle from "../../../../Hooks/useTitle";

const AdminDashboard = () => {
  useTitle("Admin Dashboard");
  const [user] = useAuthState(auth);
  return (
    <div className="p-5 grid place-items-center min-h-[80vh] bg-base-100">
      {user && (
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <img
              src='https://i.ibb.co/NN09HP2/welcome.png'
              alt="welcome"
              className="w-full lg:max-w-2xl md:max-w-xl h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
