'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { fleetMetricsData } from '@/utils/fackData/fleetMetricsData'
import getIcon from '@/utils/getIcon'
import { FiBarChart2 } from 'react-icons/fi'

const FleetPerformanceMetrics = ({ title = "Fleet Performance Metrics" }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2">
                            <FiBarChart2 size={14} />
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
                
                <div className="card-body">
                    <div className="row g-4">
                        {fleetMetricsData.map((metric) => (
                            <div key={metric.id} className="col-lg-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div className={`avatar-text avatar-lg me-3 text-${metric.color}`}>
                                        {getIcon(metric.icon)}
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="fs-13 text-muted mb-1">{metric.title}</div>
                                        <div className="d-flex align-items-baseline">
                                            <div className="fs-24 fw-bold text-dark me-2">
                                                {metric.value}{metric.unit}
                                            </div>
                                            <div className={`fs-11 text-${metric.isAboveTarget ? 'success' : 'warning'} d-flex align-items-center`}>
                                                <i className={`feather-arrow-${metric.isAboveTarget ? 'up' : 'down'} me-1`}></i>
                                                TARGET: {metric.target}{metric.unit}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="progress mb-2" style={{ height: '8px' }}>
                                    <div 
                                        className={`progress-bar bg-${metric.color}`}
                                        role="progressbar"
                                        style={{ width: `${metric.value}%` }}
                                        aria-valuenow={metric.value}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                
                                <div className="d-flex justify-content-between fs-11 text-muted">
                                    <span>0%</span>
                                    <span>Target: {metric.target}%</span>
                                    <span>100%</span>
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

export default FleetPerformanceMetrics