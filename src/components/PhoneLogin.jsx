import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import InputField from './InputField';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, Checkbox, useToast } from '@chakra-ui/react';
import { loginWithPhone } from '../services/auth';

function PhoneLogin() {
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();
    const [checkedItem, setCheckedItem] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            phoneNumber: "",
            password: "",
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.string().required("Phone number is required"),
            password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters long")
                .max(32, "Password can not be more than 32 characters long")
                .matches(/[0-9]/, "Password requires at least one number")
                .matches(/[a-z]/, "Password requires a lowercase letter")
                .matches(/[A-Z]/, "Password requires an uppercase letter")
                .matches(/[^\w]/, "Password requires a special character"),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                await loginWithPhone(values.phoneNumber, values.password);
                
                toast({
                    title: 'Login Successful',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
                
                // Redirect to the page they were trying to access, or dashboard
                const from = location.state?.from?.pathname || '/dashboard/home';
                navigate(from, { replace: true });
            } catch (error) {
                const errorCode = error.response?.data?.error_code;
                const errorMessage = error.response?.data?.non_field_errors || 
                                   error.response?.data?.phone_number ||
                                   error.response?.data?.message || 
                                   'Invalid phone number or password';
                
                // Check if error is about email verification using error code
                if (errorCode === 'EMAIL_NOT_VERIFIED') {
                    toast({
                        title: 'Email Not Verified',
                        description: 'Please verify your email to continue',
                        status: 'warning',
                        duration: 3000,
                        isClosable: true,
                    });
                    
                    // Route to verification page (phone login doesn't have email, so no state)
                    navigate('/auth/verify-account');
                } else if (errorCode === 'ACCOUNT_DEACTIVATED') {
                    toast({
                        title: 'Account Deactivated',
                        description: errorMessage,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: 'Login Failed',
                        description: errorMessage,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                }
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <div>
            <form
                onSubmit={formik.handleSubmit}
                className='w-full'
            >
                <div className=''>
                    <InputField
                        name="phoneNumber"
                        type="text"
                        placeholder="+2348100441703"
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
                <Checkbox
                    isChecked={checkedItem}
                    // isIndeterminate={isIndeterminate}
                    onChange={(e) => setCheckedItem(e.target.checked)}
                    w='full'
                    mb={4}
                >
                    Keep me logged in
                </Checkbox>
                <Link to='/forgot-password' className='text-[#004475] text-base font-semibold'>Forgot Password?</Link>
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
                    Login
                </Button>
                <h3 className="text-[#333333] text-base font-normal">Not on GrapeCare?
                    <Link to='/signup' className='text-[#004475] font-semibold ml-1'>Sign up<span></span></Link>
                </h3>
            </form>
        </div>
    )
}

export default PhoneLogin