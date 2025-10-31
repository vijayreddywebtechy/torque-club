'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { accountsOverviewData } from '@/utils/fackData/accountsData'
import { FiCreditCard, FiEye, FiDownload, FiCalendar } from 'react-icons/fi'

const AccountsDetails = ({ title = "Account Details" }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { accounts } = accountsOverviewData;

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-sm me-2">
                            <FiCreditCard />
                        </div>
                        <h5 className="card-title mb-0">{title}</h5>
                    </div>
                    <div className="card-header-action">
                        <div className="card-header-btn">
                            <div data-toggle="tooltip" data-title="Delete" onClick={handleDelete}>
                                <span className="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"></span>
                            </div>
                            <div data-toggle="tooltip" data-title="Refresh" onClick={handleRefresh}>
                                <span className="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"></span>
                            </div>
                            <div data-toggle="tooltip" data-title="Maximize/Minimize" onClick={handleExpand}>
                                <span className="avatar-text avatar-xs bg-success" data-bs-toggle="expand"></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card-body p-0">
                    {accounts.map((account, index) => (
                        <div key={account.id}>
                            <div className="p-4">
                                {/* Account Header */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-text avatar-md me-3">
                                            <FiCreditCard />
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">{account.name}</h6>
                                            <div className="fs-12 text-muted">{account.accountNumber}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <span className={`badge bg-soft-${account.statusColor} text-${account.statusColor}`}>
                                            {account.type}
                                        </span>
                                        <span className={`badge bg-soft-${account.statusColor === 'warning' ? 'warning' : 'success'} text-${account.statusColor === 'warning' ? 'warning' : 'success'}`}>
                                            <i className="feather-circle me-1" style={{fontSize: '8px'}}></i>
                                            {account.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Account Details Grid */}
                                <div className="row g-4 mb-4">
                                    <div className="col-md-3">
                                        <div className="text-muted fs-12 mb-1">Current Balance</div>
                                        <div className="fw-bold text-dark">R {account.currentBalance.toLocaleString()}</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="text-muted fs-12 mb-1">Credit Limit</div>
                                        <div className="fw-bold text-dark">R {account.creditLimit.toLocaleString()}</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="text-muted fs-12 mb-1">Available Credit</div>
                                        <div className="fw-bold text-success">R {account.availableCredit.toLocaleString()}</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="text-muted fs-12 mb-1">Overdue Amount</div>
                                        <div className={`fw-bold ${account.overdueAmount > 0 ? 'text-danger' : 'text-success'}`}>
                                            R {account.overdueAmount.toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                {/* Credit Utilization Progress */}
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-muted fs-12">Credit Utilization</span>
                                        <span className="fw-bold fs-12">{account.creditUtilization}%</span>
                                    </div>
                                    <div className="progress mb-1" style={{ height: '6px' }}>
                                        <div 
                                            className={`progress-bar ${account.creditUtilization > 80 ? 'bg-danger' : account.creditUtilization > 60 ? 'bg-warning' : 'bg-primary'}`}
                                            role="progressbar"
                                            style={{ width: `${account.creditUtilization}%` }}
                                            aria-valuenow={account.creditUtilization}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>

                                {/* Last Payment & Actions */}
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center text-muted fs-12">
                                        <FiCalendar size={12} className="me-1" />
                                        Last Payment: {account.lastPayment}
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <button className="btn btn-sm btn-light d-flex align-items-center">
                                            <FiEye size={14} className="me-1" />
                                            View Details
                                        </button>
                                        <button className="btn btn-sm btn-light d-flex align-items-center">
                                            <FiDownload size={14} className="me-1" />
                                            Statement
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {accounts.length - 1 !== index && <hr className="m-0" />}
                        </div>
                    ))}
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default AccountsDetails