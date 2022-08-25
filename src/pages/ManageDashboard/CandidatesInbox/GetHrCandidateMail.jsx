import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import ShowAllHrCandidateMail from "./ShowAllHrCandidateMail";
const GetHrCandidateMail = () => {
  const { data, isLoading, refetch } = useQuery(["hrCanditates"], () =>
    axios.get(`${BASE_API}/hrCanditates?email=${auth?.currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  if (isLoading) {
    return <Loading />;
  }
  const candidates = data?.data;

  return (
    <div>
      {candidates?.map((candidate) => (
        <ShowAllHrCandidateMail key={candidate._id} candidate={candidate} />
      ))}
    </div>
  );
};

export default GetHrCandidateMail;
