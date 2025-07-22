import React from 'react'
import LandingPage from './components/common/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WeddingEvent from './components/common/WeddingEvent'
import AboutUs from './components/common/AboutUs'
import UserForm from './components/Users/UserForm'
import AdminLogin from './components/admin/AdminLogin'


function App() {
  return (
    <div>
      <Router>
        <Routes>
       <Route path='/' element={<LandingPage />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/wedding1' element={<WeddingEvent />} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/register' element={<UserForm/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App