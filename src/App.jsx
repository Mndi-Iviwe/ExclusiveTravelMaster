import './App.css'
import Launch from './pages/launch'
import Packages from './pages/Packages'
import Contact from './pages/ContactUs'
import Visa from './pages/Visa Application'

import About from './pages/AboutUs'
import Login from './pages/LogIn'
import Register from './pages/SignUp'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminHub from './pages/admin/UserManagement'
import Booking from './pages/payment/bookconfirm'
import Pay from './pages/payment/paydetails'

import AdminLayout from './layouts/adminlayout'
import DefaultLayout from './layouts/defaultlayout'



function App() {
  

  return (
    <>
    <Router> 
      <Routes> 
      
      <Route element={<DefaultLayout />}>
            <Route path="/" element={<Launch />} />
            <Route path="/Launch" element={<Launch />} />
            <Route path="/AboutUs" element={<About />} /> 
            <Route path="/ContactUs" element={<Contact />} /> 
            <Route path="/Packages" element={<Packages />} /> 
            <Route path="/Login" element={<Login />} /> 
            <Route path="/SignUp" element={<Register />} /> 
            <Route path="Visa Application" element={<Visa />} />
            <Route path="payment/bookconfirm" element={<Booking />} />
            <Route path="payment/paydetails" element={<Pay />} /> 
      </Route>
        

        <Route element={<AdminLayout />}>
          <Route path="admin/UserManagement" element={<AdminHub />} />
        </Route>

        </Routes>
    </Router>     
    </>
  )
}

export default App
