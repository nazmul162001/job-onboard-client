// import React from 'react';
import React, { useRef } from "react";

// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { BiLogInCircle } from "react-icons/bi";
import useTitle from "../../../hooks/useTitle";
const Inbox = () => {
  useTitle('Inbox')
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
            `Email Sent to ${document.getElementById("name").value}`
          );
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-5">
      <h3 className="text-2xl font-semibold mb-2 px-5 lg:px-10">Inbox</h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="shadow-lg rounded-2xl bg-base-100 p-5 md:p-10"
      >
        <div className="my-2">
          <label htmlFor="name" className="my-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="to_name"
            placeholder="Input your name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="my-2">
          <label htmlFor="name" className="my-2">
            Email
          </label>
          <input
            id="email"
            name="from_name"
            type="email"
            placeholder="Input your email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="my-2">
          <label htmlFor="name" className="my-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="textarea textarea-bordered w-full my-1 resize-none h-[12rem] md:h-[15rem] lg:h-[13rem]"
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

export default Inbox;
