import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { API_URL, get } from "../../../middleware/services/api";
// Import Layout
import LayoutAdmin from "../../../layout/adminLayout/layout"

const DBlog = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(`v1/post`);
        if (response.length > 0) {
          setPost(response[0]);
        }
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchData();
  }, []);

  const formatCreatedAt = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <LayoutAdmin>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-full bg-white rounded-md border-2 border-slate-500 px-4 py-2">
              <div className="flex flex-col text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Post
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  4
                </dd>
              </div>
            </div>

            <div className="w-full h-full bg-white rounded-md border-2 border-slate-500 px-4 py-2">
              <div className="flex flex-col text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Post
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  4
                </dd>
              </div>
            </div>

            <div className="w-full h-full bg-white rounded-md border-2 border-slate-500 px-4 py-2">
              <div className="flex flex-col text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Post
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  4
                </dd>
              </div>
            </div>

            <div className="w-full h-full bg-white rounded-md border-2 border-slate-500 px-4 py-2">
              <div className="flex flex-col text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Post
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  4
                </dd>
              </div>
            </div>

          </div>

          {post && (
            <div className="max-h-44">
              <article className="flex bg-white transition hover:shadow-xl">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    dateTime={post.created_at}
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>{formatCreatedAt(post.created_at)}</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>{new Date(post.created_at).getDate()}</span>
                  </time>
                </div>
                <div className="hidden sm:block sm:basis-56">
                  <img
                    alt="Guitar"
                    src={`${API_URL}/upload/post/${post.img}`}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        {post.title}
                      </h3>
                    </a>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                      {post.description}
                    </p>
                  </div>
                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400" to={`/post/${post.link}`}>
                      Read Blog
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          )}

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8 md:mt-8">
          <div className="lg:col-span-3">
            <div className="h-full w-full rounded-md bg-white border-2 border-slate-500">
            
            </div>
          </div>
          <div className="h-full w-full rounded-md bg-white border-2 border-slate-500">
            <p>2</p>
          </div>
        </div>
    </LayoutAdmin>
  );
};

export default DBlog;
