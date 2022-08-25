import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { InitializeContext } from "../../../App";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loader from "../../../Components/Loader/Loader";
import { BASE_API } from "../../../config";
import useAdmin from "../../../Hooks/useAdmin";
import useHrManager from "../../../Hooks/useHrManager";
import Logo from "../../Assets/logo/logo.png";
import "./Dashboard.css";

const Dashboard = ({ children }) => {
  const { handleThemeChange, theme, profileUrl } =
    useContext(InitializeContext);
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [hr, hrLoading] = useHrManager(user);
  const [tooltip, showTooltip] = useState(true);

  // my dashboard sidebar
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Dashboard", tooltip: "Dashboard", path: "/" },
    { title: "Inbox", src: "Inbox", tooltip: "Inbox", path: "/CandidateMail" },
    { title: "Employee", src: "User", tooltip: "Employee", path: "/employee" },
    {
      title: "Recruitment ",
      src: "Recruitment",
      tooltip: "Recruitment",
      path: "/recruitment",
    },
    {
      title: "Candidates",
      src: "Candidates",
      tooltip: "Candidates",
      path: "/candidates",
    },
    {
      title: "Manage Jobs",
      src: "ManageJob",
      tooltip: "Manage Jobs",
      path: "/hr-jobs",
    },
    {
      title: "Company Info ",
      src: "CompanyInfo",
      tooltip: "Company Info",
      path: "/company",
      gap: false,
    },
    {
      title: "Feedback",
      src: "CompanyInfo",
      tooltip: "Feedback",
      path: "/feedback",
      gap: false,
    },
  ];
  const MenusCandidate = [
    {
      title: "Dashboard",
      src: "ri-bar-chart-box-fill",
      tooltip: "Dashboard",
      path: "/",
    },
    {
      title: "Profile",
      src: "ri-user-line",
      tooltip: "Profile",
      path: "/profile",
    },
    {
      title: "Applied Jobs",
      src: "ri-calendar-check-fill",
      tooltip: "Applied Jobs",
      path: "/appliedJobs",
      gap: false,
    },
  ];
  const MenusAdmin = [
    { title: "Dashboard", src: "Dashboard", tooltip: "Dashboard", path: "/" },
    { title: "Profile", src: "User", tooltip: "Profile", path: "/profile" },
    {
      title: "Manage All HR",
      src: "ManageHr",
      tooltip: "Manage All HR",
      path: "/allHr",
    },
    {
      title: "Manage All Jobs",
      src: "ManageJobs",
      tooltip: "Manage All Jobs",
      path: "/jobs",
    },
  ];

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
    <div className="">
      <div className={`drawer-content p-3 md:p-3 ${open ? "ml-80" : "ml-24"}`}>
        <div className="header z-50 sticky top-4 flex justify-between items-center bg-base-300 p-4 rounded-lg">
          <div className="hidden">{/* empty area */}</div>
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
                <span className="mr-2">{data?.result?.displayName}</span>
              ) : (
                <span className="mr-2">{data?.result?.displayName}</span>
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
              <img src={Logo} alt="" className="w-24" />
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
                  {auth?.currentUser?.photoURL && !profileUrl ? (
                    <img src={auth?.currentUser?.photoURL} alt="profile" />
                  ) : !auth?.currentUser?.photoURL && profileUrl ? (
                    <img src={profileUrl} alt="profile" />
                  ) : (
                    <img
                      src="https://i.ibb.co/xY0rfV4/avatar.jpg"
                      alt="profile"
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
                <li className="font-semibold py-2">
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

      {/* My Dashboard Sidebar  */}

      <div className="flex fixed top-0 h-screen left-0 z-50">
        <div
          className={` ${
            open ? "w-80" : "w-20"
          } bg-[#081A51] h-screen p-5  pt-8 relative duration-500`}
        >
          <img
            src="./sidebar/control.png"
            alt="control"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#081A51] 
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div
            className="flex items-center justify-center"
            onClick={() => navigate("/")}
          >
            <img
              src={Logo}
              alt=""
              className={`cursor-pointer duration-500 w-24 ${
                open && "rotate-[360deg]"
              }`}
            />
          </div>
          <hr className={`border-solid mt-8 ${open ? "flex" : "hidden"}`} />

          {/* Admin Dashboard  */}
          <ul className="pt-2">
            {admin &&
              MenusAdmin.map((Menu, index) => (
                <li
                  key={index}
                  className={`  rounded-md cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
                ${Menu.gap ? "" : ""} ${index === 0 && "bg-light-white"} `}
                >
                  {/* for mobile devicea */}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `active-link ${open && "py-3 my-1 px-5"}`
                        : `linkk ${open && "py-3 my-1 px-5"}`
                    }
                    to={`/dashboard${Menu.path}`}
                  >
                    {open ? (
                      <img
                        className="mr-2"
                        src={`./sidebar/${Menu.src}.png`}
                        alt="Side"
                      />
                    ) : (
                      <img
                        className="p-2"
                        data-tip={Menu.tooltip}
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                          showTooltip(false);
                          setTimeout(() => showTooltip(true), 10);
                        }}
                        src={`./sidebar/${Menu.src}.png`}
                        alt="Side"
                      />
                    )}

                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      <NavLink className="block" to={`/dashboard${Menu.path}`}>
                        {Menu.title}
                      </NavLink>
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>

          {/* HR Dashboard  */}
          <ul className="pt-6">
            {!admin &&
              hr &&
              Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`  rounded-md cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
                  ${Menu.gap ? "" : ""} ${index === 0 && "bg-light-white"} `}
                >
                  {/* for mobile devicea */}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `active-link ${open && "py-3 my-1 px-5"}`
                        : `linkk ${open && "py-3 my-1 px-5"}`
                    }
                    to={`/dashboard${Menu.path}`}
                  >
                    {open ? (
                      <img
                        className="mr-2"
                        src={`./sidebar/${Menu.src}.png`}
                        alt="Side"
                      />
                    ) : (
                      <img
                        className="p-2"
                        data-tip={Menu.tooltip}
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                          showTooltip(false);
                          setTimeout(() => showTooltip(true), 10);
                        }}
                        src={`./sidebar/${Menu.src}.png`}
                        alt="Side"
                      />
                    )}

                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      <NavLink className="block" to={`/dashboard${Menu.path}`}>
                        {Menu.title}
                      </NavLink>
                    </span>
                  </NavLink>
                </li>
              ))}
            <div
              onClick={handleLogOut}
              className={`flex justify-center cursor-pointer text-white items-center absolute bottom-5 ${
                open &&
                "border-2 px-[5.8rem] py-1 transition-all hover:bg-white hover:text-black"
              }`}
            >
              <i class="ri-arrow-go-back-line mr-3"></i>
              <button className={`${!open && "hidden"}`}>Log Out</button>
            </div>
          </ul>
          {/* Candidate Dashboard  */}
          <ul className="pt-6">
            {!admin &&
              !hr &&
              MenusCandidate.map((Menu, index) => (
                <li
                  key={index}
                  className={` flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                  ${Menu.gap ? "" : ""} ${index === 0 && "bg-light-white"} `}
                >
                  {/* for mobile devicea */}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `active-link flex items-center ${
                            open && "py-3 my-1 px-5"
                          }`
                        : `flex items-center ${open && "py-3 my-1 px-5"}`
                    }
                    to={`/dashboard${Menu.path}`}
                  >
                    {open ? (
                      // <img
                      //   className="mr-2"
                      //   src={`./sidebar/${Menu.src}.png`}
                      //   alt="Side"
                      // />
                      <i class={`mr-2 text-xl ${Menu.src}`}></i>
                    ) : (
                      // <img
                      //   className="p-2"
                      //   data-tip={Menu.tooltip}
                      //   onMouseEnter={() => showTooltip(true)}
                      //   onMouseLeave={() => {
                      //     showTooltip(false);
                      //     setTimeout(() => showTooltip(true), 10);
                      //   }}
                      //   src={`./sidebar/${Menu.src}.png`}
                      //   alt="Side"
                      // />
                      <i
                        class={`p-2 text-xl ${Menu.src}`}
                        data-tip={Menu.tooltip}
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                          showTooltip(false);
                          setTimeout(() => showTooltip(true), 10);
                        }}
                      ></i>
                    )}

                    <span
                      className={` ${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      <NavLink className="block" to={`/dashboard${Menu.path}`}>
                        {Menu.title}
                      </NavLink>
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* END My Dashboard Sidebar  */}
      <main> {children} </main>
      {tooltip && (
        <ReactTooltip
          place="right"
          // effect = "solid"
          backgroundColor="#8b5cf6"
          textColor="white"
          border={true}
        />
      )}
    </div>
  );
};

export default Dashboard;
