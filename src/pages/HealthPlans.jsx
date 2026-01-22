import React from 'react'
import PageHeader from '../components/PageHeader'
import { Button, Image } from '@chakra-ui/react'
import ArrTopRight from '../assets/icons/ArrTopRight'
import hmo from '../assets/images/hmo.png'
import HmoCard from '../components/HmoCard'


function HealthPlans() {
    return (
        <div>
            <PageHeader title="Health Plans" />
            <div className="flex gap-10 mb-10">
                <div className="w-8/12 flex p-7 rounded-2xl bg-gradient-to-b from-[#005694] via-[#005694] to-[#001B2E]">
                    <div className="w-7/12 text-white">
                        <h2 className="font-medium text-lg mb-2">
                            Join Our Platform As a HMO Provider.
                        </h2>
                        <p className="text-sm mb-6">
                            Partner with us as  a licensed HMO to expand reach and connect with thousands
                            of users seeking affordable, quality health plans, gaining direct access to a growing community.
                        </p>
                        <Button rightIcon={<ArrTopRight color='#fff' />} color='#fff' bg='#F93B99' fontWeight={'600'}>Become A Provider</Button>
                    </div>
                    <div className="w-5/12 flex justify-end">
                        <Image src={hmo} alt='hmo' />
                    </div>
                </div>
                <div className="w-full md:w-4/12 border border-[#33333380] rounded-[20px] px-6 py-9 flex flex-col items-center">
                    <h2 className='text-[#333333CC] text-2xl mb-3'>Health Plan Status:</h2>
                    <h2 className='text-[#333333] text-3xl font-semibold mb-6'>Inactive</h2>
                    <span className="w-16 h-16 rounded-full bg-[#F93B99] flex justify-center items-center">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9882 15.3452L0 2.35702L2.35702 0L15.3452 12.9881L28.3334 0L30.6904 2.35702L17.7022 15.3452L30.6904 28.3333L28.3334 30.6904L15.3452 17.7022L2.35702 30.6904L0 28.3333L12.9882 15.3452Z" fill="white" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="">
                <h2 className='font-medium text-[#004475] text-4xl mb-5'>Available HMO Providers</h2>
                <div className="grid grid-cols-3 gap-6">
                    {
                        ['AXA Mansard','Reliance HMO','Hygeia HMO'].map((current,index)=>(
                            <HmoCard 
                                key={index}
                                name={current}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HealthPlans