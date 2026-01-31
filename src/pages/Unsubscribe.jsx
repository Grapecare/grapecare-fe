import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Box, Button, Image, Spinner, Text, VStack } from '@chakra-ui/react'
import grapeIcon from '../assets/images/grapeIcon.svg'
import api from '../services/api'

function Unsubscribe() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [status, setStatus] = useState('loading') // loading, success, error, no-email
    const [errorMessage, setErrorMessage] = useState('')
    
    const email = searchParams.get('email')

    useEffect(() => {
        const unsubscribe = async () => {
            if (!email) {
                setStatus('no-email')
                return
            }

            try {
                await api.post('/unsubscribe/', { email })
                setStatus('success')
            } catch (error) {
                setStatus('error')
                if (error.response?.status === 404) {
                    setErrorMessage('This email is not found in our subscriber list.')
                } else {
                    setErrorMessage(
                        error.response?.data?.message || 
                        error.response?.data?.errors?.email?.[0] ||
                        'Something went wrong. Please try again later.'
                    )
                }
            }
        }

        unsubscribe()
    }, [email])

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
            <div className="p-4 md:p-6">
                <Image 
                    src={grapeIcon} 
                    alt="GrapeCare" 
                    className="cursor-pointer"
                    onClick={() => navigate('/')}
                />
            </div>
            
            <div className="flex-1 flex items-center justify-center px-4">
                <Box 
                    bg="white" 
                    p={8} 
                    borderRadius="xl" 
                    shadow="lg"
                    maxW="500px"
                    w="100%"
                    textAlign="center"
                >
                    {status === 'loading' && (
                        <VStack spacing={4}>
                            <Spinner size="xl" color="#EA1D78" thickness="4px" />
                            <Text fontSize="lg" color="#333333">
                                Processing your request...
                            </Text>
                        </VStack>
                    )}

                    {status === 'success' && (
                        <VStack spacing={4}>
                            <Box 
                                bg="#E8F5E9" 
                                p={4} 
                                borderRadius="full"
                            >
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Box>
                            <Text fontSize="2xl" fontWeight="bold" color="#333333">
                                Successfully Unsubscribed
                            </Text>
                            <Text fontSize="md" color="#666666">
                                You have been removed from our mailing list. We're sorry to see you go!
                            </Text>
                            <Text fontSize="sm" color="#999999" mt={2}>
                                {email}
                            </Text>
                            <Button
                                mt={4}
                                bg="#EA1D78"
                                color="white"
                                _hover={{ bg: '#C01864' }}
                                _focus={{ outline: 'none', boxShadow: 'none' }}
                                onClick={() => navigate('/')}
                            >
                                Return to Homepage
                            </Button>
                        </VStack>
                    )}

                    {status === 'error' && (
                        <VStack spacing={4}>
                            <Box 
                                bg="#FFEBEE" 
                                p={4} 
                                borderRadius="full"
                            >
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Box>
                            <Text fontSize="2xl" fontWeight="bold" color="#333333">
                                Unsubscribe Failed
                            </Text>
                            <Text fontSize="md" color="#666666">
                                {errorMessage}
                            </Text>
                            <Button
                                mt={4}
                                bg="#EA1D78"
                                color="white"
                                _hover={{ bg: '#C01864' }}
                                _focus={{ outline: 'none', boxShadow: 'none' }}
                                onClick={() => navigate('/')}
                            >
                                Return to Homepage
                            </Button>
                        </VStack>
                    )}

                    {status === 'no-email' && (
                        <VStack spacing={4}>
                            <Box 
                                bg="#FFF3E0" 
                                p={4} 
                                borderRadius="full"
                            >
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33975 16C2.56995 17.3333 3.53223 19 5.07183 19Z" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Box>
                            <Text fontSize="2xl" fontWeight="bold" color="#333333">
                                Invalid Link
                            </Text>
                            <Text fontSize="md" color="#666666">
                                No email address was provided. Please use the unsubscribe link from your email.
                            </Text>
                            <Button
                                mt={4}
                                bg="#EA1D78"
                                color="white"
                                _hover={{ bg: '#C01864' }}
                                _focus={{ outline: 'none', boxShadow: 'none' }}
                                onClick={() => navigate('/')}
                            >
                                Return to Homepage
                            </Button>
                        </VStack>
                    )}
                </Box>
            </div>

            <div className="p-4 text-center">
                <Text fontSize="sm" color="#999999">
                    © {new Date().getFullYear()} GrapeCare. All rights reserved.
                </Text>
            </div>
        </div>
    )
}

export default Unsubscribe
