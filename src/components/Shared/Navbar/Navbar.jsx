import React, { useState, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsGrid } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const Navbar = ({ handleThemeChange, theme }) => {
  const [user] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let activeStyle = {
    position: "relative",
    color: "#8b5cf6",
    fontWeight: 700,
    borderBottom: "2px solid #8b5cf6",
  };

  return (
    <div>
      <header className="fixed top-0 w-full z-50 bg-base-100 shadow-md">
        <nav className="px-4 py-4 lg:py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between font-body">
            <div className="flex items-center">
              <Link to="/" className="inline-flex items-center mr-8">
                <span className="text-xl font-bold">Job Onboard</span>
                <span className="hidden"></span>
              </Link>
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <NavLink
                    to="features"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="blogs"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="team"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {user ? (
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <NavLink
                    to="/dashboard"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="btn btn-primary">
                    Log Out
                  </NavLink>
                </li>
                <li>
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
            ) : (
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <NavLink to="/">Login</NavLink>
                </li>
                <li>
                  <Link to="/" className="btn btn-primary">
                    Get Started
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleThemeChange}
                    className="rounded-full lg:mx-2 font-bold pt-2 ml-2"
                  >
                    {theme ? (
                      <svg
                        className="swap-on fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg>
                    ) : (
                      <svg
                        className="swap-off fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                      </svg>
                    )}
                  </button>
                </li>
              </ul>
            )}

            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-brand-900 focus:bg-brand-900"
                onClick={() => setIsMenuOpen(true)}
              >
                <BsGrid className="text-3xl" />
              </button>

              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-base-100 border rounded shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link to="/">
                          <span className="text-xl font-bold">Job Onboard</span>
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
                            to="features"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            className="nav-link-mobile"
                          >
                            Features
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="blogs"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            className="nav-link-mobile"
                          >
                            Blogs
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="team"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            className="nav-link-mobile"
                          >
                            Team
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="about"
                            style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                            }
                            className="nav-link-mobile"
                          >
                            About
                          </NavLink>
                        </li>
                        {user ? (
                          <Fragment>
                            <li>
                              <NavLink
                                to="/dashboard"
                                className="join-button-mobile"
                                style={({ isActive }) =>
                                  isActive ? activeStyle : undefined
                                }
                              >
                                Dashboard
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/"
                                style={({ isActive }) =>
                                  isActive ? activeStyle : undefined
                                }
                                className="nav-link-mobile"
                              >
                                Log Out
                              </NavLink>
                            </li>
                            <li>
                              <button
                                onClick={handleThemeChange}
                                className="rounded-full lg:mx-2 font-bold pt-2 ml-2"
                              >
                                {theme ? (
                                  <svg
                                    className="swap-on fill-current w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                  </svg>
                                ) : (
                                  <svg
                                    className="swap-off fill-current w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                  </svg>
                                )}
                              </button>
                            </li>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <li>
                              <NavLink to="/" className="nav-link-mobile">
                                Login
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/"
                                className="join-button-mobile btn btn-primary"
                              >
                                Get Started
                              </NavLink>
                            </li>
                            <li>
                              <button
                                onClick={handleThemeChange}
                                className="rounded-full lg:mx-2 font-bold pt-2 ml-2"
                              >
                                {theme ? (
                                  <svg
                                    className="swap-on fill-current w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                  </svg>
                                ) : (
                                  <svg
                                    className="swap-off fill-current w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                  </svg>
                                )}
                              </button>
                            </li>
                          </Fragment>
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
