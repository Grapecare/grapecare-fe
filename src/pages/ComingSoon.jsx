import React from 'react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function ComingSoon({ featureName = 'This feature' }) {
  const navigate = useNavigate()

  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center px-4 py-10'>
      <div className='text-center max-w-lg'>
        <div className='mb-6'>
          <div className='w-24 h-24 mx-auto mb-4 bg-[#EA1D781A] rounded-full flex items-center justify-center'>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V6" stroke="#EA1D78" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 18V22" stroke="#EA1D78" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4.93 4.93L7.76 7.76" stroke="#EA1D78" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16.24 16.24L19.07 19.07" stroke="#EA1D78" strokeWidth="2" strokeLinecap="round"/>
              <path d="M2 12H6" stroke="#EA1D78" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 12H22" stroke="#EA1D78" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4.93 19.07L7.76 16.24" stroke="#EA1D78" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16.24 7.76L19.07 4.93" stroke="#EA1D78" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className='text-[60px] md:text-[80px] font-bold leading-none'>
            <span className='text-[#004475]'>Coming</span>
            <span className='text-[#EA1D78]'> Soon</span>
          </h1>
        </div>
        
        <h2 className='text-[#004475] text-xl md:text-2xl font-semibold mb-4'>
          {featureName} is Under Development
        </h2>
        
        <p className='text-[#333333CC] text-base md:text-lg mb-8'>
          We're working hard to bring you this feature. Stay tuned for updates 
          as we continue to improve your healthcare experience.
        </p>
        
        <Button
          bg='#EA1D78'
          color='white'
          size='lg'
          px={8}
          _hover={{ bg: '#C01864' }}
          _focus={{ outline: 'none', boxShadow: 'none' }}
          _focusVisible={{ outline: 'none', boxShadow: 'none' }}
          _active={{ outline: 'none', boxShadow: 'none' }}
          onClick={() => navigate('/dashboard/home')}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  )
}

export default ComingSoon
