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
  const { getAllEmployeDetails } = allEmployeDetails;
  useEffect(() => {
    axios
      .get(`${BASE_API}/getEmployees`)
      .then((result) => setAllEmployeDetails(result.data));
  }, []);
  console.log(allEmployeDetails);
  // const [user] = useAuthState(auth);
  // console.log(user);
  // if (user) {
  //   fetch(`${BASE_API}/getEmployees?userEmail=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  // if (user) {
  //       fetch(`http://localhost:5000/myItems?userEmail=${user.email}`, {
  //         method: "GET",
  //         headers: {
  //           "content-type": "application/json",
  //           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       })
  //         .then((res) => {
  //           if (res.status === 401 || res.status === 403) {
  //             signOut(auth);
  //             localStorage.removeItem("accessToken");
  //             navigate("/");
  //           }
  //           return res.json();
  //         })
  //         .then((data) => {
  //           setBookings(data);
  //         });
  //     }
  //   }, [user, navigate]);

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
              const remaining = getAllEmployeDetails.filter(
                (data) => data._id !== id
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
        {getAllEmployeDetails?.map((singleDetails) => (
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
