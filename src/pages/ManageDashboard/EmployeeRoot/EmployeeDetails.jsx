import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_API } from "../../../config";
const EmployeeDetails = () => {
  const { detailsId } = useParams();

  const [singleDetails, setSingleDetails] = useState([]);
  useEffect(() => {
    const url = `${BASE_API}/getEmployees/${detailsId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleDetails(data));
  }, [detailsId, setSingleDetails]);
  const {
    fullName,
    employeId,
    employeEmail,
    designation,
    joiningDate,
    bloodGroup,
    location,
    phoneNumber,
    age,
    gender,
    photoLink,
    additionInfo,
  } = singleDetails;
  return (
    <div>
      <div className=" border-b-2 border-cyan-600 py-3">
        <h2 className="text-center text-2xl font-bold ">
          <span className="text-5xl font-serif text-primary">
            {fullName?.slice(0, 1)}
          </span>
          {fullName?.slice(1, 80)}
        </h2>
      </div>

      {/* .employeeAllDetails {
  display: grid;
  grid-template-columns: 30% 60%;
  gap: 1rem;
} */}

      <div className="employeeAllDetails my-10 ">
        <div className="text-center">
          <div class="avatar mx-auto border-4 border-primary p-3 rounded-xl bg-base-300 ">
            <div class=" w-60 rounded-xl">
              <img className="max-w-full" src={photoLink} alt="" />
            </div>
          </div>

          <h2 className="mt-4 font-bold text-xl">{fullName}</h2>
          <p className="mt-4 font-bold text-xl">ID: {employeId}</p>
        </div>
        <div className="border border-slate-300 rounded-lg  p-4">
          <h2 className="text-xl mb-4 font-bold">Work Information</h2>
          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Employe ID</span>

            <span>{employeId}</span>
          </div>
          <hr />
          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Name</span>

            <span>{fullName}</span>
          </div>
          <hr />

          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Designation</span>

            <span>{designation}</span>
          </div>
          <hr />
          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Email</span>

            <span>{employeEmail}</span>
          </div>
          <hr />
          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Contact Number</span>

            <span>{phoneNumber}</span>
          </div>
          <hr />
          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Age</span>

            <span>{age}</span>
          </div>
          <hr />
          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Gender</span>

            <span>{gender}</span>
          </div>
          <hr />
          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Location</span>

            <span>{location}</span>
          </div>
          <hr />
          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Date Of Joining</span>

            <span>{joiningDate}</span>
          </div>
          <hr />

          <div className="flex lg:flex-row md:flex-row gap-3 flex-col justify-between px-4 mb-4">
            <span className="font-bold">Blood Groub</span>

            <span>{bloodGroup}</span>
          </div>
          <hr />

          <div className=" ">
            <span className="font-bold text-center mb-4">
              Additional Information
            </span>

            <p>{additionInfo}</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
