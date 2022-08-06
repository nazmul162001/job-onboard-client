import React from "react";

import employeImageOne from "../../Assets/images/Employers/1.png";
import employeImageTwo from "../../Assets/images/Employers/2.png";
import employeImageThree from "../../Assets/images/Employers/3.png";
import employeImageFour from "../../Assets/images/Employers/4.png";
import "../ForJobHunter/JobHunter.css";
const ForEmployers = () => {
  return (
    <section className="container mx-auto px-2  mt-16 md:mt-8  md:py-16 bg-base-100">
      <div className="titleContainer flex flex-col text-center  text-5xl  ">
        <h1 className="text-center text-2xl md:text-4xl font-bold ">
          For Employers
        </h1>

        <span className="bg-primary w-40 h-1 mx-auto mt-4"></span>
      </div>
      <div className="jobHunterContainer grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-36 mt-32  ">
        <div className="jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center">
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
            <h4 className="font-bold text-2xl">
              Post Job Your Company For Free
            </h4>
            <p>Any company can post jobs for their company for free.</p>
          </div>
        </div>
        <div className="jobHunterInfoContainer rounded-[10px] shadow-lg p-2 relative text-center">
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
            <h4 className="font-bold text-2xl">Browse Service and PortFolio</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
        </div>
        <div className="jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center">
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
            <h4 className="font-bold text-2xl">
              Find Best Match For Your Company
            </h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
        </div>
        <div className="jobHunterInfoContainer  rounded-[10px] shadow-lg p-2 relative text-center">
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
            <h4 className="font-bold text-2xl">Strong Community BuildUp</h4>
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
