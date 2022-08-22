import React from 'react';

const RecentApplicants = ({index, revApplicant}) => {
  console.log(revApplicant?.profileUrl)
  return (
    <div>
      <h2>{revApplicant?.displayName}</h2>
    </div>
  );
};

export default RecentApplicants;