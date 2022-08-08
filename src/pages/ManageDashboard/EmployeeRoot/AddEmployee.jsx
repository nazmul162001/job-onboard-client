import React from "react";
import { useForm } from "react-hook-form";
import { BsPersonPlusFill } from "react-icons/bs";
const AddEmployee = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <div>
      <input
        type="checkbox"
        id="add-new-employee-modal"
        className="modal-toggle "
      />
      <div className="modal ">
        <div className="modal-box lg:w-10/12 lg:max-w-2xl">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div>
            <form className="space-y-2">
              {/* name filed  */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "This field is required",
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
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.fullName?.message}
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
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("email", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.email?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Contact number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="border rounded-lg  py-1 text-lg pl-3 "
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.phoneNumber?.message}
                  </p>
                </div>
              </div>

              {/* social link  */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <input
                    type="text"
                    placeholder="Portfolio"
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("portfolio", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.portfolio?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1">
                  <input
                    type="text"
                    placeholder="Linkedin"
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("linkedin", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.linkedin?.message}
                  </p>
                </div>
              </div>

              {/* social link end */}

              <div className="flex flex-col space-y-1 gap-y-1 py-5">
                <h4 className="pl-2 md:text-lg">
                  Why should you be hired for this role?{" "}
                  <span className="text-red-500">*</span>
                </h4>
                <textarea
                  type="text"
                  rows={4}
                  placeholder="Add a cover letter"
                  className="border rounded-lg py-1 text-xl pl-3 "
                  {...register("coverLetter", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3"></p>
              </div>

              <div className="pb-5 lg:pb-2 text-center lg:text-start">
                <button className="px-5 py-3  border bg-primary rounded-lg text-lg  text-white">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <label
        for="add-new-employee-modal"
        className="mr-5 flex items-center bg-base-300 py-2 px-3 rounded-md font-bold cursor-pointer"
      >
        <BsPersonPlusFill /> Add New
      </label>
    </div>
  );
};

export default AddEmployee;
