import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import { CgProfile, CgMail, CgPhone, CgCalendar, CgCircleci } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';
import { FaLinkedin, FaLink } from 'react-icons/fa';


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
    <div className="h-screen">
      <div className=" border-b-2 border-primary py-3">
        <h2 className="text-center text-xl md:text-2xl font-semibold ">
          Candidate's Information
        </h2>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-12 my-10 px-1 md:px-10">

        <div className="order-1">
          <div className='shadow-lg text-center p-5 space-y-4 rounded-lg'>

            <div class="avatar py-2 mx-auto relative">

              <div class="w-20 ring-2 rounded-full ">
                {candidate?.profileUrl ? (
                  <img src={candidate?.profileUrl} alt="candidate" />
                ) : (
                  <img src='https://i.ibb.co/xY0rfV4/avatar.jpg' alt="demoCandidateImg" />
                )}
              </div>
            </div>


            <div className="flex gap-3 px-10">
              <div>
                <CgProfile size={40} />
              </div>
              <div className="text-start">
                <h1 className="font-bold text-primary">Candidate Name</h1>
                {candidate?.displayName}
              </div>
            </div>
            <div className="flex gap-3 px-10">
              <div>
                <CgMail size={40} />
              </div>
              <div className="text-start">
                <h1 className="font-bold text-primary">Candidate Email</h1>
                {candidate?.email}
              </div>
            </div>
            <div className="flex gap-3 px-10">
              <div>
                <CgPhone size={40} />
              </div>
              <div className="text-start">
                <h1 className="font-bold text-primary">Candidate Number</h1>
                {candidate?.number}
              </div>
            </div>
            <div className="flex gap-3 px-10">
              <div>
                <CgCalendar size={40} />
              </div>
              <div className="text-start">
                <h1 className="font-bold text-primary">Applied date</h1>
                {candidate?.appliedDate}
              </div>
            </div>
            <div className="flex gap-3 px-10">
              <div>
                <CgCircleci size={40} />
              </div>
              <div className="text-start">
                <h1 className="font-bold text-primary">Job-Title</h1>
                {candidate?.jobTitle}
              </div>
            </div>
          </div>
        </div>


        <div className="order-1 mt-10 text-center">
          <h2 className="font-bold text-primary text-xl mb-2">CoverLetter</h2>
          <textarea className="textarea textarea-bordered w-full rounded pb-28" disabled>{candidate?.coverLetter}</textarea>

          <div className="flex justify-center gap-5 mt-10">
            <div className="grid justify-items-center">
              <a
                href={candidate?.resume}
                target="_blank"
                rel="noreferrer"
              >
                <ImProfile size={35} />
              </a>
              <h1 className="text-primary mt-2">Resume</h1>
            </div>

            <div className="grid justify-items-center">
              <a
                href={candidate?.portfolioUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaLink size={35} />
              </a>

              <h1 className="text-primary mt-2">Portfolio</h1>
            </div>

            <div className="grid justify-items-center">
              <a
                href={candidate?.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={35} />
              </a>

              <h1 className="text-primary mt-2">Linkedin</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleCandidates;
