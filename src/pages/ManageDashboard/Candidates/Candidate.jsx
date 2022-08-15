import React from "react";
import { FaRegAddressBook } from "react-icons/fa";

const Candidate = ({ applicant, setMail, index }) => {
  const { firstName, lastName, email } = applicant;
  return (
    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>

      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div>
          <div class="font-normal">
            {firstName} {lastName}
          </div>
          <div class="text-sm font-semibold">
            <label
              htmlFor="candidate-modal"
              title="Click to send mail"
              onClick={() => setMail({ firstName, lastName, email })}
              className="cursor-pointer"
            >
              {email}
            </label>
          </div>
        </div>
      </td>

      <td class="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
        {applicant.jobTitle}
        <br />
        <span class="badge badge-ghost ">{applicant.category}</span>
      </td>

      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div class="text-sm opacity-70 font-semibold">
          {applicant.phoneNumber}
        </div>
      </td>

      <td class="text-sm text-gray-900 font-light px-14 py-4 whitespace-nowrap">
        <a
          title="Resume/Link"
          href={applicant.resume}
          target="_blank"
          rel="noreferrer"
        >
          <FaRegAddressBook size={25} />
        </a>
      </td>
    </tr>
  );
};

export default Candidate;
