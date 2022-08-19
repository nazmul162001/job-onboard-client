import React, { useState } from 'react';

const ReviewInfo = ({ review }) => {
  const { name, reviewDetails, location, img } = review;
  const [expand, setExpand] = useState(false);

  return (
    <div className='border-2 border-opacity-30 border-primary rounded-md p-5'>
      {/* <p className='w-10 h-10 mb-3 opacity-30'> <img src={quote} alt="" /> </p> */}
      <p className='text-left'><i class="ri-double-quotes-l text-5xl opacity-30"></i> </p>
      <p className='pb-5 text-left'>
        {!expand && reviewDetails?.slice(0, 200) + '...'} {!expand && <button className='text-primary underline text-[15px]' onClick={() => setExpand(true)}>Read more</button>}
        {expand && reviewDetails} {expand && <button className='text-primary underline text-[15px]' onClick={() => setExpand(false)}>Show less</button>}
      </p>
      <div className="empty my-4 w-4/5 mx-auto h-[1px] bg-base-300 opacity-30"></div>
      <div className="profile flex items-center">
        <div class="avatar">
          <div class="w-12 rounded-full">
            {img ? img : <img src="https://placeimg.com/192/192/people" alt='' />}
          </div>
        </div>
        <div className="profile_name pl-2 text-left">
          <p className='text-sm'>{name}</p>
          <p className='text-sm flex items-center'><span><i class="ri-map-pin-line text-lg pr-2"></i> </span> {location}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewInfo;