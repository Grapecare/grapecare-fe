import { Box, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CheckIcon from '../assets/icons/CheckIcon'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function ConsultantCard() {
  const [rating, setRating] = useState(0);

  return (
    <div className='bg-[#F4F4F580] rounded-xl p-5 border-[2px] border-[#DCF1FF]'>
      <div className="h-[206px] w-full mb-4 relative rounded-2xl">
        <Image
          objectFit='cover'
          w="100%"
          h="100%"
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='specialists'
          borderRadius='10px'
        />
      </div>
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-medium text-black">Dr. Issac A</h2>
        <CheckIcon/>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-xl">Cardiologist</h3>
        <p className="text-xl text-[#333333E5] font-normal">4 Year Experience</p>
        <p className="text-[#0066B4] font-semibold text-xl">₦5,000</p>
        <Box display='flex' gap={4}>
          <Rating value={rating} onChange={setRating} />
          <Text mt={2} fontSize='16px' fontWeight={400} color='#333333E5'>{rating}</Text>
        </Box>
        <Link to='/dashboard/tele-consultation/book-appointment' className='text-[#F93B99] text-base font-semibold underline'>Book Appointment</Link>
      </div>
    </div>
  )
}

export default ConsultantCard