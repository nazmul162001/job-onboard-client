import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import { FaUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { HiBriefcase } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { FaLinkedin, FaLink } from "react-icons/fa";

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
          <div className="shadow-lg text-center p-5 space-y-4 rounded-lg">
            <div className="avatar py-2 mx-auto flex-col justify-center items-center">
              <div className="w-20 ring-2 rounded-full ">
                {candidate?.profileUrl ? (
                  <img src={candidate?.profileUrl} alt="candidate" />
                ) : (
                  <img
                    src="https://i.ibb.co/xY0rfV4/avatar.jpg"
                    alt="demoCandidateImg"
                  />
                )}
              </div>
              <h2 className="pt-4 text-xl">{candidate?.displayName}</h2>
              <h2 className="text-sm">{candidate?.jobTitle}</h2>
            </div>

            <div className="flex justify-start items-center gap-3 px-10">
              <div className="bg-blue-200 opacity-50 text-white p-3 rounded-md">
                <FaUser size={20} className="text-black" />
              </div>
              <div className="text-start">
                <h1>Full Name</h1>
                <span className="font-semibold">{candidate?.displayName}</span>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 px-10">
              <div className="bg-blue-200 opacity-50 text-white p-3 rounded-md">
                <BiMessageSquareDetail size={20} className="text-black" />
              </div>
              <div className="text-start">
                <h1>Email Address</h1>
                <span className="font-semibold">{candidate?.email}</span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 px-10">
              <div className="bg-blue-200 opacity-50 text-white p-3 rounded-md">
                <MdCall size={20} className="text-black" />
              </div>
              <div className="text-start">
                <h1>Phone Number</h1>
                <span className="font-semibold">{candidate?.number}</span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 px-10">
              <div className="bg-blue-200 opacity-50 text-white p-3 rounded-md">
                <BsCalendarDate size={20} className="text-black" />
              </div>
              <div className="text-start">
                <h1>Date of Application</h1>
                <span className="font-semibold">
                  {candidate?.appliedDate.slice(0, 10)}
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3 px-10">
              <div className="bg-blue-200 opacity-50 text-white p-3 rounded-md">
                <HiBriefcase size={20} className="text-black" />
              </div>
              <div className="text-start">
                <h1>Job Title</h1>
                <span className="font-semibold">{candidate?.jobTitle}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 mt-10">
          <div class="tabs">
            <a href="/" class="tab tab-lg tab-bordered tab-active">
              Application
            </a>
            <a href="/" class="tab tab-lg tab-bordered">
              Resume
            </a>
            <a href="/" class="tab tab-lg tab-bordered">
              Evaluation
            </a>
          </div>
          <h2 className="font-bold text-xl mb-2">CoverLetter</h2>
          <span className="">{candidate?.coverLetter}</span>

          <div className="flex justify-center gap-5 mt-10">
            <div className="grid justify-items-center">
              <a href={candidate?.resume} target="_blank" rel="noreferrer">
                <ImProfile size={20} />
              </a>
              <h1 className="text-primary mt-2">Resume</h1>
            </div>

            <div className="grid justify-items-center">
              <a
                href={candidate?.portfolioUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaLink size={20} />
              </a>

              <h1 className="text-primary mt-2">Portfolio</h1>
            </div>

            <div className="grid justify-items-center">
              <a href={candidate?.linkedinUrl} target="_blank" rel="noreferrer">
                <FaLinkedin size={20} />
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
