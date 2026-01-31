import React from 'react'
import { Route, Routes } from 'react-router-dom'
import useAuthSync from './hooks/useAuthSync'
import HomePage from './pages/HomePage'
import Login from './pages/auth/Login'
import Welcome from './pages/auth/onboarding/Welcome'
import Bloodbank from './pages/auth/onboarding/Bloodbank'
import OnboardingCarousel from './components/OnboardingCarousel'
import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import PasswordReset from './pages/auth/PasswordReset'
import VerifyAccount from './pages/auth/VerifyAccount'
import Dashboard from './pages/Dashboard'
import MainLayout from './layouts/MainLayout'
import DashboardHome from './pages/DashboardHome'
import ProtectedRoute from './components/ProtectedRoute'
import PersonalInfo from './pages/auth/PersonalInfo'
import NotFound from './pages/NotFound'
import Unsubscribe from './pages/Unsubscribe'


function App() {
  useAuthSync();

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/welcome' element={<Welcome />} />
      {/* <Route path='/blood-bank' element={<Bloodbank />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/onboarding' element={<OnboardingCarousel />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<PasswordReset />} />
      <Route path='/verify-account' element={<VerifyAccount />} />
      <Route path='/personal-info' element={<PersonalInfo />} />
      <Route path='/unsubscribe' element={<Unsubscribe />} />
      <Route path='/dashboard/*' 
        element={
          <ProtectedRoute>
            <MainLayout>
              <DashboardHome />
            </MainLayout>
          </ProtectedRoute>
        } 
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
