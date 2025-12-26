import { Button, Image, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark, } from '@chakra-ui/react'
import React from 'react'
import ArrTopRight from '../assets/icons/ArrTopRight'
import { useNavigate } from 'react-router-dom'


function CampaignCard({title,percentage,raised,goal,image,status}) {
    const navigate = useNavigate()
    const id = 2
  return (
    <div className='py-6 px-3.5 shadow-[0_4px_10px_#00000014] rounded-xl'>
        <div className="h-[250px] w-full mb-4 relative rounded-2xl">
            <Image
                objectFit='cover'
                w="100%"
                h="100%"
                // maxW={{ base: '100%', sm: '100%' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
                borderRadius='16px'
            />
            <span className={`absolute top-3 right-3 ${status  === 'active' ? 'bg-[#004475]' : 'bg-[#EA1D78]'} font-medium items-center justify-center text-white px-4 py-1.5 rounded-[12px]`}>
                {status === 'active' ? percentage : 100}%
            </span>
        </div>
        <div className="w-full button">
            <h3 className="font-semibold text-lg text-[#333333] py-[5px] cursor-pointer"
                onClick={()=>navigate(`/dashboard/save-a-soul/${id}`)}
            >{title}</h3>
            <div className='w-11/12'>
                <Slider aria-label='slider-ex-1' defaultValue={status === 'active' ? 30 : 100}>
                    <SliderTrack 
                        bg={status === 'active' ? '#B2E5FF' : '#EA1D78'}
                        h="10px" borderRadius="10px"
                    >
                        <SliderFilledTrack 
                            bg={status === 'active' ? '#004475' : '#EA1D78'}
                        />
                    </SliderTrack>
                </Slider>
            </div>
            <div className="flex gap-4 mb-4">
                <h3 className="text-base font-medium text-[#333333]">Raised - {raised} </h3>
                <h3 className={`text-base font-medium ${status  === 'active' ? 'text-[#004475]' : 'text-[#EA1D78]'}`}>Goal - {goal}  </h3>
            </div>
            <Button rightIcon={<ArrTopRight color='#fff'/>} color='#fff' 
                bg={status === 'active' ? '#004475' : '#EA1D78'}
                _hover={{
                  bg: status === 'active' ? '#004475' : '#EA1D78',
                }}
                _active={{
                  bg: status === 'active' ? '#004475' : '#EA1D78',
                }}
            >
            {
                status === 'active' ? 'Donate Now' : 'Read more'
            }
            </Button>
        </div>
    </div>
  )
}

export default CampaignCard