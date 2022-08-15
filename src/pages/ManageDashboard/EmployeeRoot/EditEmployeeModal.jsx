import React from "react";
import { useForm } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";
const EditEmployeeModal = ({ editEmployeDetails }) => {
  const {
    _id,
    fullName,
    employeId,
    email,
    designation,
    dateOfBirth,
    bloodGroup,
    location,
    phoneNumber,
    photoLink,
    additionInfo,
    age,
    gender,
  } = editEmployeDetails;
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
            class="btn btn-sm btn-circle absolute right-2 top-2"
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
                    defaultValue={fullName}
                    placeholder="Enter Full Name"
                    className="border rounded-lg py-1 text-lg pl-3 "
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
                    className="border rounded-lg py-1 text-lg pl-3 "
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
                    defaultValue={email}
                    placeholder="Enter your email"
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("email", {
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
                    className="border rounded-lg  py-1 text-lg pl-3 "
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
                    <option>Javascript Developer</option>
                    <option>React Developer</option>
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
                    className="border rounded-lg  py-1 text-lg pl-3 "
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Add Gender !",
                      },
                    })}
                  >
                    <option selected>{gender}</option>
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
                    className="border rounded-lg py-1 text-lg pl-3 "
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
                    Date Of Birth<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={dateOfBirth}
                    placeholder="Enter Date Of Birth"
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("dateOfBirth", {
                      required: {
                        value: true,
                        message: "Add Date Of Birth !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.dateOfBirth?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Blood Group<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={bloodGroup}
                    placeholder="Enter Blood Group"
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("bloodGroup", {
                      required: {
                        value: true,
                        message: "Add Blood Group !",
                      },
                    })}
                  />
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
                    className="border rounded-lg py-1 text-lg pl-3 "
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
                    className="border rounded-lg py-1 text-lg pl-3 "
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
                  className="border rounded-lg py-1 text-lg pl-3 "
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
                  className="border rounded-lg py-1 text-xl pl-3 "
                  {...register("additionInfo")}
                />
              </div>

              <button className="rounded-lg text-lg py-1 font-bold  bg-primary w-full  flex items-center justify-center  text-white">
                <AiFillCheckCircle /> Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
