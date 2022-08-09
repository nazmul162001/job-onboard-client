import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";
import EditEmployeeModal from "./EditEmployeeModal";
import "./EmployeeCss/Employee.css";
const EmployeesRoot = () => {
  const [allEmployeDetails, setAllEmployeDetails] = useState([]);
  const [editEmployeDetails, setEditEmployeDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`${BASE_API}/getEmployees`)
      .then((result) => setAllEmployeDetails(result.data));
  }, []);

  const deleteEmployeeDetails = (employeId) => {
    console.log(employeId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `${BASE_API}/deleteEmployeDetails/${employeId}`;
        fetch(url, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              Swal.fire("Deleted!", "Delete Successfully.", "success");
              const remaining = allEmployeDetails.filter(
                (data) => data._id !== employeId
              );
              setAllEmployeDetails(remaining);
            }
          });
      }
    });
  };

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
          <AllEmployees
            key={singleDetails._id}
            singleDetails={singleDetails}
            setEditEmployeDetails={setEditEmployeDetails}
            deleteEmployeeDetails={deleteEmployeeDetails}
          />
        ))}
      </div>
      {editEmployeDetails && (
        <EditEmployeeModal editEmployeDetails={editEmployeDetails} />
      )}
    </section>
  );
};

export default EmployeesRoot;
