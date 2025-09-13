import React from 'react'
import LandingPage from './components/common/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/common/AboutUs'
import AdminLogin from './components/admin/AdminLogin'
import UserLogin from './components/Users/UserLogin'
import UserForm from './components/Users/UserForm';
import DashboardUser from './components/Users/UserDashboard'
import HostForm from './components/hosts/HostForm'
import HostLogin from './components/hosts/HostLogin'
import SideBar from './components/Users/UserSideBar'
import UserProfileView from './components/Users/UserProfileView'
import HostDashboard from './components/hosts/HostDashboard'
import HostProfile from './components/hosts/HostProfile'
import AddEvets from './components/hosts/AddEvents'
import AdminDashboard from './components/admin/AdminDasboard'
import UserList from './components/admin/UserList'
import ManageEvents from './components/admin/ManageEvents'
import HostEventsList from './components/hosts/HostEventsList'
import ListEvent from './components/Users/ListEvent'
import ProtectedRoute from './components/common/ProtectedRoute'
import HostList from './components/admin/HostList'
import EventDetails from './components/Users/EventDetails'
import HostEventDetails from './components/hosts/HostEventDetails'
import AdminEventDetails from './components/admin/AdminEventDetails'
import HostRegistrations from './components/hosts/HostRegistrations'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/UserLogin' element={<UserLogin />} />
          <Route path='/HostLogin' element={<HostLogin />} />
          <Route path='/HostForm' element={<HostForm />} />
          <Route path='/register' element={<UserForm />} />
          <Route path='/about' element={<AboutUs />} />

          {/* Protected Routes */}
          <Route
            path='/userDashboard'
            element={
              <ProtectedRoute>
                <DashboardUser />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/event/:id" element={<AdminEventDetails />} />

          <Route path="/event/:id" element={<ProtectedRoute><HostEventDetails /></ProtectedRoute>} />
          <Route path="/events/:id" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />

          <Route
            path='/userprofileview'
            element={
              <ProtectedRoute>
                <UserProfileView />
              </ProtectedRoute>
            }
          />
          <Route
            path='/HostDashboard'
            element={
              <ProtectedRoute>
                <HostDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/hostProfile'
            element={
              <ProtectedRoute>
                <HostProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path='/addevent'
            element={
              <ProtectedRoute>
                <AddEvets />
              </ProtectedRoute>
            }
          />
           <Route
            path='/registrations'
            element={
              <ProtectedRoute>
                <HostRegistrations />
              </ProtectedRoute>
            }
          />
          <Route
            path='/adminDashboard'
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/userlist'
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path='/hostlist'
            element={
              <ProtectedRoute>
                <HostList />
              </ProtectedRoute>
            }
          />
          <Route
            path='/manageevents'
            element={
              <ProtectedRoute>
                <ManageEvents />
              </ProtectedRoute>
            }
          />

          <Route
            path='/hostevnts'
            element={
              <ProtectedRoute>
                <HostEventsList />
              </ProtectedRoute>
            }
          />
          <Route
            path='/ListEvents'
            element={
              <ProtectedRoute>
                <ListEvent />
              </ProtectedRoute>
            }
          />
          <Route
            path='/sideBar'
            element={
              <ProtectedRoute>
                <SideBar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App