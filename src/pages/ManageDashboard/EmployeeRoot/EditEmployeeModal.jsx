import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { InitializeContext } from "../../../App";
import { BASE_API } from "../../../config";
const EditEmployeeModal = ({
  editEmployeDetails,
  setEditEmployeDetails,
  refetch,
}) => {
  const { theme } = useContext(InitializeContext);
  const {
    _id,
    fullName,
    employeId,
    employeEmail,
    designation,
    joiningDate,
    bloodGroup,
    location,
    phoneNumber,
    photoLink,
    additionInfo,
    age,
    gender,
  } = editEmployeDetails;

  // console.log(editEmployeDetails)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const editDetails = (data) => {
    const updateData = { ...data };
    const id = _id;
    if (id) {
      fetch(`${BASE_API}/editEployee/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateData),
        // const { id, name, location, email } = employe;
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            Swal.fire({
              text: "Edit Successfully",
              icon: "success",
              confirmButtonText: "Okay",
            });
            setEditEmployeDetails(null);
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
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="edit-employee-modal"
        className="modal-toggle "
      />
      <div className="modal ">
        <div className="modal-box lg:w-10/12 lg:max-w-2xl modalContainer">
          <label
            for="edit-employee-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div>
            <form className="space-y-2" onSubmit={handleSubmit(editDetails)}>
              {/* name filed  */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={() => fullName}
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
                    defaultValue={employeId}
                    placeholder="Enter ID No"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
                    defaultValue={employeEmail}
                    placeholder="Enter your email"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
                    {errors.email?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
                      {designation}
                    </option>
                    <option>Front-End Developer</option>
                    <option>Back-End Developer</option>
                    <option>Full-Stack Developer</option>
                    <option>Javascript Developer</option>
                    <option>React Developer</option>
                    <option>Web Developer</option>
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
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Add Gender !",
                      },
                    })}
                  >
                    <option selected>{gender}</option>
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
                    defaultValue={age}
                    placeholder="Enter Age"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
              {/* Date of birth and blood group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Joining Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    defaultValue={joiningDate}
                    placeholder="Enter Date Of Birth"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
                      {bloodGroup}
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
                    defaultValue={location}
                    placeholder="Enter Location"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
                    defaultValue={phoneNumber}
                    placeholder="Enter Contact Number"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
                  defaultValue={photoLink}
                  placeholder="Enter Images Link"
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
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
                  defaultValue={additionInfo}
                  rows={4}
                  placeholder="Additional Information"
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("additionInfo")}
                />
              </div>

              <button className="rounded-lg text-lg py-1 font-bold  bg-primary w-full  flex items-center justify-center  text-white">
                <AiFillCheckCircle /> Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
