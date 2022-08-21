import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";
const AddBlog = () => {
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

      <input type="checkbox" id="add-blog-modal" class="modal-toggle" />
      <label for="add-blog-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <label
            for="add-blog-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
};

export default AddBlog;
