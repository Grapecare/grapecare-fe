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

function Signup() {
    const [checkedItem, setCheckedItem] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string().email('Enter a valid email').required("Email is required"),
            phoneNumber: Yup.string().required("Phone number is required"),
            password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters long")
                .max(32, "Password can not be more than 32 characters long")
                .matches(/[0-9]/, "Password requires at least one number")
                .matches(/[a-z]/, "Password requires a lowercase letter")
                .matches(/[A-Z]/, "Password requires an uppercase letter")
                .matches(/[^\w]/, "Password requires a special character"),
            confirmPassword: Yup.string()
                .required("Please confirm your password")
                .oneOf([Yup.ref('password')], 'Passwords must match'),
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
            title='Sign up on GrapeCare'
            subTitle='Fill the form below to get you on board.'
            bgImage='/images/signup-bg.svg'
        >
            <div className='pb-10'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    <div className='flex justify-between w-full'>
                        <div className='w-[45%]'>
                            <InputField
                                name="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                label="First Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                                error={!!(formik.touched.firstName && formik.errors.firstName)}
                            />
                        </div>
                        <div className='w-[45%]'>
                            <InputField
                                name="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                label="Last Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                                error={!!(formik.touched.lastName && formik.errors.lastName)}
                            />
                        </div>
                    </div>
                    <div className=''>
                        <InputField
                            name="phoneNumber"
                            type="tel"
                            placeholder="Enter your phone number"
                            label="Phone Number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                        />
                    </div>
                    <div className=''>
                        <InputField
                            name="email"
                            type="email"
                            placeholder="Email"
                            label="Email address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            helperText={formik.touched.email && formik.errors.email}
                            error={!!(formik.touched.email && formik.errors.email)}
                        />
                    </div>
                    <div className=''>
                        <InputField
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            label="Password"
                            // Icon={EyeOff}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            helperText={formik.touched.password && formik.errors.password}
                            error={!!(formik.touched.password && formik.errors.password)}
                        />
                    </div>
                    <div className=''>
                        <InputField
                            name="confirmPassword"
                            type="password"
                            placeholder="Enter password"
                            label="Password"
                            // Icon={EyeOff}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                        />
                    </div>
                    <Checkbox
                        isChecked={checkedItem}
                        // isIndeterminate={isIndeterminate}
                        onChange={(e) => setCheckedItem(e.target.checked)}
                        w='full'
                        mb={4}
                    >
                        By signing up you confirm that you agree to our <span className='text-[#EA1D78]'>Terms of Use </span>and have read and understood our <span className='text-[#EA1D78]'>Privacy Policy</span>
                    </Checkbox>
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
                        Send Verification Code
                    </Button>
                    <h3 className="text-[#333333] text-base font-normal">Already have an account ?
                        <Link to='/login' className='text-[#004475] font-semibold ml-1'>Login<span></span></Link>
                    </h3>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Signup