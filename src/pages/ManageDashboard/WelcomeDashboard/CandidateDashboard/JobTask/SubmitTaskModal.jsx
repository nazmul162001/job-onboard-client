import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { InitializeContext } from "../../../../../App";
import { BASE_API } from "../../../../../config";

const SubmitTaskModal = ({ singleTask }) => {

  const { theme } = useContext(InitializeContext);
  let today = new Date().toLocaleDateString();
  let times = new Date();
  let todaysTime =
    times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { CandidateName, candidateEmail, timeDuration, taskName, hrEmail } =
    singleTask;
  const applicantId = singleTask?.applicantData?._id
  // console.log(applicantNumber)

  const submiteTask = (data) => {
    const submitedTaskInfo = {
      ...data,
      applicantId,
      hrEmail,
    };
    fetch(`${BASE_API}/submitCandidateTask`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(submitedTaskInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            text: "Submit Successfully",
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
  };

  return (
    <div>
      <input type="checkbox" id="submit_task_modal" class="modal-toggle" />
      <label for="submit_task_modal" class="modal cursor-pointer">
        <label
          class="modal-box relative lg:w-10/12 lg:max-w-2xl modalContainer"
          for=""
        >
          <label
            for="submit_task_modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form
              onSubmit={handleSubmit(submiteTask)}
              className={
                theme ? "text-primary space-y-2" : "space-y-2 text-black"
              }
            >
              <div className="flex flex-col space-y-1 gap-y-1">
                <label className="text-lg pl-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={CandidateName}
                  readOnly
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                      : "border rounded-lg py-1 text-lg pl-3"
                  }
                  {...register("displayName", {
                    required: {
                      value: true,
                      message: " Plz one click before Submit!",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3">
                  {errors.displayName?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-1 gap-y-1">
                <label className="text-lg pl-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={candidateEmail}
                  readOnly
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("email", {
                    required: {
                      value: true,
                      message: " Plz one click before Submit!",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3">
                  {errors.email?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-1 gap-y-1">
                <label className="text-lg pl-2">
                  Task Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Task Name"
                  value={taskName}
                  readOnly
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("taskName", {
                    required: {
                      value: true,
                      message: " Plz one click before Submit!",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3">
                  {errors.taskName?.message}
                </p>
              </div>

              <div className="flex flex-col space-y-1 gap-y-1 py-2">
                <label className="pl-2 md:text-lg">
                  Submit Your Task Information{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  type="text"
                  rows={4}
                  placeholder="Your Task Information"
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("taskInformation", {
                    required: {
                      value: true,
                      message: "Add Your Task Information!",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3">
                  {errors.taskInformation?.message}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Sumbit Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    readOnly
                    value={today}
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("submitDate", {
                      required: {
                        value: true,
                        message: " Plz one click before Submit!!",
                      },
                    })}
                  />

                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.submitDate?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Submit Time<span className="text-red-500">*</span>
                  </label>
                  <input
                    value={todaysTime}
                    readOnly
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("taskTime", {
                      required: {
                        value: true,
                        message: " Plz one click before Submit!!",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.taskTime?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1 mb-8">
                  <label className="text-lg pl-2">
                    Time Duration<span className="text-red-500">*</span>
                  </label>
                  <input
                    value={timeDuration}
                    readOnly
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("submitedDuration", {
                      required: {
                        value: true,
                        message: " Plz one click before Submit!",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.submitedDuration?.message}
                  </p>
                </div>
              </div>

              <button className="rounded-lg text-lg py-1  font-bold  bg-primary w-full  flex items-center justify-center  text-white">
                Submit
              </button>
            </form>
          </div>
        </label>
      </label>
      <label
        for="submit_task_modal"
        className="seeTaskDetails submitTask cursor-pointer"
      >
        <span>Submit</span>
        <div class="svg-wrapper-1 ">
          <div class="svg-wrapper">
            <BsCheckCircleFill />
          </div>
        </div>
      </label>
    </div>
  );
};

export default SubmitTaskModal;
