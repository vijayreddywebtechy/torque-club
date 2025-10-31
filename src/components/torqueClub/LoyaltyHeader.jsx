'use client'
import React from 'react'
import { torqueClubData } from '@/utils/fackData/torqueClubData'
import { FiAward } from 'react-icons/fi'

const LoyaltyHeader = () => {
    const { member } = torqueClubData;

    return (
        <div className="col-12 mb-4">
            <div className="card bg-soft-warning">
                <div className="card-body text-center py-5">
                    <h2 className="mb-2">Torque Club Loyalty</h2>
                    <p className="text-muted mb-4">Earn points, unlock rewards, and enjoy exclusive benefits</p>
                    
                    {/* Level Badge */}
                    <div className="mb-4">
                        <span className="badge bg-warning text-dark px-3 py-2 fs-12 fw-bold">Level {member.level}</span>
                    </div>
                    
                    {/* Crown Icon */}
                    <div className="avatar-text avatar-xxl bg-warning text-white mx-auto mb-4" style={{width: '100px', height: '100px'}}>
                        <FiAward size={48} />
                    </div>
                    
                    {/* Member Status */}
                    <h4 className="fw-bold mb-1">{member.currentTier}</h4>
                    <p className="text-muted mb-4">{member.name}</p>
                    
                    {/* Points Display */}
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="fw-medium">Current Points</span>
                                <span className="fw-bold fs-24">{member.currentPoints.toLocaleString()}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted fs-13">Progress to Platinum</span>
                                <span className="text-muted fs-13">{member.pointsToNext.toLocaleString()} points to go</span>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="progress mb-2" style={{height: '12px'}}>
                                <div 
                                    className="progress-bar bg-dark" 
                                    style={{width: `${member.progressPercentage}%`}}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoyaltyHeader