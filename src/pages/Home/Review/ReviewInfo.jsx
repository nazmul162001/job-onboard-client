import React from 'react';

const ReviewInfo = ({review}) => {

  const {name, reviewDetails, location, img} = review;
  
  
  return (
    <div>
      <h2>{reviewDetails} </h2>
    </div>
  );
};

export default ReviewInfo;