import React from 'react'
import whiteIcon from '../assets/images/whiteIcon.svg'
import { Button, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaX } from 'react-icons/fa6'


function Footer() {
    return (
        <div className='bg-[#EA1D78] p-6 md:p-20 text-white'>
            <div className="flex flex-col md:flex-row gap-10 md:gap-24 pb-10 md:pb-20">
                <div className="w-full md:w-4/12">
                    <Image src={whiteIcon} alt="logo" className='hidden md:block mb-6'/>
                    <Image src={whiteIcon} alt="logo" className='md:hidden mb-3' boxSize='80px'/>
                    <div className='w-full md:w-[80%]'>
                        <InputGroup >
                            <InputLeftElement
                                pointerEvents='none'
                                display="flex"
                                alignItems="center"
                                height="100%"
                            >
                                <EmailIcon color='#fff' />
                            </InputLeftElement>
                            <Input type='text' placeholder='Email address'
                                border="1px solid #FFFFFF66"
                                borderRadius={'80px'}
                                width='100%'
                                height='60px'
                                _placeholder={{ color: '#FFFFFF99' }}
                                _focus={{ borderColor: 'white', boxShadow: 'none' }}
                            />
                        </InputGroup>
                    </div>
                    <Button
                        color="#EA1D78"
                        bg='#fff'
                        mt={5}
                        borderRadius={'80px'}
                        fontWeight={700}
                        fontSize='18px'
                        _hover={{ bg: '#EA1D781A' }}
                        _active={{ bg: '#EA1D7833' }}
                    >
                        Submit
                    </Button>
                </div>
                <div className="w-full md:w-8/12 flex flex-col md:flex-row justify-between">
                    <div className="flex w-full">
                        <div className="w-1/2">
                            <h2 className="font-bold text-2xl mb-8">Company</h2>
                            <h3 className="text-lg mb-6">Home</h3>
                            <h3 className="text-lg mb-6">Our Cause</h3>
                            <h3 className="text-lg mb-6">About us</h3>
                            <h3 className="text-lg mb-6">Contact us</h3>
                        </div>
                        <div className="w-1/2">
                            <h2 className="font-bold text-2xl mb-8">Quick Link</h2>
                            <h3 className="text-lg mb-6">Create cause</h3>
                            <h3 className="text-lg mb-6">Donate blood</h3>
                            <h3 className="text-lg mb-6">Buy HMO</h3>
                            <h3 className="text-lg mb-6">Book consultation</h3>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="font-bold text-2xl mb-8">Connect with Us</h2>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='p-4 bg-transparent border border-white rounded-full'>
                                <FaFacebook color="#FFFFFF" size="24" />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className='p-4 bg-transparent border border-white rounded-full'>
                                <FaX color="#FFFFFF" size="24" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='p-4 bg-transparent border border-white rounded-full'>
                                <FaInstagram color="#FFFFFF" size="24" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='p-4 bg-transparent border border-white rounded-full'>
                                <FaLinkedin color="#FFFFFF" size="24" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-5 md:mx-10 border-t border-[#FFFFFF1A] pt-5 md:pt-14">
                <h3 className='text-white text-lg'>© GrapeCare. All Rights Reserved.</h3>
            </div>
        </div>
    )
}

export default Footer