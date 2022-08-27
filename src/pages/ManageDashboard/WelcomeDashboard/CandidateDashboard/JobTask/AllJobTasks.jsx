import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const AllJobTasks = ({ task, index }) => {
  const { companyName, taskName, taskDate, taskTime,_id } = task;
  const navigate = useNavigate()
const seeTaskDetails =(taskId) =>{
  navigate(`${taskId}`)
}
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>MX</span>
          </div>
        </div>
      </td>
      <td>{companyName}</td>
      <td>{taskName}</td>
      <td>{taskDate}</td>
      <td>{taskTime}</td>
      <td>
        <button onClick={()=>seeTaskDetails(_id)} className="taskSeeDetails">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <BsFillArrowRightCircleFill />
            </div>
          </div>
          <span>See More</span>
        </button>
      </td>
    </tr>
  );
};

export default AllJobTasks;
