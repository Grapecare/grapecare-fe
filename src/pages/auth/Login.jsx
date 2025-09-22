import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AuthLayout from '../../layouts/AuthLayout';
import EmailLogin from '../../components/EmailLogin';
import PhoneLogin from '../../components/PhoneLogin';

const tabLabels = [
    "Login With Email",
    "Login With Phone",
];

function Login() {
    return (
        <AuthLayout
            title='Welcome Back!'
            subTitle='Enter your details to log into your account'
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
                        <EmailLogin />
                    </TabPanel>
                    <TabPanel>
                        <PhoneLogin/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </AuthLayout>
    )
}

export default Login