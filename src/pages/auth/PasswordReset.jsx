import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from '@chakra-ui/react';

function PasswordReset() {

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Enter a valid email').required("Email is required"),
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
            console.log('vals', values)
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
                        Reset Password
                    </Button>
                </form>
            </div>
        </AuthLayout>
    )
}

export default PasswordReset