import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";
import EditEmployeeModal from "./EditEmployeeModal";
import "./EmployeeCss/Employee.css";
const EmployeesRoot = () => {
  const [editEmployeDetails, setEditEmployeDetails] = useState(null);
  const [allEmployeDetails, setAllEmployeeDetails] = useState([]);

  const { isLoading, refetch } = useQuery(["hrEmployees"], () => {
    fetch(`${BASE_API}/userEmployees?email=${auth?.currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllEmployeeDetails(data));
    console.log(allEmployeDetails);
  });

  if (isLoading) {
    <Loading />;
  }

  const deleteEmployeeDetails = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed && id) {
        const url = `${BASE_API}/deleteEmployeDetails/${id}`;

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
                (data) => data._id !== id
              );
              refetch();
              allEmployeDetails(remaining);
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
        <AddEmployee refetch={refetch} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
        {allEmployeDetails?.map((singleDetails) => (
          <AllEmployees
            key={singleDetails._id}
            singleDetails={singleDetails}
            setEditEmployeDetails={setEditEmployeDetails}
            deleteEmployeeDetails={deleteEmployeeDetails}
          />
        ))}
      </div>

      {editEmployeDetails && (
        <EditEmployeeModal
          editEmployeDetails={editEmployeDetails}
          setEditEmployeDetails={setEditEmployeDetails}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default EmployeesRoot;
