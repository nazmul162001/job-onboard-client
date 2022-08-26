import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsShieldPlus } from "react-icons/bs";
import { InitializeContext } from "../../../App";
const TaskModal = () => {
  const { theme } = useContext(InitializeContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const taskInfo = (data) => {
    console.log(data);
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
                  placeholder="Add Task Discription !"
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

              <div className="grid">
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
                      Front-End Developer
                    </option>
                    <option>Front-End Developer</option>
                    <option>Back-End Developer</option>
                    <option>Full-Stack Developer</option>
                    <option>Javascript Developer</option>
                    <option>React Developer</option>
                  </select>

                  <p className="text-[13px] text-red-500 pl-3">
                    {errors.designation?.message}
                  </p>
                </div>

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
              </div>

              <button className="rounded-lg text-lg py-1 font-bold  bg-primary w-full  flex items-center justify-center  text-white">
                <BsShieldPlus /> Add
              </button>
            </form>
          </div>
        </label>
      </label>

      <div className="">
        <label for="task-modal" className="taskBtn cursor-pointer">
          Task
        </label>
      </div>
    </div>
  );
};

export default TaskModal;
