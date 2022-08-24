import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { BiLogInCircle } from "react-icons/bi";
import auth from "../../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../../config";
import useTitle from "../../../Hooks/useTitle";

const CandidatesMailModal = ({ mail }) => {
  const { displayName, email } = mail;
  const hrEmail = auth.currentUser.email;
  useTitle("Mails");
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

    const candidateName = e.target.to_name.value;
    const candidateMail = e.target.from_name.value;
    const mailSubject = e.target.subject.value;
    const mailMessage = e.target.message.value;

    const candidateInfo = {
      candidateName: candidateName,
      candidateMail: candidateMail,
      mailSubject: mailSubject,
      mailMessage: mailMessage,
      hrEmail: hrEmail,
    };
    fetch(`${BASE_API}/addCandidateInfo`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      body: JSON.stringify(candidateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Done");
        } else {
          toast.error("Something Wrong");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="candidate-modal" className="modal-toggle " />
      <div className="modal ">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="candidate-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="">
            <form ref={form} onSubmit={sendEmail}>
              <div className="my-2">
                <label htmlFor="name" className="my-2 font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="to_name"
                  placeholder="Input your name"
                  value={displayName}
                  readOnly
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
                  placeholder="Input your email"
                  value={email}
                  readOnly
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
        </div>
      </div>
    </div>
  );
};

export default CandidatesMailModal;
