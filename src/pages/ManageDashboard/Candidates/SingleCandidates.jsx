import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";

const SingleCandidates = () => {
  const { candidatesID } = useParams();
  const { data, isLoading } = useQuery(["candidates"], () =>
    axios.get(`${BASE_API}/applicants/all/${candidatesID}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  const candidate = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Hello Single Candidates {candidate?._id}</h1>
      <h1>Candidate Name: {candidate?.displayName}</h1>
    </div>
  );
};

export default SingleCandidates;
