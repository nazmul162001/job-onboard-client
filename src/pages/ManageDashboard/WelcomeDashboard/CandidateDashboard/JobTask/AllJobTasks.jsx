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
      <td>{companyName}</td>
      <td>{taskName}</td>
      <td>{taskDate?.slice(0, 10)}</td>
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
