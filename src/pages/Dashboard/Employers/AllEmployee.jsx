import { AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import "./EmployersCss/Employers.css";
const AllEmployee = ({ employe, showEmployData, deleteDetails }) => {
  const { _id, firstName, lastName, emailAddress, location } = employe;

  return (
    <div>
      {/* Employe details container section start */}
      <div class="empoyeeContainer h-60 bg-base-100 shadow-md rounded-md p-2 relative cursor-pointer">
        {/* <input type="checkbox " className="checkbox " /> */}

        <div class="text-center">
          <div class="avatar placeholder mx-auto mb-4 ">
            <div class=" bg-cyan-600 text-white font-bold rounded-full w-32 avaterInfo">
              <span class="text-3xl">{firstName.slice(0, 1)}</span>
            </div>
          </div>
          <p class=" text-indigo-600">
            <span>{firstName}</span> {lastName}
          </p>
        </div>
        <div className="employeInfo p-2">
          <div className="flex justify-between">
            <AiOutlineDelete
              onClick={() => deleteDetails(_id)}
              className="editBtn cursor-pointer text-xl"
            />
            <label className="" for="my-modal-3">
              <FiEdit
                onClick={() => showEmployData(employe)}
                className="editBtn cursor-pointer text-xl"
              />
            </label>
          </div>

          <div className="mt-20">
            <p>
              <span>{firstName}</span> {lastName}
            </p>

            <hr />
            <p className="fontInfo py-1 flex items-center text-xs">
              <AiOutlineMail className="mr-3" />
              {emailAddress}
            </p>
            <p className="fontInfo py-1 flex items-center text-xs">
              <MdLocationOn className="mr-3" />
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployee;
