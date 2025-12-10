'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { companyProfileData } from '@/utils/fackData/companyProfileData'
import { FiMapPin, FiPlus, FiTrash } from 'react-icons/fi'

const RegisteredAddresses = ({ title = "Registered Addresses" }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { addresses } = companyProfileData;

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2">
                            <FiMapPin />
                        </div>
                        <h5 className="card-title mb-0">{title}</h5>
                    </div>
                    <div className="card-header-action">
                        <button className="btn btn-sm btn-light-brand">
                            <FiPlus size={14} className="me-1" />
                            Add Address
                        </button>
                    </div>
                </div>
                
                <div className="card-body">
                    <div className="row g-4">
                        {addresses.map((address) => (
                            <div key={address.id} className="col-md-6">
                                <div className="border rounded p-4 position-relative">
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <span className={`badge ${address.type === 'Billing' ? 'bg-primary' : 'bg-success'} me-2`}>
                                                {address.type}
                                            </span>
                                            {address.isDefault && (
                                                <span className="badge bg-soft-success text-success">
                                                    <i className="feather-check me-1"></i>
                                                    Default
                                                </span>
                                            )}
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn btn-sm btn-light" data-bs-toggle="dropdown">
                                                <FiTrash size={14} className="text-danger" />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="address-content">
                                        <h6 className="fw-bold mb-2">{address.title}</h6>
                                        <div className="text-muted lh-lg">
                                            {address.address}<br />
                                            {address.suburb}<br />
                                            {address.city}, {address.province} {address.postalCode}<br />
                                            {address.country}
                                        </div>
                                    </div>
                                    
                                    {!address.isDefault && address.type === 'Shipping' && (
                                        <div className="mt-3">
                                            <button className="btn btn-sm btn-outline-success">
                                                Set as Default
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default RegisteredAddresses