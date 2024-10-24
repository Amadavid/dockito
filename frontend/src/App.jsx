import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppiontments from './pages/MyAppiontments'
import MyProfile from './pages/MyProfile'
import Appointments from './pages/Appointment'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <div className='mx -4 sm:mx-[10%]'> 
    <Navbar />

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:speciality' element={<Doctors />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/my-appiontments' element={<MyAppiontments />} />
      <Route path='/My-Profile' element={<MyProfile />} />
      <Route path='/appointment/:docId' element={<Appointments />} />



      
    </Routes>
      
    </div>
  )
}

export default App
