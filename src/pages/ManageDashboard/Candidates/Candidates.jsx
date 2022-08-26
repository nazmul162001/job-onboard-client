import { useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import useCandidate from "../../../Hooks/useCandidate";
import useTitle from "../../../Hooks/useTitle";
import Candidate from "./Candidate";
import "./CandidateCss/Candidate.css";
import CandidatesMailModal from "./CandidatesMailModal";
import TaskModal from "./TaskModal";
const Candidates = () => {
  useTitle("Candidates");
  const [mail, setMail] = useState(null);
  const { getApplicants, isLoading } = useCandidate();
  const [applicantData, setApplicantData] = useState(null);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5 h-screen">
      <div className="title my-2 mb-6">
        <h3 className="text-lg md:text-2xl font-semibold">Manage Candidates</h3>
        <span>
          You can manage all the Candidates which are applied your jobs
        </span>
      </div>
      {getApplicants?.length > 0 ? (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b bg-primary">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Candidates
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Applied For
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Resume/Link
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Task
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
                        setApplicantData={setApplicantData}
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
              Not Candidates yet.
            </h2>
          </div>
        </>
      )}

      {applicantData && (
        <TaskModal
          applicantData={applicantData}
          setApplicantData={setApplicantData}
        />
      )}
    </div>
  );
};

export default Candidates;
