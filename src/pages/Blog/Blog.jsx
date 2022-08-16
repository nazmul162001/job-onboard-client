import React, { useEffect, useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../../config";
import "./BlogCss/Blog.css";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `${BASE_API}/allBlogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const blogsDetails = (bdId) => {
    navigate(`${bdId}`);
  };
  return (
    <section className="container mx-auto">
      <div className="titleContainer flex flex-col text-center my-4">
        <h2 className="text-center text-2xl font-bold ">
          <span className="text-4xl font-serif text-primary">W</span>elcome To
          Our Blog
        </h2>
        <span className="bg-primary w-48 h-1 mx-auto mt-2"></span>
      </div>

      <div className="blogContainer">
        <div className="firstBlog">
          {blogs.slice(0, 1).map((blog) => (
            <div class="card card-compact bg-base-100 shadow-xl">
              <span className="new absolute right-0 bg-indigo-900 px-4 py-1 text-white font-bold -top-1">
                new
              </span>
              <figure>
                <img src={blog.image} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{blog.title}</h2>
                <p className="text-[17px]">
                  {blog.about.slice(0, 150) + " ...."}
                </p>
                <button
                  onClick={() => blogsDetails(blog._id)}
                  className="go-btn flex justify-end text-xl text-blue-700"
                >
                  <BiRightArrowCircle />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Second Blog Title and about */}
        <div className="secondBlog">
          {blogs.slice(0, 5).map((blog) => (
            <div className="secondInfo py-2">
              <h2 className="uppercase font-bold mb-1 text-cyan-600">
                {blog.title.slice(0, 30)}
              </h2>
              <p className="flex">
                {blog.about.slice(0, 50) + "...."}{" "}
                <button
                  onClick={() => blogsDetails(blog._id)}
                  className="go-btn flex justify-end text-xl text-indigo-800"
                >
                  <RiArrowRightSLine />
                </button>
              </p>
            </div>
          ))}
        </div>
        <div className="thirdBlog  px-10 my-10">
          {blogs.slice(1, 20000).map((blog) => (
            <div className="thirdInfo relative ">
              <div class="shadow-xl rounded-md overflow-hidden h-full">
                <figure>
                  <img src={blog.image} alt="Shoes" />
                </figure>
                <div class="p-3">
                  <h2 class="card-title text-sky-700">
                    {blog.title.slice(0, 50)}
                  </h2>
                  <p className="text-[17px]">
                    {blog.about.slice(0, 150) + "..."}
                  </p>
                  <button
                    onClick={() => blogsDetails(blog._id)}
                    className="go-btn absolute bottom-2  right-3 text-xl text-indigo-800"
                  >
                    <BiRightArrowCircle />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
