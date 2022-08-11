import React from 'react';
import Jobs from '../Jobs';
import Sidebar from '../Sidebar/Sidebar';

const AllJob = () => {

  
  return (
    <div className='flex flex-col h-auto md:h-[100vh] bg-[#eeecec] py-6'>
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row flex-1 ">
        <div className="basis-72 md:h-[80vh] p-4 m-4 rounded-[10px] bg-[#fafafa] overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-1 p-8 overflow-y-auto">
          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default AllJob;