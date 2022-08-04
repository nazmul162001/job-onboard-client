import React from "react";
import { BsShieldPlus } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import AllEmployee from "./AllEmployee";
const Employers = () => {
  const employees = [
    {
      id: 1,
      name: "Arifin Khan",
      email: "arifinkhan@gmail.com",
      location: "Dhaka Bangladesh",
      img: "",
    },
    {
      id: 2,
      name: "Shawon Mondol Gopal ",
      email: "shawon@gmail.com",
      location: "Dhaka Bangladesh",
      img: "",
    },
    {
      id: 3,
      name: "Nazmul Hasan",
      email: "nazmulhasan@gmail.com",
      location: "Dhaka Bangladesh",
      img: "",
    },
    {
      id: 4,
      name: "Toufiq Hasan Kiron",
      email: "kiron0@gmail.com",
      location: "Dhaka Bangladesh",
      img: "",
    },
    {
      id: 5,
      name: "Sajal Howlader",
      email: "sajal@gmail.com",
      location: "Dhaka Bangladesh",
      img: "",
    },
    {
      id: 6,
      name: "Emtiaz Hossain Emaon",
      email: "emtiazemaon@gmail.com",
      location: "Dhaka Bangladesh",
      img: "",
    },
  ];

  return (
    <section className="">
      {/* Modal for add employeers */}
      <div>
        <input type="checkbox" id="emoployee-modal" class="modal-toggle" />

        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg mb-2 text-center">Add Employee</h3>
            <label
              for="emoployee-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
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
              for="emoployee-modal"
              className="flex items-center justify-center mt-6 bg-primary py-2 px-8 rounded-2xl font-bold text-white cursor-pointer"
            >
              <BsShieldPlus /> Add
            </label>
          </div>
        </div>
      </div>
      {/* Employers section titile and add button */}
      <div className="titleAndAdd flex justify-between p-4 mb-6">
        <span></span>
        <h2 className="text-xl text-center font-bold border-b-4">Employees</h2>
        <label
          for="emoployee-modal"
          className="addEmploye flex items-center bg-base-300 py-1 px-2 rounded-md border border-l-stone-300 cursor-pointer"
        >
          <HiUserAdd />
          Add Employee
        </label>
      </div>

      <div className="allEmployes grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7">
        {employees.map((employe) => (
          <AllEmployee key={employe.id} employe={employe} />
        ))}
      </div>
    </section>
  );
};

export default Employers;
