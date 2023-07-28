import { useEffect, useState } from "react";
import { API_URL, get } from "../../../middleware/services/api";

function Galery() {
  const [apiData, setApiData] = useState({
    galeri: [],
    kategori: [],
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const galeriResponse = await get("v1/galeri");
        const kategoriResponse = await get("v1/kategori");

        setApiData({
          galeri: galeriResponse.slice(0, 7),
          kategori: kategoriResponse,
        });
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchData();
  }, []);

  // Filter images based on the selected category
  const filteredImages = apiData.galeri.filter(
    (item) => selectedCategory === "All" || item.nkategori === selectedCategory,
  );

  // Filter videos based on the selected category
  const filteredVideos = apiData.galeri.filter(
    (item) => selectedCategory === "Video" && item.type === "video",
  );

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          Galeri Foto Ma'had
        </h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Kategori
            </h1>
            <div className="mt-4 space-y-4 lg:mt-8">
              {/* Kategori All */}
              <button
                className={`block text-blue-500 font-semibold uppercase dark:text-blue-400 hover:underline ${
                  selectedCategory === "All" ? "text-blue-600" : ""
                }`}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </button>

              {/* Kategori */}
              {apiData.kategori.map((item) => (
                <button
                  key={item.id}
                  className={`block text-blue-500 font-semibold uppercase dark:text-blue-400 hover:underline ${
                    selectedCategory === item.nkategori ? "text-blue-600" : ""
                  }`}
                  onClick={() => setSelectedCategory(item.nkategori)}
                >
                  {item.nkategori}
                </button>
              ))}

              <button
                className={`block text-blue-500 font-semibold uppercase dark:text-blue-400 hover:underline ${
                  selectedCategory === "All" ? "text-blue-600" : ""
                }`}
                onClick={() => setSelectedCategory("Video")}
              >
                Video
              </button>
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-2 xl:grid-cols-4 ">
              {/* Image */}
              {filteredImages.map((item) => {
                if (item.type === "photo") {
                  return (
                    <div key={item.id}>
                      <img
                        className="object-cover w-full rounded-lg h-56"
                        src={`${API_URL}/upload/Galeri/${item.filename}`}
                        alt=""
                        loading="lazy"
                      />
                      <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                        {item.nkategori}
                      </p>
                    </div>
                  );
                } else if (item.type === "video") {
                  return (
                    <div key={item.id}>
                      <iframe
                        className="h-64 w-full rounded-xl border-2 shadow-md"
                        src={`https://www.youtube.com/embed/${item.filename}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                      <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                        {item.nkategori}
                      </p>
                    </div>
                  );
                }
                return null;
              })}

              {selectedCategory === "Video" &&
                filteredVideos.map((item) => (
                  <div key={item.id}>
                    <iframe
                      className="h-64 w-full rounded-xl border-2 shadow-md"
                      src={`https://www.youtube.com/embed/${item.filename}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                      {item.nkategori}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galery;
