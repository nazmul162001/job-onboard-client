import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import { fetchAllEmployeDetails } from "../../../Features/AllEmployeDetails/AllEmployeDetailsSlice";
import useTitle from "../../../Hooks/useTitle";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";
import EditEmployeeModal from "./EditEmployeeModal";
import "./EmployeeCss/Employee.css";

const EmployeesRoot = () => {
  useTitle("Employees");
  // const allEmployeDetails = data?.data;
  const [editEmployeDetails, setEditEmployeDetails] = useState(null);
  const { isLoading, allEmployeDetails } = useSelector(
    (state) => state.allEmployeDetails
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEmployeDetails());
  }, [dispatch]);
  // const { data, isLoading, refetch } = useEmployeeInfo();
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
        fetch(`${BASE_API}/applicants/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result?.acknowledged) {
              fetch(`${BASE_API}/deleteEmployeDetails/${id}`, {
                method: "DELETE",
                headers: {
                  "content-type": "application/json",
                },
              })
                .then((res) => res.json())
                .then((result) => {
                  if (result?.deletedCount) {
                    Swal.fire("Deleted!", "Delete Successfully.", "success");
                    // refetch();
                  }
                });
            }
          });
      }
    });
  };
  // const forModal =()=>{
  //   if(removeModal){}
  // }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="p-5 lg:h-screen bg-base-100">
      <div className="flex flex-col md:flex-row md:flex justify-between items-center border-b-2 border-cyan-600 py-3 mb-3">
        <div className="title my-2 mb-6">
          <h3 className="text-lg md:text-2xl font-semibold">
            Manage All Employees
          </h3>
          <span>You can manage all the employees and see there details.</span>
        </div>
        <AddEmployee
          // refetch={refetch}
          setEditEmployeDetails={setEditEmployeDetails}
        />
      </div>

      {allEmployeDetails.length === 0 ? (
        <>
          <div className="grid place-items-center py-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS0g4KI9aJhPYuJLsGMoKRd603nvd0Ia9YxxJ8kKw93PUkrhNx6LuIIQXM05YKdIL7Zc&usqp=CAU"
              alt="order-not-found"
            />
            <h2 className="text-2xl py-3 font-semibold text-center">
              No Employee Found
            </h2>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}

      {editEmployeDetails && (
        <EditEmployeeModal
          editEmployeDetails={editEmployeDetails}
          setEditEmployeDetails={setEditEmployeDetails}
          // refetch={refetch}
        />
      )}
    </section>
  );
};

export default EmployeesRoot;
