import { useEffect, useState } from "react";
import LayoutAdmin from "../../../../layout/adminLayout/layout";
import CardDotted from "../../../../component/card/cardDotted";
import { useNavigate } from "react-router-dom";
import { handleFoto } from "../../../../middleware/services/admin/galeri";
import { get } from "../../../../middleware/services/api";

const formFoto = {
  title: "",
  type: "photo",
  caption: "",
  kategori: "",
  img: "",
};

const AddFoto = () => {
  const navigate = useNavigate();

  const [foto, setFoto] = useState(formFoto);
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [kategori, setKategori] = useState([]);

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

  useEffect(() => {
    if (imageFile) {
      const objectUrl = URL.createObjectURL(imageFile);
      setPreviewImage(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [imageFile]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setImageFile(files[0]);
    } else {
      setFoto((prevFoto) => ({
        ...prevFoto,
        [name]: value,
      }));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setPreviewImage(null);
  };

  const handleSubmit = () => {
    handleFoto(foto, imageFile, (handleResult) => {
      if (handleResult === "ok") {
        setFoto(formFoto);
        navigate("/admin/galeri/foto");
      }
    });
  };

  return (
    <LayoutAdmin>
      <CardDotted>
        <div>
          <div>
            <h1 className="text-center my-4 font-semibold">Tambahkan Foto</h1>
          </div>

          {previewImage && (
            <div className="w-full">
              <img
                src={previewImage}
                alt="Preview"
                className="w-96 object-contain h-48 mx-auto my-4"
              />
              <button
                className="block mx-auto bg-red-500 text-white px-4 py-2 rounded-md mt-4"
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
                    name="img"
                    className="text-sm text-grey-500
                            file:mr-5 file:py-2 file:px-6
                            file:rounded-full file:border-0
                            file:text-sm file:font-medium
                            file:bg-blue-50 file:text-blue-700
                            hover:file:cursor-pointer hover:file:bg-amber-50
                            hover:file:text-amber-700"
                    value={foto.img}
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
                  value={foto.title}
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
                  value={foto.caption}
                  onChange={handleInputChange}
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Caption
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
                    className="mt-1.5 w-full rounded-lg dark:bg-white px-2 py-2 border-2 border-gray-300 text-gray-700 sm:text-sm"
                    value={foto.kategori}
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
                  post
                </span>
              </a>
            </div>
          </form>
        </div>
      </CardDotted>
    </LayoutAdmin>
  );
};

export default AddFoto;
