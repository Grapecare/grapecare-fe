import React from 'react'
import { Button, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import grapeIcon from '../assets/images/grapeIcon.svg'

function NotFound({ hideHeader = false, inDashboard = false }) {
  const navigate = useNavigate()
  const homePath = inDashboard ? '/dashboard/home' : '/'

  return (
    <div className={`${hideHeader ? 'min-h-[60vh]' : 'min-h-screen'} flex flex-col`}>
      {!hideHeader && (
        <div className='py-4 px-4 md:px-10 border-b border-[#DCF1FF]'>
          <Image 
            src={grapeIcon} 
            alt="GRAPECARE logo" 
            className='cursor-pointer'
            onClick={() => navigate('/')}
          />
        </div>
      )}
      
      <div className='flex-1 flex flex-col items-center justify-center px-4 py-10'>
        <div className='text-center max-w-lg'>
          <div className='relative mb-6'>
            <h1 className='text-[150px] md:text-[200px] font-bold leading-none'>
              <span className='text-[#EA1D78]'>4</span>
              <span className='text-[#004475]'>0</span>
              <span className='text-[#EA1D78]'>4</span>
            </h1>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
              <svg viewBox="0 0 200 40" className='w-full opacity-20'>
                <path 
                  d="M0,20 L20,20 L25,5 L30,35 L35,10 L40,30 L45,15 L50,25 L55,20 L200,20" 
                  fill="none" 
                  stroke="#004475" 
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          
          <h2 className='text-[#004475] text-2xl md:text-3xl font-semibold mb-4'>
            Page Not Found
          </h2>
          
          <p className='text-[#333333CC] text-base md:text-lg mb-8'>
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to better health.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              bg='#EA1D78'
              color='white'
              size='lg'
              px={8}
              _hover={{ bg: '#C01864' }}
              _focus={{ outline: 'none', boxShadow: 'none' }}
              _focusVisible={{ outline: 'none', boxShadow: 'none' }}
              _active={{ outline: 'none', boxShadow: 'none' }}
              onClick={() => navigate(homePath)}
            >
              {inDashboard ? 'Go to Dashboard' : 'Go to Homepage'}
            </Button>
            <Button
              bg='transparent'
              color='#EA1D78'
              size='lg'
              px={8}
              border='1px solid #EA1D78'
              _hover={{ bg: '#EA1D781A' }}
              _focus={{ outline: 'none', boxShadow: 'none' }}
              _focusVisible={{ outline: 'none', boxShadow: 'none' }}
              _active={{ outline: 'none', boxShadow: 'none' }}
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>
        </div>
        
        <div className='mt-12 flex items-center gap-2 text-[#333333CC]'>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#004475" strokeWidth="2"/>
            <path d="M12 8V12" stroke="#004475" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 16H12.01" stroke="#004475" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className='text-sm'>Need help? Contact us at hello@grape.care</span>
        </div>
      </div>
    </div>
  )
}

export default NotFound
