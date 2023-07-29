import Swal from "sweetalert2";
import { post } from "../api";

export const handleTestimoni = async (testi, handleResult) => {
    try {
        const formdata = new FormData();
        formdata.append('name', testi.name);
        formdata.append('angkatan', testi.angkatan);
        formdata.append('pesan', testi.pesan);
        formdata.append('image', testi.image);
    
        const response = await post('v1/admin/testimoni', formdata);
    
        if(response.status = 200){
          Swal.fire({
            icon: 'success',
            text: 'Testimoni Success Add',
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