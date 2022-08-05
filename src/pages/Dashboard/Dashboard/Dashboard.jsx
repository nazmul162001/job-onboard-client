import React from "react";
import { toast } from "react-hot-toast";
import { BsGrid } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import auth from "../../../components/Firebase/Firebase.init";
import { AiOutlinePlus } from "react-icons/ai";
import logo from "../../../assets/logo/logo.png";

const Dashboard = () => {
  useTitle("Dashboard");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut(auth).then(() => {
      navigate("/");
      toast.success(`Thank you, ${user.displayName} to stay with us!`, {
        autoClose: 3000,
        position: "top-center",
      });
    });
  };

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-3 md:p-3">
        <div className="header z-50 sticky top-0 flex justify-between items-center bg-base-300 p-4 rounded-lg">
          <label
            htmlFor="dashboard-sidebar"
            className="btn bg-base-300 text-black hover:text-white drawer-button lg:hidden "
          >
            <BsGrid className="text-2xl" />
          </label>
          <Link
            to="/"
            className="text-lg lg:text-2xl md:text-2xl font-semibold hidden md:block"
          >
            Job Onboard
          </Link>
          <div className="flex justify-center items-center gap-8">
            <Link to="/dashboard/job/addNew" className="text-md">
              <button className="flex justify-center items-center gap-1 border border-black rounded px-2 py-1">
                {" "}
                <span>
                  <AiOutlinePlus />
                </span>{" "}
                Post Job
              </button>
            </Link>
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="btn btn-ghost btn-circle avatar online"
              >
                <div
                  style={{ display: "grid" }}
                  className="w-10 h-10 place-items-center rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                >
                  {auth?.currentUser?.photoURL ? (
                    <img
                      src={auth?.currentUser?.photoURL}
                      alt={auth?.currentUser?.displayName?.slice(0, 1)}
                    />
                  ) : (
                    <img
                      src="https://i.ibb.co/xY0rfV4/avatar.jpg"
                      alt={auth?.currentUser?.displayName?.slice(0, 1)}
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard/profile" className="py-3 font-semibold">
                    Profile
                  </Link>
                </li>
                <li className="font-semibold">
                  <button onClick={handleLogOut}>
                    <FiLogOut />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
          <div className="flex flex-col items-center gap-3 text-2xl p-2 border-b pb-5">
            <Link
              to="/"
              className="logo font-semibold text-center flex items-center flex-col gap-2"
            >
              <img src={logo} alt="" className="w-12" />
              Job Onboard
            </Link>
          </div>
          <li className="py-2 mt-4 font-semibold">
            <NavLink to="/dashboard" className="py-4 lg:text-lg">
              Dashboard
            </NavLink>
          </li>
          <li className="py-1 font-semibold">
            <NavLink to="/dashboard/mails" className="py-4 lg:text-lg">
              Mails
            </NavLink>
          </li>
          <li className="py-1 font-semibold">
            <NavLink to="/dashboard/employers" className="py-4 lg:text-lg">
              Employers
            </NavLink>
          </li>
          <li className="py-1 font-semibold">
            <NavLink to="/dashboard/recruitment" className="py-4 lg:text-lg">
              Recruitment
            </NavLink>
          </li>
          <li className={"lg:pt-96"}>
            <button
              onClick={handleLogOut}
              className="bg-neutral rounded-lg py-4 lg:text-lg text-white"
            >
              <FiLogOut /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
