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
    {
      title: "Dashboard",
      src: "ri-dashboard-line",
      tooltip: "Dashboard",
      path: "/",
    },
    {
      title: "Employees",
      src: "ri-user-line",
      tooltip: "Employee",
      path: "/employee",
    },
    {
      title: "Recruitment ",
      src: "ri-briefcase-2-line",
      tooltip: "Recruitment",
      path: "/recruitment",
    },
    {
      title: "Candidates",
      src: "ri-team-line",
      tooltip: "Candidates",
      path: "/candidates",
    },
    {
      title: "Manage Jobs",
      src: "ri-bar-chart-box-line",
      tooltip: "Manage Jobs",
      path: "/hr-jobs",
    },
    {
      title: "Company Info ",
      src: "ri-information-line",
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
      title: "Task",
      src: "ri-user-line",
      tooltip: "Task",
      path: "/task",
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
    {
      title: "Dashboard",
      src: "ri-dashboard-line",
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
      title: "Manage All Users",
      src: "ri-equalizer-line",
      tooltip: "Manage All Users",
      path: "/allUsers",
    },
    {
      title: "Manage All Jobs",
      src: "ri-list-settings-line",
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
          <Link
            to="/"
            className={`text-lg lg:text-2xl md:text-2xl font-semibold block md:hidden`}
          >
            <img src={Logo} alt="" className="w-24" />
          </Link>
          <div className="flex justify-center items-center gap-8">
            <li className="list-none hidden md:flex">
              <button
                onClick={handleThemeChange}
                className="rounded-full lg:mx-2 font-bold"
              >
                {theme ? (
                  <input type="checkbox" class="toggle" checked />
                ) : (
                  <input type="checkbox" class="toggle" />
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
                      <input type="checkbox" class="toggle" checked />
                    ) : (
                      <input type="checkbox" class="toggle" />
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
          <i
            className={`bg-base-100 flex justify-center items-center ri-arrow-right-s-line absolute cursor-pointer -right-3 top-9 w-8 h-8 border-[#081A51] 
           border-2 rounded-full text-2xl ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          ></i>
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
                  className={`flex rounded-md cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
                ${Menu.gap ? "" : ""} ${index === 0 && "bg-light-white"} `}
                >
                  {/* for mobile devicea */}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `active-link flex items-center ${
                            open && "py-3 my-1 px-5"
                          }`
                        : `linkk flex items-center ${open && "py-3 my-1 px-5"}`
                    }
                    to={`/dashboard${Menu.path}`}
                  >
                    {open ? (
                      <i class={`mr-2 text-xl ${Menu.src}`}></i>
                    ) : (
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
                  className={`flex  rounded-md cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
                  ${Menu.gap ? "" : ""} ${index === 0 && "bg-light-white"} `}
                >
                  {/* for mobile devicea */}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `active-link flex items-center ${
                            open && "py-3 my-1 px-5"
                          }`
                        : `linkk flex items-center ${open && "py-3 my-1 px-5"}`
                    }
                    to={`/dashboard${Menu.path}`}
                  >
                    {open ? (
                      <i class={`mr-2 text-xl ${Menu.src}`}></i>
                    ) : (
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
