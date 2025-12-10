'use client'
import React, { Fragment } from 'react'
import CardHeader from '@/components/shared/CardHeader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'
import { FiDollarSign, FiLink2 } from 'react-icons/fi'
import { topCountryClickChartOptions } from '@/utils/chartsLogic/topCountryClickChartOption'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })


const countryStatsData = [
    { country: 'Parts', clicks: 'R18,500', flag: "" },
    { country: 'Service', clicks: 'R15,200', flag: "" },
    { country: 'Rentals', clicks: 'R14,692', flag: "" },
];

const TopCountryChart = ({ title = "Revenue Breakdown" }) => {
    const chartOptions = topCountryClickChartOptions()
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-4">
            <div className={`card stretch stretch-full leads-overview ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                {/* <CardHeader title={"Top Country"} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} /> */}
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md me-2">
                            <FiDollarSign size={14} />
                        </div>
                        <h5 className="card-title mb-0">{title}</h5>
                    </div>
                    <div className="card-header-action">
                        <div className="card-header-btn">
                            <div data-toggle="tooltip" data-title="Delete" onClick={handleDelete}>
                                <span className="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"></span>
                            </div>
                            <div data-toggle="tooltip" data-title="Refresh" onClick={handleRefresh}>
                                <span className="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"></span>
                            </div>
                            <div data-toggle="tooltip" data-title="Maximize/Minimize" onClick={handleExpand}>
                                <span className="avatar-text avatar-xs bg-success" data-bs-toggle="expand"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center" >
                        <ReactApexChart
                        type='donut'
                            options={chartOptions}
                            series={chartOptions.series}
                            width={340}
                        />
                    </div>
                    {countryStatsData.map(({ clicks, country, flag }, index) => (
                        <Fragment key={index}>
                            <hr className="border-dashed mt-1 mb-3" />
                            <div className="hstack justify-content-between">
                                <div className="hstack">
                                    {/* <div className="me-3" >
                                        <img src={flag} alt='img' className='w-full rounded-0' style={{ height: "15px", width: "20px" }} />
                                    </div> */}
                                    <a href="#">
                                        <span>{country}</span>
                                        {/* <FiLink2 className='fs-11 ms-1' /> */}
                                    </a>
                                </div>
                                <div className="fs-11 fw-medium text-uppercase text-muted">{clicks} Clicks</div>
                            </div>
                        </Fragment>
                    ))}
                </div>


                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default TopCountryChart
