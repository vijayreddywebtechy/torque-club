'use client'
import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { documentsData } from '@/utils/fackData/documentsData'
import { FiFileText, FiEye, FiDownload, FiUser, FiCalendar, FiAlertTriangle } from 'react-icons/fi'

const DocumentGrid = () => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const { documents } = documentsData;

    if (isRemoved) {
        return null;
    }

    return (
        <>
            {documents.map((document) => (
                <div key={document.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className={`card ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                        <div className="card-body">
                            {/* Document Header */}
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div className="avatar-text avatar-lg bg-soft-danger text-danger">
                                    <FiFileText size={24} />
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span className={`badge bg-soft-${document.categoryColor} text-${document.categoryColor} fs-11`}>
                                        {document.category}
                                    </span>
                                    <span className={`badge bg-soft-${document.statusColor} text-${document.statusColor} fs-11`}>
                                        {document.isExpired && document.status === 'Verified' ? (
                                            <>
                                                <FiAlertTriangle size={10} className="me-1" />
                                                Verified
                                            </>
                                        ) : (
                                            document.status
                                        )}
                                    </span>
                                </div>
                            </div>

                            {/* Document Info */}
                            <div className="mb-3">
                                <h6 className="fw-bold mb-1">{document.name}</h6>
                                <div className="fs-12 text-muted mb-2">{document.size}</div>
                                <p className="text-muted fs-13 mb-2">{document.description}</p>
                            </div>

                            {/* Document Details */}
                            <div className="mb-3">
                                <div className="d-flex align-items-center text-muted fs-12 mb-1">
                                    <FiCalendar size={12} className="me-1" />
                                    <span className="me-2">Uploaded:</span>
                                    <span>{document.uploadedDate}</span>
                                </div>
                                <div className="d-flex align-items-center text-muted fs-12 mb-1">
                                    <FiUser size={12} className="me-1" />
                                    <span className="me-2">By:</span>
                                    <span>{document.uploadedBy}</span>
                                </div>
                                {document.expiryDate && (
                                    <div className="d-flex align-items-center fs-12 mb-1">
                                        <FiAlertTriangle size={12} className="me-1" />
                                        <span className="me-2">Expires:</span>
                                        <span className={`${document.isExpired ? 'text-danger' : 'text-muted'}`}>
                                            {document.expiryDate} {document.isExpired && '(Expired)'}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Version */}
                            <div className="mb-3">
                                <span className="fs-12 text-muted">{document.version}</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="d-flex gap-2">
                                <button className="btn btn-light btn-lg flex-fill d-flex align-items-center justify-content-center">
                                    <FiEye size={14} className="me-1" />
                                    Preview
                                </button>
                                <button className="btn btn-light btn-sm">
                                    <FiDownload size={14} />
                                </button>
                            </div>
                        </div>
                        
                        <CardLoader refreshKey={refreshKey} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default DocumentGrid