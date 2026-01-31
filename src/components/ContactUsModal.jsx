import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Button,
    Text,
    Textarea,
    useToast,
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import InputField from './InputField';
import * as Yup from 'yup'
import api from '../services/api'

function ContactUsModal({ isOpen, onOpen, onClose }) {
    const finalRef = React.useRef(null)
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full name is required"),
            email: Yup.string().email('Enter a valid email').required("Email is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: async (values) => {
            setIsLoading(true)
            try {
                await api.post('/contact/', {
                    email: values.email,
                    full_name: values.fullName,
                    message: values.message,
                })
                toast({
                    title: 'Message sent!',
                    description: 'Thank you for reaching out. We\'ll get back to you soon.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                formik.resetForm()
                onClose()
            } catch (error) {
                const errorMessage = error.response?.data?.message || 
                                    error.response?.data?.errors?.email?.[0] ||
                                    'Something went wrong. Please try again.'
                toast({
                    title: 'Failed to send message',
                    description: errorMessage,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            } finally {
                setIsLoading(false)
            }
        },
    });
    return (
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                maxW={{ base: '100%', md: '700px' }}
                w="100%"
                mx={{ base: 3, md: 'auto' }}
            >
                <ModalHeader>Contact Us</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full'
                >
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        label="Email Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        helperText={formik.touched.email && formik.errors.email}
                        error={!!(formik.touched.email && formik.errors.email)}
                        required={true}
                    />
                    <InputField
                        name="fullName"
                        type="text"
                        placeholder="Enter your name here"
                        label="Full Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                        error={!!(formik.touched.fullName && formik.errors.fullName)}
                        required={true}
                    />
                    <div className='mb-3'>
                        <label className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'>Message</label>
                        <Textarea 
                            name="message"
                            placeholder='Here is a sample placeholder' 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            helperText={formik.touched.message && formik.errors.message}
                            error={!!(formik.touched.message && formik.errors.message)}
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
                        _hover={{ bg: '#C01864' }}
                        isDisabled={!formik.values.email || !formik.values.fullName || !formik.values.message}
                    >
                        Submit
                    </Button>
                </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ContactUsModal
