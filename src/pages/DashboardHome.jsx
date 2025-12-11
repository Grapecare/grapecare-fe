import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import BloodBank from './BloodBank'
import SaveASoul from './SaveASoul'
import DonateBlood from './DonateBlood'

function DashboardHome() {
  return (
    <Routes>
      <Route path='/home' element={<Dashboard />} />
      <Route path='/blood-bank' element={<BloodBank />} />
      <Route path='/save-a-soul' element={<SaveASoul />} />
      <Route path='/donate' element={<DonateBlood />} />
    </Routes>
  )
}

export default DashboardHome