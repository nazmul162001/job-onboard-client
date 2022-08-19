import { signOut } from "firebase/auth";
import React, { useContext } from "react";
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
import { InitializeContext } from "../../../App";
import { BASE_API } from "../../../config";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { handleThemeChange, theme, image } = useContext(InitializeContext);
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [hr, hrLoading] = useHrManager(user);

  const { data, isLoading } = useQuery(["companyInfo"], () =>
    fetch(`${BASE_API}/users?uid=${auth?.currentUser?.uid}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

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

  if (adminLoading || hrLoading || isLoading) {
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
            Welcome,{" "}
            <div className="text-primary flex justify-center items-center">
              {!admin && hr ? (
                <span className="mr-2">
                  {data?.result?.companyName
                    ? data?.result?.companyName
                    : "Job Onboard"}{" "}
                  Talent Center
                </span>
              ) : admin && !hr ? (
                <span className="mr-2">{auth?.currentUser?.displayName}</span>
              ) : (
                <span className="mr-2">{auth?.currentUser?.displayName}</span>
              )}
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
            <li className="list-none hidden md:flex">
              <button
                onClick={handleThemeChange}
                className="rounded-full lg:mx-2 font-bold"
              >
                {theme ? (
                  <svg
                    className="swap-on fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                ) : (
                  <svg
                    className="swap-off fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                )}
              </button>
            </li>
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
                      src={image}
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
                <li className="font-semibold md:hidden">
                  <button
                    onClick={handleThemeChange}
                    className="rounded-full lg:mx-2 font-bold"
                  >
                    {theme ? (
                      <svg
                        className="swap-on fill-current w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg>
                    ) : (
                      <svg
                        className="swap-off fill-current w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                      </svg>
                    )}
                  </button>
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
                <NavLink to="/dashboard/hr-jobs" className="py-4 lg:text-lg">
                  Posted Job
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
            </>
          )}

          {admin && (
            <>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/profile" className="py-4 lg:text-lg">
                  Profile
                </NavLink>
              </li>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/allHr" className="py-4 lg:text-lg">
                  Manage All Hr
                </NavLink>
              </li>
              <li className="py-2 font-semibold">
                <NavLink to="/dashboard/jobs" className="py-4 lg:text-lg">
                  Manage All Jobs
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
