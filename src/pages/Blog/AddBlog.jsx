import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsPersonPlusFill, BsShieldPlus } from "react-icons/bs";
import Swal from "sweetalert2";
import { InitializeContext } from "../../App";
import { BASE_API } from "../../config";
import "./BlogCss/Blog.css";
const AddBlog = ({ refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { theme } = useContext(InitializeContext);

  const addBlog = (data) => {
    const blogDetails = {
      ...data,
    };
    fetch(`${BASE_API}/addBlogs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(blogDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            text: "Add Blog Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          refetch();
          reset();
        } else {
          Swal.fire({
            text: `Opps!`,
            icon: "error",
            confirmButtonText: "Plz Try Again",
          });
        }
      });
  };

  return (
    <div>
      <div className="">
        <label
          for="add-blog-modal"
          className="mr-5 flex items-center bg-base-300 py-2 px-3 rounded-md font-bold cursor-pointer"
        >
          <BsPersonPlusFill />
          Add Blog
        </label>
      </div>

      <input type="checkbox" id="add-blog-modal" className="modal-toggle" />
      <label for="add-blog-modal" className="modal cursor-pointer modalContainer">
        <label className="modal-box relative " for="">
          <label
            for="add-blog-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form action="" onSubmit={handleSubmit(addBlog)}>
            <div className="flex flex-col mb-2">
              <label className="text-lg pl-2 mb-2">
                Blog Image<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Add Blog Image"
                className={
                  theme
                    ? "border rounded-lg py-1 text-lg pl-3 h-12 bg-black"
                    : "border rounded-lg py-1 text-lg pl-3 h-12"
                }
                {...register("image", {
                  required: {
                    value: true,
                    message: "Add Img Link!",
                  },
                })}
              />
              <p className="text-[13px] text-red-500 pl-3">
                {errors.image?.message}
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-lg pl-2 mb-2">
                Blog Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Add Blog Title"
                className={
                  theme
                    ? "border rounded-lg py-1 text-lg pl-3 h-12 bg-black"
                    : "border rounded-lg py-1 text-lg pl-3 h-12"
                }
                {...register("title", {
                  required: {
                    value: true,
                    message: "Add Blog Title !",
                  },
                })}
              />
              <p className="text-[13px] text-red-500 pl-3">
                {errors.title?.message}
              </p>
            </div>
            <div className="flex flex-col mb-10">
              <label className="text-lg pl-2 mb-2">
                Blog Details<span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                placeholder="Add Blog Details"
                className={
                  theme
                    ? "border rounded-lg py-1 text-lg pl-3 h-28 bg-black"
                    : "border rounded-lg py-1 text-lg pl-3 h-28"
                }
                {...register("about", {
                  required: {
                    value: true,
                    message: "Add Blog Details !",
                  },
                })}
              />
              <p className="text-[13px] text-red-500 pl-3">
                {errors.about?.message}
              </p>
            </div>

            <button className="rounded-lg text-lg py-1 font-bold  bg-primary w-full  flex items-center justify-center  text-white">
              <BsShieldPlus /> Add
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default AddBlog;
