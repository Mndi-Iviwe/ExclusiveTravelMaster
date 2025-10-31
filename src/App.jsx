import './App.css'
import Launch from './pages/launch'
import Packages from './pages/Packages'
import Contact from './pages/ContactUs'
import Visa from './pages/Visa Application'
import VisaType from './pages/Visa Application Type'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'







function App() {
  

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/Launch" element={<Launch />} />
          <Route path="/AboutUs" element={<About />} /> 
          <Route path="/ContactUs" element={<Contact />} /> 
          <Route path="/Packages" element={<Packages />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/SignUp" element={<Register />} /> 
          <Route path="Visa Application" element={<Visa />} /> 
          <Route path="Visa Application Type" element={<VisaType />} /> 
        
        </Routes>
      <Footer />
    </>
  )
}

export default App
