import React from "react";

const DashboardFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="fixed bottom-2 w-full p-4 bg-base-300">
      <h3 className="font-[500] flex flex-col md:flex-row justify-center items-center gap-x-2 text-center">
        Modern Hiring Platform By{" "}
        <a
          href="https://www.facebook.com/TeamCodeSamurai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3a47db]"
        >
          Code Samurai
        </a>{" "}
        <span className="hidden md:block">|</span> Copyright © {currentYear}{" "}
      </h3>
    </div>
  );
};

export default DashboardFooter;
