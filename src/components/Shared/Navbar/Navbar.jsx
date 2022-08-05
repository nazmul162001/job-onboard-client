import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiLogInCircle } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";
import logo from '../../../assets/logo/logo.png';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast.success(`Thank you, ${user.displayName} to stay with us!`, {
      position: "top-center",
      autoClose: 5000,
    });
  };

  let activeStyle = {
    position: "relative",
    color: "#8b5cf6",
    fontWeight: 700,
    borderBottom: "2px solid #8b5cf6",
  };

  return (
    <div className="sticky top-0 w-full z-50">
      <header
        className="drawer-content flex flex-col bg-base-100
          shadow-md"
        style={
          pathname.includes("dashboard")
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <nav className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between font-body">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 mr-1 transition duration-200 focus:outline-none focus:shadow-outline hover:bg-brand-900 focus:bg-brand-900 lg:hidden rounded-lg"
              onClick={() => setIsMenuOpen(true)}
            >
              <CgMenuLeftAlt className="text-3xl" />
            </button>
            <div className="flex items-center">
              <Link to="/" className="inline-flex items-center mr-8">
                <img src={logo} alt="" className="ml-10 lg:ml-0 w-[3.5rem] lg:w-16"/>
                <span className="text-xl font-bold hidden md:block">Job Onboard</span>
                <span className="hidden"></span>
              </Link>
            </div>

            {user ? (
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <NavLink
                    to="jobs"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out duration-300"
                  >
                    Find Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out duration-300"
                  >
                    About Us
                  </NavLink>
                </li>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      style={{ display: "grid" }}
                      className="w-10 h-10 rounded-full border bg-base-300 grid place-items-center ring ring-primary ring-offset-base-100 ring-offset-2"
                    >
                      {auth?.currentUser?.photoURL ? (
                        <img src={auth?.currentUser?.photoURL} alt="avatar" />
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
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              </ul>
            ) : (
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <NavLink
                    to="jobs"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out hover:duration-200"
                  >
                    Find Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out hover:duration-200"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="login"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="font-semibold hover:text-primary hover:font-bold hover:ease-in-out duration-300"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <Link to="signUp" className="btn btn-primary text-white">
                    Get Started{" "}
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                  </Link>
                </li>
              </ul>
            )}

            <div className="lg:hidden flex">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      style={{ display: "grid" }}
                      className="w-10 h-10 rounded-full border bg-base-300 grid place-items-center ring ring-primary ring-offset-base-100 ring-offset-2"
                    >
                      {auth?.currentUser?.photoURL ? (
                        <img src={auth?.currentUser?.photoURL} alt="avatar" />
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
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className="btn btn-primary text-white">
                  <Link to="/login" className="flex">
                    <BiLogInCircle className="mr-1" />
                    Login
                  </Link>
                </li>
              )}

              {isMenuOpen && (
                <div className={`absolute top-0 left-0 w-full `}>
                  <div className={`p-5 bg-base-100 rounded-2xl shadow-md`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link to="/">
                          <span
                            onClick={() => setIsMenuOpen(false)}
                            className="text-xl font-bold"
                          >
                            Job Onboard
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-2xl font-bold"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <NavLink
                            to="jobs"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            onClick={() => setIsMenuOpen(false)}
                            className="nav-link-mobile"
                          >
                            Find Jobs
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="about"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            onClick={() => setIsMenuOpen(false)}
                            className="nav-link-mobile"
                          >
                            About
                          </NavLink>
                        </li>
                        {!user ? (
                          <li className="pb-1">
                            <Link
                              to="signUp"
                              onClick={() => setIsMenuOpen(false)}
                              className="btn btn-primary"
                            >
                              Get Started
                            </Link>
                          </li>
                        ) : (
                          <></>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
