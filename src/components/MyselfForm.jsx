import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import InputField from './InputField';
import { Button, Checkbox, Text } from '@chakra-ui/react';
import nigeriaData from '../constant/nigeria_states_lgas.json'
import UploadIcon from '../assets/icons/UploadIcon';


function MyselfForm() {
    const states = Object.keys(nigeriaData)
    const [selectedState, setSelectedState] = useState('')
    const lgas = nigeriaData[selectedState]
    const [files, setFiles] = useState([]);
    const [checkedItem, setCheckedItem] = useState(false)


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

    const formik = useFormik({
        initialValues: {
            fullName: '',
            gender: '',
            dob: '',
            genotype: '',
            coverDuration: '',
            preferredHospital: '',
            hospitalLocation: '',
            healthCondition: null,
            email: '',
            phoneNumber: '',
            contactAddress: '',
            state: '',
            city: '',
        },
        validationSchema: Yup.object({
            bloodType: Yup.string().required("Field is required"),
            weight: Yup.number().required("Field is required").min(50, 'Weight must be at least 50kg'),
        }),
        onSubmit: async (values) => {
            console.log('values:', values)
        },
    });
    return (
        <div>
            <form
                onSubmit={formik.handleSubmit}
                className='w-full'
            >
                <div className="flex gap-7">
                    <div className="w-1/2 text-[#333333]">
                        <div className="border border-[#33333366] p-6 rounded-2xl mb-10">
                            <div className="pb-5 border-b border-[#33333380] mb-4">
                                <h1 className='font-medium text-xl text-[#004475]'>Personal Information</h1>
                                <p className='text-sm'>Kindly fill the form below.</p>
                            </div>
                            <InputField
                                name="fullName"
                                type="text"
                                placeholder=""
                                label="Full Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                                error={!!(formik.touched.fullName && formik.errors.fullName)}
                                required={true}
                            />
                            <div className="flex flex-col">
                                <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                    Gender <span className='text-[#8C0F41]'>*</span>
                                </label>
                                <div className="">
                                    <Checkbox
                                        isChecked={formik.values.gender === 'male'}
                                        onChange={() => formik.setFieldValue('gender', 'male')}
                                        mb={4}
                                        flexDirection="row-reverse"
                                        alignItems='center'
                                        justifyContent="center"
                                        gap={2}
                                    >
                                        <Text fontSize={['base']} color='#333333' >Male</Text>
                                    </Checkbox>
                                    <Checkbox
                                        isChecked={formik.values.gender === 'female'}
                                        onChange={() => formik.setFieldValue('gender', 'female')}
                                        mb={4}
                                        flexDirection="row-reverse"
                                        alignItems='center'
                                        gap={2}
                                    >
                                        <Text fontSize={['base']} color='#333333'>Female</Text>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor={formik.values.genotype}
                                    className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                                >
                                    Genotype <span className='text-[#8C0F41]'>*</span>
                                </label>
                                <select
                                    name='genotype'
                                    value={formik.values.genotype}
                                    onChange={(e) => formik.setFieldValue('genotype', e.target.value)}
                                    className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                                >
                                    <option value="">Select</option>
                                    {['AA', 'AB', 'SS'].map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <InputField
                                name="dob"
                                type="date"
                                placeholder=""
                                label="Date of Birth"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                                helperText={formik.touched.dob && formik.errors.dob}
                                error={!!(formik.touched.dob && formik.errors.dob)}
                                required={true}
                            />
                        </div>
                        <div className="border border-[#33333366] p-6 rounded-2xl">
                            <div className="pb-5 border-b border-[#33333380] mb-4">
                                <h1 className='font-medium text-xl text-[#004475]'>Other Information</h1>
                                <p className='text-sm'>Kindly fill the form below.</p>
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor={formik.values.coverDuration}
                                    className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                                >
                                    Duration of Cover <span className='text-[#8C0F41]'>*</span>
                                </label>
                                <select
                                    name='coverDuration'
                                    value={formik.values.coverDuration}
                                    onChange={(e) => formik.setFieldValue('coverDuration', e.target.value)}
                                    className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                                >
                                    <option value="">Select</option>
                                    {['Full Year', '6 Months', '3 Months'].map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor={formik.values.hospitalLocation}
                                    className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                                >
                                    Preferred Hospital Location <span className='text-[#8C0F41]'>*</span>
                                </label>
                                <select
                                    name='hospitalLocation'
                                    value={formik.values.hospitalLocation}
                                    onChange={(e) => formik.setFieldValue('hospitalLocation', e.target.value)}
                                    className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                                >
                                    <option value="">Select</option>
                                    {['Yaba', 'VI', '3Lagos-Island'].map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor={formik.values.preferredHospital}
                                    className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                                >
                                    Preferred Hospital <span className='text-[#8C0F41]'>*</span>
                                </label>
                                <select
                                    name='preferredHospital'
                                    value={formik.values.preferredHospital}
                                    onChange={(e) => formik.setFieldValue('preferredHospital', e.target.value)}
                                    className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                                >
                                    <option value="">Select</option>
                                    {['Yaba', 'VI', '3Lagos-Island'].map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                    Pre-existing health conditions?:<span className='text-[#8C0F41]'>*</span>
                                </label>
                                <div className="">
                                    <Checkbox
                                        isChecked={formik.values.healthCondition === true}
                                        onChange={() => formik.setFieldValue('healthCondition', true)}
                                        mb={4}
                                        flexDirection="row-reverse"
                                        alignItems='center'
                                        justifyContent="center"
                                        gap={2}
                                    >
                                        <Text fontSize={['base']} color='#333333' >Yes</Text>
                                    </Checkbox>
                                    <Checkbox
                                        isChecked={formik.values.healthCondition === false}
                                        onChange={() => formik.setFieldValue('healthCondition', false)}
                                        mb={4}
                                        flexDirection="row-reverse"
                                        alignItems='center'
                                        gap={2}
                                    >
                                        <Text fontSize={['base']} color='#333333'>No</Text>
                                    </Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="border border-[#33333366] p-6 rounded-2xl mb-10">
                            <div className="pb-5 border-b border-[#33333380] mb-4">
                                <h1 className='font-medium text-xl text-[#004475]'>Contact Information</h1>
                                <p className='text-sm'>Kindly fill the form below.</p>
                            </div>
                            <InputField
                                name="email"
                                type="email"
                                placeholder=""
                                label="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                helperText={formik.touched.email && formik.errors.email}
                                error={!!(formik.touched.email && formik.errors.email)}
                                required={true}
                            />
                            <InputField
                                name="phoneNumber"
                                type="text"
                                placeholder=""
                                label="Phone Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                                required={true}
                            />
                            <InputField
                                name="contactAddress"
                                type="text"
                                placeholder=""
                                label="Contact Address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.contactAddress}
                                helperText={formik.touched.contactAddress && formik.errors.contactAddress}
                                error={!!(formik.touched.contactAddress && formik.errors.contactAddress)}
                                required={true}
                            />
                            <div className='mb-4'>
                                <label
                                    htmlFor={formik.values.genotype}
                                    className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                                >
                                    State <span className='text-[#8C0F41]'>*</span>
                                </label>
                                <select
                                    name='state'
                                    value={formik.values.state}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSelectedState(value);
                                        formik.setFieldValue('state', value)
                                    }}
                                    className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                                >
                                    <option value="">Select</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>
                                            {state}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor={formik.values.city}
                                    className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                                >
                                    Town <span className='text-[#8C0F41]'>*</span>
                                </label>
                                <select
                                    name='city'
                                    value={formik.values.city}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSelectedState(value);
                                        formik.setFieldValue('city', value)
                                    }}
                                    className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                                >
                                    <option value="">Select</option>
                                    {lgas?.map((city, index) => (
                                        <option key={index} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Government-Issued ID<span className='text-[#8C0F41]'>*</span></label>
                                <div className="border-2 mb-1 border-dashed border-[#CBD5E1] rounded-[10px] w-full h-[150px] bg-[#EEF8FF4D] flex justify-center items-center"
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
                                <p className="text-xs text-[#333333] font-medium">e.g Driver's License, National ID Card, International Passport <span className="text-[#8C0F41]">(Max file size: 2MB)</span></p>
                            </div>
                            <div className="mb-4">
                                <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Passport<span className='text-[#8C0F41]'>*</span></label>
                                <div className="border-2 mb-1 border-dashed border-[#CBD5E1] rounded-[10px] w-full h-[150px] bg-[#EEF8FF4D] flex justify-center items-center"
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
                                <p className="text-xs text-[#333333] font-medium">e.g Selfie or Passport Sized Photograph <span className="text-[#8C0F41]">(Max file size: 2MB)</span></p>
                            </div>
                        </div>
                        <div className="border border-[#33333366] rounded-2xl mb-10">
                            <h2 className="py-3 px-6 text-white font-bold text-xl bg-gradient-to-br from-[#0A2F4F] via-[#0B4F7A] to-[#0E6BA8]">Selected Plan Details</h2>
                            <div className="px-2.5">
                                <div className="flex justify-between mb-3 py-2 border-b border-[#33333366]">
                                    <h3 className="font-semibold text-lg text-[#333333]">Plan Name</h3>
                                    <h4 className="font-normal text-lg text-[#333333]">AXA Bronze</h4>
                                </div>
                                <div className="flex justify-between py-2">
                                    <h3 className="font-semibold text-lg text-[#333333]">Cost</h3>
                                    <h4 className="font-normal text-lg text-[#333333]">₦86,500</h4>
                                </div>
                            </div>
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
                            >Please check this box to confirm that you have read the exclusions from your policy</Text>
                        </Checkbox>
                    </div>
                <Button
                    // isLoading
                    type='submit'
                    bg='#EA1D78'
                    color='white'
                    w="full"
                    borderRadius="md"
                    mt={3}
                    mb={2}
                    disabled={!checkedItem}
                >
                    Buy Now
                </Button>
            </form>
        </div>
    )
}

export default MyselfForm