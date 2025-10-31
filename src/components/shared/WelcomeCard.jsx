'use client'
import React from 'react'

const WelcomeCard = () => {
    const today = new Date();
    const options = { weekday: 'long' };
    const dayName = today.toLocaleDateString('en-US', options);
    const dateString = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h3 className="mb-2 d-flex align-items-center">
                            Welcome back, John
                            <span className="badge bg-success text-white ms-2 fs-11 d-inline-flex align-items-center">
                                <span className="badge-dot bg-white me-1"></span>
                                Online
                            </span>
                        </h3>
                        <p className="text-muted mb-0">Here's your fleet overview for today</p>
                    </div>
                    <div className="text-end">
                        <div className="text-muted fs-12">Today</div>
                        <h5 className="mb-0">{dateString}</h5>
                        <div className="text-muted fs-12">{dayName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeCard
