'use client'
import React from 'react'
import { FiSearch, FiFilter } from 'react-icons/fi'

const DocumentSearchFilter = () => {
    return (
        <div className="col-12 mb-4">
            <div className="card">
                <div className="card-body py-3">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="position-relative">
                                <FiSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={16} />
                                <input 
                                    type="text" 
                                    className="form-control ps-5" 
                                    placeholder="Search documents..."
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex align-items-center gap-2">
                                <FiFilter className="text-muted" size={16} />
                                <select className="form-select">
                                    <option value="">All Categories</option>
                                    <option value="kyc">KYC</option>
                                    <option value="compliance">Compliance</option>
                                    <option value="financial">Financial</option>
                                    <option value="legal">Legal</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentSearchFilter