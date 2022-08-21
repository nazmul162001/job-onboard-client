import React, { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import useEmployeeInfo from "../../../Hooks/useEmployeeInfo";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";
import EditEmployeeModal from "./EditEmployeeModal";
import "./EmployeeCss/Employee.css";
const EmployeesRoot = () => {
  const [editEmployeDetails, setEditEmployeDetails] = useState(null);
  const { data, isLoading, refetch } = useEmployeeInfo();
  if (isLoading) {
    return <Loading />;
  }
  const allEmployeDetails = data?.data;
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
  // const forModal =()=>{
  //   if(removeModal){}
  // }

  return (
    <section>
      <div className="flex justify-between items-center border-b-2 border-cyan-600 py-2">
        <span></span>
        <h2 className="text-center text-xl font-bold ">
          <span className="text-5xl font-serif text-primary">E</span>mployees
        </h2>
        <AddEmployee refetch={refetch} />
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
          allEmployeDetails={allEmployeDetails}
          setEditEmployeDetails={setEditEmployeDetails}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default EmployeesRoot;
