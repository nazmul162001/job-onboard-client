import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { BASE_API } from "../../../config";
import { BiLeftArrowAlt } from "react-icons/bi";

const SendMailCandidates = () => {
  const { candidatesID } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(["candidates"], () =>
    axios.get(`${BASE_API}/applicants/all/${candidatesID}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  const candidate = data?.data;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "jobOnboard",
        "template_ss71azc",
        form.current,
        "Ub2MqAsLjMHvO0vxR"
      )
      .then(
        (result) => {
          toast.success(
            `Email Sent to ${document.getElementById("email").value}`
          );
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
    <div className="title my-2 mb-6 text-center">
      <span>Sending Mail to : <strong>{candidate?.email}</strong></span>
    </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="shadow-xl border-t-4 border-primary relative rounded-2xl bg-base-100 p-5 md:p-10"
      >
        <div className="my-6">
          <label className="btn btn-sm btn-circle absolute left-4 top-2"
          onClick={() => navigate(-1)}
          >
            <BiLeftArrowAlt className="text-white text-xl" />
          </label>
          <label htmlFor="name" className="my-2 font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="to_name"
            value={candidate?.displayName}
            placeholder="Input your name"
            className="input input-bordered w-full hover:border-primary duration-300"
          />
        </div>
        <div className="my-2">
          <label htmlFor="name" className="my-2 font-semibold">
            Email
          </label>
          <input
            id="email"
            name="from_name"
            type="email"
            value={candidate?.email}
            placeholder="Input your email"
            className="input input-bordered w-full hover:border-primary duration-300"
          />
        </div>
        <div className="my-2">
          <label htmlFor="subject" className="my-2 font-semibold">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Input your subject"
            className="input input-bordered w-full hover:border-primary duration-300"
          />
        </div>
        <div className="my-2">
          <label htmlFor="name" className="my-2 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="textarea textarea-bordered w-full my-1 resize-none h-[12rem] md:h-[15rem] lg:h-[13rem] hover:border-primary duration-300"
            cols="30"
            placeholder="Input your message"
            rows="2"
          ></textarea>
        </div>
        <div className="my-3 text-left">
          <button className="btn btn-primary text-white">
            Send <BiLogInCircle className="ml-1" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMailCandidates;
