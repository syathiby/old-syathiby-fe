import Swal from "sweetalert2";
import { post } from "../api";

export const handleAddUser = async (user, handleResult) => {
    try {
        const formdata = new FormData();
        formdata.append('name', user.name);
        formdata.append('username', user.username);
        formdata.append('password', user.password);
        formdata.append('role', user.role);
        formdata.append('photo', user.photo);
    
        const response = await post('v1/signUp', formdata);
    
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