import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AllEmployees = ({
  singleDetails,
  setEditEmployeDetails,
  deleteEmployeeDetails,
}) => {

  const { _id, fullName, employeEmail, photoLink, location, designation } =
    singleDetails;
  const navigate = useNavigate();
  const showRployeeDetail = (employeeId) => {
    navigate(`${employeeId}`);
  };
  return (
    <div>
      <div className="employeeContainer overflow-hidden border-l-2 border-primary shadow-md  p-2 text-center rounded-md relative">
        <div className="avatar py-2 mx-auto">
          <div className="w-36 ring-4  rounded-full ">
            <img src={photoLink} alt="employees photos" />
          </div>
        </div>
        <div className="mt-3 nameTitle pb-5 ">
          <h2 className="text-lg font-bold">{fullName}</h2>
          <p>{designation}</p>
        </div>
        <div className="basicInfo absolute left-0 right-0 text-left text-white  -top-full font-medium h-full flex flex-col justify-center px-3">
          <span className="absolute right-3 top-3 flex">
            <RiDeleteBin2Line
              onClick={() => deleteEmployeeDetails(_id)}
              className="mr-2 text-xl cursor-pointer"
            />

            <label for="edit-employee-modal">
              <BiEdit
                onClick={() => setEditEmployeDetails(singleDetails)}
                className="mr-2 text-xl cursor-pointer"
              />
            </label>
          </span>
          <h2 className="text-lg font-bold">{fullName}</h2>
          <p className="py-2">{designation}</p>
          <hr className="" />
          <p className="flex items-center text-sm py-2">
            <HiOutlineMail className="text-green-400 mr-1" />
            {employeEmail}
          </p>
          <p className="flex items-center text-sm">
            <MdOutlineLocationOn className="text-green-400 mr-1" />
            {location}
          </p>
          <BsArrowRightCircleFill
            onClick={() => showRployeeDetail(_id)}
            className="absolute bottom-3 right-3 text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AllEmployees;
