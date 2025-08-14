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
import ListEvents from './components/common/ListEvents'
import HostDashboard from './components/hosts/HostDashboard'
import HostProfile from './components/hosts/HostProfile'
import AddEvets from './components/hosts/AddEvents'
import AdminDashboard from './components/admin/AdminDasboard'
import ManageUser from './components/admin/ManageUser'
import ManageEvents from './components/admin/ManageEvents'
import ManageHost from './components/admin/ManageHost'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/HostForm' element={<HostForm />} />
          <Route path='/UserLogin' element={<UserLogin />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/register' element={<UserForm />} />
          <Route path='/hostLogin' element={<HostLogin />} />
          <Route path='/userDashboard' element={<DashboardUser />} />
          <Route path='/userprofileview' element={<UserProfileView />} />
          <Route path='/HostDashboard' element={<HostDashboard />} />
          <Route path='/hostProfile' element={<HostProfile />} />
          <Route path='/hostProfile' element={<HostProfile />} />
          <Route path='/addevent' element={<AddEvets />} />
          <Route path='/adminDashboard' element={<AdminDashboard />} />
          <Route path='/logout' element={<AdminLogin />} />
          <Route path='/manageusers' element={<ManageUser />} />
          <Route path='/manageevents' element={<ManageEvents />} />
          <Route path='/managehost' element={<ManageHost />} />
          <Route path='/ListEvents' element={<ListEvents />} />
          <Route path='/sideBar' element={<SideBar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App