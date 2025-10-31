'use client'
import React from 'react'
import { selfServiceData } from '@/utils/fackData/selfServiceData'
import { FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const TrackTab = () => {
    const { trackingRequests } = selfServiceData;

    const getStatusBadge = (status) => {
        const statusConfig = {
            pending: { class: 'bg-soft-warning text-warning', icon: <FiClock size={14} /> },
            'in-progress': { class: 'bg-soft-info text-info', icon: <FiAlertCircle size={14} /> },
            completed: { class: 'bg-soft-success text-success', icon: <FiCheckCircle size={14} /> }
        };
        return statusConfig[status] || statusConfig.pending;
    }

    const getPriorityBadge = (priority) => {
        const priorityConfig = {
            low: 'badge-soft-secondary',
            medium: 'badge-soft-warning',
            high: 'badge-soft-danger',
            critical: 'badge-soft-danger'
        };
        return priorityConfig[priority] || 'badge-soft-secondary';
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Track Service Requests</h5>
                    <div className="input-group w-auto">
                        <input type="text" className="form-control" placeholder="Search requests..." />
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Request ID</th>
                                <th>Type</th>
                                <th>Title</th>
                                <th>Machine</th>
                                <th>Status</th>
                                <th>Priority</th>
                                <th>Date</th>
                                <th>Assigned To</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trackingRequests.map((request) => {
                                const statusConfig = getStatusBadge(request.status);
                                return (
                                    <tr key={request.id}>
                                        <td>
                                            <span className="text-primary fw-semibold">{request.requestId}</span>
                                        </td>
                                        <td>{request.type}</td>
                                        <td>{request.title}</td>
                                        <td>{request.machine}</td>
                                        <td>
                                            <span className={`badge ${statusConfig.class}`}>
                                                {statusConfig.icon}
                                                <span className="ms-1">{request.status.replace('-', ' ')}</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`badge ${getPriorityBadge(request.priority)}`}>
                                                {request.priority}
                                            </span>
                                        </td>
                                        <td>{request.date}</td>
                                        <td>{request.assignedTo}</td>
                                        <td>
                                            <button className="btn btn-sm btn-light">View Details</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {trackingRequests.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted">No service requests found</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TrackTab