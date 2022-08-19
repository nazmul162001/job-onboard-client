import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import useToken from "../../../Hooks/useToken";
import useTitle from "../../../Hooks/useTitle";

const SignUp = () => {
  useTitle("Sign Up as a Candidate");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
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

  const [token] = useToken(user || gUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (user || gUser) {
    navigate("/", { replace: true });
    toast.success(
      `Welcome ${auth?.currentUser?.displayName}! You are now registered as a Candidate.`,
      {
        position: "top-center",
      }
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success(
      `Welcome ${data.name}! You are now registered as a Candidate.`,
      {
        position: "top-center",
      }
    );
  };
  return (
    <section className="container mx-auto px-3 lg:px-10 py-3 lg:py-9">
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
                      Please Sign Up as a Candidate
                    </h2>
                    <p className="text-center font-semibold">
                      Already have an account?{" "}
                      <Link className="text-primary" to="/login">
                        Login
                      </Link>
                    </p>
                    <div className="block lg:flex justify-center items-center gap-2 py-2 lg:py-6 mx-auto">
                      <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline border-primary flex items-center content-center rounded hover:btn-primary mb-2 lg:mb-0"
                      >
                        <FcGoogle className="text-2xl mr-2"></FcGoogle>Sign Up
                        with Google
                      </button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control w-full max-w-md">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="input input-bordered w-full max-w-md"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is Required",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.name.message}
                            </span>
                          )}
                        </label>
                      </div>

                      <div className="form-control w-full max-w-md">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="input input-bordered w-full max-w-md"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is Required",
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

export default SignUp;
