import React from 'react'
import LandingPage from './components/common/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/common/AboutUs'
import AdminLogin from './components/admin/AdminLogin'
import UserLogin from './components/Users/UserLogin'
import UserForm from './components/Users/UserForm';
import DashboardUser from './components/Users/DashboardUser'
import HostForm from './components/hosts/HostForm'
import HostLogin from './components/hosts/HostLogin'
import SideBar from './components/Users/UserSideBar'
import UserProfileView from './components/Users/UserProfileView'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/HosterForm' element={<HostForm />} />
          <Route path='/UserLogin' element={<UserLogin />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/register' element={<UserForm />} />
          <Route path='/hostRegister' element={<HostLogin />} />
          <Route path='/userDashboard' element={<DashboardUser />} />
          <Route path='/userprofileview' element={<UserProfileView />} />
          <Route path='/sideBar' element={<SideBar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App