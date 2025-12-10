'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { torqueClubData } from '@/utils/fackData/torqueClubData'
import { FiAward, FiStar, FiShield, FiZap } from 'react-icons/fi'

const MembershipTiers = () => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { membershipTiers } = torqueClubData;

    if (isRemoved) {
        return null;
    }

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'medal': return <FiAward size={32} />;
            case 'star': return <FiStar size={32} />;
            case 'crown': return <FiAward size={32} />;
            case 'shield': return <FiShield size={32} />;
            case 'diamond': return <FiZap size={32} />;
            default: return <FiAward size={32} />;
        }
    }

    return (
        <div className="col-12 mb-4">
            <div className={`card ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2">
                            <FiAward />
                        </div>
                        <h5 className="card-title mb-0">Membership Tiers</h5>
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
                    <div className="row g-3">
                        {membershipTiers.map((tier) => (
                            <div key={tier.id} className="col-md-2">
                                <div className={`card h-100 ${tier.active ? tier.borderColor + ' border-2' : 'border'}`}>
                                    <div className="card-body text-center p-3">
                                        <div className={`avatar-text avatar-lg ${tier.active ? `bg-${tier.color} text-white` : 'bg-light text-muted'} mx-auto mb-3`}>
                                            {getIcon(tier.icon)}
                                        </div>
                                        <h6 className={`fw-bold mb-1 ${tier.active ? `text-${tier.color}` : 'text-muted'}`}>
                                            {tier.name}
                                        </h6>
                                        <p className="text-muted fs-12 mb-0">{tier.points}</p>
                                    </div>
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

export default MembershipTiers