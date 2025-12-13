'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { recentOrdersData } from '@/utils/fackData/recentOrdersData'
import { FiPackage } from 'react-icons/fi'

const RecentOrders = ({ title = "Recent Orders" }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-4 col-lg-6">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2">
                            <FiPackage size={14} />
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
                    {recentOrdersData.map((order, index) => (
                        <div key={order.id}>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="flex-grow-1">
                                    <div className="fw-semibold mb-1">{order.name}</div>
                                    <div className="fs-12 text-muted">{order.id}</div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-bold text-dark mb-1">{order.price}</div>
                                    <div className="fs-11 text-muted d-flex align-items-center justify-content-end">
                                        <i className="feather-clock me-1"></i>
                                        {order.timeAgo}
                                    </div>
                                </div>
                            </div>
                            {order.status && (
                                <div className="mt-2">
                                    <span className={`badge bg-soft-${order.statusColor} text-${order.statusColor} fs-11`}>
                                        {order.status}
                                    </span>
                                </div>
                            )}
                            {recentOrdersData.length - 1 !== index && <hr className="border-dashed my-3" />}
                        </div>
                    ))}
                </div>

                <div className="card-footer">
                    <a href="#" className="btn btn-light btn-lg w-100 d-flex align-items-center justify-content-center">
                        View All Orders
                        <i className="feather-arrow-right ms-1"></i>
                    </a>
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default RecentOrders