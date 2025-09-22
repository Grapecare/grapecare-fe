import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import InputField from '../../components/InputField'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function VerifyAccount() {

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Enter a valid email').required("Email is required"),
        }),
        onSubmit: async (values) => {
            console.log('vals', values)
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
                    <div className=''>
                        {/* change to OTP input */}
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
                    <Button
                        // isLoading
                        type='submit'
                        bg='#EA1D78'
                        color='white'
                        w="full"
                        borderRadius="md"
                        mt={5}
                        mb={2}
                    // py={6} 
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