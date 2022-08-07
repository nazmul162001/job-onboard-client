import React from "react";

const AllEmployees = ({ employee }) => {
  const { name, designation, email, location } = employee;
  return (
    <div>
      <div className="employesContainer">
      <div class="border-2 border-primary p-2 text-center rounded-md ">
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
      </div>
      <div className="basicInfo">
      <h2 className="text-lg font-bold text-blue-900">{name}</h2>
      <p>{designation}</p>
      <p>{email}</p>
      <p>{location}</p>
      </div>
      </div>
    </div>
  );
};

export default AllEmployees;
