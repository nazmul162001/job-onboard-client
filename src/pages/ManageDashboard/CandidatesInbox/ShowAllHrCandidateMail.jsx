import React from "react";

const ShowAllHrCandidateMail = ({ candidate }) => {
  const { candidateName, candidateMail, mailSubject, mailMessage } = candidate;

  return (
    <div>
      <div className="hrAllCandidatesContainer">
        <div className="hrAllCandidateName border-r-4 border-gray-300">
          <div className="nameAvater flex items-center cursor-pointer">
            <div class="avatar placeholder m-2">
              <div class="bg-primary text-white font-bold rounded-full w-12">
                <span>{candidateName.slice(0, 1)}</span>
              </div>
            </div>
            <h4 className="font-bold">{candidateName}</h4>
          </div>
        </div>

        <div className="hrAllCandidateInfo">
          <p>{mailSubject}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowAllHrCandidateMail;
