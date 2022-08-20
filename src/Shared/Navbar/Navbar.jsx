import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import auth from "../../Auth/Firebase/Firebase.init";
import logo from "../../Pages/Assets/logo/logo.png";
import { InitializeContext } from "../../App";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";
import useHrManager from "../../Hooks/useHrManager";

const Navbar = () => {
  const { handleThemeChange, theme, profileUrl } =
    useContext(InitializeContext);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [hr] = useHrManager(user);
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    setScrollY(window.scrollY);
  }, [scrollY]);

  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast.success(`Thank you, ${user.displayName} to stay with us!`, {
      position: "bottom-center",
      autoClose: 5000,
    });
  };

  const NavbarMenus = (
    <>
      <li className="py-1 lg:py-0">
        <NavLink className="uppercase" to="/jobs">
          Find Jobs
        </NavLink>
      </li>
      <li className="py-1 lg:py-0">
        <NavLink className="uppercase" to="/blog">
          Blog
        </NavLink>
      </li>
      <li className="py-1 lg:py-0">
        <div class="dropdown dropdown-right dropdown-hover">
          <label
            tabindex="0"
            className="uppercase flex items-center cursor-pointer"
          >
            Feature{" "}
            <span className="pl-1 text-xl">
              <FiChevronDown />
            </span>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-[12rem] lg:w-52"
          >
            <li className="py-2">
              <NavLink
                to="job-posting"
                className="font-semibold hover:font-bold hover:ease-in-out duration-300"
              >
                Job Posting
              </NavLink>
            </li>
            <li>
              <NavLink
                to="applicant-tracking"
                className="font-semibold hover:font-bold hover:ease-in-out duration-300"
              >
                Applicant Tracking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="employee-database"
                className="font-semibold hover:font-bold hover:ease-in-out duration-300"
              >
                Employee Database
              </NavLink>
            </li>
          </ul>
        </div>
      </li>

      <li className="py-1 lg:py-0">
        <NavLink className="uppercase" to="/team">
          Team
        </NavLink>
      </li>

      <li className="py-1 lg:py-0">
        <NavLink className="uppercase" to="/about">
          About
        </NavLink>
      </li>
      <li className="py-1 lg:py-0">
        <NavLink className="uppercase" to="/contact-us">
          Contact Us
        </NavLink>
      </li>
      {!user && (
        <li className="py-1 lg:py-0">
          <NavLink to="/login" className="uppercase font-semibold">
            Login
          </NavLink>
        </li>
      )}
      {user && (
        <li className="py-1 lg:py-0">
          <Link className="uppercase bg-secondary text-white" to="/dashboard">
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 w-full z-50">
      <div
        className={`drawer-content flex flex-col backdrop-blur-[18px] bg-base-100 ${
          scrollY < 300 && "bg-transparent shadow-md"
        }`}
        style={
          pathname.includes("dashboard")
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        <div className="navbar py-3 container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <CgMenuLeftAlt className="text-3xl" />
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-4 p-2 shadow-xl bg-base-100 rounded-box w-[12rem]"
              >
                {NavbarMenus}
                <li className="list-none md:hidden">
                  <button
                    onClick={handleThemeChange}
                    className="rounded-full lg:mx-2 font-bold pt-2 ml-2"
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
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <Link to="/" className="inline-flex items-center mr-8">
                {!user ? (
                  <img
                    src={logo}
                    alt=""
                    className="ml-10 lg:ml-0 w-24 lg:w-32"
                  />
                ) : (
                  <img
                    src={logo}
                    alt=""
                    className="ml-[4.5rem] md:ml-64 lg:ml-0 w-24 lg:w-32"
                  />
                )}
                {/* <span className="text-xl font-bold hidden md:block">Job Onboard</span>
                <span className="hidden"></span> */}
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 gap-3">{NavbarMenus}</ul>
          </div>
          <div className="navbar-end gap-3">
            <li className="py-1 lg:py-0 hidden md:block">
              <button
                onClick={handleThemeChange}
                className="rounded-full lg:mx-2 font-bold pt-2 ml-2"
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
            {!user && (
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-primary text-white">
                  Get Started{" "}
                  <MdOutlineKeyboardArrowRight className="text-2xl" />
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-52"
                >
                  <li className="py-2">
                    <Link
                      to="signUp"
                      className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out duration-300"
                    >
                      As a Candidate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="signUp/hr"
                      className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out duration-300"
                    >
                      As a HR Manager
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {user && (
              <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      style={{ display: "grid" }}
                      className="w-10 h-10 rounded-full border bg-base-300 grid place-items-center ring ring-primary ring-offset-base-100 ring-offset-2"
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
                    className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li className="py-2 block lg:hidden">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    {!admin && hr && (
                      <li className="">
                        <Link to="/support">Support</Link>
                      </li>
                    )}
                    <li className="py-2">
                      <button onClick={handleLogOut}>
                        <FiLogOut />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
