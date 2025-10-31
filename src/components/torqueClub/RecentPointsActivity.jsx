'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { torqueClubData } from '@/utils/fackData/torqueClubData'
import { FiTrendingUp } from 'react-icons/fi'

const RecentPointsActivity = () => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { recentActivity } = torqueClubData;

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-12">
            <div className={`card ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-sm me-2">
                            <FiTrendingUp />
                        </div>
                        <h5 className="card-title mb-0">Recent Points Activity</h5>
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
                    <div className="d-flex flex-column gap-3">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="d-flex align-items-center justify-content-between py-2">
                                <div className="flex-grow-1">
                                    <div className="fw-medium mb-1">{activity.activity}</div>
                                    <div className="text-muted fs-12">{activity.date}</div>
                                </div>
                                <div className="text-end">
                                    <div className={`fw-bold ${activity.type === 'earned' ? 'text-success' : 'text-danger'}`}>
                                        {activity.type === 'earned' ? '+' : '-'}{activity.points}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-footer text-center">
                    <button className="btn btn-light btn-sm">View Full History</button>
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default RecentPointsActivity