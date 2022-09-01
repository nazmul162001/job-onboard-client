// import React from 'react';
import React, { useRef } from "react";

// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { BiLogInCircle } from "react-icons/bi";
import useTitle from "../../../Hooks/useTitle";
const Inbox = () => {
  useTitle('Mails')
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

  return (
    <div className="px-5 py-16">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="shadow-xl border-t-4 border-primary relative rounded-2xl bg-base-100 p-5 md:p-10"
      >
        <div className="my-2">
          <label htmlFor="name" className="my-2 font-semibold">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="to_name"
            placeholder="Input your name"
            className="input input-bordered w-full hover:border-primary duration-300"
          />
        </div>
        <div className="my-2">
          <label htmlFor="name" className="my-2 font-semibold">
            Your Email
          </label>
          <input
            id="email"
            name="from_name"
            type="email"
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
            Your Message
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

export default Inbox;
