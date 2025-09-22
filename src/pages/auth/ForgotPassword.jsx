import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AuthLayout from '../../layouts/AuthLayout';
import EmailPasswordReset from '../../components/EmailPasswordReset';
import PhonePasswordReset from '../../components/PhonePasswordReset';

const tabLabels = [
    "Reset With Email",
    "Reset With Phone",
];

function ForgotPassword() {
    return (
        <AuthLayout
            title='Forgot Password'
            subTitle='Kindly enter your registered email or number to reset your password.'
        >
            <Tabs variant='soft-rounded'  isLazy>
                <TabList bg="#EEF8FF" borderRadius={"10px"} display={"flex"} justifyContent={"space-between"} mb={4}>
                    {tabLabels.map((label) => (
                        <Tab
                            key={label}
                            _selected={{ color: "#fff", bg: "#EA1D78", borderRadius: '10px', border: "none", }}
                            _hover={{ border: 'none' }}
                            _active={{ border: 'none' }}
                            color="#333333CC"
                            bg="#EEF8FF"
                            width={'45%'}
                            border={'none'}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    <TabPanel px={0}>
                        <EmailPasswordReset />
                    </TabPanel>
                    <TabPanel>
                        <PhonePasswordReset/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </AuthLayout>
    )
}

export default ForgotPassword