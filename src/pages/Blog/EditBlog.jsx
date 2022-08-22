import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { BsShieldPlus } from "react-icons/bs";
import Swal from "sweetalert2";
import { InitializeContext } from "../../App";
import { BASE_API } from "../../config";
const EditBlog = ({ singleBlogs, refetch }) => {
  const { image, title, about, _id } = singleBlogs;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { theme } = useContext(InitializeContext);

  const editBlog = (data) => {
    const editBlogData = { ...data };
    const id = _id;
    if (id) {
      fetch(`${BASE_API}/editBlogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(editBlogData),
        // const { id, name, location, email } = employe;
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            Swal.fire({
              text: "Edit Successfully",
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
    }
  };
  return (
    <div>
      <div className="">
        <label
          for="edit-blog-modal"
          className="font-bold text-2xl text-blue-500 cursor-pointer"
        >
          <BiEdit />
        </label>
      </div>
      <input type="checkbox" id="edit-blog-modal" class="modal-toggle" />
      <label for="edit-blog-modal" class="modal cursor-pointer modalContainer">
        <label class="modal-box relative lg:w-10/12 lg:max-w-2xl " for="">
          <label
            for="edit-blog-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form action="" onSubmit={handleSubmit(editBlog)}>
            <div className="flex flex-col mb-2">
              <label className="text-lg pl-2 mb-2">
                Blog Image<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={image}
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
                defaultValue={title}
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
                Blog Dtails<span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                placeholder="Add Blog Details"
                defaultValue={about}
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
              <BsShieldPlus /> Update
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default EditBlog;
