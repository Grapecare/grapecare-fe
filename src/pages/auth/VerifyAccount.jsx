import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import InputField from '../../components/InputField'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, useToast } from '@chakra-ui/react';

function VerifyAccount() {
    const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    
    // Get email from signup page navigation state
    const email = location.state?.email || '';

    const formik = useFormik({
        initialValues: {
            otp: "",
        },
        validationSchema: Yup.object({
            otp: Yup.string()
                .required("Verification code is required")
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(6, "Code must be 6 digits")
                .max(6, "Code must be 6 digits"),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                // TODO: Implement OTP verification API call
                // const response = await verifyOTP({ email, otp: values.otp });
                
                toast({
                    title: 'Success',
                    description: 'Account verified successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                
                // Navigate to personal info page (next step in flow)
                navigate('/personal-info');
            } catch (error) {
                toast({
                    title: 'Verification Failed',
                    description: error.response?.data?.message || 'Invalid verification code',
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
            title='Account Verification'
            subTitle='Kindly enter the code sent to your number or email provided.'
            bgImage='/images/verify-bg.svg'
        >
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    {email && (
                        <div className='mb-4 text-center'>
                            <p className='text-[#333333] text-sm'>Code sent to: <span className='font-semibold'>{email}</span></p>
                        </div>
                    )}
                    <div className=''>
                        <InputField
                            name="otp"
                            type="text"
                            placeholder="Enter 6-digit code"
                            label="Verification Code"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.otp}
                            helperText={formik.touched.otp && formik.errors.otp}
                            error={!!(formik.touched.otp && formik.errors.otp)}
                            maxLength={6}
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
                        Verify
                    </Button>
                    <h3 className="text-[#333333] text-base font-normal">Didn't receive the verification code?
                        <Link to='/signup' className='text-[#004475] font-semibold ml-1'>Resend Code<span></span></Link>
                    </h3>
                </form>
            </div>
        </AuthLayout>
    )
}

export default VerifyAccount