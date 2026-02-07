import React from 'react'
import PageHeader from '../components/PageHeader'
import { Button, Image, Box, IconButton } from '@chakra-ui/react'
import ArrTopRight from '../assets/icons/ArrTopRight'
import ConsultantCard from '../components/ConsultantCard'
import { useNavigate } from 'react-router-dom'
import consult from '../assets/images/consult.png'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";


const specialists = [
    {
        role: 'General'
    },
    {
        role: 'Dentist'
    },
    {
        role: ' Pediatrician'
    },
    {
        role: 'Cardiologist '
    },
]
function TeleConsulting() {
    const navigate = useNavigate()
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (!sliderRef.current) return;

        const { current } = sliderRef;
        const scrollAmount = 200;

        current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <PageHeader title="Teleconsulting" />
            <div className="pt-5 md:pt-10 px-4 md:px-16 rounded-xl bg-gradient-to-r from-[#001B2E] via-[#001B2E] to-[#F93B99] mb-10 flex justify-between">
                <div className="w-6/12 md:w-4/12 pb-5 md:pb-0">
                    <h2 className="font-semibold text-lg md:text-2xl text-white mb-2">
                        Ready to Consult Online?
                    </h2>
                    <h3 className="text-sm md:text-base font-medium text-white mb-5">
                        Patients are waiting online now! Get verified as a Telemedicine Provider and start consultations today.
                    </h3>
                    <Button
                        w='100%'
                        onClick={() => navigate('/dashboard/tele-consultation/register-doctor')}
                        rightIcon={<ArrTopRight color='#fff' />} color='#fff' bg='#F93B99'
                    >Register Now</Button>
                </div>
                <div className="w-5/12">
                    <Image src={consult} alt='consultation' />
                </div>
            </div>
            <div className="mb-10">
                <h2 className='font-medium text-[#004475] text-xl md:text-3xl mb-4'>Top Specialists</h2>
                {/* <div className="bg-[#EEF8FF80] rounded-xl p-5 flex gap-5">
                    {
                        specialists.map((specialist, index) => (
                            <div className="" key={index}>
                                <div className="h-[88px] w-32 mb-4 relative rounded-2xl">
                                    <Image
                                        objectFit='cover'
                                        w="100%"
                                        h="100%"
                                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                        alt='specialists'
                                        borderRadius='10px'
                                    />
                                </div>
                                <h3 className="text-center font-medium text-xl">{specialist.role}</h3>
                            </div>
                        ))
                    }
                </div> */}
                <Box className="relative bg-[#EEF8FF80] rounded-xl p-5">

                    {/* Left Arrow */}
                    <IconButton
                        icon={<ChevronLeftIcon />}
                        position="absolute"
                        left="0"
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex="2"
                        borderRadius="full"
                        onClick={() => scroll("left")}
                        aria-label="Scroll Left"
                        bg="white"
                        shadow="md"
                        _hover={{ bg: "gray.100" }}
                    />

                    {/* Right Arrow */}
                    <IconButton
                        icon={<ChevronRightIcon />}
                        position="absolute"
                        right="0"
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex="2"
                        borderRadius="full"
                        onClick={() => scroll("right")}
                        aria-label="Scroll Right"
                        bg="white"
                        shadow="md"
                        _hover={{ bg: "gray.100" }}
                    />

                    {/* Slider Track */}
                    <div
                        ref={sliderRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-8"
                    >
                        {specialists.map((specialist, index) => (
                            <div
                                key={index}
                                className="min-w-[140px] snap-start flex-shrink-0"
                            >
                                <div className="h-[88px] w-32 mb-4 rounded-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb"
                                        alt="specialist"
                                        objectFit="cover"
                                        w="100%"
                                        h="100%"
                                    />
                                </div>

                                <h3 className="text-center font-medium text-lg md:text-xl">
                                    {specialist.role}
                                </h3>
                            </div>
                        ))}
                    </div>
                </Box>
            </div>
            <div className="">
                <h2 className='font-medium text-[#004475] text-xl md:text-3xl mb-4'>Best Doctors</h2>
                <div className="bg-transparent md:bg-[#EEF8FF80] rounded-xl p-0 md:p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        specialists.map((specialist, index) => (
                            <ConsultantCard key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TeleConsulting