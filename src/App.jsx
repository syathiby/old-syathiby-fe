import './assets/tailwind.css'

import DashboardLayout from './layout/Dashboard'
import axios from 'axios'

const Api = "http://localhost:8080/api/post"
function App() {
  
  axios.get(Api)
  .then(response => {
    // Mengakses data yang diterima dari server
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
    // Menangani error jika permintaan gagal
    console.error(error);
  });

  return (
    <>
      <div>
        <DashboardLayout />
      </div>
    </>
  )

}

export default App