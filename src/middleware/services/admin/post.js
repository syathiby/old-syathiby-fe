import Swal from "sweetalert2";
import { post, put } from "../api";

export const handleArtikel = async (artikel, imageFile, handleResult) => {
  try {
      const formdata = new FormData();
      formdata.append("title", artikel.title);
      formdata.append("description", artikel.description);
      formdata.append("label", artikel.label);
      formdata.append("img", imageFile);
  
      const response = await post('v1/admin/post', formdata);
  
      if(response.status = 200){
        Swal.fire({
          icon: 'success',
          text: 'Artikel Success Add',
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

export const handleUpdateArtikel = async (artikel, imageFile, link, id, handleResult) => {
  try {
    const formdata = new FormData();
    formdata.append("status_publish", artikel.status_publish);
    formdata.append("link", link);
    formdata.append("img", imageFile);

    const response = await post(`v1/admin/post/${id}`, formdata);

    if(response.status = 200){
      Swal.fire({
        icon: 'success',
        text: 'Artikel Success Updated',
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
};