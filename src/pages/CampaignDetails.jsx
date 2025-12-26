import React from 'react'
import PageHeader from '../components/PageHeader'
import { Image, Slider, SliderFilledTrack, SliderTrack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdFacebook } from 'react-icons/md'
import { BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
import Donator from '../components/Donator'

function CampaignDetails() {
    return (
        <div>
            <PageHeader title="Help Chioma With Kidney Transpalant" />
            <div className="p-6 shadow-[0_4px_10px_#00000014] rounded-2xl mb-8">
                <div className="flex gap-14">
                    <div className="w-8/12">
                        <h2 className='font-medium text-[#004475] text-3xl mb-4'>Help Chioma With Kidney Transpalant</h2>
                        <div className="mb-5">
                            <h2 className="text-2xl text-[#333333] mb-3 font-medium">About Chioma Eze</h2>
                            <p className="text-[#333333] text-base">
                                Chioma Eze, a 28-year-old primary school teacher and devoted single mother from Lagos, is fighting for her life against end-stage
                                renal failure. After two years of exhausting dialysis treatments that drain her finances and strength, a kidney transplant is
                                her only chance at survival. Her brother has been confirmed as a perfect match, but the ₦10 million surgery cost is far beyond
                                what her family can afford.
                                With your help, we can give Chioma the gift of life and allow her to continue raising her 5-year-old daughter, Adanna.
                            </p>
                            <div className="h-[330px] w-full relative rounded-2xl py-3">
                                <Image
                                    objectFit='cover'
                                    w="100%"
                                    h="100%"
                                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                    alt='Campaign'
                                    borderRadius='16px'
                                />
                            </div>
                            <p className="text-[#333333] text-base">Chioma was diagnosed with chronic kidney disease in 2021 after months of fatigue and swelling. What began as manageable treatment has now progressed to complete kidney failure.
                                <p className="font-medium">Her Daily Reality:</p>
                                <ul class="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>3 dialysis sessions weekly at ₦85,000 each (₦765,000/month)</li>
                                    <li>Constant weakness making teaching impossible</li>
                                    <li>Growing medical debt that has forced her family to sell belongings</li>
                                </ul>
                                <p className="font-medium">The Transplant Solution:</p>
                                <ul class="list-disc pl-6 space-y-2 text-gray-700">
                                    <li><span className="font-medium">Donor Available:</span> Her brother passed all compatibility tests</li>
                                    <li><span className="font-medium">Hospital Ready:</span> LUTH transplant team has scheduled a provisional date</li>
                                    <li><span className="font-medium">Only Barrier:</span> The ₦10 million funding gap</li>
                                </ul>
                            </p>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <div className="w-1/2 h-[160px] relative rounded-base">
                                <Image
                                    objectFit='cover'
                                    w="100%"
                                    h="100%"
                                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                    alt='Campaign'
                                    borderRadius='16px'
                                />
                            </div>
                            <div className="w-1/2 h-[160px] relative rounded-base">
                                <Image
                                    objectFit='cover'
                                    w="100%"
                                    h="100%"
                                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                    alt='Campaign'
                                    borderRadius='16px'
                                />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <Link to='/'>
                                <MdFacebook size={24} color='#EA1D78' />
                            </Link>
                            <Link to='/'>
                                <BiLogoTwitter size={24} color='#EA1D78' />
                            </Link>
                            <Link to='/'>
                                <BiLogoLinkedin size={24} color='#EA1D78' />
                            </Link>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="mb-20">
                            <h2 className="text-2xl font-medium text-[#004475] mb-2">Donation Goal</h2>
                            <div class="flex items-center gap-[20px] mb-7">
                                <div class="h-[2px] bg-[#EA1D78] w-[10%]"></div>
                                <div class="h-[2px] bg-[#EA1D78] w-[20%]"></div>
                            </div>
                            <div className="bg-[#F4F4F580] rounded-xl px-3 py-6">
                                <div className="flex items-baseline gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-[#333333]">₦8,000,000  </h3>
                                    <h3 className={`text-base font-medium text-[#004475]`}>of ₦10,000,000 raised </h3>
                                </div>
                                <Slider aria-label='slider-ex-1' defaultValue={70}>
                                    <SliderTrack
                                        bg='#B2E5FF'
                                        h="10px" borderRadius="10px"
                                    >
                                        <SliderFilledTrack
                                            bg='#004475'
                                        />
                                    </SliderTrack>
                                </Slider>
                            </div>
                        </div>
                        <div className="">
                            <h2 className="text-2xl font-medium text-[#004475] mb-2">Join Us</h2>
                            <div class="flex items-center gap-[20px] mb-7">
                                <div class="h-[2px] bg-[#EA1D78] w-[10%]"></div>
                                <div class="h-[2px] bg-[#EA1D78] w-[20%]"></div>
                            </div>
                            <Donator/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignDetails