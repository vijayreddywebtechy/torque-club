import React from 'react'
import DuplicateLayout from '../duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import OrdersSearchFilter from '@/components/pccOrders/OrdersSearchFilter'
import OrdersTable from '@/components/pccOrders/OrdersTable'
import OrdersSummary from '@/components/pccOrders/OrdersSummary'
import { pccOrdersData } from '@/utils/fackData/pccOrdersData'
import { FiShoppingBag } from 'react-icons/fi'

const PccOrdersPage = () => {
  return (
    <DuplicateLayout>
      <div className="page-header">
        <div className="page-header-left d-flex align-items-center">
          <div className="page-header-title">
            <div className="d-flex align-items-center py-2">
              <div className="avatar-text avatar-lg me-3">
                <FiShoppingBag size={24} />
              </div>
              <div>
                <h5 className="mb-1">Transactions & Orders</h5>
                <p className="fs-13 text-muted mb-0">Manage orders, track shipments, and view transaction history</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='main-content'>
        <div className='row'>
          {/* Search and Filter */}
          <OrdersSearchFilter totalOrders={pccOrdersData.summary.displayText} />
          
          {/* Orders Table */}
          <OrdersTable />
          
          {/* Orders Summary Cards */}
          <OrdersSummary />
        </div>
      </div>
    </DuplicateLayout>
  )
}

export default PccOrdersPage