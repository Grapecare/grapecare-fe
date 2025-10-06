import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import grapeIcon from '../assets/images/grapeIcon.svg'
import { Link, useNavigate } from 'react-router-dom'

const navMenu = [
    {
        title:'Home',
        link:'/'
    },
    {
        title:'About us',
        link:'/about'
    },
    {
        title:'Our Cause',
        link:'/cause'
    },
    {
        title:'Contact us',
        link:'/contact'
    },
]
function HomeNav() {
    const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center pr-10 border-b border-[#0000001A]'>
        <Image src={grapeIcon} alt="logo"/>
        <div className='flex gap-10'>
            {
                navMenu.map(({title,link},index)=>(
                    <Link to={link} key={index}>
                        <h2 className='text-[#333333] text-lg'>
                            {title}
                        </h2>
                    </Link>
                ))
            }
        </div>
        <div className='flex gap-3'>
            <Button variant='ghost' bg='transparent' color='#333333' fontSize={'16px'} fontWeight={500}
                onClick={()=>navigate('/login')}
            >
                Login
            </Button>
            <Button bg='#EA1D78' color='white'
                onClick={()=>navigate('/signup')}
            >Sign up</Button>
        </div>
    </div>
  )
}

export default HomeNav