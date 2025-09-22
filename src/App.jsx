import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/auth/Login'
import Welcome from './pages/auth/onboarding/Welcome'
import Bloodbank from './pages/auth/onboarding/Bloodbank'
import OnboardingCarousel from './components/OnboardingCarousel'
import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import PasswordReset from './pages/auth/PasswordReset'
import VerifyAccount from './pages/auth/VerifyAccount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/blood-bank' element={<Bloodbank />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/onboarding' element={<OnboardingCarousel />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<PasswordReset />} />
      <Route path='/verify-account' element={<VerifyAccount />} />
    </Routes>
  )
}

export default App
