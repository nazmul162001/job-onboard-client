import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";

const Profile = () => {
  useTitle("Profile");
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [loading, setLoading] = useState("false");
  const onSubmit = (data) => {
    setLoading(false);
    saveProfileDataOnMongodb(data);
    setLoading(true);
  };

  const saveProfileDataOnMongodb = async (data) => {
    const profileData = {
      education: data?.education,
      number: data?.number,
      address: data?.address,
      facebook: data?.facebook,
      linkedin: data?.linkedin,
      createdAt: new Date().toDateString(),
    };
    await fetch(`${BASE_API}/users/all`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          toast.success("Profile Updated Successfully");
          reset();
          refetch();
          setIsShow(false);
        }
      });
  };

  const {
    data: result,
    isLoading,
    refetch,
  } = useQuery(["profileData"], () =>
    fetch(`${BASE_API}/users/all`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading)
    return (
      <div className="md:p-80">
        <Loading />
      </div>
    );

  const { role, address, education, number, linkedin, facebook } =
    result;

  return (
    <div className="grid place-items-center py-36 lg:py-48 md:px-24 h-[80vh] bg-base-100">
      <div className="profile-card w-[97%] md:w-2/3 lg:w-1/3 text-center shadow-xl rounded-3xl bg-base-100 p-7">
        <div className="avatar w-40 h-40 rounded-full border-8 text-7xl font-semibold overflow-hidden mt-[-5rem] z-10 grid place-items-center mx-auto ring ring-primary ring-offset-base-100 ring-offset-2">
          {auth?.currentUser?.photoURL ? (
            <img
              src={auth?.currentUser?.photoURL}
              alt={auth?.currentUser?.displayName.slice(0, 1)}
            />
          ) : (
            <img src='https://i.ibb.co/xY0rfV4/avatar.jpg' alt={auth?.currentUser?.displayName.slice(0, 1)} />
          )}
        </div>
        <div className="info my-2">
          <h3 className="text-lg font-semibold">
            {auth?.currentUser?.displayName}
            <small className="ml-2">
              {role === "admin" ? (
                <span className="badge bg-primary border-primary text-white">
                  Admin
                </span>
              ) : (
                <span className="badge text-white">User</span>
              )}
            </small>
          </h3>
          <small>{auth?.currentUser?.email}</small>
        </div>
        <hr />
        <div className="details py-5 bg-base-100">
          <ul className="flex flex-col gap-3 items-start justify-start">
            <li className="flex justify-between w-full items-center">
              Education -{" "}
              <strong>{education ? education : "Not available"}</strong>
            </li>
            <li className="flex justify-between w-full items-center">
              Phone - <strong>{number ? number : `Not available`}</strong>
            </li>
            <li className="flex w-full justify-between items-center">
              Address - <strong>{address ? address : "Not available"}</strong>
            </li>
            <li className="flex justify-between w-full items-center">
              Social Links -{" "}
              {facebook || linkedin ? (
                <div className="flex items-center gap-2">
                  <a target={"_blank"} href={linkedin} rel="noreferrer">
                    <FaLinkedin className="text-blue-500" />
                  </a>
                  <a target={"_blank"} href={facebook} rel="noreferrer">
                    <FaFacebook className="text-blue-700" />
                  </a>
                </div>
              ) : (
                <strong>Not available</strong>
              )}
            </li>
          </ul>
          {isShow ? (
            <button
              onClick={() => setIsShow((prev) => !prev)}
              className="btn btn-link"
            >
              Close
            </button>
          ) : (
            <button
              onClick={() => setIsShow((prev) => !prev)}
              className="btn btn-link"
            >
              Edit
            </button>
          )}
        </div>
        {isShow && (
          <div className="bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="another-info flex items-center justify-center flex-col gap-2 my-3"
            >
              <input
                type="text"
                placeholder="Education"
                className="input input-bordered w-full"
                required
                defaultValue={education}
                {...register("education", { required: true })}
              />
              {errors.education?.type === "required" && (
                <span className="text-error">Education is required</span>
              )}

              <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                <div className="my-2 w-full">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    defaultValue={number}
                    className="input input-bordered w-full"
                    {...register("number", { required: true })}
                  />
                  {errors.number?.type === "required" && (
                    <span className="text-error">Phone Number is required</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="City/State"
                    className="input input-bordered w-full"
                    required
                    defaultValue={address}
                    {...register("address", { required: true })}
                  />
                  {errors.address?.type === "required" && (
                    <span className="text-error">Address is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Facebook"
                    defaultValue={facebook}
                    className="input input-bordered w-full"
                    {...register("facebook", { required: true })}
                  />
                  {errors.facebook?.type === "required" && (
                    <span className="text-error">Facebook is required</span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Linkedin"
                    defaultValue={linkedin}
                    className="input input-bordered w-full"
                    {...register("linkedin", { required: true })}
                  />
                  {errors.linkedin?.type === "required" && (
                    <span className="text-error">Github URL is required</span>
                  )}
                </div>
              </div>
              <div className="text-center mt-3">
                <button
                  className="btn btn-primary text-white"
                  disabled={!loading && true}
                >
                  {!loading ? "Updating Profile..." : "Update Profile"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
