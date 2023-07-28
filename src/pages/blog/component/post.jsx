import React, { useEffect, useState } from 'react';
import { API_URL, get } from '../../../middleware/services/api';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

function Post() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get('v1/post');
        setPosts(response.slice(0, 4));
      } catch (error) {
        console.error('Error Fetching Data', error);
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

  const handleClick = (name, link) => {
    navigate(`/artikel/${name}/${link}`);
  };

  return (
    <div className="container px-6 py-10 mx-auto">
      <div className="py-4">
        <h1 className="font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Artikel Ma'had
        </h1>
        <label htmlFor="">Jelajahi Artikel Ma'had AL-Imam Asy-Syathiby</label>
        <div className="flex justify-start mx-auto mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-4">
        {posts.map((postData) => (
          <div key={postData.link}>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={`${API_URL}/upload/Post/${postData.img}`}
              alt={postData.title}
              loading="lazy"
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a  
                onClick={() => handleClick(postData.name, postData.link)}
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-lg"
              >
                {postData.title}
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {truncateDescription(postData.description, 80)}
                {postData.description.length > 80 && (
                  <a
                    className="font-bold text-blue-500 cursor-pointer"
                    onClick={() => handleClick(postData.name, postData.link)}
                  >
                    &nbsp; <br /> Read More
                  </a>
                )}
              </p>

              <p className="mt-3 text-sm text-blue-500">
                {moment(postData.created_at).isAfter(moment().subtract(24, 'hours'))
                  ? moment(postData.created_at).fromNow()
                  : moment(postData.created_at).format('DD-MMMM-YY')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
