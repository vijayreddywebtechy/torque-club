'use client'
import React, { useState } from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import FleetSearchFilter from '@/components/visionlink/FleetSearchFilter'
import FleetMachineCard from '@/components/visionlink/FleetMachineCard'
import FleetMachineListView from '@/components/visionlink/FleetMachineListView'
import FleetLocationMap from '@/components/visionlink/FleetLocationMap'
import { fleetMachinesData } from '@/utils/fackData/fleetMachinesData'

const VisionLinkPage = () => {
    const [viewMode, setViewMode] = useState('grid');

    return (
        <>
            <PageHeader
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/' },
                    { label: 'VisionLink', active: true }
                ]}
                title="VisionLink"
            />

            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <FleetSearchFilter 
                            totalMachines={fleetMachinesData.length} 
                            viewMode={viewMode}
                            setViewMode={setViewMode}
                        />
                    </div>
                </div>

                {viewMode === 'grid' ? (
                    <div className="row">
                        {/* Machine Cards */}
                        <div className="col-xxl-8 col-lg-7">
                            <div className="row">
                                {fleetMachinesData.map((machine) => (
                                    <FleetMachineCard key={machine.id} machine={machine} />
                                ))}
                            </div>
                        </div>

                        {/* Location Map */}
                        <FleetLocationMap machines={fleetMachinesData} />
                    </div>
                ) : (
                    <div className="row">
                        {/* Machine List View */}
                        <div className="col-xxl-8 col-lg-7">
                            <FleetMachineListView machines={fleetMachinesData} />
                        </div>

                        {/* Location Map */}
                        <FleetLocationMap machines={fleetMachinesData} />
                    </div>
                )}
            </div>
        </>
    )
}

export default VisionLinkPage