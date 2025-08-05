import React from 'react'
import LandingPage from './components/common/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/common/AboutUs'
import AdminLogin from './components/admin/AdminLogin'
import UserLogin from './components/Users/UserLogin'
import UserForm from './components/Users/UserForm';
import HostLogin from './components/hosts/HostLogin'
import DashboardUser from './components/Users/DashboardUser'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/HosterLogin' element={<HostLogin />} />
          <Route path='/UserLogin' element={<UserLogin />} />
          <Route path='/about' element={<AboutUs />} />
          {/* <Route path='/' element={<LandingPage />} /> */}
          <Route path='/register' element={<UserForm />} />
          <Route path='/dashboard' element={<DashboardUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App