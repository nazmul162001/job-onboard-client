import React, { useEffect, useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import blogOne from "../Assets/images/Blogs/blogTwo.png";
import blogTow from "../Assets/images/Blogs//blogThree.png";
import "./BlogCss/Blog.css";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = "blog.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

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
              <figure>
                <img src={blogOne} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{blog.title}</h2>
                <p>{blog.about}</p>
                <button className="go-btn flex justify-end text-xl text-blue-700">
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
                {blog.title}
              </h2>
              <p className="flex">
                {blog.about.slice(0, 50) + "...."}{" "}
                <button className="go-btn flex justify-end text-xl text-indigo-800">
                  <RiArrowRightSLine />
                </button>
              </p>
            </div>
          ))}
        </div>
        <div className="thirdBlog">
          {blogs.map((blog) => (
            <div className="thirdInfo">
              <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img src={blogTow} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">{blog.title}</h2>
                  <p>{blog.about.slice(0, 150)}</p>
                  <button className="go-btn flex justify-end text-xl text-indigo-800">
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
