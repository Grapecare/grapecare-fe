import React from 'react'
import PageHeader from '../components/PageHeader'
import { Button, Image } from '@chakra-ui/react'
import ArrTopRight from '../assets/icons/ArrTopRight'
import ConsultantCard from '../components/ConsultantCard'
import { useNavigate } from 'react-router-dom'


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
    return (
        <div>
            <PageHeader title="Teleconsulting" />
            <div className="py-10 px-16 rounded-xl bg-gradient-to-r from-[#001B2E] via-[#001B2E] to-[#F93B99] mb-10">
                <div className="w-4/12">
                    <h2 className="font-semibold text-2xl text-white mb-2">
                        Ready to Consult Online?
                    </h2>
                    <h3 className="text-base font-medium text-white mb-5">
                        Patients are waiting online now! Get verified as a Telemedicine Provider and start consultations today.
                    </h3>
                    <Button
                        w='100%'
                        onClick={()=>navigate('/dashboard/register-doctor')}
                        rightIcon={<ArrTopRight color='#fff' />} color='#fff' bg='#F93B99'
                    >Register Now</Button>
                </div>
            </div>
            <div className="mb-10">
                <h2 className='font-medium text-[#004475] text-3xl mb-4'>Top Specialists</h2>
                <div className="bg-[#EEF8FF80] rounded-xl p-5 grid grid-cols-7 gap-5">
                    {
                        specialists.map((specialist, index) => (
                            <div className="" key={index}>
                                <div className="h-[88px] w-full mb-4 relative rounded-2xl">
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
                </div>
            </div>
            <div className="">
                <h2 className='font-medium text-[#004475] text-3xl mb-4'>Best Doctors</h2>
                <div className="bg-[#EEF8FF80] rounded-xl p-5 grid grid-cols-3 gap-5">
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