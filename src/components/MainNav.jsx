import { Avatar, Image, Input, InputGroup, InputLeftElement, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import grapeIcon from '../assets/images/grapeIcon.svg'
import { BellIcon, CloseIcon, EmailIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { navMenu } from '../constant/common'
import ProfileIcon from '../assets/icons/ProfileIcon';
import LogoutIcon from '../assets/icons/LogoutIcon';


// const navMenu = [
//     {
//         title: 'Dashboard',
//         link: '/'
//     },
//     {
//         title: 'Blood Bank',
//         link: '/about'
//     },
//     {
//         title: 'Save-a-Soul',
//         link: '/cause'
//     },
//     {
//         title: 'Health Plans',
//         link: '/contact'
//     },
//     {
//         title: 'TeleConsulting',
//         link: '/contact'
//     },
// ]
function MainNav() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth);
    // const isAuthenticated = !!token;
    const isAuthenticated = true;

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav>
            <div className='bg-[#EEF8FF80] sticky top-0 z-30 flex items-center justify-between md:pr-10 p-4'>
                <Image src={grapeIcon} alt="logo" className='hidden md:block' />
                <div className='md:hidden'>
                    <HamburgerIcon boxSize={7}
                        onClick={() => setIsOpen(true)}
                    />
                </div>
                <div className="hidden md:block">
                    <InputGroup
                        w={'50%'}
                        bg={'white'}
                    >
                        <InputLeftElement pointerEvents='none'>
                            <Search2Icon color='gray.300' />
                        </InputLeftElement>
                        <Input type='text' placeholder='search here' />
                    </InputGroup>
                </div>
                <div className='flex items-center gap-4'>
                    <EmailIcon boxSize={6} color='#3F3F46' />
                    <BellIcon boxSize={6} />
                    <WrapItem gap={2} alignItems={'center'}>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <div className=''>
                            <h2 className='text-[#333333] font-medium text-sm'>Moruff Tirimisiyu A.</h2>
                            <p className='text-[#333333CC] text-xs'>Good Day!</p>
                        </div>
                    </WrapItem>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className={`fixed top-0 left-0 h-full bg-[#EEF8FF] z-40 transform transition-transform duration-300 ease-in-out w-[100%] ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className='flex items-center py-4 justify-between pr-4'>
                        <Image src={grapeIcon} alt="logo" className='' boxSize='80px' />
                        <div className="h-5 w-5 rounded-full bg-[#EA1D78] flex justify-center items-center">
                            <CloseIcon boxSize={3}
                                color='#fff'
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                    </div>
                    <ul className='gap-4 bg-[#EEF8FF] mb-5'>
                        {
                            navMenu.map((item, index) => (
                                <li className='text-[#333333] text-base py-3.5' key={index}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <NavLink to={item.path}>
                                        {({ isActive }) => (
                                            <div
                                                className={`flex gap-4 w-8/12 pl-4 items-center ${isActive
                                                    ? 'bg-[#EA1D78] text-white rounded-r-md px-5 py-2 font-bold shadow-[0_4px_10px_#00000040]'
                                                    : 'text-[#333333]'
                                                    }`}
                                            >
                                                <item.icon
                                                    color={isActive ? '#fff' : '#EA1D78'}
                                                />
                                                {item.name}
                                            </div>
                                        )}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="border-t border-[#33333333] pl-4">
                        <li className='text-[#333333] text-base py-3.5 flex items-center gap-4'
                            onClick={() => {
                                setIsOpen(false);
                                handleLogout();
                            }}
                        >
                            <ProfileIcon/>
                            Profile
                        </li>
                        {isAuthenticated ? (
                            <li className='text-[#333333] text-base py-3.5 flex items-center gap-4'
                                onClick={() => {
                                    setIsOpen(false);
                                    handleLogout();
                                }}
                            >
                                <LogoutIcon/>
                                Logout
                            </li>
                        ) : (
                            <li className='text-[#333333] text-base py-3.5'
                                onClick={() => setIsOpen(false)}
                            >
                                <Link to='/login'>
                                    Portal Login
                                </Link>
                            </li>
                        )}
                    </ul>
                    <h3 className="text-xs text-[#333333CC] pl-4 mt-2 flex items-center gap-2">
                        <span className="text-[#333333CC] font-medium text-lg">©</span> 
                        2025 GrapeCare. All rights reserved.</h3>
                </div>
            )}

        </nav>
    )
}

export default MainNav