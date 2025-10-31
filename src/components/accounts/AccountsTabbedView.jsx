'use client'
import React, { useState } from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { accountsOverviewData } from '@/utils/fackData/accountsData'
import { FiCreditCard, FiEye, FiDownload, FiCalendar, FiActivity, FiFileText, FiBarChart2 } from 'react-icons/fi'

const AccountsTabbedView = () => {
    const [activeTab, setActiveTab] = useState('account-details')
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { accounts, recentTransactions, outstandingInvoices, analytics } = accountsOverviewData;

    if (isRemoved) {
        return null;
    }

    const tabs = [
        { id: 'account-details', label: 'Account Details', icon: <FiCreditCard size={16} /> },
        { id: 'recent-transactions', label: 'Recent Transactions', icon: <FiActivity size={16} /> },
        { id: 'outstanding-invoices', label: 'Outstanding Invoices', icon: <FiFileText size={16} /> },
        { id: 'analytics', label: 'Analytics', icon: <FiBarChart2 size={16} /> }
    ]

    const renderTabContent = () => {
        switch (activeTab) {
            case 'account-details':
                return (
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
                )

            case 'recent-transactions':
                return (
                    <div className="card-body">
                        <div className="d-flex flex-column gap-3">
                            {/* Payment Received */}
                            <div className="d-flex align-items-center p-3 border rounded">
                                <div className="avatar-text avatar-md bg-soft-success text-success me-3">
                                    <i className="feather-arrow-down-left"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="fw-semibold mb-1">Payment Received - INV-2024-0156</div>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="fs-12 text-muted">2/22/2024</span>
                                        <span className="badge bg-soft-primary text-primary fs-11">payment</span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-bold text-success mb-1">+ R 15,000</div>
                                    <span className="badge bg-dark text-white fs-10">completed</span>
                                </div>
                            </div>

                            {/* Parts Purchase */}
                            <div className="d-flex align-items-center p-3 border rounded">
                                <div className="avatar-text avatar-md bg-soft-danger text-danger me-3">
                                    <i className="feather-arrow-up-right"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="fw-semibold mb-1">Parts Purchase - Order #PO-2024-0234</div>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="fs-12 text-muted">2/21/2024</span>
                                        <span className="badge bg-soft-primary text-primary fs-11">parts</span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-bold text-danger mb-1">R 8,500</div>
                                    <span className="badge bg-dark text-white fs-10">completed</span>
                                </div>
                            </div>

                            {/* Service Charge */}
                            <div className="d-flex align-items-center p-3 border rounded">
                                <div className="avatar-text avatar-md bg-soft-danger text-danger me-3">
                                    <i className="feather-arrow-up-right"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="fw-semibold mb-1">Service Charge - Work Order #WO-2024-0089</div>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="fs-12 text-muted">2/20/2024</span>
                                        <span className="badge bg-soft-primary text-primary fs-11">service</span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-bold text-danger mb-1">R 3,200</div>
                                    <span className="badge bg-dark text-white fs-10">completed</span>
                                </div>
                            </div>

                            {/* Equipment Rental */}
                            <div className="d-flex align-items-center p-3 border rounded">
                                <div className="avatar-text avatar-md bg-soft-danger text-danger me-3">
                                    <i className="feather-arrow-up-right"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="fw-semibold mb-1">Equipment Rental - CAT 320D</div>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="fs-12 text-muted">2/19/2024</span>
                                        <span className="badge bg-soft-primary text-primary fs-11">rental</span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-bold text-danger mb-1">R 1,250</div>
                                    <span className="badge bg-soft-warning text-warning fs-10">pending</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'outstanding-invoices':
                return (
                    <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                            <div className="avatar-text avatar-sm bg-soft-warning text-warning me-2">
                                <i className="feather-alert-triangle"></i>
                            </div>
                            <h6 className="mb-0">Outstanding Invoices</h6>
                        </div>
                        
                        <div className="d-flex flex-column gap-3">
                            {/* Invoice 1 */}
                            <div className="d-flex align-items-center justify-content-between p-3 bg-soft-danger rounded">
                                <div className="flex-grow-1">
                                    <div className="fw-semibold mb-1">INV-2024-0145</div>
                                    <div className="fs-12 text-muted">Due: 2/14/2024</div>
                                    <span className="badge bg-danger text-white fs-10 mt-1">8 days overdue</span>
                                </div>
                                <div className="text-end">
                                    <div className="fw-bold text-dark mb-2">R 12,500</div>
                                    <button className="btn btn-dark btn-sm px-3">Pay Now</button>
                                </div>
                            </div>

                            {/* Invoice 2 */}
                            <div className="d-flex align-items-center justify-content-between p-3 bg-soft-danger rounded">
                                <div className="flex-grow-1">
                                    <div className="fw-semibold mb-1">INV-2024-0134</div>
                                    <div className="fs-12 text-muted">Due: 2/9/2024</div>
                                    <span className="badge bg-danger text-white fs-10 mt-1">13 days overdue</span>
                                </div>
                                <div className="text-end">
                                    <div className="fw-bold text-dark mb-2">R 2,100</div>
                                    <button className="btn btn-dark btn-sm px-3">Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'analytics':
                return (
                    <div className="card-body">
                        <div className="row g-4">
                            {/* Account Balance Aging Chart */}
                            <div className="col-md-6">
                                <div className="card border">
                                    <div className="card-body">
                                        <h6 className="mb-4">Account Balance Aging</h6>
                                        <div className="text-center mb-4">
                                            <div className="position-relative d-inline-block">
                                                <svg width="200" height="200" viewBox="0 0 200 200">
                                                    {/* Donut Chart Segments */}
                                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#e9ecef" strokeWidth="20"></circle>
                                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#28a745" strokeWidth="20" 
                                                            strokeDasharray="377" strokeDashoffset="75" 
                                                            transform="rotate(-90 100 100)"></circle>
                                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#ffc107" strokeWidth="20" 
                                                            strokeDasharray="75" strokeDashoffset="302" 
                                                            transform="rotate(90 100 100)"></circle>
                                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#fd7e14" strokeWidth="20" 
                                                            strokeDasharray="38" strokeDashoffset="264" 
                                                            transform="rotate(135 100 100)"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                        
                                        <div className="row text-center">
                                            <div className="col-6 mb-3">
                                                <div className="d-flex align-items-center justify-content-center mb-1">
                                                    <div className="bg-success rounded-circle me-2" style={{width: '12px', height: '12px'}}></div>
                                                    <span className="fs-12 text-muted">Current</span>
                                                </div>
                                                <div className="fw-bold">R 125,000</div>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <div className="d-flex align-items-center justify-content-center mb-1">
                                                    <div className="bg-warning rounded-circle me-2" style={{width: '12px', height: '12px'}}></div>
                                                    <span className="fs-12 text-muted">1-30 Days</span>
                                                </div>
                                                <div className="fw-bold">R 45,000</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center justify-content-center mb-1">
                                                    <div className="bg-orange rounded-circle me-2" style={{width: '12px', height: '12px', backgroundColor: '#fd7e14'}}></div>
                                                    <span className="fs-12 text-muted">61-90 Days</span>
                                                </div>
                                                <div className="fw-bold">R 2,100</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center justify-content-center mb-1">
                                                    <div className="bg-danger rounded-circle me-2" style={{width: '12px', height: '12px'}}></div>
                                                    <span className="fs-12 text-muted">90+ Days</span>
                                                </div>
                                                <div className="fw-bold">R 0</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Monthly Spending Trend Chart */}
                            <div className="col-md-6">
                                <div className="card border">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="avatar-text avatar-sm bg-soft-primary text-primary me-2">
                                                <i className="feather-bar-chart-2"></i>
                                            </div>
                                            <h6 className="mb-0">Monthly Spending Trend</h6>
                                        </div>
                                        
                                        <div className="chart-container mb-3" style={{height: '200px', position: 'relative'}}>
                                            <div className="d-flex align-items-end justify-content-between h-100 px-2">
                                                <div className="d-flex flex-column align-items-center">
                                                    <div className="bg-dark mb-2" style={{width: '40px', height: '120px'}}></div>
                                                    <span className="fs-12 text-muted">Oct</span>
                                                </div>
                                                <div className="d-flex flex-column align-items-center">
                                                    <div className="bg-dark mb-2" style={{width: '40px', height: '140px'}}></div>
                                                    <span className="fs-12 text-muted">Nov</span>
                                                </div>
                                                <div className="d-flex flex-column align-items-center">
                                                    <div className="bg-dark mb-2" style={{width: '40px', height: '100px'}}></div>
                                                    <span className="fs-12 text-muted">Dec</span>
                                                </div>
                                                <div className="d-flex flex-column align-items-center">
                                                    <div className="bg-dark mb-2" style={{width: '40px', height: '130px'}}></div>
                                                    <span className="fs-12 text-muted">Jan</span>
                                                </div>
                                                <div className="d-flex flex-column align-items-center">
                                                    <div className="bg-dark mb-2" style={{width: '40px', height: '150px'}}></div>
                                                    <span className="fs-12 text-muted">Feb</span>
                                                </div>
                                            </div>
                                            
                                            {/* Y-axis labels */}
                                            <div className="position-absolute" style={{left: '-10px', top: '0', height: '100%'}}>
                                                <div className="d-flex flex-column justify-content-between h-100 text-muted fs-11">
                                                    <span>R 100k</span>
                                                    <span>R 75k</span>
                                                    <span>R 50k</span>
                                                    <span>R 25k</span>
                                                    <span>R 0k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Credit Utilization by Account */}
                            <div className="col-12">
                                <div className="card border">
                                    <div className="card-body">
                                        <h6 className="mb-4">Credit Utilization by Account</h6>
                                        
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="fw-medium">Primary Trade Account</span>
                                                <span className="fw-bold">18.0%</span>
                                            </div>
                                            <div className="progress mb-1" style={{height: '8px'}}>
                                                <div className="progress-bar bg-dark" style={{width: '18%'}}></div>
                                            </div>
                                            <div className="d-flex justify-content-between fs-11 text-muted">
                                                <span>Used: R 45,000</span>
                                                <span>Available: R 205,000</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="fw-medium">Equipment Rental</span>
                                                <span className="fw-bold">17.5%</span>
                                            </div>
                                            <div className="progress mb-1" style={{height: '8px'}}>
                                                <div className="progress-bar bg-dark" style={{width: '17.5%'}}></div>
                                            </div>
                                            <div className="d-flex justify-content-between fs-11 text-muted">
                                                <span>Used: R 8,750</span>
                                                <span>Available: R 41,250</span>
                                            </div>
                                        </div>

                                        <div className="mb-0">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="fw-medium">Service & Maintenance</span>
                                                <span className="fw-bold">8.4%</span>
                                            </div>
                                            <div className="progress mb-1" style={{height: '8px'}}>
                                                <div className="progress-bar bg-dark" style={{width: '8.4%'}}></div>
                                            </div>
                                            <div className="d-flex justify-content-between fs-11 text-muted">
                                                <span>Used: R 2,100</span>
                                                <span>Available: R 22,900</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header border-bottom">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-sm me-2">
                            <FiCreditCard />
                        </div>
                        <h5 className="card-title mb-0">Accounts Overview</h5>
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

                {/* Tab Navigation */}
                <div className="card-header p-0">
                    <ul className="nav nav-tabs nav-fill" role="tablist">
                        {tabs.map((tab) => (
                            <li key={tab.id} className="nav-item" role="presentation">
                                <button
                                    className={`nav-link border-0 ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                    type="button"
                                    role="tab"
                                >
                                    <div className="d-flex align-items-center justify-content-center">
                                        {tab.icon}
                                        <span className="ms-2">{tab.label}</span>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Tab Content */}
                {renderTabContent()}
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default AccountsTabbedView