import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loader from "../../../Components/Loader/Loader";
import useAdmin from "../../../Hooks/useAdmin";
import logo from "../../Assets/logo/logo.png";
import useHrManager from "../../../Hooks/useHrManager";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [hr, hrLoading] = useHrManager(user);
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

  if (adminLoading || hrLoading) {
    return <Loader />;
  }

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
          <span className="font-semibold text-xl hidden md:flex justify-center items-center gap-1">
            Welcome back,{" "}
            <div className="text-primary flex justify-center items-center">
              <span className="mr-2">{auth?.currentUser?.email}</span>
              <span className="badge bg-primary border-primary text-white">
                {!admin && hr ? "HR" : admin && !hr ? "Admin" : "Candidate"}
              </span>
            </div>
          </span>
          {!hr && (
            <Link
              to="/"
              className={`text-lg lg:text-2xl md:text-2xl font-semibold block md:hidden`}
            >
              <img src={logo} alt="" className="w-24" />
            </Link>
          )}
          <div className="flex justify-center items-center gap-8">
            {!admin && hr && (
              <Link to="/dashboard/job/addNew" className="text-md">
                <button className="flex justify-center items-center gap-1 border border-primary rounded px-2 py-1">
                  {" "}
                  <span>
                    <AiOutlinePlus />
                  </span>{" "}
                  Post Job
                </button>
              </Link>
            )}
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
                {!admin && !hr && (
                  <li>
                    <Link
                      to="/dashboard/profile"
                      className="py-3 font-semibold"
                    >
                      Profile
                    </Link>
                  </li>
                )}
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
              className="logo font-semibold text-center flex items-center flex-col gap-2 pb-2"
            >
              <img src={logo} alt="" className="w-40" />
            </Link>
          </div>
          <li className="py-3 mt-4 font-semibold">
            <NavLink to="/dashboard" className="py-4 lg:text-lg bg-secondary">
              Dashboard
            </NavLink>
          </li>
          {!admin && hr && (
            <>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/mails" className="py-4 lg:text-lg">
                  Mails
                </NavLink>
              </li>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/employee" className="py-4 lg:text-lg">
                  Employee
                </NavLink>
              </li>
              <li className="py-2 font-semibold">
                <NavLink
                  to="/dashboard/recruitment"
                  className="py-4 lg:text-lg"
                >
                  Recruitment
                </NavLink>
              </li>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/candidates" className="py-4 lg:text-lg">
                  Candidates
                </NavLink>
              </li>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/company" className="py-4 lg:text-lg">
                  Company Info
                </NavLink>
              </li>
            </>
          )}

          {!admin && !hr && (
            <>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/profile" className="py-4 lg:text-lg">
                  Profile
                </NavLink>
              </li>
              <li className="py-2 font-semibold">
                <NavLink
                  to="/dashboard/appliedJobs"
                  className="py-4 lg:text-lg"
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/messages" className="py-4 lg:text-lg">
                  Messages
                </NavLink>
              </li>
            </>
          )}

          {admin && (
            <>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/allHr" className="py-4 lg:text-lg">
                  Manage All Hr
                </NavLink>
              </li>
            </>
          )}

          <div className="flex justify-center">
            <li className="py-1 font-semibold bottom-3 absolute">
              <button
                onClick={handleLogOut}
                className="border-2 border-neutral rounded-lg py-3 lg:text-lg px-24 hover:bg-neutral hover:text-white duration-500"
              >
                <FiLogOut /> Logout
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
