import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Bloodbank({gotoNext}) {
    return (
        <div className='flex w-screen h-screen'>
            <div className="w-1/2 bg-[url('/images/bloodbg.svg')] bg-no-repeat bg-cover">
            </div>
            {/* <Box
            bgImage="url('/images/bloodbg.svg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            w={"50%"}
            /> */}
            <div className="w-1/2 flex justify-center items-center">
                <div className='w-[70%] flex flex-col items-center'>
                    <h2 className='text-[#004475] text-6xl font-semibold text-center mb-8 leading-20'>Blood Bank</h2>
                    <p className='text-[#333333] text-xl font-medium text-center mb-10'>Simplifying blood donation and access with a real-time platform that easily connects donors, 
                        hospitals, and recipients effortlessly. 
                    </p>
                    <Button bg='#EA1D78' borderRadius='10px' color='white' width={'100%'} mb={3}
                        _hover={{ border: 'none' }}
                        onClick={gotoNext}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Bloodbank