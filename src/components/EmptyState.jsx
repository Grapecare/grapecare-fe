import React from 'react'
import { FiFileText } from 'react-icons/fi'
import EmptyFile from '../assets/icons/EmptyFile.svg'
import { Image } from '@chakra-ui/react'

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-16">
            <div className="w-72 h-72 bg-[#6DD1FF26] rounded-full flex items-center justify-center">
                <Image src={EmptyFile} alt="Empty"/>
            </div>

            <p className="mt-6 text-gray-600 text-lg">
                Your History is Empty.
            </p>
        </div>
    )
}

export default EmptyState