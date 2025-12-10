'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { quickActionsData } from '@/utils/fackData/quickActionsData'
import getIcon from '@/utils/getIcon'
import { FiZap } from 'react-icons/fi'

const QuickActions = ({ title = "Quick Actions" }) => {
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
                            <FiZap size={14} />
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
                    {quickActionsData.map((action, index) => (
                        <div key={action.id}>
                            <a href="#" className="d-flex align-items-center p-2 rounded text-decoration-none">
                                <div className={`avatar-text avatar-md ${action.bgColor} text-white me-3`}>
                                    {getIcon(action.icon)}
                                </div>
                                <div className="flex-grow-1">
                                    <div className="fw-semibold text-dark">{action.label}</div>
                                </div>
                                <div className="ms-auto">
                                    {getIcon('feather-arrow-right')}
                                </div>
                            </a>
                            {quickActionsData.length - 1 !== index && <hr className="border-dashed my-2" />}
                        </div>
                    ))}
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default QuickActions