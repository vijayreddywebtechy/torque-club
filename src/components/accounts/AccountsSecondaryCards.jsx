'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { FiActivity, FiFileText, FiBarChart2, FiRefreshCw } from 'react-icons/fi'

const AccountsSecondaryCards = () => {
    const { refreshKey: refreshKey1, isRemoved: isRemoved1, isExpanded: isExpanded1, handleRefresh: handleRefresh1, handleExpand: handleExpand1, handleDelete: handleDelete1 } = useCardTitleActions();
    const { refreshKey: refreshKey2, isRemoved: isRemoved2, isExpanded: isExpanded2, handleRefresh: handleRefresh2, handleExpand: handleExpand2, handleDelete: handleDelete2 } = useCardTitleActions();
    const { refreshKey: refreshKey3, isRemoved: isRemoved3, isExpanded: isExpanded3, handleRefresh: handleRefresh3, handleExpand: handleExpand3, handleDelete: handleDelete3 } = useCardTitleActions();

    const cards = [
        {
            id: 1,
            title: "Recent Transactions",
            icon: <FiActivity />,
            content: "Transaction history and recent account activity",
            refreshKey: refreshKey1,
            isRemoved: isRemoved1,
            isExpanded: isExpanded1,
            handleRefresh: handleRefresh1,
            handleExpand: handleExpand1,
            handleDelete: handleDelete1
        },
        {
            id: 2,
            title: "Outstanding Invoices",
            icon: <FiFileText />,
            content: "Pending invoices and payment schedules",
            refreshKey: refreshKey2,
            isRemoved: isRemoved2,
            isExpanded: isExpanded2,
            handleRefresh: handleRefresh2,
            handleExpand: handleExpand2,
            handleDelete: handleDelete2
        },
        {
            id: 3,
            title: "Analytics",
            icon: <FiBarChart2 />,
            content: "Account performance and spending analytics",
            refreshKey: refreshKey3,
            isRemoved: isRemoved3,
            isExpanded: isExpanded3,
            handleRefresh: handleRefresh3,
            handleExpand: handleExpand3,
            handleDelete: handleDelete3
        }
    ];

    return (
        <>
            {cards.map((card) => {
                if (card.isRemoved) return null;
                
                return (
                    <div key={card.id} className="col-xxl-3 col-lg-6">
                        <div className={`card stretch stretch-full ${card.isExpanded ? "card-expand" : ""} ${card.refreshKey ? "card-loading" : ""}`}>
                            <div className="card-header">
                                <div className="d-flex align-items-center">
                                    <div className="avatar-text avatar-sm me-2">
                                        {card.icon}
                                    </div>
                                    <h6 className="card-title mb-0">{card.title}</h6>
                                </div>
                                <div className="card-header-action">
                                    <div className="card-header-btn">
                                        <div data-toggle="tooltip" data-title="Delete" onClick={card.handleDelete}>
                                            <span className="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"></span>
                                        </div>
                                        <div data-toggle="tooltip" data-title="Refresh" onClick={card.handleRefresh}>
                                            <span className="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"></span>
                                        </div>
                                        <div data-toggle="tooltip" data-title="Maximize/Minimize" onClick={card.handleExpand}>
                                            <span className="avatar-text avatar-xs bg-success" data-bs-toggle="expand"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-body d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                                <div className="text-center">
                                    <div className="avatar-text avatar-xl bg-soft-primary text-primary mb-3">
                                        {card.icon}
                                    </div>
                                    <p className="text-muted">{card.content}</p>
                                    <button className="btn btn-sm btn-primary">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            
                            <CardLoader refreshKey={card.refreshKey} />
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default AccountsSecondaryCards