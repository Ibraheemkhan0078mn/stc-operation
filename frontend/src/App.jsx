import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Sidebar from './components/Sidebar'
import Projects from './pages/Projects'
import ProjectCreate from './pages/ProjectCreate'
import AdminProtectedLayout from './layout/AdminProtectedLayout'
import ProjectUpdate from './pages/ProjectUpdate'
import MemberCreate from './pages/MemberCreate'

const App = () => {
  return (
    <div className='flex flex-1'>


      <BrowserRouter>
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/MemberCreate' element={<MemberCreate />} />
            <Route path='/projects' element={<AdminProtectedLayout><Projects /></AdminProtectedLayout>} />
            <Route path='/projectCreate' element={<AdminProtectedLayout><ProjectCreate /></AdminProtectedLayout>} />
            <Route path='/projectUpdate/:id' element={<ProjectUpdate/>} />
     
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
