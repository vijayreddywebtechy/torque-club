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
                        <div className="d-flex flex-wrap mb-4 border p-2 gap-2">
                            {tabs.map((tab) => (
                                <div className="flex-grow-1 flex-sm-grow-0" key={tab.id} style={{ minWidth: '120px' }}>
                                    <button
                                        className={`btn btn-md w-100 text-black border ${activeTab === tab.id ? 'bg-primary border-primary' : 'text-black'}`}
                                        onClick={() => setActiveTab(tab.id)}
                                        type="button"
                                    >
                                        <span className="me-2 d-none d-sm-inline">{tab.icon}</span>
                                        <span className="d-inline d-sm-none">{tab.icon}</span>
                                        <span className="d-none d-sm-inline">{tab.label}</span>
                                        <span className="d-inline d-sm-none fs-12">{tab.label}</span>
                                    </button>
                                </div>
                            ))}
                        </div>

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