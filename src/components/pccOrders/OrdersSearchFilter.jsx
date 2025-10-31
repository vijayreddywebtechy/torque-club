'use client'
import React, { useState } from 'react'
import { FiSearch, FiFilter, FiCalendar, FiDollarSign } from 'react-icons/fi'

const OrdersSearchFilter = ({ totalOrders }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [dateFilter, setDateFilter] = useState('Last 30 days')
    const [statusFilter, setStatusFilter] = useState('All Types')
    const [amountFilter, setAmountFilter] = useState('All Amounts')

    return (
        <div className="col-12 mb-4">
            <div className="card">
                <div className="card-body py-3">
                    {/* Search Bar */}
                    <div className="row mb-3">
                        <div className="col-md-8">
                            <div className="position-relative">
                                <FiSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={16} />
                                <input 
                                    type="text" 
                                    className="form-control ps-5" 
                                    placeholder="Search by order number, customer, or items..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 text-end">
                            <button className="btn btn-light-brand d-flex align-items-center ms-auto">
                                <FiFilter size={16} className="me-2" />
                                Filters
                            </button>
                        </div>
                    </div>

                    {/* Filter Row */}
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="d-flex align-items-center gap-3">
                                <span className="text-muted fw-medium">Filters:</span>
                                
                                {/* Date Filter */}
                                <div className="dropdown">
                                    <button 
                                        className="btn btn-light btn-sm dropdown-toggle d-flex align-items-center" 
                                        type="button" 
                                        data-bs-toggle="dropdown"
                                    >
                                        <FiCalendar size={14} className="me-2" />
                                        {dateFilter}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => setDateFilter('Last 30 days')}>Last 30 days</button></li>
                                        <li><button className="dropdown-item" onClick={() => setDateFilter('Last 60 days')}>Last 60 days</button></li>
                                        <li><button className="dropdown-item" onClick={() => setDateFilter('Last 90 days')}>Last 90 days</button></li>
                                    </ul>
                                </div>

                                {/* Type Filter */}
                                <div className="dropdown">
                                    <button 
                                        className="btn btn-light btn-sm dropdown-toggle d-flex align-items-center" 
                                        type="button" 
                                        data-bs-toggle="dropdown"
                                    >
                                        <div className="rounded-circle bg-primary me-2" style={{width: '8px', height: '8px'}}></div>
                                        {statusFilter}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => setStatusFilter('All Types')}>All Types</button></li>
                                        <li><button className="dropdown-item" onClick={() => setStatusFilter('Parts')}>Parts</button></li>
                                        <li><button className="dropdown-item" onClick={() => setStatusFilter('Service')}>Service</button></li>
                                        <li><button className="dropdown-item" onClick={() => setStatusFilter('Rental')}>Rental</button></li>
                                        <li><button className="dropdown-item" onClick={() => setStatusFilter('Maintenance')}>Maintenance</button></li>
                                    </ul>
                                </div>

                                {/* Amount Filter */}
                                <div className="dropdown">
                                    <button 
                                        className="btn btn-light btn-sm dropdown-toggle d-flex align-items-center" 
                                        type="button" 
                                        data-bs-toggle="dropdown"
                                    >
                                        <FiDollarSign size={14} className="me-2" />
                                        {amountFilter}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => setAmountFilter('All Amounts')}>All Amounts</button></li>
                                        <li><button className="dropdown-item" onClick={() => setAmountFilter('Under R25,000')}>Under R25,000</button></li>
                                        <li><button className="dropdown-item" onClick={() => setAmountFilter('R25,000-R50,000')}>R25,000-R50,000</button></li>
                                        <li><button className="dropdown-item" onClick={() => setAmountFilter('R50,000-R100,000')}>R50,000-R100,000</button></li>
                                        <li><button className="dropdown-item" onClick={() => setAmountFilter('Over R100,000')}>Over R100,000</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-end">
                            <span className="text-muted fs-13">{totalOrders}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersSearchFilter