import { useEffect, useState } from "react";
import LayoutAdmin from "../../../layout/adminLayout/layout";
import CardDotted from "../../../component/card/cardDotted";
import { get, remove } from "../../../middleware/services/api";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { handleFasilitas } from "../../../middleware/services/admin/fasilitas";
import Swal from "sweetalert2";

const formFacility = {
    name: ""
}

const FacilityAdmin = () => {
    const [fasilitas, setFasilitas] = useState(null);
    const [facility, setFacility] = useState(formFacility);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFacility((prevFacility) => ({
        ...prevFacility,
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
            await remove(`v1/admin/facility/${id}`);
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
        const response = await get("v1/admin/facility");
        setFasilitas(response.length > 0 ? response : []);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
  
    const handleSubmit = () => {
      handleFasilitas(facility, (handleResult) => {
        if (handleResult === "ok") {
          setFacility(formFacility);
        }
      });
    };

  return (
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
                      Created By
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Created At
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {fasilitas &&
                    fasilitas.map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          {item.created_by}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-normal text-gray-900">
                          {item.created_at}
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
                <div className="p-1">
                    <h1 className="pb-4 font-semibold text-center">Add Fasilitas mahad</h1>
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
                                    value={facility.name} onChange={handleInputChange}
                                />

                                <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                >
                                    Nama Fasilitas
                                </span>
                            </label>
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
                </div>
            </CardDotted>
        </div>

      </div>
    </LayoutAdmin>
  );
};

export default FacilityAdmin;
