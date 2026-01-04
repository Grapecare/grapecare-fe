import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, useToast } from '@chakra-ui/react';
import { register } from '../../services/auth';
import { useDispatch } from 'react-redux';
import { persistAuth } from '../../redux/slices/authSlice';
import MaleIcon from '../../assets/icons/MaleIcon';
import FemaleIcon from '../../assets/icons/FemaleIcon';
import nigeriaData from '../../constant/nigeria_states_lgas.json'

function PersonalInfo() {
    const [checkedItem, setCheckedItem] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedState, setSelectedState] = useState('')
    const states = Object.keys(nigeriaData)
    const lgas = nigeriaData[selectedState]

    const formik = useFormik({
        initialValues: {
            dob: '',
            address: '',
            gender: "",
            state: "",
            city: "",
        },
        validationSchema: Yup.object({
            dob: Yup.string().required("Field is required"),
            address: Yup.string().required("Last name is required"),
        }),
        onSubmit: async (values) => {
            if (!checkedItem) {
                toast({
                    title: 'Terms Required',
                    description: 'Please accept the terms and conditions',
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                });
                return;
            }

            setIsLoading(true);
            try {
                const payload = {
                    first_name: values.firstName,
                    last_name: values.lastName,
                    email: values.email,
                    phone_number: values.phoneNumber,
                    password: values.password,
                    confirm_password: values.confirmPassword,
                    terms_accepted: checkedItem,
                };

                const response = await register(payload);

                // Store user data and tokens in Redux if returned
                if (response?.tokens) {
                    localStorage.setItem('accessToken', response.tokens.access);
                    localStorage.setItem('refreshToken', response.tokens.refresh);

                    dispatch(persistAuth({
                        user: response.user,
                        accessToken: response.tokens.access,
                    }));
                }

                toast({
                    title: 'Success',
                    description: 'Verification code sent to your email',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });

                // Navigate to verification page with email
                navigate('/verify-account', {
                    state: { email: values.email }
                });
            } catch (error) {
                toast({
                    title: 'Signup Failed',
                    description: error.response?.data?.message || 'An error occurred during signup',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            } finally {
                setIsLoading(false);
            }
        },
    });
    return (
        <AuthLayout
            title='Personal Information'
            subTitle='We use your personal information to personalize and improve your experience.'
            bgImage='/images/personal.png'
        >
            <div className='pb-10'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    <InputField
                        name="dob"
                        type="date"
                        placeholder="Enter your first name"
                        label="Date of Birth *"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dob}
                        helperText={formik.touched.dob && formik.errors.dob}
                        error={!!(formik.touched.dob && formik.errors.dob)}
                        required={true}
                    />
                    <div className="w-5/12 flex justify-between gap-5">
                        <Button
                            type="button"
                            w="full"
                            mb={2}
                            borderRadius="md"
                            border="1px solid #CBD5E1"
                            leftIcon={<MaleIcon color={formik.values.gender === 'male' ? 'white' : '#333333CC'} />}
                            bg={formik.values.gender === 'male' ? '#EA1D78' : '#EEF8FF4D'}
                            color={formik.values.gender === 'male' ? 'white' : '#333333CC'}
                            _hover={{
                                bg: formik.values.gender === 'male' ? '#D11A6B' : '#E5E5E5',
                            }}
                            _focus={{ outline: 'none', boxShadow: 'none' }}
                            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
                            _active={{ outline: 'none', boxShadow: 'none' }}
                            onClick={() => formik.setFieldValue('gender', 'male')}
                        >
                            Male
                        </Button>

                        <Button
                            type="button"
                            w="full"
                            mb={2}
                            borderRadius="md"
                            border="1px solid #CBD5E1"
                            leftIcon={<FemaleIcon color={formik.values.gender === 'female' ? 'white' : '#333333CC'} />}
                            bg={formik.values.gender === 'female' ? '#EA1D78' : '#EEF8FF4D'}
                            color={formik.values.gender === 'female' ? 'white' : '#333333CC'}
                            _hover={{
                                bg: formik.values.gender === 'female' ? '#D11A6B' : '#E5E5E5',
                            }}
                            _focus={{ outline: 'none', boxShadow: 'none' }}
                            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
                            _active={{ outline: 'none', boxShadow: 'none' }}
                            onClick={() => formik.setFieldValue('gender', 'female')}
                        >
                            Female
                        </Button>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='mb-4 w-[45%]'>
                            <label
                                htmlFor={formik.values.bloodType}
                                className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                            >
                                State
                            </label>
                            <select
                                name='bloodType'
                                value={formik.values.state}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSelectedState(value); 
                                    formik.setFieldValue('state', value)
                                }}
                                className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                            >
                                <option value="">Select State</option>
                                {states.map((state,index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='mb-4 w-[45%]'>
                            <label
                                htmlFor={formik.values.bloodType}
                                className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                            >
                                City/Town
                            </label>
                            <select
                                name='bloodType'
                                value={formik.values.bloodType}
                                onChange={(e) => formik.setFieldValue('city', e.target.value)}
                                className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                            >
                                <option value="">Select State</option>
                                {lgas?.map((city,index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className=''>
                        <InputField
                            name="address"
                            type="text"
                            placeholder="Address"
                            label="Residential address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            helperText={formik.touched.address && formik.errors.address}
                            error={!!(formik.touched.address && formik.errors.address)}
                            required={true}
                        />
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
                        _hover={{ bg: '#D11A6B' }}
                    >
                        Continue
                    </Button>
                    <h3 className="text-[#333333] text-base font-normal">Not now?
                        <Link to='/login' className='text-[#004475] font-semibold ml-1'>skip<span></span></Link>
                    </h3>
                </form>
            </div>
        </AuthLayout>
    )
}

export default PersonalInfo