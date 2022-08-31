import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Candidate = ({ applicant, index, setApplicantData, status }) => {
  const navigate = useNavigate();
  const { _id, displayName, email } = applicant;

  return (
    <tr className="bg-base-100 border-b transition duration-300 ease-in-out">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {index + 1}
      </td>

      <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
        <div>
          <div className="font-normal">{displayName}</div>
          <div className="text-sm font-semibold">{email}</div>
        </div>
      </td>

      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap">
        {applicant.jobTitle}
        <br />
        <span className="badge badge-ghost ">{applicant.category}</span>
      </td>

      <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold">{applicant.number}</div>
      </td>

      <td className="text-sm font-light px-14 py-4 whitespace-nowrap">
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
      <span onClick={() => navigate(`mail/${_id}`)}>
          <button className="btn btn-outline btn-xs mt-1 capitalize">
            Send Mail
          </button>
        </span>
      </td>
      <td>
        <span onClick={() => navigate(`${_id}`)}>
          <button className="btn btn-outline btn-xs mt-1 capitalize">
            See Details
          </button>
        </span>
      </td>
    </tr>
  );
};

export default Candidate;
