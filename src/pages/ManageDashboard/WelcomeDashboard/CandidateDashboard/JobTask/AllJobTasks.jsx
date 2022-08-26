import React from "react";

const AllJobTasks = ({ task, index }) => {
  const { companyName, taskName, taskDate, taskTime } = task;

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
        <button>View Detais</button>
      </td>
    </tr>
  );
};

export default AllJobTasks;
