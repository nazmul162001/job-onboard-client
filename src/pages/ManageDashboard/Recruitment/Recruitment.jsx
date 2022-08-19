import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";
import auth from "../../../Auth/Firebase/Firebase.init";
import RecruitmentCard from "./RecruitmentCard";

const Recruitment = () => {
  useTitle("Recruitment");
  const [hrJobs, setGetJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_API}/jobs/hrJobs?email=${auth?.currentUser?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => setGetJobs(res.data));
  }, []);

  return (
    <div className="p-5">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Recruitment</h3>
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
