import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import "./EmployersCss/Employers.css";
const AllEmployee = ({ employe }) => {
  const checkbox = () => {
    alert("Click");
  };
  const { id, name, location, email } = employe;
  return (
    <div>
      {/* Employe details with open modal */}
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="form-control">
            <label class="input-group">
              <span>Email</span>
              <input
                type="text"
                defaultValue={name}
                class="input input-bordered"
              />
            </label>
          </div>
        </div>
      </div>
      {/* Finished */}
      {/* Employe details container section start */}
      <div class="empoyeeContainer h-60 bg-base-100 shadow-md rounded-md p-2 relative cursor-pointer">
        <input type="checkbox" className="checkbox " onClick={checkbox}/>
        <div class="text-center">
          <div class="avatar placeholder mx-auto mb-4 ">
            <div class=" bg-cyan-600 text-white font-bold rounded-full w-32 avaterInfo">
              <span class="text-3xl">{name.slice(0, 1)}</span>
            </div>
          </div>
          <p class=" text-indigo-600">{name}</p>
        </div>
        <div className="employeInfo p-2">
          <label for="my-modal-3">
            <FiEdit className="editBtn cursor-pointer" />
          </label>

          <div className="mt-20">
            <p>{name}</p>
            <p>{id}</p>
            <hr />
            <p className="fontInfo py-1 flex items-center text-xs">
              <AiOutlineMail className="mr-3" />
              {email}
            </p>
            <p className="fontInfo py-1 flex items-center text-xs">
              <MdLocationOn className="mr-3" />
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployee;
