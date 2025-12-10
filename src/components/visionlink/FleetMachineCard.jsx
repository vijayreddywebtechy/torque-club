'use client'
import React from 'react'
import { FiMapPin, FiClock, FiEye, FiSettings } from 'react-icons/fi'

const FleetMachineCard = ({ machine }) => {
    const getStatusBadge = (status, alerts, warningCount, alertCount) => {
        if (status === 'operational') {
            return <span className="badge bg-success text-white fs-11">● Operational</span>;
        }
        if (status === 'warning') {
            return (
                <div className="d-flex gap-2">
                    <span className="badge bg-warning text-white fs-11">● Warning</span>
                    <span className="badge bg-danger text-white fs-11">{alertCount} Alerts</span>
                </div>
            );
        }
        if (status === 'critical') {
            return (
                <div className="d-flex gap-2">
                    <span className="badge bg-danger text-white fs-11">● Critical</span>
                    <span className="badge bg-danger text-white fs-11">{alertCount} Alerts</span>
                </div>
            );
        }
        if (status === 'maintenance') {
            return <span className="badge bg-primary text-white fs-11">● Maintenance</span>;
        }
        if (status === 'offline') {
            return <span className="badge bg-secondary text-white fs-11">● Offline</span>;
        }
    };

    const getHealthScoreColor = (score) => {
        if (score >= 80) return 'success';
        if (score >= 60) return 'warning';
        if (score > 0) return 'danger';
        return 'secondary';
    };

    return (
        <div className="col-xxl-4 col-lg-6">
            <div className="card">
                <div className="position-relative">
                    <img 
                        src={machine.image} 
                        alt={machine.name}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 p-3 w-100">
                        <div className="d-flex justify-content-between align-items-start">
                            {getStatusBadge(machine.status, machine.alerts, machine.warningCount, machine.alertCount)}
                            <button className="btn btn-light btn-sm rounded-circle p-2" style={{ width: '40px', height: '40px' }}>
                                <FiMapPin size={24} />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="card-body">
                    <h5 className="card-title mb-1">{machine.name}</h5>
                    <p className="text-muted fs-13 mb-3">S/N: {machine.serialNumber}</p>
                    
                    <div className="mb-3">
                        <div className="d-flex align-items-center text-muted fs-13 mb-2">
                            <FiMapPin size={14} className="me-2" />
                            {machine.location}
                        </div>
                        <div className="d-flex align-items-center text-muted fs-13">
                            <FiClock size={14} className="me-2" />
                            Last comm: {machine.lastComm}
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="fs-13 fw-semibold">Health Score</span>
                            <span className={`badge bg-soft-${getHealthScoreColor(machine.healthScore)} text-${getHealthScoreColor(machine.healthScore)}`}>
                                {machine.healthScore}%
                            </span>
                        </div>
                        
                        <div className="row g-2 text-center">
                            <div className="col-4">
                                <div className="fs-11 text-muted mb-1">Utilization</div>
                                <div className={`fw-bold ${machine.utilization >= 70 ? 'text-success' : machine.utilization >= 50 ? 'text-warning' : 'text-danger'}`}>
                                    {machine.utilization}%
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="fs-11 text-muted mb-1">Fuel</div>
                                <div className={`fw-bold ${machine.fuel >= 70 ? 'text-success' : machine.fuel >= 30 ? 'text-warning' : 'text-danger'}`}>
                                    {machine.fuel}%
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="fs-11 text-muted mb-1">Hours</div>
                                <div className="fw-bold text-dark">{machine.hours}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-3 pb-3 border-bottom">
                        <div className="fs-11 text-muted">Operator: <span className="text-dark fw-semibold">{machine.operator}</span></div>
                    </div>
                    
                    <div className="d-flex gap-2">
                        <button className="btn btn-light flex-fill d-flex align-items-center justify-content-center">
                            <FiEye size={16} className="me-2" />
                            Details
                        </button>
                        <button className="btn btn-light flex-fill d-flex align-items-center justify-content-center">
                            <FiSettings size={16} className="me-2" />
                            Control
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FleetMachineCard;