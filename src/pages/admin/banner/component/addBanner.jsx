import { useNavigate } from "react-router-dom";
import CardDotted from "../../../../component/card/cardDotted"
import LayoutAdmin from "../../../../layout/adminLayout/layout"
import { handleBanner } from "../../../../middleware/services/admin/galeri";
import { useState } from "react";
import { useEffect } from "react";

const formBanner = {
    title: "",
    caption: "",
    image: ""
}

const AddBanner = () => {

    const navigate = useNavigate();

    const [banner, setBanner] = useState(formBanner);
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        if (imageFile) {
        const objectUrl = URL.createObjectURL(imageFile);
        setPreviewImage(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
        }
    }, [imageFile]);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
        setImageFile(files[0]);
        } else {
        setBanner((preBanner) => ({
            ...preBanner,
            [name]: value,
        }));
        }
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setPreviewImage(null);
    };

    const handleSubmit = () => {
        handleBanner(banner, imageFile, (handleResult) => {
        if (handleResult === "ok") {
            setBanner(formBanner);
            navigate("/admin/banner");
        }
        });
    };

    return(
        <LayoutAdmin>
            <div className="grid grid-cols-2">
                <div className="col-span-2">
                    <CardDotted>
                        <div>
                            <div>
                                <h1 className="text-center my-4 font-semibold">Tambahkan Banner</h1>
                            </div>

                            {previewImage && (
                                <div className="w-full">
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="w-full rounded-xl shadow-md object-cover h-96 mx-auto my-4"
                                    />
                                    <button
                                        className="block mx-auto bg-red-500 text-white px-4 py-2 rounded-md mt-2"
                                        onClick={handleRemoveImage}
                                    >
                                        Remove Image
                                    </button>
                                </div>
                            )}

                            <form>
                                {!previewImage && (
                                    <div>
                                        <label>
                                        <input
                                            type="file"
                                            name="image"
                                            className="text-sm text-grey-500
                                                    file:mr-5 file:py-2 file:px-6
                                                    file:rounded-full file:border-0
                                                    file:text-sm file:font-medium
                                                    file:bg-blue-50 file:text-blue-700
                                                    hover:file:cursor-pointer hover:file:bg-amber-50
                                                    hover:file:text-amber-700"
                                            value={banner.image}
                                            onChange={handleInputChange}
                                        />
                                        </label>
                                    </div>
                                )}

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
                                        value={banner.title}
                                        onChange={handleInputChange}
                                        />

                                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                        Judul
                                        </span>
                                    </label>
                                </div>

                                <div className="my-8 w-full">
                                    <label
                                        htmlFor="caption"
                                        className="relative block rounded-md border border-gray-200 shadow-sm h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    >
                                        <input
                                        type="text"
                                        id="caption"
                                        className="peer border-none w-full h-14 bg-transparent px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                        placeholder="caption"
                                        name="caption"
                                        value={banner.caption}
                                        onChange={handleInputChange}
                                        />

                                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                        Caption
                                        </span>
                                    </label>
                                </div>

                                <div className="my-8 w-full">
                                    <label
                                        htmlFor="link"
                                        className="relative block rounded-md border border-gray-200 shadow-sm h-14 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                    >
                                        <input
                                        type="text"
                                        id="link"
                                        className="peer border-none w-full h-14 bg-transparent px-4 py-4 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                        placeholder="link"
                                        name="link"
                                        value={banner.link}
                                        onChange={handleInputChange}
                                        />

                                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                        Link
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
                        </div>
                    </CardDotted>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AddBanner