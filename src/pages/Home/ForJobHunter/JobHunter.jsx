import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import hunterImgOne from "../../../assets/images/JobHunter/1.png";
import hunterImgTwo from "../../../assets/images/JobHunter/2.png";
import hunterImgTtree from "../../../assets/images/JobHunter/3.png";
import hunterImgFour from "../../../assets/images/JobHunter/4.png";
import "./JobHunter.css";
const JobHunter = () => {
  return (
    <section className="container mx-auto px-8 rounded-[40px] py-12 bg-base-300">
      <div className="titleContainer flex flex-col text-center  text-5xl  ">
        <h1 className="bSectionTitle text-center text-2xl md:text-4xl font-bold text-black ">
          For Job Seeker
        </h1>
        <span className="bg-[#895af6] w-40 h-1 mx-auto mt-4"></span>
      </div>
      <div className="jobHunterContainer grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-32 mt-32  ">
        <div className="jobHunterInfoContainer rounded-[10px] shadow-lg p-2 relative text-center">
          <div class="avatar hunterImg -mt-24">
            <div class="w-48 rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={hunterImgOne}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo mb-7">
            <h4 className="font-bold text-2xl">Easy To Apply Any Jobs</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
          <p className="goBtn">
            <BsArrowRightCircle className="SeekerIcon" />
          </p>
        </div>
        <div className="jobHunterInfoContainer rounded-[10px] shadow-lg p-2 relative text-center">
          <div class="avatar hunterImg -mt-24">
            <div class="w-48 rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={hunterImgTwo}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo mb-7">
            <h4 className="font-bold text-2xl">Build Up Strong Network</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
          <p className="goBtn">
            <BsArrowRightCircle className="SeekerIcon" />
          </p>
        </div>
        <div className="jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center">
          <div class="avatar hunterImg -mt-24">
            <div class="w-48  rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={hunterImgTtree}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo mb-7">
            <h4 className="font-bold text-2xl">Easy Interview Process</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
          <p className="goBtn">
            <BsArrowRightCircle className="SeekerIcon" />
          </p>
        </div>
        <div className="jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center">
          <div class="avatar hunterImg -mt-24">
            <div class="w-48  rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={hunterImgFour}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo mb-7">
            <h4 className="font-bold text-2xl">
              Get Your Dreem Job Successfully
            </h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
          <p className="goBtn">
            <BsArrowRightCircle className="SeekerIcon" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobHunter;
