import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast,
} from '@chakra-ui/react'
import InputField from './InputField';
import api from '../services/api'

function WaitlistModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!email || !email.includes('@')) {
            toast({
                title: 'Invalid email',
                description: 'Please enter a valid email address',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            return
        }

        setIsLoading(true)
        try {
            await api.post('/subscribe/', { email })
            toast({
                title: 'You\'re on the list!',
                description: 'Thank you for joining us in making healthcare accessible for everyone. We\'ll keep you updated!',
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            setEmail('')
            onClose()
        } catch (error) {
            const errorMessage = error.response?.data?.errors?.email?.[0] || 
                                error.response?.data?.message || 
                                'Something went wrong. Please try again.'
            toast({
                title: 'Subscription failed',
                description: errorMessage,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay bg="rgba(0, 0, 0, 0.4)" backdropFilter="blur(4px)" />
            <ModalContent
                maxW={{ base: '90%', md: '450px' }}
                w="100%"
                mx={{ base: 3, md: 'auto' }}
                borderRadius="xl"
            >
                <ModalHeader textAlign="center" pt={8} pb={2}>
                    <h2 className="text-2xl font-bold text-[#333333]">Join Our Waitlist</h2>
                    <p className="text-sm font-normal text-[#333333CC] mt-2">
                        Be the first to know when we launch. Get early access to GrapeCare.
                    </p>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={8}>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <InputField
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            label="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required={true}
                        />
                        <Button
                            isLoading={isLoading}
                            type='submit'
                            bg='#EA1D78'
                            color='white'
                            w="full"
                            borderRadius="md"
                            mt={4}
                            size="lg"
                            _hover={{ bg: '#C01864' }}
                            _focus={{ outline: 'none', boxShadow: 'none' }}
                            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
                            _active={{ outline: 'none', boxShadow: 'none' }}
                        >
                            Join Waitlist
                        </Button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default WaitlistModal
