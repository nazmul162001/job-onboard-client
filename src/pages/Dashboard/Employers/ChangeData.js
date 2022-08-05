import React from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
const ChangeData = ({ employeDetails }) => {
  const { firstName, lastName, emailAddress, location } = employeDetails;
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
            <form className="mx-auto">
              <label class="input-group mb-4">
                <span>firstName</span>
                <input
                  type="text"
                  defaultValue={firstName}
                  class="input input-bordered"
                />
              </label>
              <label class="input-group mb-4">
                <span>lastName</span>
                <input
                  type="text"
                  defaultValue={lastName}
                  class="input input-bordered"
                />
              </label>
              <label class="input-group mb-4">
                <span className="pr-[3.1rem]">Email</span>
                <input
                  type="text"
                  defaultValue={emailAddress}
                  class="input input-bordered"
                />
              </label>
              <label class="input-group mb-4">
                <span className="pr-6">Location</span>
                <input
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
