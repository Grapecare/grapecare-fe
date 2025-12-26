import React, { useState, useRef } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, useToast, Input } from '@chakra-ui/react';

function VerifyAccount() {
    const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);
    
    // Get email from signup page navigation state
    const email = location.state?.email || '';

    const handleChange = (index, value) => {
        // Only allow digits
        if (value && !/^[0-9]$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 4) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 5);
        if (/^[0-9]+$/.test(pastedData)) {
            const newOtp = pastedData.split('');
            while (newOtp.length < 5) newOtp.push('');
            setOtp(newOtp.slice(0, 5));
            inputRefs.current[Math.min(pastedData.length, 4)]?.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpCode = otp.join('');
        
        if (otpCode.length !== 5) {
            toast({
                title: 'Invalid Code',
                description: 'Please enter all 5 digits',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        setIsLoading(true);
        try {
            // TODO: Implement OTP verification API call
            // const response = await verifyOTP({ email, otp: otpCode });
            
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
    };
    return (
        <AuthLayout
            title='Account Verification'
            subTitle='Kindly enter the code sent to your number or email provided.'
            bgImage='/images/verify-bg.svg'
        >
            <div>
                <form onSubmit={handleSubmit} className='w-full'>
                    {email && (
                        <div className='mb-6 text-center'>
                            <p className='text-[#333333] text-sm'>Code sent to: <span className='font-semibold'>{email}</span></p>
                        </div>
                    )}
                    
                    {/* OTP Input - Underlined Style */}
                    <div className='flex justify-center gap-4 mb-8'>
                        {otp.map((digit, index) => (
                            <Input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type='text'
                                inputMode='numeric'
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                textAlign='center'
                                fontSize='3xl'
                                fontWeight='medium'
                                w='50px'
                                h='50px'
                                border='none'
                                borderBottom='3px solid'
                                borderBottomColor='#333333'
                                borderRadius='0'
                                bg='transparent'
                                px={0}
                                _focus={{
                                    borderBottomColor: '#EA1D78',
                                    boxShadow: 'none',
                                    outline: 'none',
                                }}
                                _hover={{
                                    borderBottomColor: '#666666',
                                }}
                            />
                        ))}
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
                    <h3 className="text-[#333333] text-base font-normal text-center">Didn't receive the verification code?{' '}
                        <Link to='/signup' className='text-[#004475] font-semibold underline'>Resend Code</Link>
                    </h3>
                </form>
            </div>
        </AuthLayout>
    )
}

export default VerifyAccount