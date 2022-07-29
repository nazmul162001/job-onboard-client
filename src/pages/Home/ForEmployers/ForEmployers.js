import React from "react";

import employeImageOne from "../../../assets/images/Employers/1.png";
import employeImageTwo from "../../../assets/images/Employers/2.png";
import employeImageThree from "../../../assets/images/Employers/3.png";
import employeImageFour from "../../../assets/images/Employers/4.png";
import "../ForJobHunter/JobHunter.css";
const ForEmployers = () => {
  return (
    <section className="px-2 mt-32 py-16 bg-[#f3f3f340]">
      <div className="titleContainer flex flex-col text-center  text-5xl  ">
        <h1 className="bSectionTitle text-center text-3xl md:text-4xl lg:text-4xl font-bold opacity-70">
          For Job Seeker
        </h1>

        <span className="bg-[#895af6] w-40 h-1 mx-auto mt-4"></span>
      </div>
      <div className="jobHunterContainer grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-32 mt-32  ">
        <div className="jobHunterInfoContainer p-2 relative text-center">
          <div class="avatar hunterImg -mt-24">
            <div class="w-48 rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={employeImageOne}
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
        </div>
        <div className="jobHunterInfoContainer p-2 relative text-center">
          <div class="avatar hunterImg -mt-24">
            <div class="w-48 rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={employeImageTwo}
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
        </div>
        <div className="jobHunterInfoContainer p-2 relative text-center">
          <div class="avatar hunterImg -mt-24">
            <div class="w-48  rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={employeImageThree}
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
        </div>
        <div className="jobHunterInfoContainer p-2 relative text-center">
          <div class="avatar hunterImg -mt-24">
            <div class="w-48  rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={employeImageFour}
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
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;
