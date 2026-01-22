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

function DashboardHome() {
  return (
    <Routes>
      <Route path='/home' element={<Dashboard />} />
      <Route path='/blood-bank' element={<BloodBank />} />
      <Route path='/save-a-soul' element={<SaveASoul />} />
      <Route path='/donate' element={<DonateBlood />} />
      <Route path='/get-started' element={<GetStarted />} />
      <Route path='/register-doctor' element={<RegisterDoctor />} />
      <Route path='/create-cause' element={<CreateCause />} />
      <Route path='/tele-consultation' element={<TeleConsulting />} />
      <Route path='/save-a-soul/:id' element={<CampaignDetails />} />
      <Route path='/book-appointment' element={<BookAppointment />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default DashboardHome