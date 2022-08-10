import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";
import { FaRegAddressBook } from "react-icons/fa";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";

const Candidates = () => {
  useTitle("Candidates");
  const { data: getApplicants, isLoading } = useQuery(["getApplicants"], () =>
    fetch(`${BASE_API}/applicants/count?email=${auth?.currentUser?.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b bg-primary">
                <tr>
                  <th scope="col"></th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    Candidates
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    Applied For
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    Resume/Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {getApplicants.map((applicant, index) => (
                  <tr
                    key={index}
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <div>
                        <div class="font-normal">
                          {applicant.firstName} ({applicant.lastName})
                        </div>
                        <div class="text-sm opacity-70 font-semibold">
                          {applicant.email}
                        </div>
                      </div>
                    </td>

                    <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                      {applicant.jobTitle}
                      <br />
                      <span class="badge badge-ghost ">
                        {applicant.category}
                      </span>
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <div class="text-sm opacity-70 font-semibold">
                        {applicant.phoneNumber}
                      </div>
                    </td>

                    <td class="text-sm text-gray-900 font-light px-14 py-4 whitespace-nowrap">
                      <Link
                        to={applicant.resume}
                        target="_blank"
                        title="Resume/Link"
                      >
                        {" "}
                        <FaRegAddressBook size={25} />{" "}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
