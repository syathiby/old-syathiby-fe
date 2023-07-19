import { useEffect, useState } from "react"
import CardDotted from "../../../component/card/cardDotted"
import LayoutAdmin from "../../../layout/adminLayout/layout"
import { get } from "../../../middleware/services/api"

const formArtikel = {
    title: "",
    description: "",
    img: "",
    label: "",
    meta: ""
}

const Artikel = () => {

    const [ kategori, setKategori ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await get("v1/admin/label");
            setKategori(response);
          } catch (error) {
            console.error("Error:", error);
            setKategori([]);
          }
        };
    
        fetchData();
      }, []);

    return (
        <LayoutAdmin>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                <div className="col-span-2">
                    <CardDotted>
                        <form>

                            <div className="my-2 w-full">
                                <label
                                    htmlFor="title"
                                    className="relative block rounded-md border border-gray-200 shadow-sm h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                >
                                    <input
                                        type="text"
                                        id="title"
                                        className="peer border-none h-14 bg-transparent px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                        placeholder="title"
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
                                >
                                    <option value="" disabled>Please select</option>
                                    {kategori.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>

                            

                            <div>
                                <a
                                    href="#"
                                    // onClick={handleSubmit}
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

                <div className="col-span-2 lg:col-span-1">
                    <CardDotted></CardDotted>
                </div>

            </div>
        </LayoutAdmin>
    )
}

export default Artikel