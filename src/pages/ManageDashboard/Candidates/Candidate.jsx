import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import TaskModal from "./TaskModal";

const Candidate = ({ applicant, setMail, index }) => {
  const { displayName, email } = applicant;
  return (
    <tr class="bg-base-100 border-b transition duration-300 ease-in-out">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {index + 1}
      </td>

      <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
        <div>
          <div class="font-normal">{displayName}</div>
          <div class="text-sm font-semibold">
            <label
              htmlFor="candidate-modal"
              title="Click to send mail"
              onClick={() => setMail({ displayName, email })}
              className="cursor-pointer"
            >
              {email}
            </label>
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
      <td class="text-sm font-light px-14 py-4 whitespace-nowrap">
        <TaskModal applicant={applicant} />
      </td>
    </tr>
  );
};

export default Candidate;
