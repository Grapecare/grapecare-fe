import React from 'react'
import PageHeader from '../components/PageHeader'
import { Avatar, Box, Text } from '@chakra-ui/react'
import CollapseItem from '../components/CollapseItem'
import { FiUser, FiCreditCard, FiSettings } from "react-icons/fi";


function Profile() {
    return (
        <div>
            <PageHeader title="Profile" />
            <div className="border border-[#33333333] rounded-[20px] p-6 flex items-center gap-5">
                <div className="">
                    <Avatar src='https://bit.ly/sage-adebayo' boxSize="100px" />
                </div>
                <div className="flex flex-col text-[#333333]">
                    <h2 className="font-medium text-2xl mb-2">Moruff Tirimisiyu A.</h2>
                    <p className="text-base">abiodunmoruff@gmail.com</p>
                    <div className="flex gap-6 items-center">
                        <h3 className="font-medium text-sm">Profile Completeness</h3>
                        <span className="bg-[#FF67B6] rounded-[10px] py-2 px-4 text-white font-medium text-[10px]">60%</span>
                    </div>
                </div>
            </div>
            <Box
                mt={10}
                border="1px solid"
                borderColor="gray.200"
                rounded="20px"
                overflow="hidden"
                bg="white"
                p={6}
            >
                <CollapseItem icon={<FiUser />} title="Profile Information"
                    link='/dashboard/profile/profile-information'
                >
                    <Text fontSize="sm">
                        Update your personal details, email address, and profile picture.
                    </Text>
                </CollapseItem>

                <CollapseItem icon={<FiCreditCard />} title="Payment History"
                    link='/dashboard/profile/payment-history'
                >
                    <Text fontSize="sm">
                        View past transactions, invoices, and payment methods.
                    </Text>
                </CollapseItem>

                <CollapseItem icon={<FiSettings />} title="Settings"
                    link='/dashboard/profile/settings'
                >
                    <Text fontSize="sm">
                        Manage preferences, security settings, and notifications.
                    </Text>
                </CollapseItem>
            </Box>
        </div>
    )
}

export default Profile