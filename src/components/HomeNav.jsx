import { Button, Image, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import grapeIcon from '../assets/images/grapeIcon.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { logout } from '../services/auth'
import ContactUsModal from './ContactUsModal'

const navMenu = [
    {
        title: 'Home',
        link: '/'
    },
    // {
    //     title: 'About us',
    //     link: '/about'
    // },
    {
        title: 'Our Cause',
        link: '/#our-causes'
    },
    {
        title: 'Contact us',
        link: '/contact'
    },
]
function HomeNav() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);
    const isAuthenticated = !!token;
    const { isOpen:modalIsOpen, onOpen, onClose } = useDisclosure()


    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleScroll = (id) => {
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
          })
        }, 100)
    }

    return (
        <nav>
            <div className='flex justify-between items-center md:pr-10 border-b border-[#EEF8FF] py-4 px-3'>
                <Image src={grapeIcon} alt="logo" className='hidden md:block' />
                {/* <Image src={grapeIcon} alt="logo" boxSize='100px' className='md:hidden'/> */}
                <div className='md:hidden'>
                    <HamburgerIcon boxSize={7}
                        onClick={() => setIsOpen(true)}
                    />
                </div>
                <div className='md:flex gap-10 hidden'>
                    {
                        navMenu.map(({ title, link }, index) => (
                            <Link to={link} key={index}
                                onClick={(e) => {
                                    if (link.includes('#')) {
                                    e.preventDefault()
                                    const id = link.split('#')[1]
                                    handleScroll(id)
                                    }else if(link.includes('contact')){
                                        e.preventDefault()
                                        console.log('open modal')
                                        onOpen()
                                    }
                                }}
                            >
                                <h2 className='text-[#333333] text-lg'>
                                    {title}
                                </h2>
                            </Link>
                        ))
                    }
                </div>
                {/* {isAuthenticated ? (
                    <div className='flex gap-3'>
                        <Button
                            variant='solid'
                            bg='#EA1D78'
                            color='white'
                            _hover={{ border: 'none', bg: '#EA1D781A' }}
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className='flex gap-3'>
                        <Button variant='ghost' bg='transparent' color='#333333' fontSize={'16px'}
                            fontWeight={500}
                            border='1px solid #333333'
                            _hover={{
                                border: 'none',
                                bg: 'transparent',
                            }}
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </Button>
                        <Button bg='#EA1D78' color='white'
                            _hover={{
                                border: 'none',
                            }}
                            onClick={() => navigate('/signup')}
                        >Sign up</Button>
                    </div>
                )} */}
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className={`fixed top-0 left-0 h-full bg-[#EEF8FF] z-40 transform transition-transform duration-300 ease-in-out w-[90%] ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className='flex items-center py-4 justify-between pr-4'>
                        <Image src={grapeIcon} alt="logo" className='' boxSize='80px'/>
                        <CloseIcon boxSize={5}
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <ul className='gap-4 bg-[#EEF8FF]'>
                        {
                            navMenu.map((item, index) => (
                                <li className='text-white text-base py-3.5' key={index}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <NavLink to={item.path} 
                                        className={({ isActive }) => `pl-4 ${isActive ? 'bg-[#EA1D78] text-[#fff] rounded-r-md px-5 py-2' : 'text-[#fff]333333'
                                        }`}
                                    >
                                        {item.title}
                                    </NavLink>
                                    {/* <Link to={item.path} className='pl-4'
                                        style={{color:'#333333'}}
                                    >{item.title}</Link> */}
                                </li>
                            ))
                        }
                        {isAuthenticated ? (
                            <li className='text-white text-base py-3.5'
                                onClick={() => {
                                    setIsOpen(false);
                                    handleLogout();
                                }}
                            >
                                Logout
                            </li>
                        ) : (
                            <li className='text-white text-base py-3.5'
                                onClick={() => setIsOpen(false)}
                            >
                                <Link to='/login'>
                                    Portal Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
            {isOpen && (
                <div
                className="fixed inset-0 bg-[#363535] bg-opacity-40 z-30"
                onClick={() => setIsOpen(false)}
                />
            )}
            <ContactUsModal
                isOpen={modalIsOpen} 
                onOpen={onOpen}
                onClose={onClose}
            />
        </nav>
    )
}

export default HomeNav