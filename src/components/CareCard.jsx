import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Avatar, Button } from '@chakra-ui/react'
import React from 'react'


function CareCard({title, subTitle, btnTitle, icon}) {
    return (
        <div className="bg-[#F5F5F5] rounded-3xl flex flex-col items-center p-5">
            <Avatar src={icon} bg='#DCF1FF' padding={2} size='lg' mb={6} />
            <h2 className='text-[#333333] text-lg md:text-xl mb-3'>{title}</h2>
            <p className="text-[#333333CC] text-[13px] text-center mb-6">
                {subTitle}
            </p>
            <Button
                variant='ghost'
                rightIcon={<ArrowForwardIcon />}
                color="#EA1D78"
                bg='inherit'
                _hover={{ bg: '#EA1D781A', border: 'none' }}
                _active={{ bg: '#EA1D7833' }}
            >
                {btnTitle}
            </Button>
        </div>
    )
}

export default CareCard