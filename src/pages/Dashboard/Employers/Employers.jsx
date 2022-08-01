import React from "react";
import { HiUserAdd } from "react-icons/hi";
const Employers = () => {
  return (
    <section>
      <div className="titleAndAdd flex justify-between p-4">
        <span></span>
        <h2 className="text-xl text-center font-bold">Employees</h2>
        <button className="addEmploye flex items-center bg-base-300 py-1 px-2 rounded-md border border-l-stone-300">
          <HiUserAdd />
          Add Employee
        </button>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default Employers;
