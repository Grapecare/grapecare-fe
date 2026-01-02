import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, useToast } from '@chakra-ui/react';
import { resetPassword } from '../../services/auth';

function PasswordReset() {
    const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);

    // Get data from verification page
    const email = location.state?.email || '';
    const phoneNumber = location.state?.phoneNumber || '';
    const code = location.state?.code || '';

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
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
            if (!email && !phoneNumber) {
                toast({
                    title: 'Error',
                    description: 'Missing email or phone number. Please start the password reset process again.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

            if (!code) {
                toast({
                    title: 'Error',
                    description: 'Missing verification code. Please verify your code first.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

            setIsLoading(true);
            try {
                // Build payload based on email or phone
                const payload = email 
                    ? { 
                        email, 
                        code, 
                        password: values.password,
                        confirm_password: values.confirmPassword
                      }
                    : { 
                        phone_number: phoneNumber, 
                        code, 
                        password: values.password,
                        confirm_password: values.confirmPassword
                      };
                
                await resetPassword(payload);

                toast({
                    title: 'Password Reset Successful',
                    description: 'Your password has been reset successfully',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });

                // Navigate to login page
                navigate('/login');
            } catch (error) {
                const errorMessage = error.response?.data?.message ||
                                   error.response?.data?.password?.[0] ||
                                   error.response?.data?.confirm_password?.[0] ||
                                   'Failed to reset password';

                toast({
                    title: 'Reset Failed',
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
    return (
        <AuthLayout
            title='Create New Password'
            subTitle='Enter a new and secured password.'
            bgImage='/images/reset-pswd-bg.svg'
        >
            <div className='pb-10'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    <div className=''>
                        <InputField
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            label="New Password"
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
                            label="Confirm New Password"
                            // Icon={EyeOff}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
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
                        Reset Password
                    </Button>
                </form>
            </div>
        </AuthLayout>
    )
}

export default PasswordReset