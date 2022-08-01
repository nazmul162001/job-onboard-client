import React from "react";
import { HiUserAdd } from "react-icons/hi";
const Employers = () => {
  return (
    <section>
      {/* Modal for add employeers */}
      <div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Add Employee</h3>
            <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div class="modal-action">
              <label for="my-modal-6" class="btn">
                Add
              </label>
            </div>
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
