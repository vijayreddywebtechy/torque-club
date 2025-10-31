'use client'
import React from 'react'
import { pccOrdersData } from '@/utils/fackData/pccOrdersData'
import { FiShoppingBag, FiDollarSign, FiTruck, FiClock } from 'react-icons/fi'

const OrdersSummary = () => {
    // Calculate summary data from orders
    const orders = pccOrdersData.orders;
    const totalOrders = orders.length;
    const totalValue = orders.reduce((sum, order) => sum + order.amount, 0);
    const deliveredCount = orders.filter(order => order.deliveryDate && order.deliveryDate.includes('Delivered')).length;
    const processingCount = orders.filter(order => 
        order.status === 'In Transit' || 
        order.paymentStatus === 'Pending' || 
        order.status === 'Delayed'
    ).length;

    const summaryCards = [
        {
            title: "Total Orders",
            value: totalOrders,
            icon: <FiShoppingBag />,
            bgColor: "bg-soft-primary",
            textColor: "text-primary"
        },
        {
            title: "Total Value",
            value: `R${totalValue.toLocaleString()}`,
            icon: <FiDollarSign />,
            bgColor: "bg-soft-success",
            textColor: "text-success"
        },
        {
            title: "Delivered",
            value: deliveredCount,
            icon: <FiTruck />,
            bgColor: "bg-soft-info",
            textColor: "text-info"
        },
        {
            title: "Processing",
            value: processingCount,
            icon: <FiClock />,
            bgColor: "bg-soft-warning",
            textColor: "text-warning"
        }
    ];

    return (
        <>
            {summaryCards.map((card, index) => (
                <div key={index} className="col-xxl-3 col-lg-6 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            <div className="flex-grow-1">
                                <h6 className="text-muted fw-medium mb-2">{card.title}</h6>
                                <div className="fs-24 fw-bold text-dark">{card.value}</div>
                            </div>
                            <div className={`avatar-text avatar-lg ${card.bgColor} ${card.textColor} ms-3`}>
                                {card.icon}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default OrdersSummary