import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Candidate = ({ applicant, index, setApplicantData }) => {
  const navigate = useNavigate();
  const { _id, displayName, email } = applicant;

  return (
    <tr class="bg-base-100 border-b transition duration-300 ease-in-out">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {index + 1}
      </td>

      <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
        <div>
          <div class="font-normal">{displayName}</div>
          <div class="text-sm font-semibold">
            <span
              onClick={() => navigate(`${_id}`)}
              className="cursor-pointer"
            >
              {email}
            </span>
          </div>
        </div>
      </td>

      <td class="text-sm font-normal px-6 py-4 whitespace-nowrap">
        {applicant.jobTitle}
        <br />
        <span class="badge badge-ghost ">{applicant.category}</span>
      </td>

      <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
        <div class="text-sm font-semibold">{applicant.number}</div>
      </td>

      <td class="text-sm font-light px-14 py-4 whitespace-nowrap">
        <a
          title="Resume/Link"
          href={applicant.resume}
          target="_blank"
          rel="noreferrer"
        >
          <FaRegAddressBook size={25} />
        </a>
      </td>
      <td>
        <label
          onClick={() => setApplicantData(applicant)}
          for="task-modal"
          className="taskBtn cursor-pointer"
        >
          Task
        </label>
      </td>
    </tr>
  );
};

export default Candidate;
