import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
const AllEmployees = ({ employee }) => {
  const { name, designation, mail, location } = employee;
  return (
    <div>
      <div class="employeeContainer border-2 border-primary p-2 text-center rounded-md relative">
        <div class="avatar py-2">
          <div class="w-36 ring-4  rounded-full mx-auto">
            <img
              src="https://placeimg.com/192/192/people"
              alt="employees photos"
            />
          </div>
        </div>
        <div className="mt-3">
          <h2 className="text-lg font-bold text-blue-900">{name}</h2>
          <p>{designation}</p>
        </div>
        <div className="basicInfo absolute top-0 ">
          <h2 className="text-lg font-bold text-blue-900">{name}</h2>
          <p>{designation}</p>
          <p className="flex items-center">
            <HiOutlineMail />
            {mail}
          </p>
          <p className="flex items-center">
            <MdOutlineLocationOn />
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllEmployees;
