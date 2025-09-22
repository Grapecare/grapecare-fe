import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import InputField from './InputField';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function EmailPasswordReset() {
    const navigate = useNavigate();

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
        <div>
            <form
                onSubmit={formik.handleSubmit}
                className='w-full'
            >
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
                    Send Verification Code
                </Button>
                <h3 className="text-[#333333] text-base font-normal">Not on GrapeCare ?
                    <Link to='/signup' className='text-[#004475] font-semibold ml-1'>Sign up<span></span></Link>
                </h3>
            </form>
        </div>
    )
}

export default EmailPasswordReset