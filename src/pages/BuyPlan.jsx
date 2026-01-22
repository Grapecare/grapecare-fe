import React from 'react'
import PageHeader from '../components/PageHeader'
import BuyPlanBeneficiary from '../components/BuyPlanBeneficiary'

function BuyPlan() {
  return (
    <div>
      <PageHeader title="Health Plans" />
      <div className="">
        <h2 className='font-medium text-[#004475] text-4xl mb-5'>Who are you buying this plan for?</h2>
        <div className="">
            <BuyPlanBeneficiary/>
        </div>

      </div>
        
    </div>
  )
}

export default BuyPlan