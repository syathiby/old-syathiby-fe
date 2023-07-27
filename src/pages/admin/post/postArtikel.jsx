import { useEffect, useState } from "react"
import LayoutAdmin from "../../../layout/adminLayout/layout"
import { get } from "../../../middleware/services/api"
import { handleArtikel } from "../../../middleware/services/admin/post"
import ReactQuill from "react-quill"
import CardDotted from "../../../component/card/cardDotted"
import { useNavigate } from "react-router-dom"

const formArtikel = {
    title: "",
    description: "",
    img: "",
    label: "",
    meta: ""
}

const AddPost = () => {

    const [artikel, setArtikel] = useState(formArtikel);
    const [imageFile, setImageFile] = useState(null);
    const [kategori, setKategori] = useState([]);

    
    const navigate = useNavigate()

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

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img") {
            setImageFile(files[0]);
        } else {
            setArtikel((prevArtikel) => ({
                ...prevArtikel,
                [name]: value,
            }));
        }
    };

    const handleQuillChange = (value) => {
        setArtikel((prevArtikel) => ({
            ...prevArtikel,
            description: value,
        }));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.shiftKey === false) {
            e.preventDefault();
            const value = e.target.value;
            const selectionStart = e.target.selectionStart;

            setArtikel((prevArtikel) => ({
                ...prevArtikel,
                description: value.substring(0, selectionStart) + "\n" + value.substring(selectionStart),
            }));
        }
    };

    const handleSubmit = () => {
        handleArtikel(artikel, imageFile, (handleResult) => {
            if (handleResult === "ok") {
                setArtikel(formArtikel);
                navigate('/admin/artikel')
            }
        });
    };

    return(
        <LayoutAdmin>
            <div>
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
                                    className="peer border-none w-full h-14 bg-transparent px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="title"
                                    name="title"
                                    value={artikel.title}
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
                            <label htmlFor="label" className="block text-sm font-medium text-gray-900">
                                Kategori
                            </label>

                            <select
                                name="label"
                                id="label"
                                className="mt-1.5 w-full rounded-lg border-2 px-2 py-2 dark:bg-white border-gray-300 text-gray-700 sm:text-sm"
                                value={artikel.label}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>Please select</option>
                                {kategori.map((item) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="my-2">
                            <ReactQuill value={artikel.description} onChange={handleQuillChange} />
                        </div>

                        <div className="my-2">
                            
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" name="img" type="file" value={artikel.img}
                                    onChange={handleInputChange} className="hidden" />
                                </label>
                            </div> 

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
        </LayoutAdmin>
    )
}

export default AddPost