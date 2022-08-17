import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FiEdit } from "react-icons/fi";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";

const CompanyDetails = () => {
  const { data: result, isLoading } = useQuery(["companyInfo"], () =>
    fetch(`${BASE_API}/users?uid=${auth?.currentUser?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading)
    return (
      <div className="md:p-80">
        <Loading />
      </div>
    );

  const { companyName, displayName, email, number, role } = result?.result;

  return (
    <div className="py-6 w-100">
      <div className="shadow-lg hover:shadow-2xl border-l-2 border-primary relative">
        <div className="p-5 space-y-5">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <FiEdit className="text-white" />
          </label>
          <div className="space-y-2">
            <div className="">
              <h2 className="text-sm font-semibold">{companyName}</h2>
              <br />
              <p className="text-lg md:text-xl lg:text-xl font-bold ">
                {displayName}
              </p>
            </div>
          </div>
          <p className="flex ">{email} </p>
          <div className="flex flex-col  space-y-1">
            <span className="badge text-white">{role}</span>
          </div>
          <div className="flex flex-col  space-y-1">
            <span>{number}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
