'use client'
import React, { useState } from 'react'
import DuplicateLayout from '@/app/duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import SubmitTab from '@/components/selfService/SubmitTab'
import TrackTab from '@/components/selfService/TrackTab'
import ChatTab from '@/components/selfService/ChatTab'
import { FiEdit, FiClock, FiMessageCircle } from 'react-icons/fi'

const SelfServicePage = () => {
    const [activeTab, setActiveTab] = useState('submit');

    const tabs = [
        { id: 'submit', label: 'Submit', icon: <FiEdit size={16} /> },
        { id: 'track', label: 'Track', icon: <FiClock size={16} /> },
        { id: 'chat', label: 'Chat', icon: <FiMessageCircle size={16} /> }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'submit':
                return <SubmitTab />;
            case 'track':
                return <TrackTab />;
            case 'chat':
                return <ChatTab />;
            default:
                return <SubmitTab />;
        }
    }

    return (
        <DuplicateLayout>
            <PageHeader
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/' },
                    { label: 'Service Hub', active: true }
                ]}
                title="Service Hub"
            />
            <div className='main-content'>
                <div className="row">
                    <div className="col-12">
                        <div className="mb-4">
                            <p className="text-muted">Submit requests, track progress, and get instant support</p>
                        </div>

                        {/* Tab Navigation */}
                        <ul className="nav nav-tabs mb-4" role="tablist">
                            {tabs.map((tab) => (
                                <li className="nav-item" key={tab.id}>
                                    <button
                                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                        type="button"
                                    >
                                        <span className="me-2">{tab.icon}</span>
                                        {tab.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Tab Content */}
                        <div className="tab-content">
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </div>
        </DuplicateLayout>
    )
}

export default SelfServicePage