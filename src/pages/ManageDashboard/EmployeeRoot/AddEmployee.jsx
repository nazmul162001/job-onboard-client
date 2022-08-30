import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BsPersonPlusFill, BsShieldPlus } from "react-icons/bs";
import Swal from "sweetalert2";
import { InitializeContext } from "../../../App";
import auth from "../../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../../config";
const AddEmployee = ({ refetch }) => {
  const { theme } = useContext(InitializeContext);
  const [user] = useAuthState(auth);
  const hrUserEmail = user?.email;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const addEmployeDetails = (data) => {
    const employeeDetails = {
      ...data,
      hrUserEmail,
    };
    fetch(`${BASE_API}/addEmployees`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(employeeDetails),
     
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            text: "Add Employee Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          refetch();
          reset();
        } else {
          Swal.fire({
            text: `Opps!`,
            icon: "error",
            confirmButtonText: "Plz Try Again",
          });
        }
      });
  };

  return (
    <div className="bg-base-100">
      <input type="checkbox" id="add-new-employee-modal" class="modal-toggle" />
      <label for="add-new-employee-modal" class="modal cursor-pointer">
        <label
          class="modal-box relative lg:w-10/12 lg:max-w-2xl modalContainer"
          for=""
        >
          <label
            for="add-new-employee-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form
              className="space-y-2"
              onSubmit={handleSubmit(addEmployeDetails)}
            >
              {/* name filed  */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "Add Full Name !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.fullName?.message}
                  </p>
                </div>
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Employe ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="Number"
                    placeholder="Enter ID No"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("employeId", {
                      required: {
                        value: true,
                        message: "Add A ID !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.employeId?.message}
                  </p>
                </div>
              </div>
              {/* name filed end */}

              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("employeEmail", {
                      required: {
                        value: true,
                        message: "Add Email !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.employeEmail?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("designation", {
                      required: {
                        value: true,
                        message: "Add Designaton !",
                      },
                    })}
                  >
                    <option disabled selected>
                    Web Developer
                    </option>
                    <option>Web Developer</option>
                    <option>Front End Dev</option>
                    <option>Backend Dev</option>
                    <option>Full Stack Dev</option>
                    <option>Blockchain Development</option>
                    <option>Animator</option>
                    <option>Cloud Computing</option>
                    <option>Cyber Security</option>
                    <option>Data Entry</option>
                    <option>Flutter Development</option>
                    <option>Game Development</option>
                    <option>Graphic Design</option>
                    <option>Social Media Marketing</option>
                    <option>Mobile App Development</option>
                    <option>PHP Development</option>
                    <option>WordPress</option>
                    <option>Other</option>
                  </select>

                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.designation?.message}
                  </p>
                </div>
              </div>

              {/* Gender and Age */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <select
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Add Gender !",
                      },
                    })}
                  >
                    <option selected>Male</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.gender?.message}
                  </p>
                </div>
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Age<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="Number"
                    placeholder="Enter Age"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("age", {
                      required: {
                        value: true,
                        message: "Add Age !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.age?.message}
                  </p>
                </div>
              </div>

              {/* Joining Date */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Joining Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter Joining Date"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("joiningDate", {
                      required: {
                        value: true,
                        message: "Add Joining Date !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.joiningDate?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Blood Group<span className="text-red-500">*</span>
                  </label>
                  <select
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("bloodGroup", {
                      required: {
                        value: true,
                        message: "Add Blood Group !",
                      },
                    })}
                  >
                    <option disabled selected>
                      O+
                    </option>
                    <option>O-</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.bloodGroup?.message}
                  </p>
                </div>
              </div>
              {/* Location and contact details */}

              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Location<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Location"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("location", {
                      required: {
                        value: true,
                        message: "Add A Locatioin !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.location?.message}
                  </p>
                </div>
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="Number"
                    placeholder="Enter Contact Number"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "Add Phone Number !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.phoneNumber?.message}
                  </p>
                </div>
              </div>

              {/* Employees Photos */}
              <div className="flex flex-col space-y-1 gap-y-1">
                <label className="text-lg pl-2">
                  Add Photos<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Images Link"
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("photoLink", {
                    required: {
                      value: true,
                      message: "Add Photo Link",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3">
                  {errors.photoLink?.message}
                </p>
              </div>
              {/* Additional Imformation */}
              <div className="flex flex-col space-y-1 gap-y-1 py-2">
                <h4 className="pl-2 md:text-lg">Additional Information</h4>
                <textarea
                  type="text"
                  rows={4}
                  placeholder="Additional Information"
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("additionInfo")}
                />
              </div>

              <button className="rounded-lg text-lg py-1 font-bold  bg-primary w-full  flex items-center justify-center  text-white">
                <BsShieldPlus /> Add
              </button>
            </form>
          </div>
        </label>
      </label>

      <div className="">
        <label
          for="add-new-employee-modal"
          className="mr-5 flex items-center bg-base-300 py-2 px-3 rounded-md font-bold cursor-pointer"
        >
          <BsPersonPlusFill /> Add New
        </label>
      </div>
    </div>
  );
};

export default AddEmployee;
