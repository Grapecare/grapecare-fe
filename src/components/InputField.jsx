import React, { useState } from 'react'
import { ErrorMessage } from 'formik'

function InputField({readOnly=false, type, name, placeholder, label, Icon, onChange, onBlur, value, helperText, error }) {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <div 
                className='relative'
            >
                <label 
                    htmlFor={name} 
                    className='font-medium text-base md:text-lg text-[#333333] mb-2 inline-block'
                >
                    {label}
                </label>
                <input
                    className='appearance-none bg-[#EEF8FF4D] text-[#333333CC] border-[#CBD5E1] border rounded-[10px] w-full h-[53px] py-2 px-[25px] placeholder:text-sm placeholder:text-[#333333CC] text-base'
                    type={type === 'password' ? show === true ? 'text' : 'password' : type}
                    name={name}
                    placeholder={placeholder ? placeholder : ''}
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    readOnly={readOnly}
                />
                {
                    Icon &&
                    <div
                        className='absolute right-[5%] bottom-[15%] pointer-events-auto'
                        onClick={type === 'password' ? () => toggleShow() : null}
                    >
                        <Icon />
                    </div>
                }

            </div>
            <span className='text-red-600 mt-1 inline-block'>{helperText}</span>
            <span className='text-red-600 mt-1 inline-block'>{error}</span>
        </>

    )
}

export default InputField