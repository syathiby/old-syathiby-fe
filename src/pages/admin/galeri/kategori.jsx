import { useEffect, useState } from "react"
import CardDotted from "../../../component/card/cardDotted"
import LayoutAdmin from "../../../layout/adminLayout/layout"
import { handleKategoriG } from "../../../middleware/services/admin/galeri"
import TableKategoriG from "./component/tKategoriG"

const formGaleriK = {
    nkategori: ""
}

const GaleriKategori = () => {

    const [kat, setKat] = useState(formGaleriK)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setKat((prevKategori) => ({
        ...prevKategori,
        [name]: value
        }));
    };

    const handleSubmit = () => {
        handleKategoriG(kat, (handleResult) =>{
            if(handleResult = 'ok'){
                setKat(formGaleriK)
            }
        })
    }

    return(
        <LayoutAdmin>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <CardDotted>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                    <thead className="text-left">
                                        <tr>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">No</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nama Kategori</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y text-left divide-gray-200">
                                        <TableKategoriG/>
                                    </tbody>
                                </table>
                            </div>
                        </CardDotted>
                    
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <CardDotted>
                        <div>
                            <h1 className="my-2 font-semibold text-center">Add Kategori</h1>
                        </div>
                        <form>
                            <div className="my-2 w-full">
                                <label
                                    htmlFor="nkategori"
                                    className="relative block rounded-md border border-gray-200 shadow-sm w-full h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                >
                                    <input
                                        type="text"
                                        id="nkategori"
                                        name="nkategori"
                                        className="peer border-none lowercase h-14 bg-transparent w-full px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                        placeholder="nkategori"
                                        value={kat.nkategori}
                                        onChange={handleInputChange}
                                    />

                                    <span
                                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                    >
                                        Judul
                                    </span>
                                </label>
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

export default GaleriKategori