'use client'
import React, { useState } from 'react'
import { selfServiceData } from '@/utils/fackData/selfServiceData'
import { FiClock, FiCheckCircle, FiAlertCircle, FiChevronDown, FiDownload, FiEye, FiMessageSquare, FiPhone, FiSearch } from 'react-icons/fi'
import './TrackTab.scss'

const TrackTab = () => {
    const { trackingRequests } = selfServiceData;
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All Statuses');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const getStatusBadge = (status) => {
        const statusConfig = {
            pending: { class: 'badge bg-soft-warning text-warning', label: 'Pending', icon: FiAlertCircle },
            'in-progress': { class: 'badge bg-soft-info text-info', label: 'In Progress', icon: FiClock },
            completed: { class: 'badge bg-soft-success text-success', label: 'Completed', icon: FiCheckCircle }
        };
        return statusConfig[status] || statusConfig.pending;
    }

    const getPriorityBadge = (priority) => {
        const priorityConfig = {
            low: { class: 'badge bg-soft-secondary text-secondary', label: 'LOW' },
            medium: { class: 'badge bg-soft-warning text-warning', label: 'MEDIUM' },
            high: { class: 'badge bg-soft-danger text-danger', label: 'HIGH' },
            critical: { class: 'badge bg-soft-danger text-danger', label: 'CRITICAL' }
        };
        return priorityConfig[priority] || priorityConfig.low;
    }

    const filteredRequests = trackingRequests.filter(request => {
        const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             request.requestId.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All Statuses' || 
                             request.status === filterStatus.toLowerCase().replace(' ', '-');
        return matchesSearch && matchesStatus;
    });

    const handleFilterChange = (status) => {
        setFilterStatus(status);
        setIsFilterOpen(false);
    }

    return (
        <div className="track-tab">
            {/* Search and Filter Bar */}
            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body py-3">
                    <div className="row align-items-center g-3">
                        <div className="col-lg-7">
                            <div className="position-relative">
                                <FiSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={16} />
                                <input
                                    type="text"
                                    className="form-control ps-5"
                                    placeholder="Search by ID, title, or machine..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-lg-end align-items-center gap-3 flex-wrap">
                            <div className="position-relative">
                                <button 
                                    className={`btn btn-outline-secondary btn-sm d-flex align-items-center gap-2 ${isFilterOpen ? 'active' : ''}`}
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    style={{ borderColor: '#fdba12' }}
                                >
                                    {filterStatus}
                                    <FiChevronDown size={14} />
                                </button>
                                {isFilterOpen && (
                                    <div className="dropdown-menu show position-absolute end-0 mt-2" style={{ minWidth: '180px', zIndex: 1000 }}>
                                        <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleFilterChange('All Statuses'); }}>All Statuses</a>
                                        <hr className="dropdown-divider my-1" />
                                        <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleFilterChange('In Progress'); }}>In Progress</a>
                                        <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleFilterChange('Completed'); }}>Completed</a>
                                        <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleFilterChange('Pending'); }}>Pending</a>
                                    </div>
                                )}
                            </div>
                            <span className="text-muted small fw-medium" style={{ whiteSpace: 'nowrap' }}>
                                <strong>{filteredRequests.length}</strong> of {trackingRequests.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Requests Cards */}
            <div className="space-y-3">
                {filteredRequests.length > 0 ? (
                    filteredRequests.map((request) => {
                        const statusBadge = getStatusBadge(request.status);
                        const priorityBadge = getPriorityBadge(request.priority);
                        const StatusIcon = statusBadge.icon;

                        return (
                            <div key={request.id} className="card border-0 shadow-sm mb-3">
                                {/* Card Header */}
                                <div className="card-body pb-0">
                                    <div className="row align-items-center g-3 mb-4">
                                        <div className="col-md-6">
                                            <div>
                                                <h6 className="mb-2 fw-bold">{request.title}</h6>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <span className="badge small" style={{ backgroundColor: 'var(--bs-secondary-bg)', color: 'var(--bs-body-color)' }}>{request.requestId}</span>
                                                    <small className="text-muted d-flex align-items-center gap-1">
                                                        <FiClock size={13} />
                                                        {request.machine}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-end gap-2 flex-wrap">
                                            <span className={`badge ${statusBadge.class}`}>
                                                <StatusIcon size={12} className="me-1" style={{ display: 'inline' }} />
                                                {statusBadge.label}
                                            </span>
                                            <span className={`badge ${priorityBadge.class}`}>
                                                {priorityBadge.label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Quick Info */}
                                    <div className="row g-3 small text-muted mb-4">
                                        <div className="col-6 col-sm-3">
                                            <div>
                                                <small className="text-muted fw-medium d-block mb-1">Created</small>
                                                <span style={{ color: 'var(--bs-body-color)' }} className="fw-medium">{request.createdDate}</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-3">
                                            <div>
                                                <small className="text-muted fw-medium d-block mb-1">Last Updated</small>
                                                <span style={{ color: 'var(--bs-body-color)' }} className="fw-medium">{request.lastUpdated}</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-3">
                                            <div>
                                                <small className="text-muted fw-medium d-block mb-1">Assigned To</small>
                                                <span style={{ color: 'var(--bs-body-color)' }} className="fw-medium">{request.assignedTo}</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-3">
                                            <div>
                                                <small className="text-muted fw-medium d-block mb-1">Est. Completion</small>
                                                <span style={{ color: 'var(--bs-body-color)' }} className="fw-medium">{request.estimatedCompletion}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mb-4 pb-4 border-bottom">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <small className="text-muted fw-medium">Progress</small>
                                            <small className="fw-bold" style={{ color: 'var(--bs-body-color)' }}>{request.progress}%</small>
                                        </div>
                                        <div className="progress" style={{ height: '8px' }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: `${request.progress}%`, backgroundColor: '#fdba12' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body - Rest Content */}
                                <div className="card-body pt-0">
                                    {/* Latest Update */}
                                    <div className="mb-4 pb-4 border-bottom">
                                        <h6 className="fw-bold mb-3 small">Latest Update</h6>
                                    <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>{request.latestUpdate}</p>
                                    <small className="text-muted">
                                        <strong style={{ color: 'var(--bs-body-color)' }}>{request.updatedBy}</strong> • {request.updatedTime}
                                    </small>
                                </div>

                                {/* Attachments */}
                                {request.attachments && request.attachments.length > 0 && (
                                    <div className="mb-4 pb-4 border-bottom">
                                        <h6 className="fw-bold mb-3 small">Attachments ({request.attachments.length})</h6>
                                        <div className="d-flex flex-column gap-3">
                                            {request.attachments.map((attachment, idx) => (
                                                <div key={idx} className="d-flex align-items-center justify-content-between p-3 rounded small" style={{ backgroundColor: 'var(--bs-secondary-bg)' }}>
                                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                                        <span className="badge bg-danger">PDF</span>
                                                        <div>
                                                            <div className="fw-medium" style={{ color: 'var(--bs-body-color)', marginBottom: '4px' }}>{attachment.name}</div>
                                                            <small className="text-muted">{attachment.size}</small>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-sm btn-link p-0 text-primary ms-2">
                                                        <FiDownload size={16} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                    {/* Action Buttons */}
                                    <div className="d-flex gap-3 flex-wrap pt-2">
                                        <button className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-2">
                                            <FiEye size={14} /> View
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-2">
                                            <FiMessageSquare size={14} /> Comment
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-2">
                                            <FiPhone size={14} /> Contact
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="card border-0 shadow-sm">
                        <div className="card-body text-center py-5">
                            <FiClock size={32} className="text-muted mb-3" />
                            <p className="text-muted mb-2">No service requests found</p>
                            <small className="text-muted">Try adjusting your search filters</small>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TrackTab