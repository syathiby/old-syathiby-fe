import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { API_URL, get } from "../../../middleware/services/api";
// Import Layout
import LayoutAdmin from "../../../layout/adminLayout/layout"
import CardDotted from "../../../component/card/cardDotted";

const DBlog = () => {

  const [data, setData] = useState({
    post: null,
    totalPost: null,
    totalFoto: null,
    totalVideo: null,
    totalBanner: null,
    banner: [],
    posts: [],
    galeri: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalCountResponse = await get("v1/admin/post");
        const totalCountGaleriResponse = await get("v1/admin/galeri");
        const totalCountBannerResponse = await get("v1/admin/banner");
        const latestPostResponse = await get("v1/admin/post", { sort: "-created_at", limit: 1 });

        setData({
          post: latestPostResponse.length > 0 ? latestPostResponse[0] : null,
          totalPost: totalCountResponse.length,
          totalBanner: totalCountBannerResponse.length,
          totalFoto: totalCountGaleriResponse.filter((item) => item.type === "photo").length,
          totalVideo: totalCountGaleriResponse.filter((item) => item.type === "video").length,
          banner: totalCountBannerResponse.slice(0, 2),
          posts: totalCountResponse.slice(0, 2),
          galeri: totalCountGaleriResponse.filter((item) => item.type === "photo").slice(0, 6),
        });
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchData();
  }, []);

  const truncateDescription = (description, maxLength) => {
    const strippedDescription = description.replace(/(<([^>]+)>)/gi, '');
    if (strippedDescription.length > maxLength) {
      return strippedDescription.substring(0, maxLength) + '...';
    }
    return strippedDescription;
  };

  const formatCreatedAt = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <LayoutAdmin>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">

           <CardDotted>
              <div className="flex flex-col text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Post
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {data.totalPost}
                </dd>
              </div>
           </CardDotted>

           <CardDotted>
              <div className="flex flex-col text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Foto
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {data.totalFoto}
                </dd>
              </div>
           </CardDotted>

           <CardDotted>
              <div className="flex flex-col text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Video
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {data.totalVideo}
                </dd>
              </div>
           </CardDotted>

           <CardDotted>
              <div className="flex flex-col text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Banner
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {data.totalBanner}
                </dd>
              </div>
           </CardDotted>

          </div>

          {data.post && (
            <div className="max-h-44">
              <article className="flex bg-white transition hover:shadow-xl">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    dateTime={data.post.created_at}
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>{formatCreatedAt(data.post.created_at)}</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>{new Date(data.post.created_at).getDate()}</span>
                  </time>
                </div>
                <div className="hidden sm:block sm:basis-56">
                  <img
                    alt="Guitar"
                    src={`${API_URL}/upload/post/${data.post.img}`}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        {data.post.title}
                      </h3>
                    </a>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                      {truncateDescription(data.post.description, 80)}
                    </p>
                  </div>
                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400" to={`/post/${data.post.link}`}>
                      Read Blog
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          )}

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-8 md:mt-8">
          <div className="lg:col-span-2">
            <CardDotted>
              <div>
                <h1 className="text-center font-semibold">Banner Aktif</h1>
              </div>
              <div className="grid grid-cols-1 my-4 gap-8"> 
                {data.banner.map((item) => (
                  <div key={item.id}>
                    <img src={`${API_URL}/upload/Banner/${item.image}`} className="rounded-lg shadow-md"></img>
                  </div>
                ))}
              </div>
            </CardDotted>
          </div>

          <div className="lg:col-span-3">
            <CardDotted>
              <div>
                <h1 className="text-center font-semibold">Postingan Terbaru</h1>
              </div>

              <div className="grid grid-cols-2 my-3 mx-3 gap-8">
                {data.posts.map((item) => (
                  <article key={item.link} className="group my-2">
                    <img
                      alt="Lava"
                      src={`${API_URL}/upload/Post/${item.img}`}
                      className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />
                  
                    <div className="p-4">
                      <a href="#">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h3>
                      </a>
                  
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {truncateDescription(item.description, 80)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </CardDotted>
          </div>

          <div className="lg:col-span-2">
            <CardDotted>
              <div>
                <h1 className="text-center font-semibold">Galeri</h1>
              </div>
              <div className="grid grid-cols-3 gap-4 my-4">
                {data.galeri.map((item) => (
                  <div key={item.id}>
                    <img src={`${API_URL}/upload/Galeri/${item.filename}`} className=" h-16 w-32 rounded-lg shadow-lg object-cover" />
                  </div>
                ))}
              </div>
            </CardDotted>
          </div>
        </div>
    </LayoutAdmin>
  );
};

export default DBlog;
