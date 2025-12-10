'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { activeAlertsData } from '@/utils/fackData/activeAlertsData'
import { FiAlertTriangle } from 'react-icons/fi'

const ActiveAlerts = ({ title = "Active Alerts" }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-4 col-lg-6">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2 text-warning">
                            <FiAlertTriangle size={14} />
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
                
                <div className="card-body custom-card-action">
                    {activeAlertsData.map((alert, index) => (
                        <div key={alert.id}>
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="flex-grow-1 me-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="fw-semibold">{alert.equipment}</div>
                                        <span className={`badge bg-soft-${alert.statusColor} text-${alert.statusColor} ms-2 fs-10`}>
                                            {alert.statusText}
                                        </span>
                                    </div>
                                    <div className="text-muted mb-1 fs-13">{alert.alert}</div>
                                    <div className="fs-12 text-muted">{alert.location}</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end mt-2">
                                <div className="fs-11 text-muted d-flex align-items-center">
                                    <i className="feather-clock me-1"></i>
                                    {alert.timeAgo}
                                </div>
                            </div>
                            {activeAlertsData.length - 1 !== index && <hr className="border-dashed my-3" />}
                        </div>
                    ))}
                </div>

                <div className="card-footer">
                    <a href="#" className="btn btn-light btn-sm w-100 d-flex align-items-center justify-content-center text-warning">
                        Manage Alerts
                        <i className="feather-arrow-right ms-1"></i>
                    </a>
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default ActiveAlerts