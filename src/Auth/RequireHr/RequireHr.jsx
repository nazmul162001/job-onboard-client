import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import useHrManager from "../../Hooks/useHrManager";

const RequireHr = ({ children }) => {
  const [isHr, loading] = useHrManager();
  if (loading) return;
  if (!isHr) {
    signOut(auth).then(() => {
      toast.error(
        `We forcefully Sign Out You. Because you try to go Restricted Routes`
      );
      localStorage.removeItem("accessToken");
    });
    return <Navigate to="/login" state={{ from: "/dashboard" }} replace />;
  }
  return children;
};

export default RequireHr;