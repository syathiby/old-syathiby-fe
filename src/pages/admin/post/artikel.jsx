import { useEffect, useState } from "react";
import CardDotted from "../../../component/card/cardDotted";
import LayoutAdmin from "../../../layout/adminLayout/layout";
import { API_URL, get, post } from "../../../middleware/services/api";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { getRole } from "../../../middleware/auth/authApi";

import imageNull from '../../../assets/default-img.png'

const Artikel = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("v1/admin/post");
        setPostData(response.length > 0 ? response : []);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  console.log(postData)

  const truncateDescription = (description, maxLength) => {
    const strippedDescription = description.replace(/(<([^>]+)>)/gi, '');
    if (strippedDescription.length > maxLength) {
      return strippedDescription.substring(0, maxLength) + '...';
    }
    return strippedDescription;
  };

  const handleImageError = (e) => {
    e.target.src = imageNull;
  };

  const userRole = getRole()

  return (
    <LayoutAdmin>
        <div className="grid grid-cols-2">

            <div className=" col-span-2">
                <CardDotted>
                <a
                    className="group relative inline-flex items-center overflow-hidden rounded bg-blue-400 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                    href="/admin/artikel/add"
                >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:me-4">
                    Add Artikel
                    </span>
                </a>

                <div className="container my-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    No
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Title
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Description
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Status
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Label
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Images
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Author
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Created Date
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Action
                                </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {postData.map((item, index) => (
                                <tr key={index}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {index + 1}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {item.title}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {truncateDescription(item.description, 20)}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {item.status_publish === null
                                            ? "Not Publish"
                                            : item.status_publish === "active"
                                            ? "Publish"
                                            : "Not Publish"}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {item.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <img src={`${API_URL}/upload/post/${item.img}`} alt={item.link} onError={handleImageError} className="h-20 w-20 rounded-md" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {item.created_by}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {item.created_at}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        <div className={userRole === "writer" ? "" : "grid grid-cols-3 gap-4"}>
                                            <a href={`/artikel/${item.name}/${item.link}`}>
                                                <EyeOutlined style={{ fontSize: '16px' }} />
                                            </a>
                                            <a href={`/admin/artikel/edit/${item.posts_id}/${item.link}`} className={userRole === "writer" ? "hidden" : ""}>
                                                <EditOutlined style={{ fontSize: '16px' }} />
                                            </a>
                                            <a href="#" className={userRole === "writer" ? "hidden" : ""}>
                                                <DeleteOutlined style={{ fontSize: '16px' }} />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </CardDotted>
            </div>
        </div>
    </LayoutAdmin>
  );
};

export default Artikel;
