import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { useFormik } from 'formik';
import InputField from '../components/InputField';
import { Button, Checkbox, Stack, Text } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { BiUpload } from 'react-icons/bi';
import UploadIcon from '../assets/icons/UploadIcon';

const bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
const medicalHistoryOptions = ['Anemia', 'Heart Disease', 'Diabetes', 'High Blood Pressure', 'Asthma', 'Epilepsy', 'Hepatitis', 'HIV/AIDS', 'Tuberculosis', 'Cancer', 'Kidney Disease', 'Liver Disease', 'Thyroid Disease']

function GetStarted() {
    const [checkedItem, setCheckedItem] = useState(false)
    const [files, setFiles] = useState([]);

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
            <PageHeader title="Donate Blood" />
            <div className="p-3 md:p-6 shadow-[0_4px_10px_#00000014] rounded-2xl mb-8">
                <h2 className='font-bold md:font-medium text-[#004475] text-xl md:text-3xl mb-4'>Institution Information</h2>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    <div className=''>
                        <InputField
                            name="bloodBankName"
                            type="text"
                            placeholder="Enter blood bank name"
                            label="Blood Bank Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.bloodBankName}
                            helperText={formik.touched.bloodBankName && formik.errors.bloodBankName}
                            error={!!(formik.touched.bloodBankName && formik.errors.bloodBankName)}
                            required={true}
                        />
                    </div>
                    <Stack>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                        Type/Category?<span className='text-[#8C0F41]'>*</span>
                        </label>
                        <Stack spacing={[1, 2]} direction={['column', 'column']}>
                            <Checkbox
                                isChecked={formik.values.surgery === true}
                                onChange={() => formik.setFieldValue('surgery', true)}
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333' >Hospital-based</Text>
                            </Checkbox>
                            <Checkbox
                                isChecked={formik.values.surgery === false}
                                onChange={(e) => formik.setFieldValue('surgery', false)}
                                mb={4}
                                alignItems='center'
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333'>No</Text>
                            </Checkbox>
                        </Stack>
                    </Stack>
                    <div className=''>
                        <InputField
                            name="RegistrationNumber"
                            type="text"
                            placeholder="Enter registration/license number"
                            label="Registration/License Number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.RegistrationNumber}
                            helperText={formik.touched.RegistrationNumber && formik.errors.RegistrationNumber}
                            error={!!(formik.touched.RegistrationNumber && formik.errors.RegistrationNumber)}
                            required={true}
                        />
                    </div>
                    <div className=''>
                        <InputField
                            name="yearEstablished"
                            type="date"
                            placeholder=""
                            label="Year Established"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.yearEstablished}
                            helperText={formik.touched.yearEstablished && formik.errors.yearEstablished}
                            error={!!(formik.touched.yearEstablished && formik.errors.yearEstablished)}
                            required={true}
                        />
                    </div>
                    <div className=''>
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
                    </div>
                    <div className=''>
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
                    </div>
                    <div className=''>
                        <InputField
                            name="emergencyEmail"
                            type="text"
                            placeholder="Enter emergency email"
                            label="Emergency Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.emergencyEmail}
                            helperText={formik.touched.emergencyEmail && formik.errors.emergencyEmail}
                            error={!!(formik.touched.emergencyEmail && formik.errors.emergencyEmail)}
                            required={true}
                        />
                    </div>
                    <Stack 
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent={'space-between'} mb={3}
                    >
                        <Stack w='50%'>
                            <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                            Blood Inventory:<span className='text-[#8C0F41]'>*</span>
                            </label>
                            <Stack spacing={[1, 2]} direction={['column', 'column']}>
                                {
                                    bloodTypes.map((type) => (
                                    <div key={type} style={{ marginBottom: '12px' }}>
                                    <label htmlFor={`bloodUnits.${type}`} className='mr-3'>
                                        {type}
                                    </label>

                                    <input
                                        type="number"
                                        name={`bloodUnits.${type}`}
                                        id={`bloodUnits.${type}`}
                                        value={formik.values.bloodUnits[type]}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Enter units"
                                        min="0"
                                        className='border-b border-[#333333] text-[#33333380] text-sm outline-none'
                                    />

                                    {formik.touched.bloodUnits?.[type] && formik.errors.bloodUnits?.[type] && (
                                        <div style={{ color: 'red', fontSize: '12px' }}>
                                        {formik.errors.bloodUnits[type]}
                                        </div>
                                    )}
                                    </div>
                                    ))
                                }
                            </Stack>
                        </Stack>
                        <Stack w='50%'>
                            <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                Available Days:<span className='text-[#8C0F41]'>*</span>
                            </label>
                            <Stack spacing={[1, 2]} direction={['column', 'column']}>
                                <Checkbox
                                    isChecked={formik.values.availableDays === 'Weekdays'}
                                    onChange={() => formik.setFieldValue('availableDays', 'Weekdays')}
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333' >Weekdays</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.availableDays === 'Weekends'}
                                    onChange={(e) => formik.setFieldValue('availableDays', 'Weekends')}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>Weekends</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.availableDays === 'Anytime'}
                                    onChange={(e) => formik.setFieldValue('availableDays', 'Anytime')}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>Anytime</Text>
                                </Checkbox>
                            </Stack>
                        </Stack>
                    </Stack>
                    
                    <div className='mb-3'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>License Certificate<span className='text-[#8C0F41]'>*</span></label>
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
                    <div className='mb-3'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Blood Storage Facility Certification<span className='text-[#8C0F41]'>*</span></label>
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

export default GetStarted