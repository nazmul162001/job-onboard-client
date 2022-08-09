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
    email,
    designation,
    dateOfBirth,
    bloodGroup,
    location,
    phoneNumber,
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

      <div className="employeeAllDetails">
        <div>
          <img src={photoLink} alt="" />
          <h2>{fullName}</h2>
        </div>
        <div>
          <div className="flex flex-between">
            <span>Employe ID</span>
            <span>{employeId}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
