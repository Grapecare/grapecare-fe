import { Button } from '@chakra-ui/react'
import React from 'react'
import PageHeader from '../components/PageHeader'
import HeroCards from '../components/HeroCards'
import DonorCard from '../components/DonorCard'
import BloodBankCard from '../components/BloodBankCard'

function BloodBank() {
  return (
    <div>
      <PageHeader title="Blood Donation"/>
      <HeroCards/>
      <div className="p-3 md:p-6 shadow-[0_4px_10px_#00000014] rounded-2xl mb-5 md:mb-8">
        <h2 className='font-medium text-[#004475] text-xl md:text-4xl mb-2 md:mb-5'>Recent Donors</h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
          <DonorCard/>
          <DonorCard/>
          <DonorCard/>
        </div>
      </div>
      <div className="">
        <h2 className='font-medium text-[#004475] text-xl md:text-4xl mb-2 md:mb-5'>Blood Bank</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BloodBankCard/>
          <BloodBankCard/>
          <BloodBankCard/>
        </div>
      </div>
    </div>
  )
}

export default BloodBank