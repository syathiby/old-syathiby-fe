import { useEffect, useState } from "react"
import { get } from "../../../../middleware/services/api"

import LayoutAdmin from "../../../../layout/adminLayout/layout"
import CardDotted from "../../../../component/card/cardDotted"
import { handleVideo } from "../../../../middleware/services/admin/galeri"
import { useNavigate } from "react-router-dom"

const formVideo = {
    title: "",
    type: "video",
    filename: "",
    caption: null,
    kategori: ""
}

const AddVideo = () => {

    const [ video, setVideo ] = useState(formVideo)
    const [ kategori, setKategori ] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get("v1/admin/kategori");
                setKategori(response);
            } catch (error) {
                console.error("Error:", error);
                setKategori([]);
            }
        };
    
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "filename") {
          // Extract the video ID from the input value
          const videoId = value.split("/").pop();
          setVideo((prevVideo) => ({
            ...prevVideo,
            [name]: videoId,
          }));
        } else {
          setVideo((prevVideo) => ({
            ...prevVideo,
            [name]: value,
          }));
        }
      };

      const handleSubmit = () => {
        handleVideo(video, (handleResult) => {
          if (handleResult === "ok") {
            setVideo(formVideo);
            navigate("/admin/galeri/video");
          }
        });
      };

    return(
        <LayoutAdmin>
            <CardDotted>
                <div>
                    <div>
                        <h1 className="text-center my-4 font-semibold">Tambahkan Video</h1>
                    </div>

                    <form>
                        <div className="my-8 w-full">
                            <label
                                htmlFor="title"
                                className="relative block rounded-md border border-gray-200 shadow-sm h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                type="text"
                                id="title"
                                className="peer border-none w-full h-14 bg-transparent px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="title"
                                name="title"
                                value={video.title}
                                onChange={handleInputChange}
                                />

                                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                Judul
                                </span>
                            </label>
                        </div>

                        <div className="my-8 w-full">
                            <label
                                htmlFor="filename"
                                className="relative block rounded-md border border-gray-200 shadow-sm h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                type="text"
                                id="filename"
                                className="peer border-none w-full h-14 bg-transparent px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="filename"
                                name="filename"
                                value={video.filename}
                                onChange={handleInputChange}
                                />

                                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                    Link
                                </span>
                            </label>
                        </div>

                        <div className="my-4">
                            <label htmlFor="color" className="block text-sm font-medium text-gray-900">
                                Kategori
                            </label>

                            <select
                                name="kategori"
                                id="color"
                                className="mt-1.5 w-full rounded-lg px-2 py-2 border-2 border-gray-300 text-gray-700 sm:text-sm"
                                value={video.kategori}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>Please select</option>
                                {kategori.map((item) => (
                                    <option value={item.id}>{item.nkategori}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <a
                                href="#"
                                onClick={handleSubmit}
                                className="group text-center relative w-full inline-block focus:outline-none focus:ring "
                            >
                                <span className="absolute inset-0 w-full translate-x-0 translate-y-0 bg-blue-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>
                                <span className="relative inline-block w-full border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                                    Tambahkan
                                </span>
                            </a>
                        </div>

                        <div className="mt-4">
                            <a
                                href="#"
                                // onClick={handleSubmit}
                                className="group text-left relative w-full inline-block focus:outline-none focus:ring "
                            >
                                <span className="absolute inset-0 w-full translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>
                                <span className="relative inline-block w-full border-2 border-current px-8 py-3 text-sm font-bold tracking-widest">
                                    Note: <br />
                                    1. Masuk ke youtube dan masuk pilih bagikan <br />
                                    2. https://youtu.be/<i className="text-red-500 font-bold">QwUpnXumcw4</i> <br />
                                    3. Salin link yang terdapat pada kolom bagikan di youtube <br />
                                    4. Sistem akan otomatis menghapus https://youtu.be/
                                </span>
                            </a>
                        </div>
                    </form>
                </div>
            </CardDotted>
        </LayoutAdmin>
    )
}

export default AddVideo