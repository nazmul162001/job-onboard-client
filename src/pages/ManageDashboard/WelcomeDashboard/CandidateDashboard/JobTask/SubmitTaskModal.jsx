import { useForm } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../../../../config";

const SubmitTaskModal = ({ singleTask }) => {

  const navigate = useNavigate()
  let today = new Date().toLocaleDateString();
  let times = new Date();
  let todaysTime = times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const { timeDuration, taskName, hrEmail, taskTime, } = singleTask;
  const displayName = auth?.currentUser?.displayName
  const email = auth?.currentUser?.email
  const applicantId = singleTask?.applicantData?._id
  const applicantResume = singleTask?.applicantData?.resume
  const applicantNumber = singleTask?.applicantData?.number

  const submitTask = (data) => {
    const submitedTaskInfo = {
      ...data,
      displayName,
      email,
      taskName,
      submitDate: today,
      taskTime,
      applicantId,
      applicantResume,
      applicantNumber,
      hrEmail,
      status: true,
    };
    console.log(submitedTaskInfo)
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
          navigate('/dashboard/task')
        } else {
          Swal.fire({
            text: `Opps! Please Try Again`,
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="submit_task_modal" className="modal-toggle" />
      <label for="submit_task_modal" className="modal cursor-pointer">
        <label
          className="modal-box relative lg:w-10/12 lg:max-w-2xl modalContainer"
          for=""
        >
          <label
            for="submit_task_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form
              onSubmit={handleSubmit(submitTask)}
              className="space-y-2 text-black"
            >
              <div className='grid grid-cols-1 '>
                <div className='flex flex-col space-y-1 gap-y-1'>
                  <label className='text-[15px] pl-2'>Display Name <span className='text-red-500'>*</span></label>
                  <input
                    type="text"
                    defaultValue={auth?.currentUser?.displayName}
                    disabled
                    className='border rounded-lg py-1 text-lg pl-3 cursor-not-allowed'
                  />
                </div>
              </div>

              <div className='flex flex-col space-y-1 gap-y-1 py-2'>
                <label className='text-[15px] pl-2'>Your email <span className='text-red-500'>*</span></label>
                <input
                  type="email"
                  defaultValue={auth?.currentUser?.email}
                  disabled
                  className='border rounded-lg py-2 text-lg pl-3 cursor-not-allowed'
                />
              </div>

              <div className='flex flex-col space-y-1 gap-y-1 '>
                <label className='text-[15px] pl-2'>Task Name <span className='text-red-500'>*</span></label>
                <input
                  type="text"
                  value={taskName}
                  disabled
                  className="border rounded-lg py-1 text-lg pl-3 cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col space-y-1 gap-y-1 py-2">
                <label className="pl-2 md:text-[15px]">
                  Submit Your Task Information{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  type="text"
                  rows={4}
                  placeholder="Your Task Information"
                  className="border rounded-lg py-1 text-lg pl-3 "
                  {...register("taskInformation", {
                    required: {
                      value: true,
                      message: "Add Your Task Information!",
                    },
                  })}
                />
                <p className="text-[13px] text-red-500 pl-3">{errors.taskInformation?.message}</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex flex-col space-y-1 gap-y-1'>
                  <input
                    type="text"
                    placeholder='Live Link'
                    className='text-black border rounded-lg py-1 text-lg pl-3 hover:border-primary duration-300'
                    {...register('submitLiveLink', {
                      required: {
                        value: true,
                        message: 'This field is required'
                      }
                    })}
                  />
                  <p className='text-[13px] text-red-500 pl-3'>{errors.submitLiveLink?.message}</p>
                </div>

                <div className='flex flex-col space-y-1 gap-y-1'>
                  <input
                    type="text"
                    placeholder='Github Link'
                    className='text-[#4e4c4c] border rounded-lg py-1 text-lg pl-3 hover:border-primary duration-300'
                    {...register('sumitGithubLink', {
                      required: {
                        value: true,
                        message: 'This field is required'
                      }
                    })}
                  />
                  <p className='text-[13px] text-red-500 pl-3'>{errors.sumitGithubLink?.message}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
                <div className="flex flex-col space-y-1 ">
                  <label className="text-[15px] pl-2">
                    Sumbit Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    disabled
                    value={today}
                    className="border rounded-lg py-1 text-lg pl-3 cursor-not-allowed"
                  />
                </div>

                <div className="flex flex-col space-y-1 ">
                  <label className="text-[15px] pl-2">
                    Submit Time<span className="text-red-500">*</span>
                  </label>
                  <input
                    value={todaysTime}
                    disabled
                    className="border rounded-lg py-1 text-lg pl-3 cursor-not-allowed"
                  />
                </div>

                <div className="flex flex-col space-y-1 ">
                  <label className="text-[15px] pl-2">
                    Time Duration<span className="text-red-500">*</span>
                  </label>
                  <input
                    value={timeDuration}
                    disabled
                    className="border rounded-lg py-1 text-lg pl-3 cursor-not-allowed"
                  />
                </div>
              </div>

              <button className="rounded-lg text-lg py-1  font-bold  bg-primary w-full  flex items-center justify-center  text-white">
                Submit
              </button>
            </form>
          </div>
        </label>
      </label>
      <label for="submit_task_modal">
        <button className="seeTaskDetails submitBtan">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <BsCheckCircleFill />
            </div>
          </div>
          <span>Submit</span>
        </button>
      </label>
    </div>
  );
};

export default SubmitTaskModal;
