import React from 'react'
import DuplicateLayout from '../duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import DocumentUploadArea from '@/components/documents/DocumentUploadArea'
import DocumentSearchFilter from '@/components/documents/DocumentSearchFilter'
import DocumentGrid from '@/components/documents/DocumentGrid'
import { FiShield, FiLock } from 'react-icons/fi'

const DocumentsPage = () => {
  return (
    <DuplicateLayout>
      <PageHeader
        title="Document Vault"
        description="Secure document storage with compliance tracking"
        icon={<FiShield size={24} />}
      >
        <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
          <div className="d-flex align-items-center bg-soft-success text-success px-3 py-2 rounded">
            <FiLock size={14} className="me-2" />
            <span className="fs-12 fw-medium">256-bit Encrypted</span>
          </div>
        </div>
      </PageHeader>

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