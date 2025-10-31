'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { torqueClubData } from '@/utils/fackData/torqueClubData'
import { FiGift, FiTag } from 'react-icons/fi'

const AvailableRewards = () => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { availableRewards } = torqueClubData;

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-md-6 mb-4">
            <div className={`card h-100 ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-sm me-2">
                            <FiGift />
                        </div>
                        <h5 className="card-title mb-0">Available Rewards</h5>
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
                        {availableRewards.map((reward) => (
                            <div key={reward.id} className="d-flex align-items-start p-3 border rounded">
                                <div className="flex-grow-1 me-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <h6 className="fw-bold mb-0 me-2">{reward.title}</h6>
                                        <span className={`badge bg-soft-${reward.categoryColor} text-${reward.categoryColor} fs-11`}>
                                            {reward.category}
                                        </span>
                                    </div>
                                    <p className="text-muted fs-13 mb-2">{reward.description}</p>
                                    <div className="d-flex align-items-center text-muted fs-12">
                                        <FiTag size={12} className="me-1" />
                                        <span className="fw-bold">{reward.points} points</span>
                                    </div>
                                </div>
                                <button className="btn btn-light btn-sm">
                                    Redeem
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-footer text-center">
                    <button className="btn btn-light btn-sm">View All Rewards</button>
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default AvailableRewards