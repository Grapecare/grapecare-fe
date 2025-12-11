import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import Doc from '../assets/images/doc.png'
import lady from '../assets/images/lady.png'
import BloodIcon from '../assets/icons/BloodIcon'
import ArrTopRight from '../assets/icons/ArrTopRight'
import appointment from '../assets/images/appointment.png'
import { GiBlood } from 'react-icons/gi'
import CampaignCard from '../components/CampaignCard'
import HeroCards from '../components/HeroCards'

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <h2 className='font-bold text-3xl text-[#333333]'>Dashboard</h2>
        <Button color='#fff' bg='#EA1D78'>Find Donor</Button>
      </div>
      <HeroCards />
      <div className="flex justify-between gap-5 mb-8">
        <div className="w-8/12 border border-[#33333380] rounded-[20px] px-6 py-9">
          <div className="w-2/5">
            <h2 className="mb-4 text-xl font-medium text-[#333333]">Discover Affordable, High-quality Treatment Options for You and Your Family.</h2>
            <Button color='#fff' bg='#EA1D78'>Explore Health Plans</Button>
          </div>
        </div>
        <div className="w-4/12 border border-[#33333380] rounded-[20px] px-6 py-9 flex flex-col items-center">
          <h2 className='text-[#333333CC] text-2xl mb-3'>Health Plan Status:</h2>
          <h2 className='text-[#333333] text-3xl font-semibold mb-6'>Inactive</h2>
          <span className="w-16 h-16 rounded-full bg-[#F93B99] flex justify-center items-center">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9882 15.3452L0 2.35702L2.35702 0L15.3452 12.9881L28.3334 0L30.6904 2.35702L17.7022 15.3452L30.6904 28.3333L28.3334 30.6904L15.3452 17.7022L2.35702 30.6904L0 28.3333L12.9882 15.3452Z" fill="white" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className='font-medium text-3xl text-[#004475]'>Our Charity Campaign </h2>
        <Button color='#F93B99' bg='#fff' variant='outline' borderColor='#F93B99'>Create Cause</Button>
      </div>
      <div className="">
        <h3 className='text-[#333333] font-medium text-xl'>Latest Campaigns</h3>
        <div className="grid grid-cols-3 gap-5 mb-5">
          <CampaignCard />
        </div>
        <div className="flex justify-center mb-10">
          <Button color='#F93B99' bg='#fff' variant='outline' borderColor='#F93B99'>See All</Button>
        </div>
        <div className="flex justify-between gap-5 mb-8">
          <div className="w-[60%] border border-[#33333380] rounded-[20px] px-6 py-9 flex">
            <div className="w-5/12">
              <h2 className="mb-4 text-xl font-medium text-[#333333]">Feeling unwell? Get Diagnosed and Treated Today - Schedule a Call With a Doctor.</h2>
              <Button rightIcon={<ArrTopRight color='#fff' />} color='#fff' bg='#EA1D78'>Book Appointment</Button>
            </div>
            <div className='max-w-5/12'>
              <Image src={appointment} alt="appointment" maxW={{ base: '100%' }}/>
            </div>
          </div>
          <div className="w-[40%] border border-[#33333380] rounded-[20px] px-6 py-9 flex flex-col items-center">
            <h2 className='text-[#333333CC] text-2xl mb-3 font-semibold'>Ready to Consult Online?</h2>
            <h2 className='text-[#333333] text-base font-medium mb-6'>Join our TeleConsulting platform today</h2>
            <Button rightIcon={<ArrTopRight color='#fff' />} color='#fff' bg='#F93B99'>Signup As Doctor</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard