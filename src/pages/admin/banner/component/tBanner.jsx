import { useEffect, useState } from "react"
import { API_URL, get, remove } from "../../../../middleware/services/api"
import Swal from "sweetalert2"

import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"

const TableBanner = () => {
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
            await remove(`v1/admin/banner/${id}`);
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
            const response = await get('v1/admin/banner');
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

    const truncateDescription = (description, maxLength) => {
        const strippedDescription = description.replace(/(<([^>]+)>)/gi, '');
        if (strippedDescription.length > maxLength) {
          return strippedDescription.substring(0, maxLength) + '...';
        }
        return strippedDescription;
      };

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
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.title}</td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{truncateDescription(item.caption, 12)}</td>
                                <td className="px-4 py-2 text-gray-700">
                                    <img src={`${API_URL}/upload/Banner/${item.image}`} className="h-10" alt="" />
                                </td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.link}</td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.created_by}</td>
                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.created_at}</td>
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

export default TableBanner