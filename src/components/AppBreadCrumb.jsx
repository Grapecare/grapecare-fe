import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react'
import { MdDashboard } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const routeNameMap = {
    "/dashboard": "Dashboard",
    "/dashboard/profile": "Profile",
    "/dashboard/blood-bank": "Blood Donation",
    "/dashboard/blood-bank/get-started": "Donate",
    "/dashboard/get-started": "Get Started",
    "/dashboard/profile/payment-history": "Payment History",
    "/dashboard/donate": "Donate",
    "/dashboard/tele-consultation": "Teleconsulting",
    "/dashboard/tele-consultation/book-appointment": "Book appointment",
    "/dashboard/tele-consultation/register-doctor": "Register",
    "/dashboard/health-plans": "Health Plans",
    "/dashboard/health-plans/hmo-plans": "AXA Mansard",
    "/dashboard/health-plans/hmo-plans/hmo-plan-details": "AXA Bronze",
    "/dashboard/health-plans/hmo-plans/buy-plan": "Buy Plan",
    "/dashboard/save-a-soul": "Save-a-soul",
    "/dashboard/save-a-soul/create-cause": "Create Cause",
    "/dashboard/profile/profile-information": "Profile Information",
};

function AppBreadCrumb({title}) {
    const location = useLocation();
    if (!location?.pathname) return null; // safety guard

    const pathnames = location.pathname
    .split("/")
    .filter((x) => x); // safer than Boolean

    return (
        <Breadcrumb
            spacing="8px"
            mb={[4,8]}
            separator={<ChevronRightIcon color="gray.500" />}
            fontSize="20px"
        >
            {pathnames.map((_, index) => {
                const to = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;

                return (
                    <BreadcrumbItem key={to} isCurrentPage={isLast}>
                        {!isLast ? (
                            <BreadcrumbLink
                                as={Link}
                                to={to}
                                color="#333333"
                                display="flex"
                                alignItems="center"
                                gap="6px"
                                fontSize={{ base: "18px", md: "22px" }}  
                                fontWeight={{ base: "400", md: "400" }}
                            >
                                {to === "/dashboard" && <MdDashboard />}
                                {routeNameMap[to]}
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbLink
                                color="#333333"
                                fontWeight="semibold"
                                fontSize={{ base: "18px", md: "22px" }}
                                cursor="default"
                            >
                                {routeNameMap[to] ? routeNameMap[to] : title}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    )
}

export default AppBreadCrumb