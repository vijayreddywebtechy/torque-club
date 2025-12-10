'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { companyProfileData } from '@/utils/fackData/companyProfileData'
import { FiBriefcase, FiEdit } from 'react-icons/fi'

const CompanyInformation = ({ title = "Company Information" }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { companyInformation } = companyProfileData;

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2">
                            <FiBriefcase />
                        </div>
                        <h5 className="card-title mb-0">{title}</h5>
                    </div>
                    <div className="card-header-action">
                        <button className="btn btn-sm btn-light-brand">
                            <FiEdit size={14} className="me-1" />
                            Edit Information
                        </button>
                    </div>
                </div>
                
                <div className="card-body">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="mb-4">
                                <label className="form-label text-muted fw-medium mb-2">Company Name</label>
                                <div className="text-dark fw-semibold">{companyInformation.companyName}</div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="form-label text-muted fw-medium mb-2">Registration Number</label>
                                <div className="text-dark">{companyInformation.registrationNumber}</div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="form-label text-muted fw-medium mb-2">Tax Reference</label>
                                <div className="text-dark">{companyInformation.taxReference}</div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="form-label text-muted fw-medium mb-2">Email Address</label>
                                <div className="text-dark">{companyInformation.emailAddress}</div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-4">
                                <label className="form-label text-muted fw-medium mb-2">Industry</label>
                                <div className="text-dark">{companyInformation.industry}</div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="form-label text-muted fw-medium mb-2">VAT Number</label>
                                <div className="text-dark">{companyInformation.vatNumber}</div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="form-label text-muted fw-medium mb-2">Phone Number</label>
                                <div className="text-dark">{companyInformation.phoneNumber}</div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="form-label text-muted fw-medium mb-2">Website</label>
                                <div className="text-dark">{companyInformation.website}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default CompanyInformation