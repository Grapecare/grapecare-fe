import { Avatar, Button, WrapItem } from '@chakra-ui/react'
import React from 'react'
import BloodIcon from '../assets/icons/BloodIcon'
import LocationIcon from '../assets/icons/LocationIcon'
import TimeIcon from '../assets/icons/TimeIcon'


function DonorCard() {
    return (
        <div className='bg-[#F4F4F580] rounded-[10px] p-5'>
            <WrapItem gap={4} alignItems={'center'} mb={4}>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' boxSize={'50px'} />
                <h2 className='text-[#000000] font-medium text-xl md:text-2xl'>Marvelous A.</h2>
            </WrapItem>
            <div className='mb-6 flex flex-col gap-4'>
                <div className="flex items-center gap-4">
                    <BloodIcon/>
                    <h3 className="text-[#333333E5] text-xl">0+</h3>
                </div>
                <div className="flex items-center gap-4">
                    <LocationIcon/>
                    <h3 className="text-[#333333E5] text-xl">52,Ajeigbe Bustop, Ringroad Ibadan, Oyo State.</h3>
                </div>
                <div className="flex items-center gap-4">
                    <TimeIcon/>
                    <h3 className="text-[#333333E5] text-xl">Availability: <span className=''>Mon - Fri</span></h3>
                </div>
            </div>
            <div className='flex justify-center'>
                <Button color='#fff' bg='#F93B99' fontWeight={'700'}>Contact Now</Button>
            </div>
        </div>
    )
}

export default DonorCard