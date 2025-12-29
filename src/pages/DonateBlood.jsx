import React, { useState, useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import { useFormik } from 'formik';
import InputField from '../components/InputField';
import { Button, Checkbox, Stack, Text, useToast } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { BiUpload } from 'react-icons/bi';
import UploadIcon from '../assets/icons/UploadIcon';
import { getBloodTypes, registerBloodDonor } from '../services/bloodDonor';
const medicalHistoryOptions = [
    { label: 'Anemia', value: 'anemia' },
    { label: 'Heart Disease', value: 'heart_disease' },
    { label: 'Diabetes', value: 'diabetes' },
    { label: 'High Blood Pressure', value: 'high_blood_pressure' },
    { label: 'Asthma', value: 'asthma' },
    { label: 'Epilepsy', value: 'epilepsy' },
    { label: 'Hepatitis', value: 'hepatitis' },
    { label: 'HIV/AIDS', value: 'hiv/aids' },
    { label: 'Tuberculosis', value: 'tuberculosis' },
    { label: 'Cancer', value: 'cancer' },
    { label: 'Kidney Disease', value: 'kidney_disease' },
    { label: 'Liver Disease', value: 'liver_disease' },
    { label: 'Thyroid Disease', value: 'thyroid_disease' },
    { label: 'Other', value: 'other' }
]

function DonateBlood() {
    const navigate = useNavigate();
    const toast = useToast();
    const [checkedItem, setCheckedItem] = useState(false)
    const [files, setFiles] = useState([]);
    const [bloodTypes, setBloodTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch blood types on component mount
    useEffect(() => {
        const fetchBloodTypes = async () => {
            try {
                const response = await getBloodTypes();
                // Extract the data array from the response
                setBloodTypes(response.data || []);
            } catch (error) {
                console.error('Failed to fetch blood types:', error);
                
                // Check if it's an authentication error
                if (error.response?.status === 401) {
                    toast({
                        title: 'Authentication Required',
                        description: 'Please log in to access this page',
                        status: 'warning',
                        duration: 5000,
                        isClosable: true,
                    });
                    navigate('/login');
                } else {
                    toast({
                        title: 'Error',
                        description: 'Failed to load blood types. Please try again.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                }
            }
        };
        fetchBloodTypes();
    }, [toast, navigate]);

    const formik = useFormik({
        initialValues: {
            bloodType: '',
            previouslyDonated: null,
            donationDate: '',
            weight: '',
            medicalHistory: [],
            otherMedicalCondition: '',
            surgery: null,
            pregnancy: null,
            alcohol: null,
            smoked: null,
            donationType: '',
            availableDays: '',
        },
        validationSchema: Yup.object({
            bloodType: Yup.string().required("Field is required"),
            weight: Yup.number().required("Field is required").min(50, 'Weight must be at least 50kg'),
        }),
        onSubmit: async (values) => {
            if (files.length === 0) {
                toast({
                    title: 'ID Proof Required',
                    description: 'Please upload your ID proof document',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

            setIsLoading(true);
            try {
                // Create FormData for file upload
                const formData = new FormData();
                formData.append('blood_type_id', values.bloodType);
                formData.append('has_donated_before', values.previouslyDonated || false);
                if (values.donationDate) {
                    formData.append('last_donation_date', values.donationDate);
                }
                formData.append('weight', values.weight);
                
                // Handle medical conditions - if "other" is selected, add the custom text
                let medicalConditions = [...values.medicalHistory];
                if (medicalConditions.includes('other') && values.otherMedicalCondition) {
                    // Replace 'other' with the actual condition text
                    medicalConditions = medicalConditions.filter(c => c !== 'other');
                    medicalConditions.push(values.otherMedicalCondition.toLowerCase());
                }
                formData.append('medical_conditions', JSON.stringify(medicalConditions));
                
                formData.append('major_surgery_last_6_months', values.surgery || false);
                formData.append('pregnancy_delivery_last_6_months', values.pregnancy || false);
                formData.append('consumed_alcohol_last_24_hours', values.alcohol || false);
                formData.append('smoked_last_12_hours', values.smoked || false);
                formData.append('preferred_donation_type', values.donationType || 'any');
                formData.append('available_days', values.availableDays.toLowerCase() || '');
                formData.append('id_proof_document', files[0]);
                formData.append('consent_given', checkedItem);

                await registerBloodDonor(formData);

                toast({
                    title: 'Registration Successful',
                    description: 'Your blood donor registration has been received. We\'re reviewing your application and will notify you once approved. You\'re one step closer to saving lives!',
                    status: 'success',
                    duration: 10000,
                    isClosable: true,
                });

                // Navigate to success page or dashboard
                navigate('/dashboard/blood-bank');
            } catch (error) {
                const errorMessage = error.response?.data?.message ||
                                   error.response?.data?.detail ||
                                   'Failed to register as blood donor';

                toast({
                    title: 'Registration Failed',
                    description: errorMessage,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            } finally {
                setIsLoading(false);
            }
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
    
    //   // Remove file by index
    //   const removeFile = (index) => {
    //     setFiles((prev) => prev.filter((_, i) => i !== index));
    //   };
    return (
        <div>
            <PageHeader title="Be a Voluntary Donor" />
            <div className="p-6 shadow-[0_4px_10px_#00000014] rounded-2xl mb-8">
                <h2 className='font-medium text-[#004475] text-3xl mb-4'>Blood Details</h2>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    <div className='mb-4'>
                        <label
                            htmlFor={formik.values.bloodType}
                            className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                        >
                            Blood Type
                        </label>
                        <select 
                            name='bloodType'
                            value={formik.values.bloodType}
                            onChange={(e) => formik.setFieldValue('bloodType', e.target.value)}
                            className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                        >
                            <option value="">Select Blood Type</option>
                            {bloodTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                            Have you donated before? <span className='text-[#8C0F41]'>*</span>
                        </label>
                        <Checkbox
                            isChecked={formik.values.previouslyDonated === true}
                            onChange={() => formik.setFieldValue('previouslyDonated', true)}
                            mb={4}
                            flexDirection="row-reverse"
                            alignItems='center'
                            justifyContent="center"
                            gap={2}
                        >
                            <Text fontSize={['base']} color='#333333' >Yes</Text>
                        </Checkbox>
                        <Checkbox
                            isChecked={formik.values.previouslyDonated === false}
                            onChange={() => formik.setFieldValue('previouslyDonated', false)}
                            mb={4}
                            flexDirection="row-reverse"
                            alignItems='center'
                            gap={2}
                        >
                            <Text fontSize={['base']} color='#333333'>No</Text>
                        </Checkbox>
                    </Stack>
                    <div className=''>
                        <InputField
                            name="donationDate"
                            type="date"
                            placeholder=""
                            label="If Yes, When"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.donationDate}
                            helperText={formik.touched.donationDate && formik.errors.donationDate}
                            error={!!(formik.touched.donationDate && formik.errors.donationDate)}
                            required={true}
                        />
                    </div>
                    <h2 className='font-medium text-[#004475] text-3xl mb-4'>Health Screening</h2>
                    <div className=''>
                        <InputField
                            name="weight"
                            type="weight"
                            placeholder="Enter your weight"
                            label="Weight(kg)"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.weight}
                            helperText={formik.touched.weight && formik.errors.weight}
                            error={!!(formik.touched.weight && formik.errors.weight)}
                            required={true}
                        />
                        <span className='text-xs text-[#33333399]'>*Your weight must not be less 50kg</span>
                    </div>
                    <Stack spacing={[1, 2]} direction={['column', 'column']} mb={3}>
                        <label className='font-medium text-base md:text-lg text-[#333333] inline-block'>
                            Medical History (Check any that apply)<span className='text-[#8C0F41]'>*</span>
                        </label>
                        <Stack direction='column'>
                            {medicalHistoryOptions.map((condition) => {
                                const isChecked = formik.values.medicalHistory.includes(condition.value);

                                return (
                                    <div key={condition.value}>
                                        <Checkbox
                                            isChecked={isChecked}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    // Add item to formik array
                                                    formik.setFieldValue('medicalHistory', [
                                                        ...formik.values.medicalHistory,
                                                        condition.value
                                                    ]);
                                                } else {
                                                    // Remove item from formik array
                                                    formik.setFieldValue(
                                                        'medicalHistory',
                                                        formik.values.medicalHistory.filter((item) => item !== condition.value)
                                                    );
                                                    // Clear other text if unchecking "Other"
                                                    if (condition.value === 'other') {
                                                        formik.setFieldValue('otherMedicalCondition', '');
                                                    }
                                                }
                                            }}
                                            alignItems='center'
                                            gap={2}
                                        >
                                            <Text fontSize="base" color="#333333">{condition.label}</Text>
                                        </Checkbox>
                                        
                                        {/* Show text input if "Other" is checked */}
                                        {condition.value === 'other' && isChecked && (
                                            <InputField
                                                name="otherMedicalCondition"
                                                type="text"
                                                placeholder="Please specify"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.otherMedicalCondition}
                                                className="ml-6 mt-2"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </Stack>
                    </Stack>
                    <Stack direction='row' justifyContent={'space-between'}>
                        <Stack w='50%'>
                            <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                Major surgery in last 6 months?<span className='text-[#8C0F41]'>*</span>
                            </label>
                            <Stack spacing={[1, 2]} direction={['column', 'column']}>
                                <Checkbox
                                    isChecked={formik.values.surgery === true}
                                    onChange={() => formik.setFieldValue('surgery', true)}
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333' >Yes</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.surgery === false}
                                    onChange={() => formik.setFieldValue('surgery', false)}
                                    mb={4}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>No</Text>
                                </Checkbox>
                            </Stack>
                        </Stack>
                        <Stack w='50%'>
                            <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                Pregnancy or delivery in last 6 months?<span className='text-[#8C0F41]'>*</span>
                            </label>
                            <Stack spacing={[1, 2]} direction={['column', 'column']}>
                                <Checkbox
                                    isChecked={formik.values.pregnancy === true}
                                    onChange={() => formik.setFieldValue('pregnancy', true)}
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333' >Yes</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.pregnancy === false}
                                    onChange={() => formik.setFieldValue('pregnancy', false)}
                                    mb={4}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>No</Text>
                                </Checkbox>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction='row' justifyContent={'space-between'}>
                        <Stack w='50%'>
                            <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                Consumed alcohol in last 24 hours?<span className='text-[#8C0F41]'>*</span>
                            </label>
                            <Stack spacing={[1, 2]} direction={['column', 'column']}>
                                <Checkbox
                                    isChecked={formik.values.alcohol === true}
                                    onChange={() => formik.setFieldValue('alcohol', true)}
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333' >Yes</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.alcohol === false}
                                    onChange={() => formik.setFieldValue('alcohol', false)}
                                    mb={4}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>No</Text>
                                </Checkbox>
                            </Stack>
                        </Stack>
                        <Stack w='50%'>
                            <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                Smoked in last 12 hours?<span className='text-[#8C0F41]'>*</span>
                            </label>
                            <Stack spacing={[1, 2]} direction={['column', 'column']}>
                                <Checkbox
                                    isChecked={formik.values.smoked === true}
                                    onChange={() => formik.setFieldValue('smoked', true)}
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333' >Yes</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.smoked === false}
                                    onChange={() => formik.setFieldValue('smoked', false)}
                                    mb={4}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>No</Text>
                                </Checkbox>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction='row' justifyContent={'space-between'} mb={3}>
                        <Stack w='50%'>
                            <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                Preferred Donation Type:<span className='text-[#8C0F41]'>*</span>
                            </label>
                            <Stack spacing={[1, 2]} direction={['column', 'column']}>
                                <Checkbox
                                    isChecked={formik.values.donationType === 'plasma'}
                                    onChange={() => formik.setFieldValue('donationType', 'plasma')}
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333' >Plasma</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.donationType === 'platelets'}
                                    onChange={() => formik.setFieldValue('donationType', 'platelets')}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>Platelets</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.donationType === 'any'}
                                    onChange={() => formik.setFieldValue('donationType', 'any')}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>Any</Text>
                                </Checkbox>
                            </Stack>
                        </Stack>
                        <Stack w='50%'>
                            <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>
                                Available Days:<span className='text-[#8C0F41]'>*</span>
                            </label>
                            <Stack spacing={[1, 2]} direction={['column', 'column']}>
                                <Checkbox
                                    isChecked={formik.values.availableDays === 'weekdays'}
                                    onChange={() => formik.setFieldValue('availableDays', 'weekdays')}
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333' >Weekdays</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.availableDays === 'weekends'}
                                    onChange={() => formik.setFieldValue('availableDays', 'weekends')}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>Weekends</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.availableDays === 'anytime'}
                                    onChange={() => formik.setFieldValue('availableDays', 'anytime')}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>Anytime</Text>
                                </Checkbox>
                            </Stack>
                        </Stack>
                    </Stack>
                    <div className='mb-3'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Upload ID Proof<span className='text-[#8C0F41]'>*</span></label>
                        <div className="border-2 border-dashed border-[#CBD5E1] rounded-[10px] w-full h-[150px] bg-[#EEF8FF4D] flex justify-center items-center"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <div className="flex flex-col items-center">
                                <UploadIcon/>
                                <label className="inline-block text-[#333333CC] text-base px-4 py-2 rounded cursor-pointer mt-2">
                                Browse and chose the files you want to upload from your computer
                                    <input
                                        type="file"
                                        accept="image/*,.pdf"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                        </div>
                        
                        {/* Display uploaded files */}
                        {files.length > 0 && (
                            <div className="mt-3">
                                <Text fontSize="sm" fontWeight="medium" color="#333333" mb={2}>
                                    Uploaded File:
                                </Text>
                                {files.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between bg-[#EEF8FF] p-3 rounded-lg mb-2">
                                        <div className="flex items-center gap-2">
                                            <BiUpload className="text-[#EA1D78]" size={20} />
                                            <div>
                                                <Text fontSize="sm" color="#333333" fontWeight="medium">
                                                    {file.name}
                                                </Text>
                                                <Text fontSize="xs" color="#33333399">
                                                    {(file.size / 1024).toFixed(2)} KB
                                                </Text>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setFiles(files.filter((_, i) => i !== index))}
                                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="">
                        <Checkbox
                            isChecked={checkedItem}
                            onChange={() => setCheckedItem(!checkedItem)}
                            mb={4}
                            alignItems='center'
                            gap={2}
                        >
                            <Text fontSize={['base']} fontWeight='medium' color='#333333'>I confirm all information is accurate & consent to medical screening.</Text>
                        </Checkbox>
                    </div>
                    <Button
                        isLoading={isLoading}
                        type='submit'
                        bg='#EA1D78'
                        color='white'
                        w="full"
                        borderRadius="md"
                        mt={5}
                        mb={2}
                        disabled={!checkedItem}
                        _hover={{ bg: '#D11A6B' }}
                    >
                        Send Request
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default DonateBlood