'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { pccOrdersData } from '@/utils/fackData/pccOrdersData'
import { FiRefreshCw, FiDownload, FiEye, FiMoreHorizontal, FiMapPin } from 'react-icons/fi'

const OrdersTable = () => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { orders } = pccOrdersData;

    if (isRemoved) {
        return null;
    }

    const ActionButton = ({ type, onClick }) => {
        const icons = {
            refresh: <FiRefreshCw size={14} />,
            download: <FiDownload size={14} />,
            view: <FiEye size={14} />,
            more: <FiMoreHorizontal size={14} />
        }

        return (
            <button 
                className="btn btn-light btn-sm me-1"
                onClick={onClick}
                title={type}
            >
                {icons[type]}
            </button>
        )
    }

    return (
        <div className="col-12">
            <div className={`card ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th className="border-0 ps-4">Order</th>
                                    <th className="border-0">Customer</th>
                                    <th className="border-0">Items</th>
                                    <th className="border-0">Type</th>
                                    <th className="border-0">Status</th>
                                    <th className="border-0">Amount</th>
                                    <th className="border-0">Date</th>
                                    <th className="border-0">Location</th>
                                    <th className="border-0 pe-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        {/* Order Column */}
                                        <td className="ps-4">
                                            <div>
                                                <div className="fw-semibold mb-1">{order.id}</div>
                                                <span className={`badge bg-soft-${order.priorityColor} text-${order.priorityColor} fs-11`}>
                                                    {order.priority}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Customer Column */}
                                        <td>
                                            <div>
                                                <div className="fw-medium mb-1">{order.customer}</div>
                                                <div className="d-flex align-items-center text-muted fs-12">
                                                    <FiMapPin size={12} className="me-1" />
                                                    {order.location}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Items Column */}
                                        <td>
                                            <div>
                                                {order.items.map((item, index) => (
                                                    <div key={index} className={`${index === 0 ? 'fw-medium' : 'text-muted fs-12'}`}>
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </td>

                                        {/* Type Column */}
                                        <td>
                                            <span className={`badge bg-soft-${order.typeColor} text-${order.typeColor}`}>
                                                {order.type}
                                            </span>
                                        </td>

                                        {/* Status Column */}
                                        <td>
                                            {order.status ? (
                                                <span className={`badge bg-soft-${order.statusColor} text-${order.statusColor}`}>
                                                    {order.status}
                                                </span>
                                            ) : (
                                                <span className="text-muted">-</span>
                                            )}
                                        </td>

                                        {/* Amount Column */}
                                        <td>
                                            <div>
                                                <div className="fw-bold text-dark mb-1">
                                                    R{order.amount.toLocaleString()}
                                                </div>
                                                <span className={`badge bg-soft-${order.paymentColor} text-${order.paymentColor} fs-11`}>
                                                    {order.paymentStatus}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Date Column */}
                                        <td>
                                            <div>
                                                <div className="mb-1">{order.date}</div>
                                                {order.deliveryDate && (
                                                    <div className="text-muted fs-12">{order.deliveryDate}</div>
                                                )}
                                            </div>
                                        </td>

                                        {/* Location Column */}
                                        <td>
                                            <span className="text-muted">{order.location}</span>
                                        </td>

                                        {/* Actions Column */}
                                        <td className="pe-4">
                                            <div className="d-flex align-items-center">
                                                {order.actions.map((action, index) => (
                                                    <ActionButton 
                                                        key={index}
                                                        type={action}
                                                        onClick={() => console.log(`${action} clicked for order ${order.id}`)}
                                                    />
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default OrdersTable