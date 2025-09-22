import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className='flex w-screen h-screen'>
            <div className="w-1/2 bg-[url('/images/grapecarebg.svg')] bg-no-repeat bg-cover">
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <div className='w-[70%] flex flex-col items-center'>
                    <h2 className='text-[#004475] text-6xl font-semibold text-center mb-8 leading-20'>Welcome To GRAPECARE</h2>
                    <p className='text-[#333333] text-xl font-medium text-center mb-10'>Connecting Communities to Care - Blood, Health Plans, Compassionate Donations, and Trusted Teleconsulting.</p>
                    <Button bg='#EA1D78' borderRadius='10px' color='white' width={'100%'} mb={3}
                        _hover={{ border: 'none' }}
                        onClick={()=>navigate('/onboarding')}
                    >
                        Get Started
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

export default Welcome