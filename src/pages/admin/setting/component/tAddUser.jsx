import { useState } from "react"
import { get, remove } from "../../../../middleware/services/api";
import { useEffect } from "react";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const TableAddUser = () => {
    const [apiData, setApiData] = useState([])

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
            await remove(`v1/admin/deleteUsers/${id}`);
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

      const fetchData = async () => {
        try {
            const response = await get('v1/admin/users');
            const filterData = response.filter(user => user.role !== "superuser")
            setApiData(filterData);
        } catch (error) {
            console.error("Error:", error);
            setApiData([]);
        }
    };

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData()
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return(
        <>
            {apiData.map((item, index) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{index + 1}</td>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.name}</td>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.username}</td>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.role}</td>
                      <td className="text-gray-700 whitespace-nowrap">
                            <div className="grid grid-cols-3 gap-4">
                                <a href="#">
                                    <EyeOutlined style={{ fontSize: '16px' }} />
                                </a>
                                <a href="#">
                                    <EditOutlined style={{ fontSize: '16px' }} />
                                </a>
                                <a href="#" onClick={() => handleRemove(item.id)}>
                                    <DeleteOutlined style={{ fontSize: '16px' }} />
                                </a>
                            </div>
                        </td>
                    </tr>
                  ))}
        </>
    )
}

export default TableAddUser