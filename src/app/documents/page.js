import React from 'react'
import DuplicateLayout from '../duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import DocumentUploadArea from '@/components/documents/DocumentUploadArea'
import DocumentSearchFilter from '@/components/documents/DocumentSearchFilter'
import DocumentGrid from '@/components/documents/DocumentGrid'
import { FiShield, FiLock } from 'react-icons/fi'

const DocumentsPage = () => {
  return (
    <DuplicateLayout>
      <div className="page-header">
        <div className="page-header-left d-flex align-items-center">
          <div className="page-header-title">
            <div className="d-flex align-items-center">
              <div className="avatar-text avatar-md me-3">
                <FiShield />
              </div>
              <div>
                <h5 className="mb-1">Document Vault</h5>
                <p className="fs-13 text-muted mb-0">Secure document storage with compliance tracking</p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-header-right ms-auto">
          <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
            <div className="d-flex align-items-center bg-soft-success text-success px-3 py-2 rounded">
              <FiLock size={14} className="me-2" />
              <span className="fs-12 fw-medium">256-bit Encrypted</span>
            </div>
          </div>
        </div>
      </div>

      <div className='main-content'>
        <div className='row'>
          {/* Upload Area */}
          <DocumentUploadArea />
          
          {/* Search and Filter */}
          <DocumentSearchFilter />
          
          {/* Document Grid */}
          <DocumentGrid />
        </div>
      </div>
    </DuplicateLayout>
  )
}

export default DocumentsPage