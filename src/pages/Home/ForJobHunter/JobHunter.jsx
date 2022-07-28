import React from "react";
import { GiArrowhead } from "react-icons/gi";
import hunterImgOne from "../../../assets/images/JobHunter/1.png";
import hunterImgTwo from "../../../assets/images/JobHunter/2.png";
import hunterImgTtree from "../../../assets/images/JobHunter/3.png";
import hunterImgFour from "../../../assets/images/JobHunter/4.png";
import "./JobHunter.css";
const JobHunter = () => {
  return (
    <section className="container mx-auto">
      <div className="titleContainer flex flex-col text-center  text-5xl  ">
        <h1 className="bSectionTitle text-center text-3xl md:text-4xl lg:text-4xl font-bold opacity-70">
          For Job Seeker
        </h1>

        <span className="bg-[#895af6] w-40 h-1 mx-auto mt-4"></span>
      </div>
      <div className="jobHunterContainer grid grid-cols-4 gap-8">
        <div className="jobHunterInfoContainer">
          <div class="avatar hunterImg">
            <div class="lg:w-48 sm:w-full rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={hunterImgOne}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo">
            <h4>Easy To Apply Any Jobs</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
          <p className="goBtn">
            {/* <i class="fa-solid fa-arrow-right-from-bracket"></i> */}
            <GiArrowhead />
          </p>
        </div>
        <div className="jobHunterInfoContainer">
          <div class="avatar hunterImg">
            <div class="lg:w-48 sm:w-full rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={hunterImgTwo}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo">
            <h4>Build Up Strong Network</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
          <p className="goBtn">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </p>
        </div>
        <div className="jobHunterInfoContainer">
          <div class="avatar hunterImg">
            <div class="lg:w-48 sm:w-full rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={hunterImgTtree}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo">
            <h4>Easy Interview Process</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
          <p className="goBtn">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </p>
        </div>
        <div className="jobHunterInfoContainer">
          <div class="avatar hunterImg">
            <div class="lg:w-48 sm:w-full rounded-full roundedCircle">
              <img
                className="max-w-full"
                src={hunterImgFour}
                alt="Easy to Apply"
              />
            </div>
          </div>
          <div className="hunterInfo">
            <h4>Get Your Dreem Job Successfully</h4>
            <p>
              Easy apply any kind of jobs.Find your best jobs acording to to
              your skill
            </p>
          </div>
          <p className="goBtn">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobHunter;
