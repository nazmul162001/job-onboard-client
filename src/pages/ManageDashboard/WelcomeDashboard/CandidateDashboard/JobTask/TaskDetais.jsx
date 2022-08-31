import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";
import { BASE_API } from "../../../../../config";
import SubmitTaskModal from "./SubmitTaskModal";
const TaskDetais = () => {
  const { taskId } = useParams();
  const [singleTask, setSingleTask] = useState({});
  // const [singleSubmittedTask, setSingleSubmittedTask] = useState({});
  const { isLoading } = useQuery(["singleId"], () =>
    fetch(`${BASE_API}/singleTask/${taskId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSingleTask(data))
  );

  const { data } = useQuery(["candidateSubmission"], () =>
    axios.get(`${BASE_API}/submittedTask`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  const submissionData = data?.data;

  // console.log(submissionData)

  const filtered = submissionData?.filter((data) => {
    return data?.email === singleTask?.candidateEmail;
  });

  const {
    companyName,
    taskDate,
    taskDiscriptioin,
    timeDuration,
    taskName,
    taskTime,
  } = singleTask;
  // console.log(filtered)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="taskContainer px-4 mt-8">
      <div className="info flex flex-col-reverse md:flex-row justify-between p-5 items-center bg-[#01022ee6] mt-4 text-white">
        <div className="task text-[20px] font-bold font-[monospace]">
          <h2>
            <span className="text-[#62ccd7]">Task For: </span>
            {taskName}
          </h2>
          <h2>
            <span className="text-[#62ccd7]">Task Date: </span>
            {taskDate?.slice(0, 10)}
          </h2>
          <h2>
            <span className="text-[#62ccd7]">Task Time: </span>
            {taskTime}
          </h2>
          <h2>
            <span className="text-[#62ccd7]">Task Duration: </span>
            {timeDuration}
          </h2>
        </div>
        <div>
          <h2 className="cName mb-[30px] text-2xl pr-5 font-bold">
            {companyName}
          </h2>
          {filtered?.map((stat) =>
            stat?.status === true ? (
              <SubmitTaskModal singleTask={singleTask} />
            ) : (
              <></>
            )
          )}
        </div>
      </div>

      <div>
        <h2 className="text-center font-bold my-5 text-xl">Task Description</h2>
        <p className="px-10">{taskDiscriptioin}</p>
      </div>
    </section>
  );
};

export default TaskDetais;
