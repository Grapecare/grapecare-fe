import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import InputField from './InputField';
import { Link, useNavigate } from 'react-router-dom';
import { Button, useToast } from '@chakra-ui/react';
import { forgotPassword } from '../services/auth';

function PhonePasswordReset() {
    const navigate = useNavigate();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            phoneNumber: "",
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.string().required("Phone number is required"),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                await forgotPassword({
                    phone_number: values.phoneNumber,
                    send_via: 'sms'
                });

                toast({
                    title: 'Reset Code Sent',
                    description: 'A password reset code has been sent to your phone',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });

                // Navigate to verification page with phone number and password reset flag
                navigate('/verify-account', {
                    state: { 
                        phoneNumber: values.phoneNumber,
                        isPasswordReset: true 
                    }
                });
            } catch (error) {
                const errorMessage = error.response?.data?.message ||
                                   error.response?.data?.phone_number?.[0] ||
                                   'Failed to send reset code';

                toast({
                    title: 'Request Failed',
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
                <h3 className="text-[#333333] text-base font-normal">Not on GrapeCare ?
                    <Link to='/signup' className='text-[#004475] font-semibold ml-1'>Sign up<span></span></Link>
                </h3>
            </form>
        </div>
    )
}

export default PhonePasswordReset