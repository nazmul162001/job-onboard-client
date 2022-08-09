import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_API } from "../../../config";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";
import "./EmployeeCss/Employee.css";
const EmployeesRoot = () => {
  const [allEmployeDetails, setAllEmployeDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_API}/getEmployees`)
      .then((result) => setAllEmployeDetails(result.data));
  }, []);

  return (
    <section>
      <div className="flex justify-between items-center border-b-2 border-cyan-600 py-3">
        <span></span>
        <h2 className="text-center text-2xl font-bold ">
          <span className="text-5xl font-serif text-primary">E</span>mployees
        </h2>
        <AddEmployee />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
        {allEmployeDetails.map((singleDetails) => (
          <AllEmployees key={singleDetails._id} singleDetails={singleDetails} />
        ))}
      </div>
    </section>
  );
};

export default EmployeesRoot;
