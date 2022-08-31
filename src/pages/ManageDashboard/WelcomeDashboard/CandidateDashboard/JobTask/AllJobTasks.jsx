import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const AllJobTasks = ({ task, index }) => {
  const { companyName, taskName, taskDate, taskTime, _id } = task;
  // console.log(task)
  const navigate = useNavigate();
  const seeTaskDetails = (taskId) => {
    navigate(`${taskId}`);
  };


  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar placeholder">
          <div className="bg-primary font-bold text-xl text-white rounded-full w-12">
            <span>{companyName.slice(0, 1)} </span>
          </div>
        </div>
      </td>
      <td>{companyName}</td>
      <td>{taskName}</td>
      <td>{taskDate}</td>
      <td>{taskTime}</td>
      <td>
        <button onClick={() => seeTaskDetails(_id)} className="seeTaskDetails">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
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
