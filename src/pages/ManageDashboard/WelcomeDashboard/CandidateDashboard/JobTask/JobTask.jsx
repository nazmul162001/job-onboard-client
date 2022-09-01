import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../Components/Loading/Loading";
import { fetchAllTasks } from "../../../../../Features/AllTasks/AllTasksSlice";
import useTitle from "../../../../../Hooks/useTitle";
import AllJobTasks from "./AllJobTasks";
import "./JobTaskCss/JobTask.css";

const JobTask = () => {
  useTitle("Task");
  // const { data } = useJobTasks();

  // const allTasks = data?.data;

  const { isLoading, allTasks } = useSelector((state) => state.allTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="titleContainer flex flex-col text-center  py-5">
        <h2 className="bSectionTitle text-center text-2xl  font-bold ">
          My Task
        </h2>
        <span className="bg-[#895af6] w-24  h-1 mx-auto my-1"></span>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Company Name</th>
              <th>Task Name</th>
              <th>Task Date</th>
              <th>Task Time</th>
              <th>Task Details</th>
            </tr>
          </thead>
          <tbody>
            {allTasks?.map((task, index) => (
              <AllJobTasks task={task} index={index} key={task._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTask;
