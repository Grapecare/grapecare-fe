import React from 'react'
import whiteIcon from '../assets/images/whiteIcon.svg'
import { Button, Image, Input, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaX } from 'react-icons/fa6'
import Twitter from '../assets/images/Twitter.svg'
import Facebook from '../assets/images/Facebook.svg'
import { Link } from 'react-router-dom'
import ContactUsModal from './ContactUsModal'


function Footer() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className='bg-[#EA1D78] p-6 md:p-20 text-white'>
            <div className="flex flex-col md:flex-row gap-10 md:gap-24 pb-10 md:pb-20">
                <div className="w-full md:w-4/12">
                    <Image src={whiteIcon} alt="logo" className='hidden md:block mb-4'/>
                    <Image src={whiteIcon} alt="logo" className='md:hidden mb-3' boxSize='80px'/>
                    <div className='w-full md:w-[80%]' id='waitlist'>
                        <p className="font-medium text-lg mb-2">Join our waitlist</p>
                        <InputGroup >
                            <InputLeftElement
                                pointerEvents='none'
                                display="flex"
                                alignItems="center"
                                height="100%"
                            >
                                <EmailIcon color='#fff' />
                            </InputLeftElement>
                            <Input type='text' placeholder='Enter email address'
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
                        _hover={{ bg: '#ffffff', border: 'none' }}
                        _focus={{ outline: 'none', boxShadow: 'none' }}
                        _focusVisible={{ outline: 'none', boxShadow: 'none' }}
                        _active={{ outline: 'none', boxShadow: 'none' }}
                    >
                        Submit
                    </Button>
                </div>
                <div className="w-full md:w-8/12 flex flex-col md:flex-row justify-between">
                    <div className="flex w-full">
                        <div className="w-1/2">
                            <h2 className="font-bold text-2xl mb-8">Company</h2>
                            <h3 className="text-lg mb-6"><Link to='/'>Home</Link></h3>
                            <h3 className="text-lg mb-6"><a href='#our-causes'>Our Cause</a></h3>
                            {/* <h3 className="text-lg mb-6">About us</h3> */}
                            <h3 className="text-lg mb-6 cursor-pointer"
                                onClick={()=>onOpen()}
                            >Contact us</h3>
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
                            <div className='border border-[#fff] w-14 h-14 rounded-full flex justify-center items-center'>
                                <a 
                                    href="https://x.com/grapecare_" target="_blank" rel="noopener noreferrer" 
                                    className='bg-white h-6 w-6 flex justify-center items-center rounded-[4px]'>
                                    <Image
                                        src={Twitter}
                                        alt='twitter'
                                    />
                                </a>
                            </div>
                            <div className='border border-[#fff] w-14 h-14 rounded-full flex justify-center items-center'>
                                <a 
                                    href="https://web.facebook.com/grapecare26/" target="_blank" rel="noopener noreferrer" 
                                    className='bg-white h-6 w-6 p-[2px] flex justify-center items-center rounded-[4px]'
                                >
                                    <FaFacebook color="#EA1D78" size="24" />
                                </a>
                            </div>
                            <div className='border border-[#fff] w-14 h-14 rounded-full flex justify-center items-center'>
                                <a 
                                    href="https://www.instagram.com/grape_care_/" target="_blank" rel="noopener noreferrer" 
                                    className='bg-white h-6 w-6 p-[2px] flex justify-center items-center rounded-[4px]'
                                >
                                    <FaInstagram color="#EA1D78" size="24" />
                                </a>
                            </div>
                            <div className='border border-[#fff] w-14 h-14 rounded-full flex justify-center items-center'>
                                <a 
                                    href="https://www.linkedin.com/company/grapecare" target="_blank" rel="noopener noreferrer" 
                                    className='bg-white h-6 w-6 p-[2px] flex justify-center items-center rounded-[4px]'
                                >
                                    <FaLinkedin color="#EA1D78" size="24" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-5 md:mx-10 border-t border-[#FFFFFF1A] pt-5 md:pt-14">
                <h3 className='text-white text-lg'>© GrapeCare. All Rights Reserved.</h3>
            </div>
            <ContactUsModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
            />
        </div>
    )
}

export default Footer