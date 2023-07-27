import { useEffect, useState } from "react"
import { API_URL, get, remove } from "../../../middleware/services/api"

import LayoutAdmin from "../../../layout/adminLayout/layout"
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const FotoGaleri = () => {

    const [ foto, setFoto ] = useState(null)
    
    const navigate = useNavigate()

      const truncateDescription = (description, maxLength) => {
        const strippedDescription = description.replace(/(<([^>]+)>)/gi, '');
        if (strippedDescription.length > maxLength) {
          return strippedDescription.substring(0, maxLength) + '...';
        }
        return strippedDescription;
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
          const response = await get("v1/admin/galeri");
          const photoItems = response.filter((item) => item.type === "photo");
          setFoto(photoItems);
        } catch (error) {
          console.error("Error Fetching Data", error);
        }
      };
      

      const handleNavigate = () => {
        navigate('/admin/galeri/foto/add')
      }

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
            await remove(`v1/admin/galeri/${id}`);
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
    

    return(
        <LayoutAdmin>
            <div className="flex mb-8 justify-between items-center">
                <h1 className="text-center font-bold text-2xl">Galeri Foto</h1>
                <div>
                    <a onClick={handleNavigate} htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-8 h-8 border-2 border-current rounded-full cursor-pointer bg-blue-300 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-500 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <PlusOutlined />
                        </div>
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {foto && foto.map((item) => (
                <div key={item.id} className="relative">
                  <a href="#" className="block">
                    <img
                      alt={item.title}
                      src={`${API_URL}/upload/Galeri/${item.filename}`}
                      className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                    />
                    <div className="absolute bg-red top-2 right-2">
                      {/* Delete Button */}
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-white font-bold hover:text-red-500 transition duration-300"
                      >
                        <DeleteOutlined className="mb-2" />
                      </button>
                    </div>
                  </a>
                  <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">{item.title}</strong>
                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
                    <p className="mt-0.5 opacity-50 sm:mt-0">{truncateDescription(item.caption, 12)} <br/> {item.nkategori}</p>
                  </div>
                </div>
              ))}

            </div>
        </LayoutAdmin>
    )
}

export default FotoGaleri