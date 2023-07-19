import { useState } from "react"
import CardDotted from "../../../component/card/cardDotted"
import LayoutAdmin from "../../../layout/adminLayout/layout"
import { handleDataKategori } from "../../../middleware/services/admin/kategori"
import TableKategori from "./component/tLabel"

const formKategori = {
    name: "",
    color: ""
}

const Kategori = () => {

    const [ kategori, setKategori ] = useState(formKategori)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setKategori((prevKategori) => ({
        ...prevKategori,
        [name]: value
        }));
    };

    const handleSubmit = () => {
        handleDataKategori(kategori, (handleResult) =>{
            if(handleResult = 'ok'){
                setKategori(formKategori)
            }
        })
    }

    return (
        <LayoutAdmin>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                <div className="col-span-2">
                    <CardDotted>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                <thead className="text-left">
                                    <tr>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">No</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nama Kategori</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Color</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-left divide-gray-200">
                                    <TableKategori />
                                </tbody>
                            </table>
                        </div>
                    </CardDotted>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <CardDotted>
                        <form action="">
                        <div className="my-2 w-full">
                                <label
                                    htmlFor="name"
                                    className="relative block rounded-md border border-gray-200 shadow-sm w-full h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                >
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="peer border-none h-14 bg-transparent w-full px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                        placeholder="title"
                                        value={kategori.name}
                                        onChange={handleInputChange}
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Judul
                                    </span>
                                </label>
                            </div>

                            <div className="my-4 w-full">
                                <label htmlFor="color" className="block text-sm font-medium text-gray-900">
                                    Kategori
                                </label>

                                <select
                                    name="color"
                                    id="color"
                                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                                    value={kategori.color}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Please select</option>
                                    <option value="bg-blue-300">Blue</option>
                                    <option value="bg-red-300">Red</option>
                                    <option value="bg-yellow-300">Yellow</option>
                                    <option value="bg-green-300">Green</option>
                                    <option value="bg-purple-300">purple</option>
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
                                        post
                                    </span>
                                </a>
                            </div>
                        </form>
                    </CardDotted>
                </div>
               
            </div>
        </LayoutAdmin>
    )
}

export default Kategori