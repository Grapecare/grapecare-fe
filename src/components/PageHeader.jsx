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
import AppBreadCrumb from './AppBreadCrumb'

function PageHeader({ title, showCauseBtn = false }) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <div className="">
                    <h2 className='font-bold md:text-3xl text-2xl text-[#333333]'>{title}</h2>
                </div>
                <AppBreadCrumb title={title} />
            </div>
            {showCauseBtn && <Button as={Link} to='/dashboard/save-a-soul/create-cause' color='#fff' bg='#EA1D78'>Create Cause</Button>}
        </div>
    )
}

export default PageHeader