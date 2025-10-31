import React from 'react'
import DuplicateLayout from '../duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import CompanyInformation from '@/components/company/CompanyInformation'
import RegisteredAddresses from '@/components/company/RegisteredAddresses'

const CompanyProfile = () => {
  return (
    <DuplicateLayout>
      <PageHeader>
        <PageHeaderDate />
      </PageHeader>

      <div className='main-content'>
        <div className='row'>
          <CompanyInformation />
          <RegisteredAddresses />
        </div>
      </div>
    </DuplicateLayout>
  )
}

export default CompanyProfile