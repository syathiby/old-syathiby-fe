import { useEffect, useState } from "react";
import { API_URL, get } from "../../../middleware/services/api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

function Testimonial() {
  const [testi, setTesti] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("v1/testimoni");
        setTesti(response.slice(0, 4));
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Apa kata Alumni ?
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="w-ull">
            <Carousel
              autoPlay
              infiniteLoop
              interval={5000}
              transitionTime={2000}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    className="bg-green-400 dark:bg-slate-800 shadow-md border-2 border-current w-10 h-10 pb-2 dark:text-white rounded-full my-10"
                    onClick={onClickHandler}
                    title={label}
                  >
                    <ArrowLeftOutlined />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    className="bg-green-400 dark:bg-slate-800 shadow-md border-2 border-current w-10 h-10 pb-2 dark:text-white rounded-full my-10"
                    onClick={onClickHandler}
                    title={label}
                  >
                    <ArrowRightOutlined />
                  </button>
                )
              }
            >
              {testi.map((item) => (
                <div key={item.id}>
                  <p className="text-center text-gray-500 lg:mx-8">
                    {item.pesan}
                  </p>

                  <div className="items-center mt-8">
                    <img
                      loading="lazy"
                      className="object-contain rounded-full w-10 h-20"
                      src={`${API_URL}/upload/profile/${item.image}`}
                      alt="syathibyInfo"
                    />

                    <div className="mt-4 text-center">
                      <h1 className="font-semibold text-gray-800 dark:text-white">
                        {item.name}
                      </h1>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Angkatan ke {item.angkatan}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;