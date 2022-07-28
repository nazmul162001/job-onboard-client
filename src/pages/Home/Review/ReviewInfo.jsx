import React from 'react';

const ReviewInfo = ({review}) => {

  const {name, location, img} = review;
  
  
  return (
    <div>
      <h2>{name} </h2>
    </div>
  );
};

export default ReviewInfo;