'use client'
import React from 'react'
import { selfServiceData } from '@/utils/fackData/selfServiceData'
import { FiCalendar, FiTool, FiCheckCircle, FiUser, FiPackage, FiHelpCircle } from 'react-icons/fi'

const QuickActionsGrid = () => {
    const { quickActions } = selfServiceData;

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'calendar': return <FiCalendar size={24} />;
            case 'tool': return <FiTool size={24} />;
            case 'check-circle': return <FiCheckCircle size={24} />;
            case 'user': return <FiUser size={24} />;
            case 'package': return <FiPackage size={24} />;
            case 'help-circle': return <FiHelpCircle size={24} />;
            default: return <FiHelpCircle size={24} />;
        }
    }

    return (
        <div className="mb-4">
            <h6 className="mb-3">Quick Actions</h6>
            <div className="row g-3">
                {quickActions.map((action) => (
                    <div key={action.id} className="col-md-6">
                        <div className="card border h-100 cursor-pointer hover-shadow transition-all">
                            <div className="card-body d-flex align-items-start">
                                <div className="avatar-text avatar-md bg-soft-primary text-primary me-3">
                                    {getIcon(action.icon)}
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">{action.title}</h6>
                                    <p className="text-muted fs-13 mb-0">{action.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuickActionsGrid