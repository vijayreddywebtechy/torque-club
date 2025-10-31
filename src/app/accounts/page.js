import React from 'react'
import DuplicateLayout from '../duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import AccountsOverviewSummary from '@/components/accounts/AccountsOverviewSummary'
import AccountsTabbedView from '@/components/accounts/AccountsTabbedView'

const AccountsPage = () => {
  return (
    <DuplicateLayout>
      <PageHeader>
        <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
          <button className="btn btn-light-brand">
            <i className="feather-refresh-cw me-2"></i>
            Refresh Data
          </button>
          {/* <PageHeaderDate /> */}
        </div>
      </PageHeader>

      <div className='main-content'>
        <div className='row'>
          <AccountsOverviewSummary />
          {/* Accounts Overview Summary Cards */}
          
          {/* Tabbed Content Area */}
          <AccountsTabbedView />
        </div>
      </div>
    </DuplicateLayout>
  )
}

export default AccountsPage