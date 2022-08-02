import React from "react";

const AllEmployee = ({ employe }) => {
  const { id, name, location, email } = employe;

  return (
    <div>
      <div class="card h-60 bg-base-100 shadow-md text-center">
        <div class="card-body">
          <div class="avatar placeholder mx-auto">
            <div class=" bg-cyan-600 text-white font-bold rounded-full w-32">
              <span class="text-3xl">{name.slice(0, 1)}</span>
            </div>
          </div>
          <p class="">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default AllEmployee;
