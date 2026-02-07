import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import Doc from '../assets/images/doc.png'
// import lady from '../assets/images/lady.png'
import BloodIcon from '../assets/icons/BloodIcon'
import ArrTopRight from '../assets/icons/ArrTopRight'
import appointment from '../assets/images/appointment.png'
import { GiBlood } from 'react-icons/gi'
import CampaignCard from '../components/CampaignCard'
import HeroCards from '../components/HeroCards'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import disc from '../assets/images/disc.png'

// const isDev = import.meta.env.VITE_ENV === 'development'

function Dashboard() {
  const navigate = useNavigate()
  //get current user data from redux persist
  // const {user} = useSelector((state) => state.auth)

  return (
    <div>
      <div className="flex justify-between mb-8">
        <h2 className='font-bold text-xl md:text-3xl text-[#333333]'>Dashboard</h2>
        <Button color='#fff' bg='#EA1D78' _hover={{ bg: '#C01864' }} _focus={{ boxShadow: 'none' }} _focusVisible={{ boxShadow: 'none' }} className='text-base' onClick={() => navigate('/dashboard/blood-bank')}>Find Donor</Button>
      </div>
      <HeroCards />
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">
        <div className="w-full md:w-8/12 border border-[#33333380] rounded-[20px] px-3 md:px-6 pt-6 pb-6 md:pb-0 flex justify-between">
          <div className="w-3/5 md:w-2/5">
            <h2 className="mb-4 text-lg md:text-xl font-medium text-[#333333]">Discover Affordable, High-quality Treatment Options for You and Your Family.</h2>
            <Button color='#fff' bg='#EA1D78' _hover={{ bg: '#C01864' }} _focus={{ boxShadow: 'none' }} _focusVisible={{ boxShadow: 'none' }} 
              className='text-sm'
              rightIcon={<ArrTopRight color='#fff' />}
              onClick={() => navigate('/dashboard/tele-consultation')}
            >
              Explore Health Plans
            </Button>
          </div>
          <div className="w-2/5 md:w-3/5 flex items-center md:justify-end">
            <Image src={disc} alt='disc' />
          </div>
        </div>
        <div className="w-full md:w-4/12 border border-[#33333380] rounded-[20px] px-6 py-5 md:py-9 flex flex-row justify-between md:flex-col items-center">
          <div className="flex flex-col items-start md:items-center">
            <h2 className='text-[#333333CC] text-xl md:text-2xl mb-2 md:mb-3'>Health Plan Status:</h2>
            <h2 className='text-[#333333] text-2xl md:text-3xl font-semibold mb-0 md:mb-6'>Inactive</h2>
          </div>
          <span className="hidden md:flex w-16 h-16 rounded-full bg-[#F93B99] justify-center items-center">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9882 15.3452L0 2.35702L2.35702 0L15.3452 12.9881L28.3334 0L30.6904 2.35702L17.7022 15.3452L30.6904 28.3333L28.3334 30.6904L15.3452 17.7022L2.35702 30.6904L0 28.3333L12.9882 15.3452Z" fill="white" />
            </svg>
          </span>
          <span className="w-10 h-10 md:hidden rounded-full bg-[#F93B99] flex justify-center items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.49411 7.67262L0 1.17851L1.17851 0L7.67261 6.49404L14.1667 0L15.3452 1.17851L8.85111 7.67262L15.3452 14.1666L14.1667 15.3452L7.67261 8.85112L1.17851 15.3452L0 14.1666L6.49411 7.67262Z" fill="white"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className='font-medium text-xl md:text-3xl text-[#004475]'>Our Charity Campaign </h2>
        {/* Create Cause button - show only when campaigns exist
        <Button color='#F93B99' bg='#fff' variant='outline' borderColor='#F93B99'
          _hover={{ bg: '#FDF2F8' }}
          _focus={{ boxShadow: 'none' }}
          _focusVisible={{ boxShadow: 'none' }}
          onClick={()=>navigate('/dashboard/create-cause')}
        >Create Cause</Button>
        */}
      </div>
      <div className="">
        {/* <h3 className='text-[#333333] font-medium text-base md:text-xl'>Latest Campaigns</h3> */}
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed border-[#33333340] rounded-[20px] mb-5">
          <div className="w-20 h-20 mb-4 bg-[#EA1D781A] rounded-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#EA1D78"/>
            </svg>
          </div>
          <h4 className="text-[#333333] text-lg font-semibold mb-2">No Campaigns Yet</h4>
          <p className="text-[#333333CC] text-sm text-center max-w-md mb-4">
            Be the first to create a cause and make a difference. Start a campaign to help those in need.
          </p>
          <Button 
            color='#fff' 
            bg='#EA1D78' 
            _hover={{ bg: '#C01864' }} 
            _focus={{ boxShadow: 'none' }} 
            _focusVisible={{ boxShadow: 'none' }}
            onClick={() => navigate('/dashboard/save-a-soul/create-cause')}
          >
            Create Your First Cause
          </Button>
        </div>
        {/* Original Campaign Cards - uncomment when campaigns are available
        <div className="grid grid-cols-3 gap-5 mb-5">
          <CampaignCard />
        </div>
        {isDev && (
          <div className="flex justify-center mb-10">
            <Button color='#F93B99' bg='#fff' variant='outline' borderColor='#F93B99' _hover={{ bg: '#FDF2F8' }} _focus={{ boxShadow: 'none' }} _focusVisible={{ boxShadow: 'none' }}>See All</Button>
          </div>
        )}
        */}
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-8 mt-10">
          <div className="w-full md:w-[60%] border border-[#33333380] rounded-[20px] px-4 md:px-6 py-9 flex md:justify-between">
            <div className="w-3/5 md:w-5/12">
              <h2 className="mb-4 text-base md:text-xl font-medium text-[#333333]">Feeling unwell? Get Diagnosed and Treated Today - Schedule a Call With a Doctor.</h2>
              <Button rightIcon={<ArrTopRight color='#fff' />} color='#fff' bg='#EA1D78' _hover={{ bg: '#C01864' }} _focus={{ boxShadow: 'none' }} _focusVisible={{ boxShadow: 'none' }} onClick={() => navigate('/dashboard/tele-consultation')}>Book Appointment</Button>
            </div>
            <div className='w-2/5 md:max-w-5/12 flex items-center md:justify-end'>
              <Image src={appointment} alt="appointment" maxW={{ base: '100%' }}/>
            </div>
          </div>
          <div className="w-full md:w-[40%] border border-[#33333380] rounded-[20px] px-6 py-9 flex flex-col items-center">
            <h2 className='text-[#333333CC] text-2xl mb-3 font-semibold'>Ready to Consult Online?</h2>
            <h2 className='text-[#333333] text-base font-medium mb-6'>Join our TeleConsulting platform today</h2>
            <Button rightIcon={<ArrTopRight color='#fff' />} color='#fff' bg='#F93B99' _hover={{ bg: '#C01864' }} _focus={{ boxShadow: 'none' }} _focusVisible={{ boxShadow: 'none' }} onClick={() => navigate('/dashboard/tele-consultation')}>Signup As Doctor</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard