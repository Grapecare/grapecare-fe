import React from 'react'
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
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import InputField from './InputField';
import * as Yup from 'yup'

function ContactUsModal({ isOpen, onOpen, onClose }) {
    const finalRef = React.useRef(null)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Field is required"),
            email: Yup.string().email('Enter a valid email').required("Email is required"),
        }),
        onSubmit: async (values) => {
            console.log('vals', values)
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
                        // isLoading
                        type='submit'
                        bg='#EA1D78'
                        color='white'
                        w="full"
                        borderRadius="md"
                        mt={5}
                        mb={2}
                        disabled={!formik.values.email}
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
