import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentApplicants = ({ revApplicant }) => {
  // console.log(revApplicant)
  const navigate = useNavigate()

  return (
    <div className='shadow-lg hover:shadow-2xl p-5 text-center space-y-4 border rounded-lg '>

      <div className="avatar py-2 mx-auto relative">
        <label className="absolute left-[-60px] top-2 text-[12px] border px-2  rounded-xl">Applied </label>
        <div className="w-16 ring-2 rounded-full ">
          {revApplicant?.profileUrl ? (
            <img src={revApplicant?.profileUrl} alt="candidate" />
          ) : (
            <img src='https://i.ibb.co/xY0rfV4/avatar.jpg' alt="demoCandidateImg" />
          )}
        </div>
      </div>
      <h2 className="font-semibold">{revApplicant?.displayName}</h2>
      <h3 className="text-[15px]">{revApplicant?.jobTitle}</h3>
      <button className='btn btn-sm btn-outline text-[12px] text-secondary' onClick={() => navigate(`/dashboard/candidates/${revApplicant?._id}`)}>View Details</button>
    </div>
  );
};

export default RecentApplicants;