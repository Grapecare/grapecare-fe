import React from 'react'
import MainNav from '../components/MainNav'
import MainSideBar from '../components/MainSideBar'

function MainLayout({children}) {
  return (
    <div className='relative h-full'>
        <MainNav/>
        <div className='relative h-full pt-12 md:pt-30 px-3 md:px-0'>
            <MainSideBar/>
            <div className='flex relative flex-col px-1 h-full md:left-62 pt-3.5 w-[100%] md:w-[80%] z-20 pb-5 md:px-4'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default MainLayout