import Swal from "sweetalert2";
import { post } from "../api";

export const handleDataKategori = async (kategori, handleResult) => {
    try {
        const formdata = new FormData();
        formdata.append('name', kategori.name);
        formdata.append('color', kategori.color);
    
        const response = await post('v1/admin/label', formdata);
    
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