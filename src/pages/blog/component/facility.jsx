import { useEffect, useState } from "react"
import { API_URL, get } from "../../../middleware/services/api"

function Facility() {

    const [ fa, setFa ] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await get("v1/facility");
              setFa(response.length > 0 ? response : []);
            } catch (error) {
              console.error("Error Fetching Data", error);
            }
        };
        fetchData()
    }, [])

    return(
        <div className="container flex flex-col px-4 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">

            <div className="flex items-center justify-center w-full h-96 mr-6 lg:w-1/2">
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src={`${API_URL}/upload/banner/Diniyyah.jpeg`} alt="glasses photo" />
            </div>

            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Fasilitas Ma'had Al-Imam Asy-Syathiby</h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">Beberapa Fasilitas di Mahad Imam SYathiby</p>
                    <div className="grid gap-6 mt-8 sm:grid-cols-2">

                        {fa.map((item) => (

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span className="mx-3">{item.name}</span>
                            </div>
                        ))}

                        
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Facility