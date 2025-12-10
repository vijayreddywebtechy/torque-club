'use client'
import React from 'react'
import { FiNavigation, FiRefreshCw } from 'react-icons/fi'
import { fleetStatusSummary } from '@/utils/fackData/fleetMachinesData'

const FleetLocationMap = ({ machines }) => {
    return (
        <div className="col-xxl-4 col-lg-5">
            <div className="card stretch stretch-full">
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2">
                            <FiNavigation />
                        </div>
                        <h5 className="card-title mb-0">Fleet Location Map</h5>
                    </div>
                    <div className="card-header-action">
                        <button className="btn btn-sm btn-light">
                            <FiRefreshCw size={14} className="me-1" />
                            Refresh
                        </button>
                    </div>
                </div>
                
                <div className="card-body">
                    {/* Status Legend */}
                    <div className="d-flex flex-wrap gap-3 mb-3">
                        <div className="d-flex align-items-center">
                            <span className="badge badge-dot bg-success me-1"></span>
                            <span className="fs-11 text-muted">Operational ({fleetStatusSummary.operational})</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge badge-dot bg-warning me-1"></span>
                            <span className="fs-11 text-muted">Warning ({fleetStatusSummary.warning})</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge badge-dot bg-danger me-1"></span>
                            <span className="fs-11 text-muted">Critical ({fleetStatusSummary.critical})</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge badge-dot bg-primary me-1"></span>
                            <span className="fs-11 text-muted">Maintenance ({fleetStatusSummary.maintenance})</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge badge-dot bg-secondary me-1"></span>
                            <span className="fs-11 text-muted">Offline ({fleetStatusSummary.offline})</span>
                        </div>
                    </div>
                    
                    {/* Map Container */}
                    <div className="position-relative bg-light rounded" style={{ height: '500px' }}>
                        <div className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-2">
                            <button className="btn btn-light btn-sm" style={{ width: '32px', height: '32px' }}>+</button>
                            <button className="btn btn-light btn-sm" style={{ width: '32px', height: '32px' }}>-</button>
                        </div>
                        
                        {/* Simulated Map with Markers */}
                        <div className="w-100 h-100 position-relative overflow-hidden rounded">
                            {/* Background grid pattern */}
                            <div 
                                className="w-100 h-100" 
                                style={{ 
                                    backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
                                    backgroundSize: '20px 20px',
                                    backgroundColor: '#f9fafb'
                                }}
                            >
                                {/* Machine Markers */}
                                {machines.map((machine, index) => {
                                    const positions = [
                                        { top: '15%', left: '25%' }, // Operational
                                        { top: '35%', left: '60%' }, // Warning
                                        { top: '55%', left: '75%' }, // Critical
                                        { top: '70%', left: '40%' }, // Maintenance
                                        { top: '25%', left: '70%' }, // Operational
                                        { top: '80%', left: '55%' }  // Offline
                                    ];
                                    
                                    const getMarkerColor = (status) => {
                                        switch(status) {
                                            case 'operational': return 'success';
                                            case 'warning': return 'warning';
                                            case 'critical': return 'danger';
                                            case 'maintenance': return 'primary';
                                            case 'offline': return 'secondary';
                                            default: return 'secondary';
                                        }
                                    };
                                    
                                    return (
                                        <div
                                            key={machine.id}
                                            className="position-absolute"
                                            style={{
                                                top: positions[index].top,
                                                left: positions[index].left,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            <div 
                                                className={`rounded-circle bg-${getMarkerColor(machine.status)} d-flex align-items-center justify-content-center text-white fw-bold shadow`}
                                                style={{ 
                                                    width: '40px', 
                                                    height: '40px',
                                                    cursor: 'pointer',
                                                    border: '3px solid white'
                                                }}
                                                title={machine.name}
                                            >
                                                <FiNavigation size={20} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FleetLocationMap;