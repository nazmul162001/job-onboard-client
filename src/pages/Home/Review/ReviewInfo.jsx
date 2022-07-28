import React from 'react';

const ReviewInfo = ({review}) => {

  const {name, reviewDetails, location, img} = review;
  
  
  return (
    <div>
      <h2 className='border-2 border-opacity-30 h-60 border-orange-400 rounded p-5 '>{reviewDetails} </h2>
    </div>
  );
};

export default ReviewInfo;