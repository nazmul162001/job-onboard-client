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
                {getApplicants?.map((applicant, index) => (
                  <Candidate applicant={applicant} index={index} key={applicant._id} setMail={setMail}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {mail && <CandidatesMailModal mail={mail}></CandidatesMailModal>}
    </div>
  );
};

export default Candidates;
