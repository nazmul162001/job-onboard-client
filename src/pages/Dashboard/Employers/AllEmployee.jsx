import React from "react";
import "./EmployersCss/Employers.css";
const AllEmployee = ({ employe }) => {
  const { id, name, location, email } = employe;

  return (
    <div>
      <div class="empoyeeContainer h-60 bg-base-100 shadow-md rounded-md p-2">
        <input type="checkbox" className="" />
        <div class="text-center">
          <div class="avatar placeholder mx-auto mb-4 ">
            <div class=" bg-cyan-600 text-white font-bold rounded-full w-32 avaterInfo">
              <span class="text-3xl">{name.slice(0, 1)}</span>
            </div>
          </div>
          <p class=" text-indigo-600">{name}</p>
        </div>
        <div className="employeInfo ml-4">
          <input type="radio" name="" id="" />
          <div className="mt-24">
            <p>{name}</p>
            <p>{id}</p>
            <hr />
            <p>{email}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployee;
