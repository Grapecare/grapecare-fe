import React from 'react'
import { NavLink } from 'react-router-dom'
import DashBoardIcon from '../assets/icons/DashBoardIcon'
import BloodBankIcon from '../assets/icons/BloodBankIcon'
import SaveSoulIcon from '../assets/icons/SaveSoulIcon'
import HealthPlanIcon from '../assets/icons/HealthPlanIcon'
import TeleConsultIcon from '../assets/icons/TeleConsultIcon'
import ProfileIcon from '../assets/icons/ProfileIcon'
import LogoutIcon from '../assets/icons/LogoutIcon'

const navMenu = [
  {
    name: 'Dashboard',
    icon: DashBoardIcon,
    path: '/dashboard/home'
  },
  {
    name: 'Blood Bank',
    icon: BloodBankIcon,
    path: '/dashboard/blood-bank'
  },
  {
    name: 'Save-a-Soul',
    icon: SaveSoulIcon,
    path: '/dashboard/save-a-Soul'
  },
  {
    name: 'Health Plans',
    icon: HealthPlanIcon,
    path: '/dashboard/health-plans'
  },
  {
    name: 'TeleConsulting',
    icon: TeleConsultIcon,
    path: '/dashboard/tele-consultation'
  },
]

function MainSideBar() {
  return (
    <div className='md:w-[15%] bg-[#EEF8FF80] fixed top-25 left-0 bottom-0 hidden md:block'>
      <nav>
        <ul className='flex flex-col gap-3 mr-1 md:mt-8'>
          {
            navMenu.map((nav, index) => {
              const Icon = nav.icon;
              return (
                <li key={index}>
                  <NavLink
                    to={nav.path}
                    className={({ isActive }) =>
                      `flex items-center gap-5 px-5 py-4 text-base rounded-r-lg rounded-tl-xl
                      ${isActive ? 'bg-[#EA1D78] text-white shadow-[0_4px_10px_#00000040]' : 'text-[#333333] hover:bg-gray-100'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon color={isActive ? "white" : "#EA1D78"} />
                        <span>{nav.name}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              )
            })
          }
          <li className='border-t-2 border-[#33333333]'>
            <NavLink
              to='/profile'
              className='flex items-center gap-5 px-5 py-4 text-base rounded-r-lg rounded-tl-xl'
            >
              <>
                <ProfileIcon/>
                <span>Profile</span>
              </>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile'
              className='flex items-center gap-5 px-5 py-4 text-base rounded-r-lg rounded-tl-xl'
            >
              <>
                <LogoutIcon/>
                <span>Logout</span>
              </>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainSideBar