import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import useTitle from "../../../Hooks/useTitle";
import useTokenForHrManager from "../../../Hooks/useTokenForHrManager";
import axios from "axios";
import { BASE_API } from "../../../config";

const SignUpForHrManager = () => {
  useTitle("Sign Up as a HR Manager");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [token] = useTokenForHrManager(user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  let signInError;

  if (loading || updating) {
    return <Loading />;
  }

  if (error || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || updateError?.message}</small>
      </p>
    );
  }

  if (user) {
    navigate("/", { replace: true });
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    const hrData = {
      role: "hr",
      email: data.email,
      companyName: data.companyName,
      displayName: data.firstName + " " + data.lastName,
      number: data.number,
      profileUrl: auth?.currentUser?.photoURL,
    };
    axios.put(`${BASE_API}/login`, hrData);
    await updateProfile({ displayName: hrData.displayName });
    toast.success(
      `Welcome ${hrData.displayName}! You are now registered as a Hr Manager.`,
      {
        position: "top-center",
      }
    );
  };

  return (
    <section className="container mx-auto px-3 lg:px-10 py-3 lg:py-6">
      <div className="hero">
        <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
          <Fade left distance="30px">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col justify-center items-center lg:px-12 my-2">
                <div className="pb-6 md:pb-16 lg:pb-10 px-2 md:px-10 lg:px-0">
                  <h1 className="text-xl lg:text-2xl text-center font-bold pb-6">
                    Easiest Recruitment Solution - Attract, Manage & Hire Right
                    Talent.
                  </h1>
                  <p className="text-center">
                    Advanced Recruiting Solution With Everything You Need To
                    Accelerate The Hiring Process.
                  </p>
                </div>
                <div className="card w-full max-w-lg lg:bg-base-300 shadow-xl">
                  <div className="card-body w-full">
                    <h2 className="text-center text-xl lg:text-2xl font-bold">
                      Please Sign Up as a HR Manager
                    </h2>
                    <p className="text-center font-semibold">
                      Already have an account?{" "}
                      <Link className="text-primary" to="/login">
                        Login
                      </Link>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                        <div className="form-control pt-2 w-full">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered w-full"
                            {...register("firstName", {
                              required: {
                                value: true,
                                message: "First Name is Required",
                              },
                            })}
                          />
                          <label className="label">
                            {errors.firstName?.type === "required" && (
                              <span className="label-text-alt text-red-500">
                                {errors.firstName.message}
                              </span>
                            )}
                          </label>
                        </div>
                        <div className="form-control mb-2 w-full">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full"
                            {...register("lastName", {
                              required: {
                                value: true,
                                message: "Last Name is Required",
                              },
                            })}
                          />
                          {errors.lastName?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.lastName.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                        <div className="form-control w-full max-w-md">
                          <label className="label">
                            <span className="label-text">Company Name</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            className="input input-bordered w-full max-w-md"
                            {...register("companyName", {
                              required: {
                                value: true,
                                message: "Company Name is Required",
                              },
                            })}
                          />
                          <label className="label">
                            {errors.companyName?.type === "required" && (
                              <span className="label-text-alt text-red-500">
                                {errors.companyName.message}
                              </span>
                            )}
                          </label>
                        </div>
                        <div className="form-control mb-1 w-full">
                          <label htmlFor="number">Phone Number</label>
                          <input
                            type="number"
                            placeholder="Phone Number"
                            className="input input-bordered w-full"
                            {...register("number", {
                              required: {
                                value: true,
                                message: "Phone Number is required",
                              },
                            })}
                          />
                          {errors.number?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.number.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-control w-full max-w-md">
                        <label className="label">
                          <span className="label-text">Business Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Business Email"
                          className="input input-bordered w-full max-w-md"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Business Email is Required",
                            },
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: "Provide a valid Email",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                          {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                        </label>
                      </div>
                      <div className="form-control w-full max-w-md">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="input input-bordered w-full max-w-md"
                          {...register("password", {
                            required: {
                              value: true,
                              message: "Password is Required",
                            },
                            minLength: {
                              value: 6,
                              message: "Must be 6 characters or longer",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.password?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.password.message}
                            </span>
                          )}
                          {errors.password?.type === "minLength" && (
                            <span className="label-text-alt text-red-500">
                              {errors.password.message}
                            </span>
                          )}
                        </label>
                      </div>

                      {signInError}
                      <input
                        className="btn w-full max-w-md text-white btn-primary"
                        type="submit"
                        value="Sign Up"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right distance="20px">
            <div className="w-full lg:w-1/2 rounded overflow-hidden lg:ml-6 hidden lg:block">
              <div className="outline-none h-full">
                <img
                  src="https://i.ibb.co/fn6rMQR/Repeat-Grid-3.png"
                  className=" md:rounded-lg h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default SignUpForHrManager;
