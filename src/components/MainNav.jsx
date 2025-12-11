import { Avatar, Image, Input, InputGroup, InputLeftElement, WrapItem } from '@chakra-ui/react'
import React from 'react'
import grapeIcon from '../assets/images/grapeIcon.svg'
import { BellIcon, EmailIcon, Search2Icon } from '@chakra-ui/icons'

function MainNav() {
  return (
    <div className='bg-[#EEF8FF80] sticky top-0 z-30 flex items-center justify-between pr-10'>
        <Image src={grapeIcon} alt="logo" className='hidden md:block' />
        <InputGroup
            w={'50%'}
            bg={'white'}
        >
            <InputLeftElement pointerEvents='none'>
            <Search2Icon color='gray.300' />
            </InputLeftElement>
            <Input type='text' placeholder='search here' />
        </InputGroup>
        <div className='flex items-center gap-4'>
            <EmailIcon boxSize={6} color='#3F3F46'/>
            <BellIcon boxSize={6}/>
            <WrapItem gap={2} alignItems={'center'}>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <div className=''>
                    <h2 className='text-[#333333] font-medium text-sm'>Moruff Tirimisiyu A.</h2>
                    <p className='text-[#333333CC] text-xs'>Good Day!</p>
                </div>
            </WrapItem>
        </div>
    </div>
  )
}

export default MainNav