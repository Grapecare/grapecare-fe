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
const medicalHistoryOptions = ['Anemia', 'Heart Disease', 'Diabetes', 'High Blood Pressure', 'Asthma', 'Epilepsy', 'Hepatitis', 'HIV/AIDS', 'Tuberculosis', 'Cancer', 'Kidney Disease', 'Liver Disease', 'Thyroid Disease']

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
                formData.append('medical_conditions', JSON.stringify(values.medicalHistory));
                formData.append('major_surgery_last_6_months', values.surgery || false);
                formData.append('pregnancy_delivery_last_6_months', values.pregnancy || false);
                formData.append('consumed_alcohol_last_24_hours', values.alcohol || false);
                formData.append('smoked_last_12_hours', values.smoked || false);
                formData.append('preferred_donation_type', values.donationType || 'any');
                formData.append('available_days', values.availableDays || '');
                formData.append('id_proof_document', files[0]);
                formData.append('consent_given', checkedItem);

                await registerBloodDonor(formData);

                toast({
                    title: 'Registration Successful',
                    description: 'You have been registered as a blood donor successfully',
                    status: 'success',
                    duration: 5000,
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
                            onChange={(e) => formik.setFieldValue('previouslyDonated', false)}
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
                                const isChecked = formik.values.medicalHistory.includes(condition);

                                return (
                                    <Checkbox
                                        key={condition}
                                        isChecked={isChecked}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                // Add item to formik array
                                                formik.setFieldValue('medicalHistory', [
                                                    ...formik.values.medicalHistory,
                                                    condition
                                                ]);
                                            } else {
                                                // Remove item from formik array
                                                formik.setFieldValue(
                                                    'medicalHistory',
                                                    formik.values.medicalHistory.filter((item) => item !== condition)
                                                );
                                            }
                                        }}
                                        alignItems='center'
                                        gap={2}
                                    >
                                        <Text fontSize="base" color="#333333">{condition}</Text>
                                    </Checkbox>
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
                                    onChange={(e) => formik.setFieldValue('surgery', false)}
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
                                    onChange={(e) => formik.setFieldValue('pregnancy', false)}
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
                                Consumed alcohol in last 24 hours? <span className='text-[#8C0F41]'>*</span>
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
                                    onChange={(e) => formik.setFieldValue('alcohol', false)}
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
                                    onChange={(e) => formik.setFieldValue('smoked', false)}
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
                                    onChange={(e) => formik.setFieldValue('donationType', 'platelets')}
                                    alignItems='center'
                                    gap={2}
                                >
                                    <Text fontSize={['base']} color='#333333'>Platelets</Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={formik.values.donationType === 'any'}
                                    onChange={(e) => formik.setFieldValue('donationType', 'any')}
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