import { useEffect, useState } from "react"
import { get, remove } from "../../../../middleware/services/api"
import Swal from "sweetalert2"

import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"

const TableKategori = () => {
    const [apiData, setApiData] = useState(null);

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
            await remove(`v1/admin/label/${id}`);
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
            const response = await get('v1/admin/label');
            setApiData(response);
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

    return (
        <>
            {apiData === null ? (
                <tr>
                    <td className="col-span-6">Loading</td>
                </tr>
            ) : apiData.length === 0 ? (
                <div>No data available</div>
            ) : (
                <>
                    {apiData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.name}</td>
                                <td className="px-4 py-2 text-gray-700"><div className={`h-10 w-10 rounded-md border-current border-2 ${item.color}`}></div></td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.created_by}</td>
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
                        )
                    })}
                </>
            )}
        </>
    )
}

export default TableKategori