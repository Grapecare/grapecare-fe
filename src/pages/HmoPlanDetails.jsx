import React from 'react'
import PageHeader from '../components/PageHeader'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const outPatientServices = [
  'Out-Patient Limit ₦150,000',
  'Out-Patient Care, General and Specialist Consultation',
  'X-Rays, Laboratory & Diagnostic Tests',
  'Primary Eye Care- Consultation, Examination , Simple or primary infection or conditions and Medications',
  'ENT services',
  'Prescribed Medicines And Drugs',
  'Advanced & Complex Investigations (incl. CT Scan, MRI Scan)'
]

function HmoPlanDetails() {
  const navigate = useNavigate()
  
  return (
    <div>
      <PageHeader title="Health Plans" />
      <div className="flex">
        <div className="w-1/2 bg-gradient-to-br from-[#0066B4] to-[#002C4E] py-12 px-6 text-white rounded-tl-2xl h-fit">
          <h2 className="font-bold text-lg mb-4">AXA BRONZE HEALTH PLAN</h2>
          <p className="">At ₦86,500 per year, this entry level health insurance plan gives you access to roam
            across 1,295 hospitals in Nigeria for your medical needs. You can consult a doctor, get laboratory test,
            get children vaccines and undergo surgery up to a maximum of ₦250,000
          </p>
        </div>
        <div className="w-1/2 bg-[#D1D1D180] py-[30px] px-[60px] flex flex-col gap-10 rounded-tr-2xl rounded-br-2xl">
          <div className="bg-[#FFFFFF80] border border-[#6DD1FF66] text-[#333333] py-2.5 px-4 rounded-[8px]">
            <h2 className="font-medium text-2xl mb-2.5">REGION OF COVER</h2>
            <p className="text-base">Hospital Category Accessible</p>
          </div>
          <div className="bg-[#FFFFFF80] border border-[#6DD1FF66] text-[#333333] py-2.5 px-4 rounded-[8px]">
            <h2 className="font-medium text-2xl mb-2.5">OUT-PATIENT SERVICES</h2>
            <div className="flex flex-col gap-2">
              {
                outPatientServices.map((service, index) => (
                  <div className="flex items-center gap-2.5"
                    key={index}
                  >
                    <div className="">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.4571 7.45711L9 13.9142L4.79289 9.7071L6.20711 8.2929L9 11.0858L14.0429 6.04289L15.4571 7.45711Z" fill="#FF67B6" />
                      </svg>
                    </div>
                    <h3 className="text-base text-[#333333]">{service}</h3>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="bg-[#FFFFFF80] border border-[#6DD1FF66] text-[#333333] py-2.5 px-4 rounded-[8px]">
            <h2 className="font-medium text-2xl mb-2.5">IN-PATIENT SERVICES</h2>
            <div className="flex flex-col gap-2">
              {
                outPatientServices.map((service, index) => (
                  <div className="flex items-center gap-2.5"
                    key={index}
                  >
                    <div className="">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.4571 7.45711L9 13.9142L4.79289 9.7071L6.20711 8.2929L9 11.0858L14.0429 6.04289L15.4571 7.45711Z" fill="#FF67B6" />
                      </svg>
                    </div>
                    <h3 className="text-base text-[#333333]">{service}</h3>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="bg-[#FFFFFF80] border border-[#6DD1FF66] text-[#333333] py-2.5 px-4 rounded-[8px]">
            <h2 className="font-medium text-2xl mb-2.5">OTHER BENEFITS</h2>
            <div className="flex flex-col gap-2">
              {
                outPatientServices.map((service, index) => (
                  <div className="flex items-center gap-2.5"
                    key={index}
                  >
                    <div className="">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.4571 7.45711L9 13.9142L4.79289 9.7071L6.20711 8.2929L9 11.0858L14.0429 6.04289L15.4571 7.45711Z" fill="#FF67B6" />
                      </svg>
                    </div>
                    <h3 className="text-base text-[#333333]">{service}</h3>
                  </div>
                ))
              }
            </div>
          </div>
          <Button color='#fff' bg='#EA1D78' fontWeight={'700'} width='100%'
            onClick={()=>navigate('/dashboard/health-plans/hmo-plans/buy-plan')}
          >Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

export default HmoPlanDetails