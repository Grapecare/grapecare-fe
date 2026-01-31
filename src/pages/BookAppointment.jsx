import React from 'react'
import PageHeader from '../components/PageHeader'
import CheckIcon from '../assets/icons/CheckIcon'
import { Avatar, Button, Textarea } from '@chakra-ui/react'
import DateTimePicker from '../components/DateTimePicker'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function BookAppointment() {
    const formik = useFormik({
        initialValues: {
            date: '',
            note: '',
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Field is required"),
            note: Yup.string().required("Field is required"),
        }),
        onSubmit: async (values) => {
            console.log('vals', values)
        },
    });
    return (
        <div>
            <PageHeader title="Book Appointment" />
            <div className="p-6 shadow-[0_4px_10px_#00000014] rounded-2xl mb-8">
                <div className="py-10 px-20 rounded-xl bg-gradient-to-b from-[#F93B99] via-[#001B2E] to-[#001B2E] mb-10 flex gap-6">
                    <div className="w-3/12">
                        <Avatar src='https://bit.ly/sage-adebayo' boxSize="200px" />
                    </div>
                    <div className="9/12">
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-3xl font-bold text-white">Dr. Issac A</h2>
                            <CheckIcon />
                        </div>
                        <p className="text-2xl font-medium text-[#FFFFFFCC]">Gynecologist</p>
                        <h2 className="font-bold text-2xl text-white mb-3">₦10,000</h2>
                        <div className="flex gap-20">
                            <div className="">
                                <h3 className="text-xl text-[#FFFFFFE5] mb-1">4 years</h3>
                                <p className="text-[#FFFFFFE5] text-sm">Experience</p>
                            </div>
                            <div className="">
                                <h3 className="text-xl text-[#FFFFFFE5] mb-1">Adeoyo Hospital</h3>
                                <p className="text-[#FFFFFFE5] text-sm">Location</p>
                            </div>
                            <div className="">
                                <h3 className="text-xl text-[#FFFFFFE5] mb-1">5.0</h3>
                                <p className="text-[#FFFFFFE5] text-sm">Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[30px] text-[#004475] mb-4 font-medium">Meet Dr. Sharon A.</h2>
                    <p className="text-xl text-[#333333CC] mb-2">
                        Board-certified gynecologist Dr. Sharon A. specializes in <span className="font-medium">preventive care, reproductive health, and minimally invasive procedures.</span>
                        With over four years of experience across leading hospitals and private practice, she combines evidence-based medicine with a
                        patient-centered approach -whether guiding women through pregnancy,
                        managing hormonal health, or performing advanced diagnostic screenings.
                    </p>
                    <h3 className="font-semibold text-xl">Key Expertise:</h3>
                    <ul class="list-disc pl-5 space-y-2 ml-2 text-[#333333CC]">
                        <li>Prenatal & Postnatal Care</li>
                        <li>Family Planning Counseling</li>
                        <li>PCOS & Endometriosis Management</li>
                        <li> Adolescent Gynecology</li>
                    </ul>
                    <p className="text-[#333333CC] mb-10">
                        She believes in empowering patients through education, ensuring every woman leaves her clinic informed and confident about her health choices.
                    </p>
                    <div className="">
                        <form
                            onSubmit={formik.handleSubmit}
                            className='w-full'
                        >
                            <DateTimePicker />
                            <div className='mb-3'>
                                <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Note</label>
                                <Textarea placeholder='Here is a sample placeholder' />
                            </div>
                            <Button
                                // isLoading
                                type='submit'
                                bg='#EA1D78'
                                color='white'
                                w="full"
                                borderRadius="md"
                                mt={5}
                                mb={2}
                                // disabled={!checkedItem}
                            >
                                Book Appointment
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment