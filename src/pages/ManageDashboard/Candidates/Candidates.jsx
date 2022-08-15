import { useQuery } from "@tanstack/react-query";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import CandidatesMailModal from "./CandidatesMailModal";
import { useState } from "react";
import Candidate from "./Candidate";

const Candidates = () => {
  useTitle("Candidates");
  const [mail, setMail] = useState(null);
  const { data: getApplicants, isLoading } = useQuery(["getApplicants"], () =>
    fetch(`${BASE_API}/applicants/show?email=${auth?.currentUser?.email}`, {
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
    <div className="p-5">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Candidates</h3>
        <span>
          You can manage all the Candidates which are applied your jobs
        </span>
      </div>
      {getApplicants?.length > 0 ? (
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
                    {getApplicants?.map((applicant, index) => (
                      <Candidate
                        applicant={applicant}
                        index={index}
                        key={applicant._id}
                        setMail={setMail}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {mail && <CandidatesMailModal mail={mail}></CandidatesMailModal>}
        </div>
      ) : (
        <>
          <div className="grid place-items-center py-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS0g4KI9aJhPYuJLsGMoKRd603nvd0Ia9YxxJ8kKw93PUkrhNx6LuIIQXM05YKdIL7Zc&usqp=CAU"
              alt="order-not-found"
            />
            <h2 className="text-2xl py-3 font-semibold text-center">
              Not Posted Jobs yet.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Candidates;
