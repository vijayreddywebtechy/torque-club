'use client'
import React from 'react'
import { accountsOverviewData } from '@/utils/fackData/accountsData'
import { FiTrendingDown, FiCreditCard, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi'

const AccountsOverviewSummary = () => {
    const { summary } = accountsOverviewData;

    const summaryCards = [
        {
            title: "Total Balance",
            value: `R ${summary.totalBalance.toLocaleString()}`,
            icon: <FiTrendingDown size={18} />,
            color: "danger",
            bgColor: "bg-soft-danger",
            textColor: "text-danger"
        },
        {
            title: "Total Credit Limit",
            value: `R ${summary.totalCreditLimit.toLocaleString()}`,
            icon: <FiCreditCard size={18} />,
            color: "primary",
            bgColor: "bg-soft-primary",
            textColor: "text-primary"
        },
        {
            title: "Available Credit",
            value: `R ${summary.availableCredit.toLocaleString()}`,
            icon: <FiCheckCircle size={18} />,
            color: "success",
            bgColor: "bg-soft-success",
            textColor: "text-success"
        },
        {
            title: "Overdue Amount",
            value: `R ${summary.overdueAmount.toLocaleString()}`,
            icon: <FiAlertTriangle size={18} />,
            color: "warning",
            bgColor: "bg-soft-warning",
            textColor: "text-warning"
        }
    ];

    return (
        <>
            {summaryCards.map((card, index) => (
                <div key={index} className="col-xxl-3 col-lg-6 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div className="flex-grow-1">
                                <h6 className="text-muted fw-medium mb-2">{card.title}</h6>
                                <div className="fs-24 fw-bold text-dark">{card.value}</div>
                            </div>
                            <div className={`avatar-text avatar-lg ${card.bgColor} ${card.textColor} ms-3`}>
                                {card.icon}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AccountsOverviewSummary