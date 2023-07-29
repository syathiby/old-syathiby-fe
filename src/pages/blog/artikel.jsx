import { useState } from "react";
import Layout from "./Layout";
import { useEffect } from "react";
import { API_URL, get } from "../../middleware/services/api";
import { useNavigate } from "react-router-dom";

const ArtikelAll = () => {

    const [apiData, setApiData] = useState({
        singlePost: [],
        allPost: [],
        kategori: []

    })

    const navigate = useNavigate()

    const handleClick = (name, link) => {
        navigate(`/artikel/${name}/${link}`);
      };

    const handleKategori = (dream) => {
        navigate(`/artikel/${dream}`);
      };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await get('v1/post');
            const responseLabel = await get('v1/label');
            setApiData({
                singlePost: response.length > 0 ? response[0] : null,
                allPost: response.slice(1, 4),
                kategori: responseLabel,
            });
          } catch (error) {
            console.error('Error Fetching Data', error);
          }
        };
    
        fetchData();
      }, []);

      const truncateDescription = (description, maxLength) => {
        if (!description) {
          return '';
        }
        const strippedDescription = description.replace(/(<([^>]+)>)/gi, '');
        if (strippedDescription.length > maxLength) {
          return strippedDescription.substring(0, maxLength) + '...';
        }
        return strippedDescription;
      };

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mb-4 grid grid-cols-4 lg:grid-cols-8 gap-4">
            {apiData.kategori.map((item) => (
              <button
                key={item.id}
                onClick={() => handleKategori(item.name)}
                className={`${item.color} px-4 py-2 text-center rounded-lg font-semibold`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              {apiData.singlePost && (
                <>
                  <button
                    onClick={() =>
                      handleClick(apiData.singlePost.name, apiData.singlePost.link)
                    }
                    className="focus:outline-none"
                  >
                    <img
                      className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                      src={`${API_URL}/upload/Post/${apiData.singlePost.img ||
                        "solidado.jpeg"}`}
                      alt=""
                    />
                  </button>

                  <div className="my-4">
                    <button
                      onClick={() =>
                        handleClick(apiData.singlePost.name, apiData.singlePost.link)
                      }
                      className="focus:outline-none mt-9 text-sm text-blue-500 uppercase"
                    >
                      {apiData.singlePost.name}
                    </button>

                    <h1
                      onClick={() =>
                        handleClick(apiData.singlePost.name, apiData.singlePost.link)
                      }
                      className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white"
                    >
                      {apiData.singlePost.title}
                    </h1>

                    <div className="flex items-center mt-6">
                      {truncateDescription(apiData.singlePost.description, 200)}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              {apiData.allPost.map((item) => (
                <div key={item.link}>
                  <div>
                    <h3 className="text-blue-500 capitalize">{item.title}</h3>

                    <button
                      onClick={() => handleClick(item.name, item.link)}
                      className="focus:outline-none block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
                    >
                      {truncateDescription(item.description, 65)}
                    </button>
                  </div>

                  <hr className="my-6 border-gray-200 dark:border-gray-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArtikelAll;
