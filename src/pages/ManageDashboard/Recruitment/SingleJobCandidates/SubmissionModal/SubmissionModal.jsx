import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SubmissionModal = ({ singleSubmission }) => {
  console.log(singleSubmission)
  const [task, setTask] = useState({})
  useEffect(() => {
    setTask(singleSubmission)
  }, [singleSubmission])

  return (
    <div>
      <input type="checkbox" id="viewSubmissionModal" className="modal-toggle " />
      <div className="modal ">
        <div className="modal-box w-1/2 max-w-5xl">
          <label htmlFor="viewSubmissionModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h2 className='text-lg md:text-2xl pt-8 pb-5 font-mono'>Sumitted By {task?.displayName} </h2>
          <p className='font-semibold'>Task Information : </p>
          <div className='border p-3 rounded my-3'>
            {task?.taskInformation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;