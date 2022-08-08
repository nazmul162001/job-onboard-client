import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";

const AllEmployees = ({ employee }) => {
  const { name, designation, mail, location } = employee;

  
  return (
    <div>
      <div class="employeeContainer overflow-hidden border-2 shadow-md border-l p-2 text-center rounded-md relative">
        <div class="avatar py-2 mx-auto">
          <div class="w-36 ring-4  rounded-full ">
            <img
              src="https://placeimg.com/192/192/people"
              alt="employees photos"
            />
          </div>
        </div>
        <div className="mt-3 nameTitle pb-5 ">
          <h2 className="text-lg font-bold text-blue-900">{name}</h2>
          <p>{designation}</p>
        </div>
        <div className="basicInfo absolute left-0 right-0 text-left text-white  -top-full font-medium h-full flex flex-col justify-center px-3">
          <span className="absolute right-3 top-3 flex">
            <RiDeleteBin2Line className="mr-2 text-xl cursor-pointer" />
            <BiEdit className="mr-2 text-xl cursor-pointer" />
          </span>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="py-2">{designation}</p>
          <hr className="" />
          <p className="flex items-center text-sm py-2">
            <HiOutlineMail className="text-green-400 mr-1" />
            {mail}
          </p>
          <p className="flex items-center text-sm">
            <MdOutlineLocationOn className="text-green-400 mr-1" />
            {location}
          </p>
          <BsArrowRightCircleFill className="absolute bottom-3 right-3 text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default AllEmployees;
