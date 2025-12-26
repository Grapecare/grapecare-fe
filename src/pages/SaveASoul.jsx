import { Button } from '@chakra-ui/react'
import React from 'react'
import PageHeader from '../components/PageHeader'
import HeroCards from '../components/HeroCards'
import DonorCard from '../components/DonorCard'
import BloodBankCard from '../components/BloodBankCard'
import CampaignCard from '../components/CampaignCard'

const charityData = [
  {
    title: 'Help Chioma With Kidney Transpalant',
    percentage: 56,
    raised: '₦8,000,000',
    goal: '₦10,000,000',
    image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    status: 'active'
  },
  {
    title: 'Help Esther With Heart Surgery',
    percentage: 85,
    raised: '₦5,000,000',
    goal: '₦12,000,000',
    image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    status: 'active'
  },
  {
    title: 'Help Chioma With Kidney Transpalant',
    percentage: 76,
    raised: '₦7,000,000',
    goal: '₦9,000,000',
    image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    status: 'active'
  },
]

const closedCharityData = [
  {
    title: 'Help Chioma With Kidney Transpalant',
    percentage: 56,
    raised: '₦8,000,000',
    goal: '₦10,000,000',
    image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    status: 'closed'
  },
  {
    title: 'Help Esther With Heart Surgery',
    percentage: 85,
    raised: '₦5,000,000',
    goal: '₦12,000,000',
    image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    status: 'closed'
  },
  {
    title: 'Help Chioma With Kidney Transpalant',
    percentage: 76,
    raised: '₦7,000,000',
    goal: '₦9,000,000',
    image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    status: 'closed'
  },
]
function SaveASoul() {
  return (
    <div>
      <PageHeader title="Save-a-Soul" showCauseBtn={true}/>
      <h2 className='font-medium text-[#004475] text-3xl mb-4'>Our Charity Campaign </h2>
      <div className="mb-10">
        <h2 className="font-medium text-xl text-[#333333] mb-2">Ongoing Campaigns</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          {
            charityData.map((item, index) => (
              <CampaignCard 
                key={index} 
                title={item.title} 
                percentage={item.percentage} 
                raised={item.raised} 
                goal={item.goal} 
                image={item.image} 
                status={item.status} 
              />
            ) )
          }
        </div>
      </div>
      <div className="">
        <h2 className='font-medium text-[#004475] text-3xl mb-4'>Completed Campaign</h2>
        <h3 className="font-medium text-xl text-[#333333] mb-2">Latest Campaigns</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          {
            closedCharityData.map((item, index) => (
              <CampaignCard 
                key={index} 
                title={item.title} 
                percentage={item.percentage} 
                raised={item.raised} 
                goal={item.goal} 
                image={item.image} 
                status={item.status} 
              />
            ) )
          }
        </div>
      </div>
    </div>
  )
}

export default SaveASoul