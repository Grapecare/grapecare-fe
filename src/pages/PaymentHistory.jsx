import React from 'react'
import PageHeader from '../components/PageHeader'
import PaymentHistoryTable from '../components/PaymentHistoryTable'

function PaymentHistory() {
    return (
        <div>
            <PageHeader title="Profile" />
            <PaymentHistoryTable />
        </div>
    )
}

export default PaymentHistory