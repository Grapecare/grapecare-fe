import React from 'react'

function PsdResetSuccess() {
    return (
        <div className="flex w-full md:w-1/2 justify-center overflow-y-auto px-3.5">
            <div className="w-full md:w-4/5 py-10">
                <Image src={grapeIcon} alt="grapeIcon" mb={3} />
                <h2 className='text-[#333333] text-4xl font-bold mb-4'>{title}</h2>
                <p className='text-[#333333] font-medium text-xl mb-6'>{subTitle}</p>
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PsdResetSuccess