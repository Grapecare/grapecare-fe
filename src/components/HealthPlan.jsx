import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HealthPlan({goBack,}) {
    const navigate = useNavigate();
    return (
        <div className='flex w-screen h-screen'>
            <div className="w-1/2 bg-[url('/images/bloodbg.svg')] bg-no-repeat bg-center">
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <div className='w-[70%] flex flex-col items-center'>
                    <div className='flex w-full justify-between mb-20 h-5'>
                        <Button
                            variant='ghost' border='none' color='#333333' bg='transparent' fontWeight={'normal'} fontSize={'16px'}
                            _hover={{ border: 'none' }}
                            _focus={{ border: 'none' }}
                            onClick={goBack}
                        >
                            Back
                        </Button>
                        <Button
                            variant='ghost' border='none' color='#EA1D78' bg='transparent' fontWeight={'normal'} fontSize={'20px'}
                            _hover={{ border: 'none' }}
                            _focus={{ border: 'none' }}
                            onClick={() => navigate('/login')}
                        >
                            Skip
                        </Button>
                    </div>
                    <h2 className='text-[#004475] text-6xl font-semibold text-center mb-8 leading-20'>Health Plans & TeleConsulting</h2>
                    <p className='text-[#333333] text-xl font-medium text-center mb-10'>Our health plans are affordable and tailored for
                        self-employed individuals and those between jobs, offering 24/7 teleconsultation services for access to
                        licensed doctors.
                    </p>
                    <Button bg='#EA1D78' borderRadius='10px' color='white' width={'100%'} mb={3}
                        _hover={{ border: 'none' }}
                        onClick={() => navigate('/signup')}
                    >
                        Signup
                    </Button>
                    <h3 className='text-[#333333] text-base'>Already have an account?
                        <Link to='/login'>
                            <span className='text-[#004475] font-semibold ml-1'>Login</span>
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default HealthPlan