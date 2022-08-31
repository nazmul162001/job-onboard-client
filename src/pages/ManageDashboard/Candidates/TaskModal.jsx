import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";

const TaskModal = ({ applicantData, setApplicantData }) => {
  const { displayName, email, hrEmail, companyName, jobTitle } = applicantData;

  let today = new Date();
  let todaysTime = today.getHours() + ":" + today.getMinutes();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // console.log(applicantData);

  const taskInfo = (data) => {
    const candidateInfo = {
      ...data,
      hrEmail,
      displayName,
      candidateEmail: email,
      taskName: jobTitle,
      taskDate: today,
      taskTime: todaysTime,
      companyName,
      applicantData,
      status: true,
    };
    // console.log(candidateInfo)
    fetch(`${BASE_API}/candidateTask`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(candidateInfo),
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
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="task-modal" className="modal-toggle" />
      <label for="task-modal" className="modal cursor-pointer">
        <label
          className="modal-box relative lg:w-10/12 lg:max-w-2xl modalContainer"
          for=""
        >
          <label
            for="task-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form onSubmit={handleSubmit(taskInfo)} className="space-y-2">
              <h3 className="text-center text-xl py-5 text-bold ">Send Task For {jobTitle}</h3>
              <div className='grid grid-cols-1 '>
                <div className='flex flex-col space-y-1'>
                  <label className='text-[15px] pl-2'>Candidate Name <span className='text-red-500'>*</span></label>
                  <input
                    type="text"
                    defaultValue={displayName}
                    disabled
                    className='border rounded-lg py-1 text-lg pl-3 cursor-not-allowed'
                  />
                </div>
              </div>

              <div className='flex flex-col space-y-1 '>
                <label className='text-[15px] pl-2'>Candidate email <span className='text-red-500'>*</span></label>
                <input
                  type="email"
                  defaultValue={email}
                  disabled
                  className='border rounded-lg py-1 text-lg pl-3 cursor-not-allowed'
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex flex-col space-y-1 '>
                  <label className='text-[15px] pl-2'>Task Name <span className='text-red-500'>*</span></label>
                  <input
                    type="text"
                    value={jobTitle}
                    disabled
                    className="border rounded-lg py-1 text-lg pl-3 cursor-not-allowed"
                  />
                </div>

                <div className="flex flex-col space-y-1 ">
                  <label className="text-[15px] pl-2">
                    Time Duration<span className="text-red-500">*</span>
                  </label>
                  <select
                    className="border rounded-lg py-1 text-lg pl-3 "
                    {...register("timeDuration", {
                      required: {
                        value: true,
                        message: "Add Time Duration!",
                      },
                    })}
                  >
                    <option disabled selected>1 Days</option>
                    <option>2 Days</option>
                    <option>3 Days</option>
                    <option>4 Days</option>
                    <option>5 Days</option>
                  </select>
                </div>
              </div>


              <div className="flex flex-col space-y-1 gap-y-1 py-2">
                <label className="pl-2 md:text-[15px]">Task Discription</label>
                <textarea
                  type="text"
                  rows={4}
                  placeholder="Add Task Discription"
                  className="border rounded-lg py-1 text-lg pl-3 "
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

              <button className="rounded-lg text-lg py-1 font-semibold bg-primary hover:bg-[#7641f2] w-full flex items-center justify-center text-white">
                <IoIosSend className="mr-2" /> Send Task
              </button>
            </form>
          </div>
        </label>
      </label>
    </div>
  );
};

export default TaskModal;
