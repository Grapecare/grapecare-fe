import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function HmoPlanCard({name, benefits, price}) {
    const navigate = useNavigate()

    return (
        <div className='rounded-2xl bg-[#FCFCF799]'>
            <div className="bg-gradient-to-br from-[#0066B4] to-[#002C4E] pt-4 px-5 pb-5 rounded-t-2xl">
                <h3 className="font-bold text-white text-xl mb-1">{name}</h3>
                <h2 className="font-medium text-white text-2xl">{price} / <span className="font-normal text-lg">Yearly</span></h2>
            </div>
            <div className="w-full p-4">
                <div className='flex flex-col gap-2 w-full mb-6'>
                    {
                        benefits.map((benefit, index) => (
                            <div className="flex items-center gap-2.5"
                                key={index}
                            >
                                <div className="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.4571 7.45711L9 13.9142L4.79289 9.7071L6.20711 8.2929L9 11.0858L14.0429 6.04289L15.4571 7.45711Z" fill="#FF67B6"/>
                                    </svg>
                                </div>
                                <h3 className="text-base text-[#333333]">{benefit}</h3>
                            </div>
                        ))
                    }
                </div>
                <h2 className="underline font-medium text-[#333333] text-xl text-center mb-5 cursor-pointer"
                    onClick={()=>navigate('/dashboard/health-plans/hmo-plans/hmo-plan-details')}
                >View All Benefits</h2>
                <Button color='#fff' bg='#EA1D78' fontWeight={'700'} width='100%'>Buy Now</Button>
            </div>
        </div>
    )
}

export default HmoPlanCard