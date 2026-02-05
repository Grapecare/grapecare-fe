import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import hmohealth from '../assets/images/hmohealth.png'
import { useNavigate } from 'react-router-dom'

function HmoCard({name}) {
    const navigate = useNavigate()
    return (
        <div className='bg-[#F4F4F580] px-5 py-6 rounded-2xl flex flex-col gap-3'>
            <div className="">
                <Image src={hmohealth} alt='hmo' />
            </div>
            <h2 className="">{name}</h2>
            <div className="flex items-center gap-4 cursor-pointer"
                onClick={() => navigate('/dashboard/health-plans/hmo-plans')}
            >
                <h3 className="text-[#F93B99] text-base">View plans</h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1716 6.77822L6.8076 1.41421L8.2218 0L16 7.77822L8.2218 15.5563L6.8076 14.1421L12.1716 8.77822H0V6.77822H12.1716Z" fill="#F93B99" />
                </svg>
            </div>
        </div>
    )
}

export default HmoCard