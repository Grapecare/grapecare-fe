import React from 'react'

function BloodBankIcon({color='white'}) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18H20V20H0V18ZM2 10H4V17H2V10ZM7 10H9V17H7V10ZM11 10H13V17H11V10ZM16 10H18V17H16V10ZM0 5L10 0L20 5V9H0V5ZM10 6C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4C9.4477 4 9 4.44772 9 5C9 5.55228 9.4477 6 10 6Z" 
                fill={color} 
            />
        </svg>

    )
}

export default BloodBankIcon