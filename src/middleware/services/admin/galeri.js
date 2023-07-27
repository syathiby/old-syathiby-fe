import Swal from "sweetalert2";
import { post } from "../api";

export const handleFoto = async (foto, imageFile, handleResult) => {
    try {
        const formdata = new FormData();
        formdata.append("title", foto.title);
        formdata.append("type", foto.type);
        formdata.append("caption", foto.caption);
        formdata.append("kategori", foto.kategori);
        formdata.append("img", imageFile);
    
        const response = await post('v1/admin/galeri', formdata);
    
        if(response.status = 200){
          Swal.fire({
            icon: 'success',
            text: 'Foto Success Add',
            showConfirmButton: false,
            timer: 3000,
            title: 'Success'
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

export const handleBanner = async (banner, imageFile, handleResult) => {
    try {
        const formdata = new FormData();
        formdata.append("title", banner.title);
        formdata.append("caption", banner.caption);
        formdata.append("link", banner.link);
        formdata.append("img", imageFile);
    
        const response = await post('v1/admin/banner', formdata);
    
        if(response.status = 200){
          Swal.fire({
            icon: 'success',
            text: 'Banner Success Add',
            showConfirmButton: false,
            timer: 3000,
            title: 'Success'
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

export const handleKategoriG = async ( kat, handleResult ) => {

    try {
        const formdata = new FormData();
        formdata.append("nkategori", kat.nkategori);
    
        const response = await post('v1/admin/kategori', formdata);
    
        if(response.status = 200){
          Swal.fire({
            icon: 'success',
            text: 'Kategori on Galeri Success Add',
            showConfirmButton: false,
            timer: 3000,
            title: 'Success'
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

export const handleVideo = async ( video, handleResult ) => {

    try {
        const formdata = new FormData();
        formdata.append("title", video.title);
        formdata.append("filename", video.filename);
        formdata.append("type", video.type);
        formdata.append("caption", video.caption);
        formdata.append("kategori", video.kategori);
    
        const response = await post('v1/admin/galeri', formdata);
    
        if(response.status = 200){
          Swal.fire({
            icon: 'success',
            text: 'Video Success Add',
            showConfirmButton: false,
            timer: 3000,
            title: 'Success'
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