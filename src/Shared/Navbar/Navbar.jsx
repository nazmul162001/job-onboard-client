import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import auth from "../../Auth/Firebase/Firebase.init";
import logo from "../../Pages/Assets/logo/logo.png";
import { InitializeContext } from "../../App";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";
import useHrManager from "../../Hooks/useHrManager";
import { BiLogInCircle } from "react-icons/bi";

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
      position: "top-center",
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
        <NavLink className="uppercase" to="/applicant-tracking">
          Tracking System
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
          <Link to="/login" className="uppercase bg-secondary text-white">
            <BiLogInCircle /> Login
          </Link>
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
                className="menu menu-compact dropdown-content mt-4 p-2 shadow-xl bg-base-100 rounded-box w-72 border"
              >
                {NavbarMenus}
                {!user && (
                  <li className="list-none md:hidden flex justify-start items-start text-start">
                    <button
                      onClick={handleThemeChange}
                      className="rounded-full lg:mx-2 font-bold pt-2 ml-2"
                    >
                      {theme ? (
                        <input type="checkbox" class="toggle" checked />
                      ) : (
                        <input type="checkbox" class="toggle" />
                      )}
                    </button>
                  </li>
                )}
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
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 gap-3">{NavbarMenus}</ul>
          </div>
          <div className="navbar-end gap-4">
            <div className={`${user ? "block" : "hidden md:block"}`}>
              <button
                onClick={handleThemeChange}
                className="rounded-full lg:mx-2 font-bold pt-2 ml-2"
              >
                 {theme ? (
                        <input type="checkbox" class="toggle" checked />
                      ) : (
                        <input type="checkbox" class="toggle" />
                      )}
              </button>
            </div>
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
              <div className="flex justify-center items-center gap-5">
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
