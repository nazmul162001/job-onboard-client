import React from "react";
import { BsShieldPlus } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";
import AllEmployee from "./AllEmployee";
const Employers = () => {
  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  const addEmployeData = (e) => {
    e.preventDefault();

    const firstName = e.target.lastName.value;
    const lastName = e.target.lastName.value;
    const emailAddress = e.target.emailAddress.value;

    fetch(`${BASE_API}/employees`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        emailAddress,
      }),
      // const { id, name, location, email } = employe;
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            text: "Add Employee Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          e.reset();
        } else {
          Swal.fire({
            text: `Opps!`,
            icon: "error",
            confirmButtonText: "Plz Try Again",
          });
        }
      });
  };

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
              <form onSubmit={addEmployeData}>
                <label class="input-group input-group-vertical mb-5">
                  <span>First Name</span>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    class="input input-bordered"
                  />
                </label>
                <label class="input-group input-group-vertical mb-5">
                  <span>Last Name</span>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    class="input input-bordered"
                  />
                </label>
                <label class="input-group input-group-vertical mb-5">
                  <span>Official Email</span>
                  <input
                    name="emailAddress"
                    type="email"
                    placeholder="Official Email"
                    class="input input-bordered"
                  />
                </label>
                <label class="input-group input-group-vertical  ">
                  <span>Formal Picture</span>
                  <input
                    name="fPicture"
                    className="w-full"
                    type="file"
                    placeholder="Formal Picture"
                    class="input input-bordered"
                  />
                </label>

                <button
                  type="submit"
                  className=" w-full flex items-center justify-center mt-6 bg-primary py-2 px-8 rounded-2xl font-bold text-white cursor-pointer"
                >
                  <BsShieldPlus /> Add
                </button>
              </form>
            </div>
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
