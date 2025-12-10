'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { torqueClubData } from '@/utils/fackData/torqueClubData'
import { FiTarget, FiCalendar, FiAward } from 'react-icons/fi'

const ActiveChallenges = () => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { activeChallenges } = torqueClubData;

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-md-6 mb-4">
            <div className={`card h-100 ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2">
                            <FiTarget />
                        </div>
                        <h5 className="card-title mb-0">Active Challenges</h5>
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
                    <div className="d-flex flex-column gap-4">
                        {activeChallenges.map((challenge) => (
                            <div key={challenge.id} className="border-bottom pb-4">
                                <div className="d-flex align-items-start justify-content-between mb-2">
                                    <div className="flex-grow-1">
                                        <h6 className="fw-bold mb-1">{challenge.title}</h6>
                                        <p className="text-muted fs-13 mb-2">{challenge.description}</p>
                                    </div>
                                    <div className="text-end ms-3">
                                        <div className="d-flex align-items-center text-muted fs-12 mb-1">
                                            <FiAward size={12} className="me-1" />
                                            <span className="fw-bold">{challenge.points} pts</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Progress Section */}
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="fs-13 text-muted">Progress</span>
                                        <span className="fs-13 fw-bold">{challenge.progressText}</span>
                                    </div>
                                    <div className="progress mb-2" style={{height: '8px'}}>
                                        <div 
                                            className="progress-bar bg-primary" 
                                            style={{width: `${challenge.progress}%`}}
                                        ></div>
                                    </div>
                                </div>
                                
                                {/* Due Date and Status */}
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center text-muted fs-12">
                                        <FiCalendar size={12} className="me-1" />
                                        <span>Due: {challenge.dueDate}</span>
                                    </div>
                                    <span className="badge bg-soft-primary text-primary fs-11">
                                        {challenge.status}
                                    </span>
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

export default ActiveChallenges