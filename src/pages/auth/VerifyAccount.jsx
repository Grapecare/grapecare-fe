import React, { useState, useRef } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, useToast, Input, Link } from '@chakra-ui/react';
import { verifyEmail, resendVerificationCode, verifyResetCode } from '../../services/auth';

function VerifyAccount() {
    const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);
    
    // Get data from navigation state
    const email = location.state?.email || '';
    const phoneNumber = location.state?.phoneNumber || '';
    const isPasswordReset = location.state?.isPasswordReset || false;

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

    const handleResendCode = async () => {
        if (!email) {
            toast({
                title: 'Email Required',
                description: 'Please provide an email address to resend code',
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        setIsResending(true);
        try {
            await resendVerificationCode(email);
            
            toast({
                title: 'Code Resent',
                description: 'A new verification code has been sent to your email',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            
            // Clear OTP inputs
            setOtp(['', '', '', '', '']);
            inputRefs.current[0]?.focus();
        } catch (error) {
            const errorMessage = error.response?.data?.message || 
                               error.response?.data?.email?.[0] ||
                               'Failed to resend verification code';
            
            toast({
                title: 'Resend Failed',
                description: errorMessage,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsResending(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpCode = otp.join('');
        
        if (!email && !phoneNumber) {
            toast({
                title: 'Contact Required',
                description: 'Please provide an email address or phone number',
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
            return;
        }
        
        if (otpCode.length !== 5) {
            toast({
                title: 'Invalid Code',
                description: 'Please enter all 5 digits',
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        setIsLoading(true);
        try {
            // Call different endpoints based on flow
            if (isPasswordReset) {
                // Password reset verification - use verify-reset-code endpoint
                const payload = email 
                    ? { email, code: otpCode }
                    : { phone_number: phoneNumber, code: otpCode };
                
                await verifyResetCode(payload);
            } else {
                // Signup email verification - use verify-email endpoint
                if (email) {
                    await verifyEmail(email, otpCode);
                }
            }
            
            // Success message depends on the flow
            const successTitle = isPasswordReset ? 'Code Verified' : 'Email Verified';
            const successDescription = isPasswordReset 
                ? 'You can now create a new password' 
                : 'Your email has been verified successfully';
            
            toast({
                title: successTitle,
                description: successDescription,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            
            // Route based on flow
            if (isPasswordReset) {
                // Password reset flow - go to create new password page
                navigate('/reset-password', {
                    state: { 
                        email, 
                        phoneNumber,
                        code: otpCode 
                    }
                });
            } else {
                // Signup verification flow - go to login
                navigate('/login');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 
                               error.response?.data?.code?.[0] ||
                               'Invalid or expired verification code';
            
            toast({
                title: 'Verification Failed',
                description: errorMessage,
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
                    {(email || phoneNumber) && (
                        <div className='mb-6 text-center'>
                            <p className='text-[#333333] text-sm'>
                                Code sent to: <span className='font-semibold'>{email || phoneNumber}</span>
                            </p>
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
                    <h3 className="text-[#333333] text-base font-normal text-center">
                        Didn't receive the verification code?{' '}
                        <Link 
                            type="button"
                            onClick={handleResendCode}
                            disabled={isResending}
                            className='text-[#004475] font-semibold underline  transition-colors'
                        >
                            {isResending ? 'Sending...' : 'Resend Code'}
                        </Link>
                    </h3>
                </form>
            </div>
        </AuthLayout>
    )
}

export default VerifyAccount