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

function CreateCause() {
    const [checkedItem, setCheckedItem] = useState(false)
    const [files, setFiles] = useState([]);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            myself: null,
            fundTo: null,
            amountNeeded: '',
            medicalCondition: '',
            contactNumber: '',
            address: '',
            relationship: '',
            hospitalName: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Field is required"),
            amountNeeded: Yup.string().required("Field is required"),
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
            <PageHeader title="Create Cause" />
            <div className="p-6 shadow-[0_4px_10px_#00000014] rounded-2xl mb-8">
                <h2 className='font-medium text-[#004475] text-3xl mb-1'>Basic Information</h2>
                <p className="text-sm text-[#333333] mb-4">Kindly fill the form below.</p>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    <div className=''>
                        <InputField
                            name="fullName"
                            type="text"
                            placeholder="Enter full name of beneficiary"
                            label="Full Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            error={!!(formik.touched.fullName && formik.errors.fullName)}
                            required={true}
                        />
                    </div>
                    <Stack>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                            Is this for you or someone else<span className='text-[#8C0F41]'>*</span>
                        </label>
                        <Stack spacing={[1, 2]} direction={['column', 'column']}>
                            <Checkbox
                                isChecked={formik.values.myself === true}
                                onChange={() => formik.setFieldValue('myself', true)}
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333' >Myself</Text>
                            </Checkbox>
                            <Checkbox
                                isChecked={formik.values.myself === false}
                                onChange={(e) => formik.setFieldValue('myself', false)}
                                mb={4}
                                alignItems='center'
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333'>Someone’s else</Text>
                            </Checkbox>
                        </Stack>
                    </Stack>
                    <div className=''>
                        <InputField
                            name="relationship"
                            type="text"
                            placeholder="Relationship"
                            label="If someone else, what’s your relationship?"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.relationship}
                            helperText={formik.touched.relationship && formik.errors.relationship}
                            error={!!(formik.touched.relationship && formik.errors.relationship)}
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
                            placeholder="+234 000 000 0000"
                            label="Contact Number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.contactNumber}
                            helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                            error={!!(formik.touched.contactNumber && formik.errors.contactNumber)}
                            required={true}
                        />
                    </div>
                    <InputField
                        name="medicalCondition"
                        type="text"
                        placeholder="Medical condition"
                        label="What is the medical condition?"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.medicalCondition}
                        helperText={formik.touched.medicalCondition && formik.errors.medicalCondition}
                        error={!!(formik.touched.medicalCondition && formik.errors.medicalCondition)}
                        required={true}
                    />
                    <div className='mb-3'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Upload Doctor’s Report<span className='text-[#8C0F41]'>*</span></label>
                        <div className="border-2 border-dashed border-[#CBD5E1] rounded-[10px] w-full h-[150px] bg-[#EEF8FF4D] flex justify-center items-center"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <div className="flex flex-col items-center">
                                <UploadIcon />
                                <label className="inline-block text-[#333333CC] text-base px-4 py-2 rounded cursor-pointer mt-2">
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
                    <InputField
                        name="amountNeeded"
                        type="text"
                        placeholder="Enter  amount needed"
                        label="How much is needed?"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amountNeeded}
                        helperText={formik.touched.amountNeeded && formik.errors.amountNeeded}
                        error={!!(formik.touched.amountNeeded && formik.errors.amountNeeded)}
                        required={true}
                    />
                    <Stack>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                        Will funds go directly to the hospital or beneficiary?<span className='text-[#8C0F41]'>*</span>
                        </label>
                        <Stack spacing={[1, 2]} direction={['column', 'column']}>
                            <Checkbox
                                isChecked={formik.values.fundTo === 'beneficiary'}
                                onChange={() => formik.setFieldValue('fundTo', 'beneficiary')}
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333' >Beneficiary</Text>
                            </Checkbox>
                            <Checkbox
                                isChecked={formik.values.fundTo === 'hospital'}
                                onChange={(e) => formik.setFieldValue('fundTo', 'hospital')}
                                mb={4}
                                alignItems='center'
                                gap={2}
                            >
                                <Text fontSize={['base']} color='#333333'>Hospital</Text>
                            </Checkbox>
                        </Stack>
                    </Stack>
                    <InputField
                        name="hospitalName"
                        type="text"
                        placeholder="Enter Name of clinic/doctor"
                        label="Name of hospital/doctor overseeing care?"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hospitalName}
                        helperText={formik.touched.hospitalName && formik.errors.hospitalName}
                        error={!!(formik.touched.hospitalName && formik.errors.hospitalName)}
                        required={true}
                    />
                    <div className="">
                        <Checkbox
                            isChecked={checkedItem}
                            onChange={(e) => setCheckedItem(e.target.checked)}
                            mb={4}
                            alignItems='center'
                            gap={2}
                        >
                            <Text fontSize={['base']} fontWeight='medium' color='#333333'>I confirm all information is accurate & consent to medical screening.</Text>
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

export default CreateCause
