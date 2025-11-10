import React from 'react'
import HomeNav from '../components/HomeNav'
import doctors from '../assets/images/doctors.svg'
import { Avatar, Button, Image } from '@chakra-ui/react'
import Mask from '../assets/images/Mask.png'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import CareCard from '../components/CareCard'
import Footer from '../components/Footer'
import bloodbank from '../assets/images/BloodBank.svg'
import savesoul from '../assets/images/savesoul.svg'
import healthplan from '../assets/images/healthplan.svg'
import teleconsult from '../assets/images/teleconsult.svg'


const cardData = [
  {
    title:'Blood Bank',
    subTitle:'Saving lives faster—instantly link donors to hospitals and patients in need with our real-time blood donation network',
    btnTitle:'Donate Blood',
    icon:bloodbank
  },
  {
    title:'Save-a-Soul',
    subTitle:'Real stories, real impact. We share urgent medical cases to show how your support transforms lives—bringing hope and life-changing care to those in need',
    btnTitle:'Donate Now',
    icon: savesoul
  },
  {
    title:'Health Plans',
    subTitle:'Health plans designed for your hustle—flexible, affordable coverage for freelancers, entrepreneurs, and those transitioning between jobs.',
    btnTitle:'Read More',
    icon: healthplan
  },
  {
    title:'TeleConsulting',
    subTitle:'Consult trusted doctors anytime for urgent needs, chronic care, or quick advice. Fast, reliable, and designed for your schedule, because quality care should adapt to your life.',
    btnTitle:'Book Consultation',
    icon: teleconsult
  },
]

function HomePage() {

  return (
    <div>
      <HomeNav />
      <div className='px-4 md:px-10 mb-20'>
        <div className='flex flex-col md:flex-row gap-10 pt-2.5 mb-10'>
          <div className='w-full md:w-1/2 flex items-center'>
            <div className='w-full md:w-4/5'>
              <div className='w-full flex justify-center md:justify-start'>
                <h3 className='bg-[#DCF1FF] rounded-[20px] text-[#EA1D78] text-center text-base font-medium py-2 px-5 w-fit'>Our Misson</h3>
              </div>
              <h1 className='text-[#333333] font-bold text-base md:text-[60px] mb-6 text-center md:text-start'>Connecting Communities to Care</h1>
              <p className='text-[#141219] text-base md:text-[22px] text-center md:text-start'>Donate blood, access health plans, give compassionately, and consult trusted doctors—all in one place.</p>
              <div className='flex justify-center md:justify-start  gap-7 mt-5 md:mt-10'>
                <Button bg='#EA1D78' color='white'
                  onClick={() => navigate('/signup')}
                >Get Started</Button>
                <Button bg='#fff' color='#EA1D78' variant='outline' border='1px solid #EA1D78'
                  onClick={() => navigate('/signup')}
                >Get Started</Button>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <Image src={doctors} alt="doctors" width={'100%'} />
          </div>
        </div>
        <div className='flex justify-center mb-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full border border-[#33333333] rounded-[10px] py-3 md:py-10 px-2 md:px-5 shadow-[0_4px_10px_#0000001A]'>
            <div className='bg-[#EEF8FF] flex gap-3 md:flex-col items-center justify-start md:justify-center px-1.5 md:px-2.5 py-1.5 md:py-4 border border-[#002D5133] rounded-[5px]'>
              <h3 className='text-[#333333] font-semibold text-base md:text-xl'>10+</h3>
              <p className='text-[#333333] md:text-base text-sm'>Donation Campaigns</p>
            </div>
            <div className='bg-[#EEF8FF] flex gap-3 md:flex-col items-center justify-start md:justify-center px-1.5 md:px-2.5 py-1.5 md:py-4 border border-[#002D5133] rounded-[5px]'>
              <h3 className='text-[#333333] font-semibold text-base md:text-xl'>100+</h3>
              <p className='text-[#333333] md:text-base text-sm'>Certified Doctors</p>
            </div>
            <div className='bg-[#EEF8FF] flex gap-3 md:flex-col items-center justify-start md:justify-center px-1.5 md:px-2.5 py-1.5 md:py-4 border border-[#002D5133] rounded-[5px]'>
              <h3 className='text-[#333333] font-semibold text-base md:text-xl'>20+</h3>
              <p className='text-[#333333] md:text-base text-sm'>Licensed Blood Bank</p>
            </div>
            <div className='bg-[#EEF8FF] flex gap-3 md:flex-col items-center justify-start md:justify-center px-1.5 md:px-2.5 py-1.5 md:py-4 border border-[#002D5133] rounded-[5px]'>
              <h3 className='text-[#333333] font-semibold text-base md:text-xl'>15+</h3>
              <p className='text-[#333333] md:text-base text-sm'>Affordable HMO</p>
            </div>
          </div>
        </div>
        <div className='mb-20'>
          <div className='flex flex-col items-center mb-4 w-full md:mb-10'>
            <h1 className='text-center text-lg md:text-[30px] text-[#004475] mb-2'>The GrapeCare Causes </h1>
            <p className="text-center text-base text-[#141219E5] md:text-xl w-full md:w-4/5">Bridging care with blood donations, accessible health coverage, heartfelt giving, and expert teleconsulting. Because every community deserves wellness.     </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {
              cardData.map((current,index)=>(
                <CareCard
                  key={index}
                  title={current.title}
                  subTitle={current.subTitle}
                  btnTitle={current.btnTitle}
                  icon={current.icon}
                />
              ))
            }
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex items-center">
              <div className="w-full md:w-4/5 pb-5">
                <h2 className="text-[#004475] text-2xl md:text-3xl text-center md:text-start mb-4 font-medium">Are you a certified doctor looking to expand your reach?</h2>
                <h3 className="text-[#333333CC] text-lg md:text-xl mb-4 font-medium text-center md:text-start">Your medical expertise transforms lives.</h3>
                <p className="text-[#333333CC] text-sm md:text-lg mb-10 w-full md:max-w-4/5 text-center md:text-start">Join our trusted network of doctors providing vital care to those in need. Enjoy flexible schedules, competitive compensation, 
                  and the profound satisfaction of making a difference.
                </p>
                <div className='flex justify-center md:justify-start'>
                  <Button 
                    size='lg'
                    color="#fff"
                    bg='#EA1D78'
                    _hover={{ bg: '#EA1D781A' }}
                    _active={{ bg: '#EA1D7833' }}
                    px={'50px'}
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image src={Mask} alt="doctors" width={'100%'}/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage