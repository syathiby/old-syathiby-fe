import { useNavigate } from "react-router-dom"
import CardDotted from "../../../component/card/cardDotted"
import LayoutAdmin from "../../../layout/adminLayout/layout"
import TableBanner from "./component/tBanner"

const BannerAdmin = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/admin/banner/add')
    }

    return(
        <LayoutAdmin>
            <div className="grid grid-cols-2">
                <div className="col-span-2">
                    <CardDotted>
                        <div className="flex mb-8 justify-between items-center">
                            <h1 className="text-center font-bold text-2xl">Galeri Foto</h1>
                            <div>
                                <a onClick={handleNavigate} htmlFor="dropzone-file" className="flex flex-col font-bold px-4 py-2 items-center justify-center h-10 w-full border-2 border-current rounded-full cursor-pointer bg-blue-300 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-500 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center">
                                        Tambah Banner
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                <thead className="text-left">
                                    <tr>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">No</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caption</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Link</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pembuat</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tanggal Upload</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-left divide-gray-200">
                                    <TableBanner />
                                </tbody>
                            </table>
                        </div>
                    </CardDotted>

                </div>
            </div>
        </LayoutAdmin>
    )
}

export default BannerAdmin