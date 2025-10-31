'use client'
import React, { useState } from 'react'
import { FiUpload, FiFile } from 'react-icons/fi'

const DocumentUploadArea = () => {
    const [isDragOver, setIsDragOver] = useState(false)

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragOver(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDragOver(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragOver(false)
        // Handle file drop logic here
        console.log('Files dropped:', e.dataTransfer.files)
    }

    return (
        <div className="col-12 mb-4">
            <div className={`card border-dashed ${isDragOver ? 'border-primary bg-soft-primary' : 'border-secondary'}`}>
                <div 
                    className="card-body text-center py-5"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="avatar-text avatar-xl bg-soft-primary text-primary mx-auto mb-3">
                        <FiUpload size={32} />
                    </div>
                    <h5 className="mb-2">Drop files here or click to upload</h5>
                    <p className="text-muted mb-4">Supports PDF, DOC, JPG, PNG up to 10MB</p>
                    <button className="btn btn-light-brand d-flex align-items-center mx-auto">
                        <FiFile size={16} className="me-2" />
                        Choose Files
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DocumentUploadArea