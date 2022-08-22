import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../config";
import useAdmin from "../../Hooks/useAdmin";
import Footer from "../../Shared/Footer/Footer";
import EditBlog from "./EditBlog";
const BlogsDetail = () => {
  const [singleBlogs, setSingleBlog] = useState([]);
  const { blogId } = useParams();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // useEffect(() => {
  //   const url = `${BASE_API}/allBlogs/${blogId}`;

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setSingleBlog(data));
  // }, [blogId]);

  const { refetch } = useQuery(["singleId"], () =>
    fetch(`${BASE_API}/allBlogs/${blogId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSingleBlog(data))
  );
  // const { data, refetch, isLoading } = useQueries(
  //   () => `${BASE_API}/allBlogs/${blogId}`,
  //   (res) => res.json()
  // );

  const { title, image, about } = singleBlogs;

  // `${BASE_API}/allBlogs/${blogId}`
  return (
    <section className="bg-base-400">
      <div className="container mx-auto px-3 lg:px-10">
        <div className=" border-b-2 border-cyan-600 py-3">
          <h2 className="text-center text-2xl font-bold ">
            <span className="text-5xl font-serif text-primary">
              {title?.slice(0, 1)}
            </span>
            {title?.slice(1, 80)}
          </h2>
        </div>

        <div className="singleBlogDetails py-10">
          {admin && (
            <EditBlog
              singleBlogs={singleBlogs}
              setSingleBlog={setSingleBlog}
              refetch={refetch}
            />
          )}
          <div className="titleAndImg grid items-center gap-5 ">
            <h2 className="text-4xl font-bold leading-[3rem] ">{title}</h2>
            <img
              className="rounded-lg w-full h-80 object-cover max-w-full"
              src={image}
              alt=""
            />
          </div>
          <p className="py-28 text-xl font-normal text-stone-900">{about}</p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlogsDetail;
