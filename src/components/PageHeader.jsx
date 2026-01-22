import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

function PageHeader({ title, showCauseBtn = false }) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <div className="">
                    <h2 className='font-bold md:text-3xl text-2xl text-[#333333]'>{title}</h2>
                </div>
                <Breadcrumb spacing='8px' mb={8} separator={<ChevronRightIcon color='gray.500' />}>
                    <MdDashboard />
                    <BreadcrumbItem ml='10px'>
                        <BreadcrumbLink as={Link} to='/dashboard/home' fontSize='20px' color='#333333'>Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink fontSize='20px' color='#333333'>{title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            {showCauseBtn && <Button as={Link} to='/dashboard/create-cause' color='#fff' bg='#EA1D78'>Create Cause</Button>}
        </div>
    )
}

export default PageHeader