import React from "react";
import useTitle from "../../../Hooks/useTitle";
import RecruitmentCard from "./RecruitmentCard";
import useHrJob from "../../../Hooks/useHrJob";

const Recruitment = () => {
  useTitle("Recruitment");
  const [hrJobs] = useHrJob()

  return (
    <div className="p-5">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Posted Jobs</h3>
        <span>You can manage all the jobs which are posted by you</span>
      </div>
      {hrJobs?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-8">
          {hrJobs?.map((job, index) => (
            <RecruitmentCard job={job} index={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid place-items-center py-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyS0g4KI9aJhPYuJLsGMoKRd603nvd0Ia9YxxJ8kKw93PUkrhNx6LuIIQXM05YKdIL7Zc&usqp=CAU"
              alt="order-not-found"
            />
            <h2 className="text-2xl py-3 font-semibold text-center">
              Not Posted Jobs yet.
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Recruitment;
