'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import CardHeader from '@/components/shared/CardHeader'
import { projectStatisticsChartOption } from '@/utils/chartsLogic/projectStatisticsChartOption'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { FiBarChart } from 'react-icons/fi'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ProjectReportChart = ({ title = "Fleet Performance Analytics" }) => {
    const chartOptions = projectStatisticsChartOption()
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-8">
            <div className={`card stretch stretch-full leads-overview ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                {/* <CardHeader title={"Fleet Performance Analytics"} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand}/> */}
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-sm me-2">
                            <FiBarChart />
                        </div>
                        <h5 className="card-title mb-0">{title}</h5>
                    </div>
                    <button className="btn btn-md btn-light-brand">Export Data</button>
                </div>
                <div className="card-body custom-card-action">
                    <ReactApexChart
                        type='area'
                        options={chartOptions}
                        series={chartOptions?.series}
                        height={365}
                    />
                </div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default ProjectReportChart