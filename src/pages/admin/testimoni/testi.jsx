import { useEffect, useState } from "react"
import CardDotted from "../../../component/card/cardDotted"
import LayoutAdmin from "../../../layout/adminLayout/layout"
import { handleTestimoni } from "../../../middleware/services/admin/testimonial"
import { get, remove } from "../../../middleware/services/api"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"
import Swal from "sweetalert2"

const formTesti = {
    name: "",
    angkatan: "",
    pesan: "",
    image: ""
}

const TestiMoni = () => {
    const [ testi, setTesti ] = useState(formTesti)
    const [ data, setData ] = useState([])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTesti((prevTesti) => ({
          ...prevTesti,
          [name]: value,
        }));
      };

      const handleRemove = async (id) => {
        try {
          const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          });
          if (result.isConfirmed) {
            await remove(`v1/admin/testimoni/${id}`);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your Data has been deleted.',
              icon: 'success',
              showConfirmButton: false,
              timer: 3000
            });
            fetchData();
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      
  
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
        const response = await get("v1/admin/testimoni");
        setData(response.length > 0 ? response : []);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
  
    const handleSubmit = () => {
      handleTestimoni(testi, (handleResult) => {
        if (handleResult === "ok") {
          setTesti(formTesti);
        }
      });
    };

    return(
        <LayoutAdmin>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <CardDotted>
                    <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      No
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Nama
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Pesan
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Created By
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data &&
                    data.map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          {item.pesan}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          {item.created_by}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          <div className="grid grid-cols-3 gap-4">
                            <a href="#">
                              <EyeOutlined style={{ fontSize: "16px" }} />
                            </a>
                            <a href="#">
                              <EditOutlined style={{ fontSize: "16px" }} />
                            </a>
                            <a href="#" onClick={() => handleRemove(item.id)}>
                              <DeleteOutlined style={{ fontSize: "16px" }} />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
                    </CardDotted>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <CardDotted>
                        <h1 className="text-center font-semibold my-4">Tambahkan Testimoni</h1>
                        <form>
                        <div className="py-2">
                            <label
                                htmlFor="name"
                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="peer border-none w-full px-4 py-3 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="name"
                                    value={testi.name} onChange={handleInputChange}
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Nama Santri
                                </span>
                            </label>
                        </div>
                        <div className="py-2">
                            <label
                                htmlFor="angkatan"
                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="angkatan"
                                    name="angkatan"
                                    className="peer border-none w-full px-4 py-3 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="name"
                                    value={testi.angkatan} onChange={handleInputChange}
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Angkatan Santri
                                </span>
                            </label>
                        </div>
                        <div className="py-2">
                            <label
                                htmlFor="pesan"
                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="pesan"
                                    name="pesan"
                                    className="peer border-none w-full px-4 py-3 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="name"
                                    value={testi.pesan} onChange={handleInputChange}
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Pesan Santri
                                </span>
                            </label>
                        </div>
                        <div className="my-4 w-full">
                                <label htmlFor="image" className="block text-sm font-medium text-gray-900">
                                    Jenis Kelamin
                                </label>

                                <select
                                    name="image"
                                    id="image"
                                    className="mt-1.5 w-full rounded-lg border-2 px-2 py-2 dark:bg-white border-gray-300 text-gray-700 sm:text-sm"
                                    value={testi.image}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Please select</option>
                                    <option value="avaIkhwan.png">Ikhwan</option>
                                    <option value="avaAkhwat.png">Akhwat</option>
                                </select>
                            </div>

                        <div className="py-4">
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

export default TestiMoni