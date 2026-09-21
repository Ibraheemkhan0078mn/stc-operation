import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminProtectedLayout = ({children}) => {
    
    
    let navigate= useNavigate()
    
      useEffect(() => {
        async function checkMe() {
          const response = await axios.get(import.meta.env.VITE_backend_base_url + "/auth/adminCheck", { withCredentials: true });
    
          if (response.data.success) {
            console.log("The data is working")
          } else {
            navigate("/")
          }
        }
        checkMe()
      }, [])
    
    



  return (
    <div>
      {children}
    </div>
  )
}

export default AdminProtectedLayout
