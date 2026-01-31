import React from 'react'
import PageHeader from '../components/PageHeader'
import HmoPlanCard from '../components/HmoPlanCard'

const plans = [
    {
        name:'AXA BRONZE',
        benefits:['Roam across 1,295 Hospitals','Surgical Services up to the limit of ₦250,000','Routine Immunization for children',
            'Evacuation (Home/Hospital to Hospital & Roadside to Hospital)','In-patient care with feeding-General ward','₦10,000 limit for Dental Care',
            'Eye testing & Eye Care (Biennial Optical Lenses) - Up to ₦7,500','5 Physiotherapy Sessions'
        ],
        price:'₦86,500'
    },
    {
        name:'AXA SILVER',
        benefits:['Roam across 1,295 Hospitals','Surgical Services up to the limit of ₦250,000','Routine Immunization for children',
            'Evacuation (Home/Hospital to Hospital & Roadside to Hospital)','In-patient care with feeding-General ward','₦10,000 limit for Dental Care',
            'Eye testing & Eye Care (Biennial Optical Lenses) - Up to ₦7,500','5 Physiotherapy Sessions'
        ],
        price:'₦86,500'
    },
    {
        name:'AXA GOLD',
        benefits:['Roam across 1,295 Hospitals','Surgical Services up to the limit of ₦250,000','Routine Immunization for children',
            'Evacuation (Home/Hospital to Hospital & Roadside to Hospital)','In-patient care with feeding-General ward','₦10,000 limit for Dental Care',
            'Eye testing & Eye Care (Biennial Optical Lenses) - Up to ₦7,500','5 Physiotherapy Sessions'
        ],
        price:'₦86,500'
    }
]

function HMOPlans() {
  return (
    <div>
        <PageHeader title="Health Plans" />
        <div className="">
            <h2 className='font-medium text-[#004475] text-4xl mb-2'>AXA Mansard Health Plans</h2>
            <p className="mb-5">Don't let hospital bills prevent you from getting the care you need. Get health insurance for yourself and your family.</p>
            <div className="grid grid-cols-3 gap-8">
                {
                    plans.map((plan, index) => (
                        <HmoPlanCard
                            key={index}
                            name={plan.name}
                            benefits={plan.benefits}
                            price={plan.price}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HMOPlans