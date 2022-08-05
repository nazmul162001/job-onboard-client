import React from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";
const ChangeData = ({ employeDetails }) => {
  const { _id, firstName, lastName, emailAddress, location } = employeDetails;
  console.log(employeDetails);

  const reAdd = (e) => {
    e.preventDefault();

    const updateFirstName = e.target.editFirstName.value;
    const updateLastName = e.target.editLastName.value;
    const updateEmailAdderess = e.target.editEmailAddress.value;
    const updateLocation = e.target.editLocation.value;

    const updateData = {
      firstName: updateFirstName,
      lastName: updateLastName,
      emailAddress: updateEmailAdderess,
      location: updateLocation,
    };
    // console.log(firstName, lastName, emailAddress, location);
    const id = _id;
    if (id) {
      fetch(`${BASE_API}/editEployee/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateData),
        // const { id, name, location, email } = employe;
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            Swal.fire({
              text: "Add Done",
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
    }
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="form-control ">
            <form className="mx-auto" onSubmit={reAdd}>
              <label class="input-group mb-4">
                <span>firstName</span>
                <input
                  name="editFirstName"
                  type="text"
                  defaultValue={firstName}
                  class="input input-bordered"
                />
              </label>
              <label class="input-group mb-4">
                <span>lastName</span>
                <input
                  name="editLastName"
                  type="text"
                  defaultValue={lastName}
                  class="input input-bordered"
                />
              </label>
              <label class="input-group mb-4">
                <span className="pr-[3.1rem]">Email</span>
                <input
                  name="editEmailAddress"
                  type="text"
                  defaultValue={emailAddress}
                  class="input input-bordered"
                />
              </label>
              <label class="input-group mb-4">
                <span className="pr-6">Location</span>
                <input
                  name="editLocation"
                  type="text"
                  defaultValue={location}
                  class="input input-bordered"
                />
              </label>
              <button
                type="submit"
                className=" w-full flex items-center justify-center mt-6 bg-primary py-2 px-8 rounded-2xl font-bold text-white cursor-pointer"
              >
                <BiMessageSquareEdit /> Readd
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeData;
