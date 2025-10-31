'use client'
import React, { useState } from 'react'
import DuplicateLayout from '@/app/duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import FleetSearchFilter from '@/components/visionlink/FleetSearchFilter'
import FleetMachineCard from '@/components/visionlink/FleetMachineCard'
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
            </div>
        </>
    )
}

export default VisionLinkPage