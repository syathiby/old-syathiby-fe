import Swal from "sweetalert2";
import { post } from "../api";

export const handleFasilitas = async (facility, handleResult) => {
    try {
        const formdata = new FormData();
        formdata.append('name', facility.name);
    
        const response = await post('v1/admin/facility', formdata);
    
        if(response.status = 200){
          Swal.fire({
            icon: 'success',
            text: 'Kategori Success Add',
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            handleResult('ok')
          })
        }
    
      } catch (error) {
        Swal.fire({
          icon: 'error',
          text: "Data Unsuccess",
          timer: 3000,
          showConfirmButton: false
        })
      }
}