import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { BASE_API } from "../../../config";
const DeleteEployee = ({ deleteDetails, allEmployeDetails }) => {
  const deleteEmployeDetails = (id) => {
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
              Swal.fire("Success", "Delete Successfully");
              const remaining = allEmployeDetails.filter(
                (data) => data._id !== id
              );
              deleteDetails(remaining);
            }
          });
        //   Swal.fire(
        //     'Deleted!',
        //     'Delete Successfully',
        //     'success'
        //   )
      }
    });
    console.log(id);
  };
  return (
    <div>
      <RiDeleteBin2Line
        onClick={() => deleteEmployeDetails(deleteDetails._id)}
        className="mr-2 text-xl cursor-pointer"
      />
    </div>
  );
};

export default DeleteEployee;
