import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentTasks = ({revTask}) => {
  const navigate = useNavigate()
  console.log(revTask)
  return (
    <div className='shadow-lg p-5 text-center space-y-2 border rounded-lg '>

      <div class="avatar py-2 mx-auto relative">
      <label class="absolute left-[-100px] top-0 text-[12px] border px-2  rounded-xl">Task</label>
        
      </div>
      <h3 className="text-[15px] ">{revTask?.companyName}</h3>
      <h2 className="font-semibold ">{revTask?.taskName}</h2>
      <h3 className="text-[15px] ">Given : {revTask?.taskDate}</h3>
      <h3 className="text-[15px]"> Time : {revTask?.timeDuration}</h3>
      <button className='btn btn-sm btn-outline text-[12px] text-secondary capitalize' onClick={() => navigate(`/dashboard/task/${revTask?._id}`)}>Task Info</button>
    </div>
  );
};

export default RecentTasks;