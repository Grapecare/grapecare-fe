import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { useFormik } from 'formik';
import InputField from '../components/InputField';
import { Button, Checkbox, Stack, Text, Textarea } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { BiUpload } from 'react-icons/bi';
import UploadIcon from '../assets/icons/UploadIcon';

const bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
const specialties = ['General', 'Practitioner', 'Gynaecologist']

function RegisterDoctor() {
    const [checkedItem, setCheckedItem] = useState(false)
    const [files, setFiles] = useState([]);

    const years = Array.from({ length: 20 }, (_, i) => i + 1)

    const formik = useFormik({
        initialValues: {
            bloodBankName: '',
            RegistrationNumber: '',
            address: '',
            contactNumber: '',
            yearEstablished: '',
            donationType: '',
            availableDays: '',
            bloodUnits: bloodTypes.reduce((acc, type) => {
                acc[type] = ''
                return acc
            }, {})
        },
        validationSchema: Yup.object({
            bloodBankName: Yup.string().required("Field is required"),
            RegistrationNumber: Yup.string().required("Field is required"),
            // weight: Yup.number().required("Field is required").min(50, 'Weight must be at least 50kg'),
            bloodUnits: Yup.object(
                bloodTypes.reduce((acc, type) => {
                    acc[type] = Yup.number()
                        .transform((value, originalValue) =>
                            originalValue === '' ? null : value
                        )
                        .nullable()
                        .min(0, 'Cannot be negative')
                        .notRequired()
                    return acc
                }, {})
            )
        }),
        onSubmit: async (values) => {
            console.log('vals', values)
        },
    });

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = Array.from(e.dataTransfer.files);
        setFiles((prev) => [...prev, ...newFiles]);
    };

    // Allow drag over
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handle file input selection
    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles((prev) => [...prev, ...newFiles]);
    };

    // Remove file by index
    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };
    return (
        <div>
            <PageHeader title="Register As a Doctor" />
            <div className="p-3 md:p-6 shadow-[0_4px_10px_#00000014] rounded-2xl mb-8">
                <h2 className='font-bold md:font-medium text-[#004475] text-xl md:text-3xl'>Basic Information</h2>
                <p className="text-sm text-[#333333] mb-4">Kindly fill the form below.</p>

                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    <div className=''>
                        <InputField
                            name="fullName"
                            type="text"
                            placeholder="Enter full name "
                            label="Full Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            error={!!(formik.touched.fullName && formik.errors.fullName)}
                            required={true}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor={formik.values.bloodType}
                            className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                        >
                            Medical Specialty
                        </label>
                        <select 
                            name='specialty'
                            value={formik.values.specialty}
                            onChange={(e) => formik.setFieldValue('specialty', e.target.value)}
                            className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                        >
                            <option value="">Select</option>
                            {specialties.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <InputField
                        name="licenseNumber"
                        type="text"
                        placeholder="Enter license number"
                        label="License Number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.licenseNumber}
                        helperText={formik.touched.licenseNumber && formik.errors.licenseNumber}
                        error={!!(formik.touched.licenseNumber && formik.errors.licenseNumber)}
                        required={true}
                    />
                    <div className='mb-3'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>License Document<span className='text-[#8C0F41]'>*</span></label>
                        <div className="border-2 border-dashed border-[#CBD5E1] rounded-[10px] w-full h-[150px] bg-[#EEF8FF4D] flex justify-center items-center"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <div className="flex flex-col items-center">
                                <UploadIcon />
                                <label className="inline-block text-[#333333CC] text-base px-4 py-2 rounded cursor-pointer mt-2 text-center">
                                    Browse and chose the files you want to upload from your computer
                                    <input
                                        type="file"
                                        multiple
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                            Year of Experience (Check any that apply)<span className='text-[#8C0F41]'>*</span>
                        </label>
                        <select 
                            name='specialty'
                            value={formik.values.specialty}
                            onChange={(e) => formik.setFieldValue('specialty', e.target.value)}
                            className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                        >
                            <option value="">Select Year</option>
                            {years.map((type) => (
                                <option key={type} value={type}>
                                    {type} year
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Professional Bio</label>
                        <Textarea placeholder='Here is a sample placeholder' />
                    </div>
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Enter valid email"
                        label="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        helperText={formik.touched.email && formik.errors.email}
                        error={!!(formik.touched.email && formik.errors.email)}
                        required={true}
                    />
                    <InputField
                        name="consultationFee"
                        type="text"
                        placeholder="Enter consultation"
                        label="Consultation fee"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.consultationFee}
                        helperText={formik.touched.consultationFee && formik.errors.consultationFee}
                        error={!!(formik.touched.consultationFee && formik.errors.consultationFee)}
                        required={true}
                    />
                    <InputField
                        name="address"
                        type="text"
                        placeholder="Enter detailed address"
                        label="Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        helperText={formik.touched.address && formik.errors.address}
                        error={!!(formik.touched.address && formik.errors.address)}
                        required={true}
                    />
                    <InputField
                        name="contactNumber"
                        type="text"
                        placeholder="+234"
                        label="Contact Number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactNumber}
                        helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                        error={!!(formik.touched.contactNumber && formik.errors.contactNumber)}
                        required={true}
                    />
                    <Stack>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                            Consultation Hours (Check any that apply)<span className='text-[#8C0F41]'>*</span>
                        </label>
                        <Stack spacing={[1, 2]} direction={['column', 'column']}>
                            <Checkbox
                                isChecked={formik.values.surgery === 'weekdays'}
                                onChange={() => formik.setFieldValue('surgery', 'weekdays')}
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333' >Weekdays (9AM - 5PM)</Text>
                            </Checkbox>
                            <Checkbox
                                isChecked={formik.values.surgery === 'weekend'}
                                onChange={(e) => formik.setFieldValue('surgery', 'weekend')}
                                alignItems='center'
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333'>Weekends </Text>
                            </Checkbox>
                            <Checkbox
                                isChecked={formik.values.surgery === 'emergency'}
                                onChange={(e) => formik.setFieldValue('surgery', 'emergency')}
                                mb={4}
                                alignItems='center'
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333'>Emergency On-Call </Text>
                            </Checkbox>
                        </Stack>
                    </Stack>
                    <div className='mb-3'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Government-Issued ID<span className='text-[#8C0F41]'>*</span></label>
                        <div className="border-2 border-dashed border-[#CBD5E1] rounded-[10px] w-full h-[150px] bg-[#EEF8FF4D] flex justify-center items-center"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <div className="flex flex-col items-center">
                                <UploadIcon />
                                <label className="inline-block text-[#333333CC] text-base px-4 py-2 rounded cursor-pointer mt-2 text-center">
                                    Browse and chose the files you want to upload from your computer
                                    <input
                                        type="file"
                                        multiple
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="">
                        <Checkbox
                            isChecked={checkedItem}
                            onChange={(e) => setCheckedItem(e.target.checked)}
                            mb={4}
                            alignItems='center'
                            gap={2}
                        >
                            <Text
                                fontSize={{ base: '10px', md: 'base' }}
                                fontWeight='medium' color='#333333'
                            >I confirm all information is accurate & consent to medical screening.</Text>
                        </Checkbox>
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
                        disabled={!checkedItem}
                    >
                        Submit for Verification
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default RegisterDoctor