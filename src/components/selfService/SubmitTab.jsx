'use client'
import React from 'react'
import QuickActionsGrid from './QuickActionsGrid'
import ServiceRequestForm from './ServiceRequestForm'

const SubmitTab = () => {
    return (
        <div className="row">
            <div className="col-lg-5">
                <QuickActionsGrid />
            </div>
            <div className="col-lg-7">
                <ServiceRequestForm />
            </div>
        </div>
    )
}

export default SubmitTab