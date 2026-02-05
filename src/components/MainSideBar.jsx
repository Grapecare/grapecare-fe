import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import DashBoardIcon from '../assets/icons/DashBoardIcon'
import BloodBankIcon from '../assets/icons/BloodBankIcon'
import SaveSoulIcon from '../assets/icons/SaveSoulIcon'
import HealthPlanIcon from '../assets/icons/HealthPlanIcon'
import TeleConsultIcon from '../assets/icons/TeleConsultIcon'
import ProfileIcon from '../assets/icons/ProfileIcon'
import LogoutIcon from '../assets/icons/LogoutIcon'
import { logout } from '../services/auth'
import LogoutConfirmModal from './LogoutConfirmModal'
import { useDisclosure } from '@chakra-ui/react'

const navMenu = [
  {
    name: 'Dashboard',
    icon: DashBoardIcon,
    path: '/dashboard'
  },
  {
    name: 'Blood Bank',
    icon: BloodBankIcon,
    path: '/dashboard/blood-bank'
  },
  {
    name: 'Save-a-Soul',
    icon: SaveSoulIcon,
    path: '/dashboard/save-a-soul'
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
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/login');
  };

  return (
    <div className='md:w-[15%] bg-[#EEF8FF80] fixed top-20 left-0 bottom-0 hidden md:block'>
      <nav>
        <ul className='flex flex-col gap-3 mr-1 md:mt-8'>
          {
            navMenu.map((nav, index) => {
              const Icon = nav.icon;
              const isActive = location.pathname === nav.path || location.pathname.startsWith(nav.path + '/');

              return (
                <li key={index}>
                  <NavLink
                    to={nav.path}
                    className={`flex items-center gap-5 px-5 py-4 text-base rounded-r-lg rounded-tl-xl
                      ${isActive ? 'bg-[#EA1D78] text-white shadow-[0_4px_10px_#00000040]' : 'text-[#333333] hover:bg-gray-100'}`}
                  >
                    <Icon color={isActive ? "white" : "#EA1D78"} />
                    <span>{nav.name}</span>
                  </NavLink>
                </li>
              )
            })
          }
          <li className='border-t-2 border-[#33333333]'>
            <NavLink
              to='/dashboard/profile'
              className={({ isActive }) =>
                `flex items-center gap-5 px-5 py-4 text-base rounded-r-lg rounded-tl-xl
                ${isActive ? 'bg-[#EA1D78] text-white shadow-[0_4px_10px_#00000040]' : 'text-[#333333] hover:bg-gray-100'}`
              }
            >
              {({ isActive }) => (
                <>
                  <ProfileIcon color={isActive ? "white" : "#EA1D78"} />
                  <span>Profile</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <div
              onClick={onOpen}
              className='flex items-center cursor-pointer gap-5 px-5 py-4 text-base rounded-r-lg rounded-tl-xl w-full text-left text-[#333333] hover:bg-gray-100 transition-colors'
            >
              <LogoutIcon />
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </nav>
      <LogoutConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirmLogout={handleLogout}
      />
    </div>
  )
}

export default MainSideBar