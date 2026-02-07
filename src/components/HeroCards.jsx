import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import ArrTopRight from '../assets/icons/ArrTopRight'
import Doc from '../assets/images/doc.png'
import BloodIcon from '../assets/icons/BloodIcon'
import lady from '../assets/images/lady.png'
import { useNavigate } from 'react-router-dom'

function HeroCards() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col md:flex-row justify-between gap-6 mb-4 md:mb-10'>
            <div className="rounded-2xl bg-gradient-to-b from-[#005694] via-[#005694] to-[#001B2E] flex py-5 md:py-0">
                <div className="w-3/5 md:w-2/5 px-3 md:p-6">
                    <h2 className='text-white text-lg md:text-2xl font-semibold mb-1.5 md:mb-3'>Do You Have <br/>a Blood Bank?</h2>
                    <p className="text-sm md:text-base font-normal md:font-medium text-white mb-2 md:mb-6">You can join our platform to be contacted during urgent shortages.</p>
                    <Button rightIcon={<ArrTopRight />} color='#005694' bg='#fff'
                        onClick={()=>navigate('/dashboard/blood-bank/get-started')}
                    >Get Started</Button>
                </div>
                <div className="w-2/5 md:w-3/5 flex items-end">
                    <Image src={Doc} alt='get started' />
                </div>
            </div>
            {/* <div className="relative overflow-hidden rounded-3xl 
                bg-gradient-to-b from-[#005694] via-[#005694] to-[#001B2E] flex flex-col md:flex-row"
            >
                <div className="w-full md:w-2/5 px-6 py-8 md:p-8 z-10">
                    <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 leading-snug">
                    Do You Have <br className="md:hidden" />
                    a Blood Bank?
                    </h2>

                    <p className="text-white text-sm md:text-base font-normal md:font-medium mb-6 max-w-sm">
                    You can join our platform to be contacted during urgent shortages.
                    </p>

                    <Button
                    rightIcon={<ArrTopRight />}
                    bg="white"
                    color="#005694"
                    borderRadius="lg"
                    px={6}
                    py={6}
                    _hover={{ bg: "#f2f2f2" }}
                    onClick={() => navigate("/dashboard/blood-bank/get-started")}
                    >
                    Get Started
                    </Button>
                </div>
                <div className="w-full md:w-3/5 flex justify-end items-end">
                    <Image
                    src={Doc}
                    alt="get started"
                    className="w-56 md:w-full object-contain"
                    />
                </div>
            </div> */}

            <div className="rounded-2xl bg-gradient-to-b from-[#EA1D78] via-[#EA1D78] to-[#001B2E] flex py-5 md:py-0">
                <div className="w-3/5 md:w-2/5 px-3 md:p-6">
                    <h2 className='text-white text-lg md:text-2xl font-semibold mb-1.5 md:mb-3'>Donate Blood to <br/> Save Lives</h2>
                    <p className="text-sm md:text-base font-normal md:font-medium text-white mb-2 md:mb-6">Join our mission to give hope, restore health, and make a difference.</p>
                    <Button
                        rightIcon={<BloodIcon />}
                        color='#EA1D78' bg='#fff'
                        onClick={()=>navigate('/dashboard/donate')}
                    >Donate</Button>
                </div>
                <div className="w-2/5 md:w-3/5 flex items-end">
                    <Image src={lady} alt='donate blood' />
                </div>
            </div>
        </div>
    )
}

export default HeroCards