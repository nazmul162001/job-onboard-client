import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import useAdmin from "../../../Hooks/useAdmin";
import useHrManager from "../../../Hooks/useHrManager";
import useTitle from "../../../Hooks/useTitle";

const CompanyDetails = () => {
  useTitle("Company Info");
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [hr] = useHrManager(user);
  const [editCompanyInfo, setEditCompanyInfo] = useState(null);
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
      companyName: data?.companyName,
      number: data?.number,
      linkedinUrl: data?.linkedinUrl,
      facebookUrl: data?.facebookUrl,
      githubUrl: data?.githubUrl,
      profileUrl: data?.profileUrl,
      additionalInfo: data?.additionalInfo,
      createdAt:
        new Date().toDateString() + " " + new Date().toLocaleTimeString(),
    };
    await fetch(`${BASE_API}/users/all?uid=${auth?.currentUser?.uid}`, {
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
          toast.success("Company Info Updated Successfully");
          reset();
          refetch();
          setEditCompanyInfo(false);
        }
      });
  };

  const {
    data: result,
    isLoading,
    refetch,
  } = useQuery(["companyInfo"], () =>
    fetch(`${BASE_API}/users?uid=${auth?.currentUser?.uid}`, {
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

  const {
    profileUrl,
    companyName,
    number,
    facebookUrl,
    linkedinUrl,
    githubUrl,
    additionalInfo,
  } = result?.result;

  return (
    <div>
      <div className=" border-b-2 border-primary py-3">
        <h2 className="text-center text-xl md:text-2xl font-semibold ">
          Company Information
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-12 my-10 px-1 md:px-10">
        <div className="shadow-xl border-r-4 border-primary rounded-lg relative p-4 order-1">
          <h2 className="text-xl mb-4 px-4 font-bold">Information</h2>
          <label
            for="editCompanyInfo"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() =>
              setEditCompanyInfo({
                profileUrl,
                companyName,
                number,
                additionalInfo,
                githubUrl,
                facebookUrl,
                linkedinUrl,
              })
            }
          >
            <FiEdit className="text-white" />
          </label>
          <div className="flex justify-between items-center px-4 mb-4">
            <span>Company Name</span>

            <span>{companyName ? companyName : "Not Available"}</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex justify-between items-center px-4 mb-4">
            <span>Email</span>

            <span>{auth?.currentUser?.email}</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex justify-between items-center px-4 mb-4">
            <span>Contact Number</span>

            <span>{number ? number : "Not Available"}</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex justify-between items-center gap-24 px-4 mb-4">
            <span>Additional Info</span>

            <span>{additionalInfo ? additionalInfo : "Not Available"}</span>
          </div>
          <hr className="border-dashed" />
          <div className="flex justify-center items-center py-4">
            <span>Social Links</span>
          </div>
          <div className="flex justify-center items-center px-4">
            {facebookUrl || linkedinUrl ? (
              <div className="flex items-center gap-2">
                <a target="_blank" href={linkedinUrl} rel="noreferrer">
                  <FaLinkedin className="text-xl" />
                </a>
                <a target="_blank" href={facebookUrl} rel="noreferrer">
                  <FaFacebook className="text-xl" />
                </a>
                <a target="_blank" href={githubUrl} rel="noreferrer">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            ) : (
              <span className="label-text-alt">Not available</span>
            )}
          </div>
        </div>
        <div className="text-center md:order-1">
          <div className="avatar mx-auto border-4 border-primary p-3 rounded-xl bg-base-300 shadow-xl">
            <div className=" w-60 rounded-xl">
              {auth?.currentUser?.photoURL ? (
                <img src={auth?.currentUser?.photoURL} alt="avatar" />
              ) : (
                <img src={profileUrl} alt="profile" />
              )}
            </div>
          </div>

          <h2 className="mt-4 font-bold text-xl">
            {auth?.currentUser?.displayName}
          </h2>
          <small className="mt-4 font-bold">{auth?.currentUser?.email}</small>
        </div>
      </div>
      {editCompanyInfo && (
        <>
          <input
            type="checkbox"
            id="editCompanyInfo"
            className="modal-toggle "
          />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box relative">
              <label
                for="editCompanyInfo"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="another-info flex items-center justify-center flex-col gap-2 my-3"
              >
                <div className="w-full">
                  <label className="label">
                    <span className="label-text-alt">Profile Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Profile Image Link"
                    className="input input-bordered w-full"
                    required
                    defaultValue={profileUrl}
                    {...register("profileUrl", { required: true })}
                  />
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className="label-text-alt">Company Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="input input-bordered w-full"
                    required
                    defaultValue={companyName}
                    {...register("companyName", { required: true })}
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                  <div className="my-2 w-full">
                    <label className="label">
                      <span className="label-text-alt">Phone Number</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      defaultValue={number}
                      required
                      className="input input-bordered w-full"
                      {...register("number", { required: true })}
                    />
                  </div>
                </div>

                <p className="mt-2 text-center">Social Media Links</p>
                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                  <div className="w-full">
                    <label htmlFor="linkedin" className="my-2">
                      <span className="label-text-alt">LinkedIn</span>
                    </label>
                    <input
                      type="link"
                      placeholder="LinkedIn Link"
                      defaultValue={linkedinUrl}
                      className="input input-bordered w-full"
                      {...register("linkedinUrl", { required: true })}
                    />
                    {errors.linkedinUrl?.type === "required" && (
                      <span className="text-error">
                        LinkedIn URL is required
                      </span>
                    )}
                  </div>
                  <div className="my-2 w-full">
                    <label htmlFor="facebook" className="my-2">
                      <span className="label-text-alt">Facebook</span>
                    </label>
                    <input
                      type="link"
                      placeholder="Facebook Link"
                      defaultValue={facebookUrl}
                      className="input input-bordered w-full"
                      {...register("facebookUrl", { required: true })}
                    />
                    {errors.facebookUrl?.type === "required" && (
                      <span className="text-error">
                        Facebook URL is required
                      </span>
                    )}
                  </div>
                  <div className="my-2 w-full">
                    <label htmlFor="github" className="my-2">
                      <span className="label-text-alt">GitHub</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Github Link"
                      defaultValue={githubUrl}
                      className="input input-bordered w-full"
                      {...register("githubUrl", { required: true })}
                    />
                    {errors.githubUrl?.type === "required" && (
                      <span className="text-error">Github URL is required</span>
                    )}
                  </div>
                </div>
                <div className="my-2 w-full">
                  <label htmlFor="additionalInfo" className="my-2">
                    <span className="label-text-alt">Additional Info</span>
                  </label>
                  <textarea
                    name=""
                    id="desc"
                    className="textarea textarea-bordered w-full my-1"
                    cols="30"
                    defaultValue={additionalInfo}
                    placeholder="Additional Info"
                    rows="2"
                    {...register("additionalInfo", { required: true })}
                    style={{ resize: "none", height: "8rem" }}
                  ></textarea>
                  {errors.additionalInfo?.type === "required" && (
                    <span className="text-error">
                      Additional Info is required
                    </span>
                  )}
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn btn-primary text-white"
                    disabled={!loading && true}
                  >
                    {!loading
                      ? "Updating Company Info..."
                      : "Update Company Info"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyDetails;
