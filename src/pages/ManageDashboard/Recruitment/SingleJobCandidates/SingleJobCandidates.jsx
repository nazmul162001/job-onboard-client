import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAppliedCandidates from '../../../../Hooks/useAppliedCandidates';
import useJob from '../../../../Hooks/useJob';
import RecruitmentRow from '../RecruitmentRow';

const SingleJobCandidates = () => {
  const { jobId } = useParams();
  const [job] = useJob(jobId);
  const navigate = useNavigate()

  const { data, refetch } = useAppliedCandidates(job)

  const countData = data?.data;
  // console.log(countData)

  const singleCandidates = (id) => {
    navigate(`/dashboard/recruitment/mail/${id}`);
  };

  return (
    <div>
      <h1>Hello {jobId}</h1>
      <h1>{job?.jobTitle} {countData?.length}</h1>

      {/* Candidate Info  */}
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
                      Status
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
                      Send Mail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {countData?.map((applicant, index) => (
                    <RecruitmentRow
                      applicant={applicant}
                      index={index}
                      refetch={refetch}
                      singleCandidates={singleCandidates}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SingleJobCandidates;