'use client'
import React, { useState } from 'react'
import { FiSearch, FiGrid, FiList, FiRefreshCw } from 'react-icons/fi'

const FleetSearchFilter = ({ totalMachines, viewMode, setViewMode }) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row g-3 align-items-center">
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0">
                                <FiSearch size={16} className="text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0 ps-0"
                                placeholder="Search machines, serial numbers, locations..."
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-2">
                        <select className="form-select">
                            <option value="">All Status</option>
                            <option value="operational">Operational</option>
                            <option value="warning">Warning</option>
                            <option value="critical">Critical</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="offline">Offline</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-2">
                        <select className="form-select">
                            <option value="">All Types</option>
                            <option value="excavator">Excavator</option>
                            <option value="loader">Wheel Loader</option>
                            <option value="truck">Articulated Truck</option>
                            <option value="bulldozer">Bulldozer</option>
                            <option value="grader">Motor Grader</option>
                        </select>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-end align-items-center gap-2">
                            <div className="btn-group" role="group">
                                <button
                                    type="button"
                                    className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-light'}`}
                                    onClick={() => setViewMode('grid')}
                                >
                                    <FiGrid size={16} />
                                </button>
                                <button
                                    type="button"
                                    className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-light'}`}
                                    onClick={() => setViewMode('list')}
                                >
                                    <FiList size={16} />
                                </button>
                            </div>
                            
                            <button className="btn btn-light">
                                <FiRefreshCw size={16} className="me-2" />
                                Flip Cards
                            </button>
                            
                            <span className="text-muted fs-13">
                                {totalMachines} of {totalMachines} machines
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FleetSearchFilter;