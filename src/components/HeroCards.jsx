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
        <div className='flex flex-col md:flex-row justify-between gap-6 mb-10'>
            <div className="rounded-2xl bg-gradient-to-b from-[#005694] via-[#005694] to-[#001B2E] flex">
                <div className="w-2/5 p-6">
                    <h2 className='text-white text-2xl font-semibold mb-3'>Do You Have a Blood Bank?</h2>
                    <p className="text-base font-medium text-white mb-6">You can join our platform to be contacted during urgent shortages.</p>
                    <Button rightIcon={<ArrTopRight />} color='#005694' bg='#fff'
                        onClick={()=>navigate('/dashboard/get-started')}
                    >Get Started</Button>
                </div>
                <div className="w-3/5">
                    <Image src={Doc} alt='get started' />
                </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-[#EA1D78] via-[#EA1D78] to-[#001B2E] flex">
                <div className="w-2/5 p-6">
                    <h2 className='text-white text-2xl font-semibold mb-3'>Donate Blood to Save Lives</h2>
                    <p className="text-base font-medium text-white mb-6">Join our mission to give hope, restore health, and make a difference.</p>
                    <Button
                        rightIcon={<BloodIcon />}
                        color='#EA1D78' bg='#fff'
                        onClick={()=>navigate('/dashboard/donate')}
                    >Donate</Button>
                </div>
                <div className="w-3/5">
                    <Image src={lady} alt='donate blood' />
                </div>
            </div>
        </div>
    )
}

export default HeroCards