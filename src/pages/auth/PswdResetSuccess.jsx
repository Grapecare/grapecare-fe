import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'

function PswdResetSuccess() {
    return (
        <AuthLayout
            title='Password Reset Successful'
            subTitle='Your password has been updated successfully.'
            bgImage='/images/reset-pswd-bg.svg'
        >
            <div className='pb-10 flex items-center justify-center'>
                <h2 className='text-[#333333] text-2xl font-bold'>Password reset successful</h2>
            </div>
        </AuthLayout>
    )
}

export default PswdResetSuccess