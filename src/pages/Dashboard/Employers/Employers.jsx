import React from "react";
import { BsShieldPlus } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
const Employers = () => {
  return (
    <section>
      {/* Modal for add employeers */}
      <div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg mb-2 text-center">Add Employee</h3>
            <div class="form-control">
              <label class="input-group input-group-vertical mb-5">
                <span>First Name</span>
                <input
                  type="text"
                  placeholder="First Name"
                  class="input input-bordered"
                />
              </label>
              <label class="input-group input-group-vertical mb-5">
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="input input-bordered"
                />
              </label>
              <label class="input-group input-group-vertical mb-5">
                <span>Official Email</span>
                <input
                  type="text"
                  placeholder="Official Email"
                  class="input input-bordered"
                />
              </label>
              <label class="input-group input-group-vertical  ">
                <span>Formal Picture</span>
                <input
                  className="w-full"
                  type="file"
                  placeholder="Formal Picture"
                  class="input input-bordered"
                />
              </label>
            </div>
            <label
              className="flex items-center justify-center mt-6 bg-primary py-2 px-8 rounded-2xl font-bold text-white cursor-pointer"
              for="my-modal-6 "
            >
              <BsShieldPlus /> Add
            </label>
          </div>
        </div>
      </div>
      {/* Employers section titile and add button */}
      <div className="titleAndAdd flex justify-between p-4">
        <span></span>
        <h2 className="text-xl text-center font-bold">Employees</h2>
        <label
          for="my-modal-6"
          className="addEmploye flex items-center bg-base-300 py-1 px-2 rounded-md border border-l-stone-300 cursor-pointer"
        >
          <HiUserAdd />
          Add Employee
        </label>
      </div>

      <div></div>
    </section>
  );
};

export default Employers;
