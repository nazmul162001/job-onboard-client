import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../../Hooks/useAdmin";
import useHrManager from "../../../Hooks/useHrManager";

const Profile = () => {
  useTitle("Profile");
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [hr] = useHrManager(user);
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    // formState: { errors },
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
      address: data?.address,
      number: data?.number,
      gender: data?.gender,
      dateOfBirth: data?.dateOfBirth,
      bloodGroup: data?.bloodGroup,
      createdAt: new Date().toDateString(),
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

  const { address, gender, number, dateOfBirth, bloodGroup } = result?.result;

  return (
    <div className="grid place-items-center py-24 lg:py-48 md:px-20 lg:px-0 h-[80vh] bg-base-100">
      <div className="profile-card w-[97%] md:w-2/3 lg:w-1/3 text-center shadow-xl rounded-3xl bg-base-100 p-7">
        <div className="avatar w-40 h-40 rounded-full border-8 text-7xl font-semibold overflow-hidden mt-[-5rem] z-10 grid place-items-center mx-auto ring ring-primary ring-offset-base-100 ring-offset-2">
          {auth?.currentUser?.photoURL ? (
            <img
              src={auth?.currentUser?.photoURL}
              alt={auth?.currentUser?.displayName.slice(0, 1)}
            />
          ) : (
            <img
              src="https://i.ibb.co/xY0rfV4/avatar.jpg"
              alt={auth?.currentUser?.displayName.slice(0, 1)}
            />
          )}
        </div>
        <div className="info my-2">
          <h3 className="text-lg font-semibold">
            {auth?.currentUser?.displayName}
            <small className="ml-2">
              <span className="badge text-white">
                {!admin && hr ? "HR" : admin && !hr ? "Admin" : "Candidate"}
              </span>
            </small>
          </h3>
          <small>{auth?.currentUser?.email}</small>
        </div>
        <hr />
        <div className="details py-5 bg-base-100">
          <ul className="flex flex-col gap-3 items-start justify-start">
            <li className="flex w-full justify-between items-center">
              Address - <strong>{address ? address : "Not available"}</strong>
            </li>
            <li className="flex justify-between w-full items-center">
              Phone Number -{" "}
              <strong>{number ? number : `Not available`}</strong>
            </li>
            <li className="flex justify-between w-full items-center">
              Gender - <strong>{gender ? gender : "Not available"}</strong>
            </li>
            <li className="flex w-full justify-between items-center">
              Date of Birth -{" "}
              <strong>{dateOfBirth ? dateOfBirth : "Not available"}</strong>
            </li>
            <li className="flex w-full justify-between items-center">
              Blood Group -{" "}
              <strong>{bloodGroup ? bloodGroup : "Not available"}</strong>
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
              <div className="w-full">
                <label class="label">
                  <span class="label-text-alt">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full"
                  required
                  defaultValue={address}
                  {...register("address", { required: true })}
                />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                <div className="my-2 w-full">
                  <label class="label">
                    <span class="label-text-alt">Phone Number</span>
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
                <div className="w-full">
                  <label class="label">
                    <span class="label-text-alt">Gender</span>
                  </label>
                  <select
                    class="select select-bordered w-full max-w-xs"
                    required
                    defaultValue={gender}
                    {...register("gender", { required: true })}
                  >
                    <option disabled selected>
                      Select one
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                <div className="w-full">
                  <label class="label">
                    <span class="label-text-alt">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    defaultValue={dateOfBirth}
                    required
                    className="input input-bordered w-full"
                    {...register("dateOfBirth", { required: true })}
                  />
                </div>
                <div className="w-full">
                  <label class="label">
                    <span class="label-text-alt">Blood Group</span>
                  </label>
                  <select
                    class="select select-bordered w-full max-w-xs"
                    required
                    defaultValue={bloodGroup}
                    {...register("bloodGroup", { required: true })}
                  >
                    <option disabled selected>
                      Select one
                    </option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>A-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
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
