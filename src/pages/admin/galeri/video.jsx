import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CardDotted from "../../../component/card/cardDotted"
import LayoutAdmin from "../../../layout/adminLayout/layout"
import { PlusOutlined } from "@ant-design/icons"
import { get } from "../../../middleware/services/api"

const VideoGaleri = () => {

    const navigate = useNavigate()
    const [ videoData, setVideoData ] = useState([])

    const handleNavigate = () => {
        navigate('/admin/galeri/video/add')
    }

    useEffect(() => {
        fetchData();
    
        const interval = setInterval(() => {
          fetchData();
        }, 5000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await get("v1/admin/galeri");
          const photoItems = response.filter((item) => item.type === "video");
          setVideoData(photoItems);
        } catch (error) {
          console.error("Error Fetching Data", error);
        }
      };

    return(
        <LayoutAdmin>
            <CardDotted>
                <div className="flex mb-8 justify-between items-center">
                    <h1 className="text-center font-bold text-2xl">Galeri Foto</h1>
                    <div>
                        <a onClick={handleNavigate} htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-8 h-8 border-2 border-current rounded-full cursor-pointer bg-blue-300 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-500 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <PlusOutlined />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {videoData.map((item) => (
                        <div>
                            <iframe
                                className="h-64 w-full rounded-xl border-2 shadow-md"
                                src={`https://www.youtube.com/embed/${item.filename}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen />
                        </div>
                    ))}
                </div>
            </CardDotted>
        </LayoutAdmin>
    )
}

export default VideoGaleri