import React from "react";
import not_found from "../../Pages/Assets/images/NotFound/404.png";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <img className="rounded-lg lg:w-[700px]" src={not_found} alt="" />
      </div>
      <div className="flex justify-center items-center mt-[-170px] md:mt-[-100]">
      <Link to="/" className="btn btn-primary text-white"><MdOutlineArrowBackIos/>Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
