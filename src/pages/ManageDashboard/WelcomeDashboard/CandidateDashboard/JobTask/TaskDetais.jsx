import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { BASE_API } from "../../../../../config";
const TaskDetais = () => {
  const { taskId } = useParams();
  const [singleTask, setSingleTask] = useState({});
  const { refetch } = useQuery(["singleId"], () =>
    fetch(`${BASE_API}/singleTask/${taskId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSingleTask(data))
  );

  const {
    companyName,
    hrEmail,
    taskDate,
    taskDiscriptioin,
    timeDuration,
    taskName,
    taskTime,
  } = singleTask;

  return (
    <section>
      <div className="info flex justify-between p-5 items-center bg-[#01022ee6] mt-4 text-white">
        <div className="task text-[20px] font-bold font-[monospace]">
          <div className="flex">
          <h2>
            <span className="text-[#62ccd7]">Task For: </span>
            {taskName}
          </h2>
          <h2 className="cName">{companyName}</h2>
          </div>

          <h2>
            <span className="text-[#62ccd7]">Task Date: </span>
            {taskDate}
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
         
          <button className="taskSeeDetails submitTask">
            <span>Submit</span>
            <div class="svg-wrapper-1 ">
              <div class="svg-wrapper">
                <BsCheckCircleFill />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div>
        <p>{taskDiscriptioin}</p>
      </div>
    </section>
  );
};

export default TaskDetais;
