import React from "react";
import hunterImgOne from "../../../assets/images/JobHunter/1.png";
import hunterImgTwo from "../../../assets/images/JobHunter/2.png";
import hunterImgThree from "../../../assets/images/JobHunter/3.png";
import hunterImgFour from "../../../assets/images/JobHunter/4.png";
import "./JobHunter.css";
const JobHunter = () => {
  return (
    <section>
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold opacity-70 pt-8 lg:pt-0 mb-10">
        For Job Hunter
      </h2>
      <div className="jobHunterContainer grid grid-cols-4 gap-8">
      <div className="jobHunterInfoContainer">
          <div className="jobHunterImg">
            <img className="max-w-full" src={hunterImgOne} alt="" />
          </div>
          <div className="hunterInfo">
            <h4>Easy To Apply</h4>
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

export default JobHunter;
