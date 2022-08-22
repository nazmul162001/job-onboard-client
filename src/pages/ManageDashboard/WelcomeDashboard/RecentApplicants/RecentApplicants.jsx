import React from 'react';

const RecentApplicants = ({  revApplicant }) => {
  console.log(revApplicant?.profileUrl)
  const {profileUrl , displayName , jobTitle}  = revApplicant 
  return (
    <div className='shadow-lg hover:shadow-2xl p-5 text-center space-y-4 border rounded-lg'>
      <div class="avatar py-2 mx-auto">
        <div class="w-16 ring-2 rounded-full ">
          {profileUrl ? (
            <img src={profileUrl} alt="candidate" />
          ) : (
            <img src='https://i.ibb.co/xY0rfV4/avatar.jpg' alt="demoCandidateImg" />
          )}
        </div>
      </div>
      <h2 className="font-semibold">{displayName}</h2>
      <h3 className="font-mono text-lg font-semibold">{jobTitle}</h3>
    </div>
  );
};

export default RecentApplicants;