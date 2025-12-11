import { Button, Image, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark, } from '@chakra-ui/react'
import React from 'react'
import ArrTopRight from '../assets/icons/ArrTopRight'


function CampaignCard() {
  return (
    <div className='py-6 px-3.5'>
        {/* <div className="bg-[url('/images/help-one.png')] bg-no-repeat bg-cover relative h-[250px] rounded-2xl mb-4 p-3">
            <span className="absolute top-3 right-3 bg-[#004475] items-center justify-center text-white px-4 py-1.5 rounded-[12px]">100%</span>
        </div> */}
        <div className="h-[250px] mb-4 relative rounded-2xl">
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '100%' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
                borderRadius='16px'
            />
            <span className="absolute top-3 right-3 bg-[#004475] font-medium items-center justify-center text-white px-4 py-1.5 rounded-[12px]">100%</span>
        </div>
        <div className="">
            <h3 className="font-semibold text-lg text-[#333333] py-[5px]">Help Chioma With Kidney Transpalant</h3>
            <div className='w-11/12'>
                <Slider aria-label='slider-ex-1' defaultValue={30}>
                    <SliderTrack bg='#B2E5FF' h="10px" borderRadius="10px">
                        <SliderFilledTrack bg='#004475' borderRadius="10px"/>
                    </SliderTrack>
                </Slider>
            </div>
            <div className="flex gap-4 mb-4">
                <h3 className="text-base font-medium text-[#333333]">Raised - ₦8,000,000 </h3>
                <h3 className="text-base font-medium text-[#004475]">Goal - ₦10,000,000  </h3>
            </div>
            <Button rightIcon={<ArrTopRight color='#fff'/>} color='#fff' bg='#004475'>Donate Now</Button>
        </div>
    </div>
  )
}

export default CampaignCard