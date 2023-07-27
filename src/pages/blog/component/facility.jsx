import { useEffect, useState } from "react";
import { API_URL, get } from "../../../middleware/services/api";
import { CaretRightFilled, PlayCircleOutlined } from "@ant-design/icons";
import ReactModal from "react-modal";

function Facility() {
  const [fa, setFa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("v1/facility");
        setFa(response.length > 0 ? response : []);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container flex flex-col px-4 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="flex items-center justify-center w-full h-96 mr-6 lg:w-1/2 relative">
        <img
          className="object-cover w-full h-full max-w-2xl shadow-lg rounded-md"
          src={`${API_URL}/upload/banner/fasilitas.jpg`}
          alt="glasses photo"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={handlePlayButtonClick}
            className="text-white bg-red-500 rounded-lg pb-2 shadow-lg hover:bg-white px-6 hover:text-red-700 transition duration-300"
          >
            <CaretRightFilled className="text-5xl" />
          </button>
        </div>
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Video Modal"
        >
          <div className="absolute top-0 right-0">
            <button onClick={handleCloseModal} className="bg-red-500 my-2 px-4 py-2 text-white rounded-full">
              Close button
            </button>
          </div>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/c8Aw7-P2Moc?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </ReactModal>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
            Fasilitas Ma'had Al-Imam Asy-Syathiby
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Beberapa Fasilitas di Mahad Imam Syathiby
          </p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2">
            {fa &&
              fa.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center text-gray-800 -px-3 dark:text-gray-200"
                >
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">{item.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
