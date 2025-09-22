import React from 'react'
import HomeNav from '../components/HomeNav'
import doctors from '../assets/images/doctors.svg'
import { Button, Image } from '@chakra-ui/react'


function HomePage() {
  return (
    <div>
      <HomeNav/>
      <div className='flex px-10 gap-10 pt-2.5'>
        <div className='w-1/2 flex items-center'>
          <div className=''>
            <h3 className='bg-[#DCF1FF] rounded-[20px] text-[#EA1D78] py-2 px-5 w-fit'>Our Misson</h3>
            <h1 className='text-[#333333] font-bold text-[60px] mb-6'>Connecting Communities to Care</h1>
            <p className='text-[#141219] text-[22px]'>Donate blood, access health plans, give compassionately, and consult trusted doctors—all in one place.</p>
            <div className='flex gap-7 mt-10'>
              <Button bg='#EA1D78' color='white'
                  onClick={()=>navigate('/signup')}
              >Get Started</Button>
              <Button bg='#fff'  color='#EA1D78' variant='outline' border='1px solid #EA1D78'
                  onClick={()=>navigate('/signup')}
              >Get Started</Button>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <Image src={doctors} alt="doctors" width={'100%'}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage