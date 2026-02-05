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
import HealthPlans from './HealthPlans'
import HMOPlans from './HMOPlans'
import HmoPlanDetails from './HmoPlanDetails'
import BuyPlan from './BuyPlan'
import Profile from './Profile'
import ProfileInfo from './ProfileInfo'
import PaymentHistory from './PaymentHistory'
import NotFound from './NotFound'
import ComingSoon from './ComingSoon'

const isDev = import.meta.env.VITE_ENV === 'development' || import.meta.env.VITE_ENV === 'production'

function DashboardHome() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/blood-bank' element={<BloodBank />} />
      <Route path='/donate' element={<DonateBlood />} />
      <Route path='/blood-bank/get-started' element={<GetStarted />} />
      <Route path='/tele-consultation/register-doctor' element={<RegisterDoctor />} />
      <Route path='/save-a-soul' element={isDev ? <SaveASoul /> : <ComingSoon featureName="Save-a-Soul" />} />
      <Route path='/dashboard' element={isDev ? <Dashboard /> : <ComingSoon featureName="Health Plans" />} />
      <Route path='/tele-consultation' element={isDev ? <TeleConsulting /> : <ComingSoon featureName="TeleConsulting" />} />
      <Route path='/save-a-soul/create-cause' element={isDev ? <CreateCause /> : <ComingSoon featureName="Save-a-Soul" />} />
      <Route path='/save-a-soul/:id' element={isDev ? <CampaignDetails /> : <ComingSoon featureName="Save-a-Soul" />} />
      <Route path='/tele-consultation/book-appointment' element={isDev ? <BookAppointment /> : <ComingSoon featureName="TeleConsulting" />} />
      <Route path='*' element={<NotFound hideHeader inDashboard />} />
      <Route path='/health-plans' element={<HealthPlans />} />
      <Route path='/health-plans/hmo-plans' element={<HMOPlans />} />
      <Route path='/health-plans/hmo-plans/hmo-plan-details' element={<HmoPlanDetails />} />
      <Route path='/health-plans/hmo-plans/buy-plan' element={<BuyPlan />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/profile-information' element={<ProfileInfo />} />
      <Route path='/profile/payment-history' element={<PaymentHistory />} />
    </Routes>
  )
}

export default DashboardHome