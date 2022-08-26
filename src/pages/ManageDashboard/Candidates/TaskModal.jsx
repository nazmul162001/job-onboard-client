import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import Swal from "sweetalert2";
import { InitializeContext } from "../../../App";
import { BASE_API } from "../../../config";
const TaskModal = ({ applicantData, setApplicantData }) => {
  const { displayName, email, hrEmail } = applicantData;

  const { theme } = useContext(InitializeContext);
  let today = new Date();
  let todaysTime = today.getHours() + ":" + today.getMinutes();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const taskInfo = (data) => {
    const candidateInfo = {
      ...data,
      hrEmail,
    };

    fetch(`${BASE_API}/candidateTask`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(candidateInfo),
      // const { id, name, location, email } = employe;
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            text: "Done",
            icon: "success",
            confirmButtonText: "Okay",
          });
          reset();
          setApplicantData(null);
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
      <input type="checkbox" id="task-modal" class="modal-toggle" />
      <label for="task-modal" class="modal cursor-pointer">
        <label
          class="modal-box relative lg:w-10/12 lg:max-w-2xl modalContainer"
          for=""
        >
          <label
            for="task-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form onSubmit={handleSubmit(taskInfo)} className="space-y-2">
              <div className="flex flex-col space-y-1 gap-y-1">
                <label className="text-lg pl-2">
                  Candidate Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={displayName}
                  readOnly
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("CandidateName")}
                />
              </div>
              <div className="flex flex-col space-y-1 gap-y-1">
                <label className="text-lg pl-2">
                  Candidate email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("candidateEmail")}
                />
                <p className="text-[13px] text-red-500 pl-3">
                  {errors.taskName?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-1 gap-y-1">
                <label className="text-lg pl-2">
                  Task Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Task Name"
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput "
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("taskName", {
                    required: {
                      value: true,
                      message: "Add a task Name !",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3">
                  {errors.taskName?.message}
                </p>
              </div>

              <div className="flex flex-col space-y-1 gap-y-1 py-2">
                <label className="pl-2 md:text-lg">Task Discription</label>
                <textarea
                  type="text"
                  rows={4}
                  placeholder="Add Task Discription"
                  className={
                    theme
                      ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                      : "border rounded-lg py-1 text-lg pl-3 "
                  }
                  {...register("taskDiscriptioin", {
                    required: {
                      value: true,
                      message: "Add a task Discription !",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3">
                  {errors.taskDiscriptioin?.message}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Task Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("taskDate", {
                      required: {
                        value: true,
                        message: "Add Task Date !",
                      },
                    })}
                  />

                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.taskDate?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1">
                  <label className="text-lg pl-2">
                    Task Time<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    defaultValue={todaysTime}
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("taskTime", {
                      required: {
                        value: true,
                        message: "Add Task Time !",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.gender?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-1 gap-y-1 mb-8">
                  <label className="text-lg pl-2">
                    Time Duration<span className="text-red-500">*</span>
                  </label>
                  <select
                    className={
                      theme
                        ? "border rounded-lg py-1 text-lg pl-3 bg-[#05142687] darkInput"
                        : "border rounded-lg py-1 text-lg pl-3 "
                    }
                    {...register("timeDuration", {
                      required: {
                        value: true,
                        message: "Add Time Duration!",
                      },
                    })}
                  >
                    <option disabled selected>
                      An Hour
                    </option>
                    <option>An Hours</option>
                    <option>30 Minutes</option>
                    <option>2 Hours</option>
                    <option>3 Hours</option>
                    <option>4 Hours</option>
                    <option>5 Hours</option>
                    <option>1 Days</option>
                    <option>2 Days</option>
                  </select>
                </div>
              </div>

              <button className="rounded-lg text-lg py-1  font-bold  bg-primary w-full  flex items-center justify-center  text-white">
                <IoIosSend /> Send
              </button>
            </form>
          </div>
        </label>
      </label>
    </div>
  );
};

export default TaskModal;
