'use client'
import React from 'react'
import { FiMapPin, FiEye, FiSettings, FiAlertCircle } from 'react-icons/fi'

const FleetMachineListView = ({ machines }) => {
    const getStatusBadge = (status, alertCount) => {
        switch(status) {
            case 'operational':
                return <span className="badge bg-success text-white fs-11">● Operational</span>;
            case 'warning':
                return (
                    <div className="d-flex gap-2 align-items-center">
                        <span className="badge bg-warning text-white fs-11">● Warning</span>
                        <span className="badge bg-danger text-white fs-11">{alertCount} Alerts</span>
                    </div>
                );
            case 'critical':
                return (
                    <div className="d-flex gap-2 align-items-center">
                        <span className="badge bg-danger text-white fs-11">● Critical</span>
                        <span className="badge bg-danger text-white fs-11">{alertCount} Alerts</span>
                    </div>
                );
            case 'maintenance':
                return <span className="badge bg-primary text-white fs-11">● Maintenance</span>;
            case 'offline':
                return <span className="badge bg-secondary text-white fs-11">● Offline</span>;
            default:
                return null;
        }
    };

    const getHealthScoreColor = (score) => {
        if (score >= 80) return 'var(--bs-success, #28a745)';
        if (score >= 60) return 'var(--bs-warning, #ffc107)';
        if (score > 0) return 'var(--bs-danger, #dc3545)';
        return 'var(--bs-secondary, #6c757d)';
    };

    return (
        <div className="card">
            <div className="card-body p-0">
                {machines.map((machine, index) => (
                    <div 
                        key={machine.id}
                        className="d-flex align-items-center p-3 border-bottom text-body"
                        style={{
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {/* Machine Image */}
                        <div className="me-3" style={{ minWidth: '80px' }}>
                            <img 
                                src={machine.image} 
                                alt={machine.name}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    objectFit: 'cover',
                                    borderRadius: '6px'
                                }}
                            />
                        </div>

                        {/* Machine Info */}
                        <div className="flex-grow-1 me-3">
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <h6 className="mb-0 fw-semibold" style={{ color: 'var(--bs-body-color)' }}>
                                    {machine.name}
                                </h6>
                                {getStatusBadge(machine.status, machine.alertCount)}
                            </div>
                            
                            <div className="row g-2 fs-12">
                                <div className="col-auto">
                                    <span className="text-muted">S/N:</span>
                                    <span className="ms-1 fw-semibold text-body">
                                        {machine.serialNumber}
                                    </span>
                                </div>
                                <div className="col-auto">
                                    <span className="text-muted">
                                        <FiMapPin size={12} className="me-1" />
                                        {machine.location}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Health & Stats */}
                        <div className="me-4" style={{ minWidth: '280px' }}>
                            <div className="d-flex align-items-center gap-4 justify-content-between">
                                {/* Health Score */}
                                <div className="text-center">
                                    <div className="fs-11 text-muted">Health</div>
                                    <div 
                                        className="fw-bold fs-13"
                                        style={{ color: getHealthScoreColor(machine.healthScore) }}
                                    >
                                        {machine.healthScore}%
                                    </div>
                                </div>

                                {/* Fuel */}
                                <div className="text-center">
                                    <div className="fs-11 text-muted">Fuel</div>
                                    <div 
                                        className="fw-bold fs-13"
                                        style={{ 
                                            color: machine.fuel >= 70 ? 'var(--bs-success, #28a745)' : 
                                                   machine.fuel >= 30 ? 'var(--bs-warning, #ffc107)' : 'var(--bs-danger, #dc3545)'
                                        }}
                                    >
                                        {machine.fuel}%
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="text-center">
                                    <div className="fs-11 text-muted">Hours</div>
                                    <div className="fw-bold fs-13 text-body">
                                        {machine.hours}
                                    </div>
                                </div>

                                {/* Utilization */}
                                <div className="text-center">
                                    <div className="fs-11 text-muted">Util.</div>
                                    <div 
                                        className="fw-bold fs-13"
                                        style={{ 
                                            color: machine.utilization >= 70 ? 'var(--bs-success, #28a745)' : 
                                                   machine.utilization >= 50 ? 'var(--bs-warning, #ffc107)' : 'var(--bs-danger, #dc3545)'
                                        }}
                                    >
                                        {machine.utilization}%
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="d-flex gap-2">
                            <button 
                                className="btn btn-sm d-flex align-items-center justify-content-center"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    padding: '0',
                                    backgroundColor: 'var(--bs-secondary-bg)',
                                    border: '1px solid var(--bs-border-color)',
                                    color: 'var(--bs-body-color)',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#fdba12';
                                    e.target.style.color = '#1a1a1a';
                                    e.target.style.borderColor = '#fdba12';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'var(--bs-secondary-bg)';
                                    e.target.style.color = 'var(--bs-body-color)';
                                    e.target.style.borderColor = 'var(--bs-border-color)';
                                }}
                            >
                                <FiEye size={16} />
                            </button>
                            <button 
                                className="btn btn-sm d-flex align-items-center justify-content-center"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    padding: '0',
                                    backgroundColor: 'var(--bs-secondary-bg)',
                                    border: '1px solid var(--bs-border-color)',
                                    color: 'var(--bs-body-color)',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#fdba12';
                                    e.target.style.color = '#1a1a1a';
                                    e.target.style.borderColor = '#fdba12';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'var(--bs-secondary-bg)';
                                    e.target.style.color = 'var(--bs-body-color)';
                                    e.target.style.borderColor = 'var(--bs-border-color)';
                                }}
                            >
                                <FiMapPin size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FleetMachineListView;
