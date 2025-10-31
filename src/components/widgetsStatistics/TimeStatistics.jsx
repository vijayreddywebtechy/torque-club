import React from 'react'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

const data = [
    {
        id: 1,
        title: "Active Machines",
        total: {
            count: 24,
            counttext: "Currently online"
        },
        progress: 2,
        trendText: "This month"
    },

    {
        id: 2,
        title: "Total Orders",
        total: {
            count: 12,
            counttext: "Total orders"
        },
        progress: 23,
        trendText: "from last month"
    },
    {
        id: 3,
        title: "Revenue",
        total: {
            count: 35,
            counttext: "Total revenue"
        },
        progress: 43,
        trendText: "from last month"
    },
    {
        id: 4,
        title: "Fleet Uptime",
        total: {
            count: 10,
            counttext: "Total uptime"
        },
        progress: 20,
        trendText: "improvement"
    },

]
const TimeStatistics = () => {
    return (
        <>
            {
                data.map(({ id, progress, total, title, trendText }) => {
                    // const isTrendUp = trendText.startsWith("Up")
                    const isTrendUp = progress >= 0;
                    return (
                        <div key={id} className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full time-sheet-card">
                                <div className="card-body">
                                    <p className="fs-11 fw-semibold text-uppercase text-muted">{title}</p>
                                    <h4>
                                        <span className="counter">{total.count}</span>
                                        <p className="fs-13 fw-semibold text-truncate-1-line">{total.counttext}</p>
                                    </h4>
                                    <div className="hstack gap-2 mt-3">
                                        <span className={`fs-11 badge bg-gray-100 ${isTrendUp ? "text-success" : "text-danger"}`}>
                                            <i className="fs-12 me-1">
                                                {
                                                    isTrendUp ?
                                                        <FiTrendingUp />
                                                        :
                                                        <FiTrendingDown />
                                                }
                                            </i>
                                            <span>{progress}%</span>
                                        </span>
                                        <span className="fs-11 text-muted">{trendText}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TimeStatistics