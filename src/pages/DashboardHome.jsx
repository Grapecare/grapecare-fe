import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import BloodBank from './BloodBank'
import SaveASoul from './SaveASoul'
import DonateBlood from './DonateBlood'
import GetStarted from './GetStarted'
import CreateCause from './CreateCause'
import CampaignDetails from './CampaignDetails'
import TeleConsulting from './TeleConsulting'
import RegisterDoctor from './RegisterDoctor'
import BookAppointment from './BookAppointment'
import NotFound from './NotFound'
import ComingSoon from './ComingSoon'

const isDev = import.meta.env.VITE_ENV === 'development' || import.meta.env.VITE_ENV === 'production'

function DashboardHome() {
  return (
    <Routes>
      <Route path='/home' element={<Dashboard />} />
      <Route path='/blood-bank' element={<BloodBank />} />
      <Route path='/donate' element={<DonateBlood />} />
      <Route path='/get-started' element={<GetStarted />} />
      <Route path='/register-doctor' element={<RegisterDoctor />} />
      <Route path='/save-a-soul' element={isDev ? <SaveASoul /> : <ComingSoon featureName="Save-a-Soul" />} />
      <Route path='/health-plans' element={isDev ? <Dashboard /> : <ComingSoon featureName="Health Plans" />} />
      <Route path='/tele-consultation' element={isDev ? <TeleConsulting /> : <ComingSoon featureName="TeleConsulting" />} />
      <Route path='/create-cause' element={isDev ? <CreateCause /> : <ComingSoon featureName="Save-a-Soul" />} />
      <Route path='/save-a-soul/:id' element={isDev ? <CampaignDetails /> : <ComingSoon featureName="Save-a-Soul" />} />
      <Route path='/book-appointment' element={isDev ? <BookAppointment /> : <ComingSoon featureName="TeleConsulting" />} />
      <Route path='*' element={<NotFound hideHeader inDashboard />} />
    </Routes>
  )
}

export default DashboardHome