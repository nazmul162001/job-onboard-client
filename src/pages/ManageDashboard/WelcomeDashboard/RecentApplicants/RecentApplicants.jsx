import React from 'react';

const RecentApplicants = ({ revApplicant }) => {
  console.log(revApplicant?.profileUrl)
  const { profileUrl, displayName, jobTitle } = revApplicant
  return (
    <div className='shadow-lg hover:shadow-2xl p-5 text-center space-y-4 border rounded-lg '>

      <div class="avatar py-2 mx-auto relative">
        <label class="absolute left-[-60px] top-2 text-[12px] border px-2  rounded-xl">Applied </label>
        <div class="w-16 ring-2 rounded-full ">
          {profileUrl ? (
            <img src={profileUrl} alt="candidate" />
          ) : (
            <img src='https://i.ibb.co/xY0rfV4/avatar.jpg' alt="demoCandidateImg" />
          )}
        </div>
      </div>
      <h2 className="font-semibold">{displayName}</h2>
      <h3 className="text-[15px]">{jobTitle}</h3>
      <button className='btn btn-sm btn-outline text-[12px] text-secondary '>View Details</button>
    </div>
  );
};

export default RecentApplicants;