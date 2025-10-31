import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import SiteOverviewStatistics from '@/components/widgetsStatistics/SiteOverviewStatistics'
import PaymentRecordChart from '@/components/widgetsCharts/PaymentRecordChart'
import LeadsOverviewChart from '@/components/widgetsCharts/LeadsOverviewChart'
import TasksOverviewChart from '@/components/widgetsCharts/TasksOverviewChart'
import Project from '@/components/widgetsList/Project'
import Schedule from '@/components/widgetsList/Schedule'
import SalesMiscellaneous from '@/components/widgetsMiscellaneous/SalesMiscellaneous'
import LatestLeads from '@/components/widgetsTables/LatestLeads'
import TeamProgress from '@/components/widgetsList/Progress'
import { projectsDataTwo } from '@/utils/fackData/projectsDataTwo'
import DuplicateLayout from './duplicateLayout'
import TimeStatistics from '@/components/widgetsStatistics/TimeStatistics'
import ProjectReportChart from '@/components/widgetsCharts/ProjectReportChart'
import TopCountryChart from '@/components/widgetsCharts/TopCountryChart'
import RecentOrders from '@/components/widgetsList/RecentOrders'
import ActiveAlerts from '@/components/widgetsList/ActiveAlerts'
import QuickActions from '@/components/widgetsList/QuickActions'
import FleetPerformanceMetrics from '@/components/widgetsStatistics/FleetPerformanceMetrics'
import WelcomeCard from '@/components/shared/WelcomeCard'

const Home = () => {
  return (
    <DuplicateLayout>
      <PageHeader />
      <div className='main-content'>
      <WelcomeCard />
        <div className='row'>
          <TimeStatistics />
          <ProjectReportChart />
          <TopCountryChart />
          <RecentOrders />
          <ActiveAlerts />
          <QuickActions />
          <FleetPerformanceMetrics />
        </div>
      </div>
    </DuplicateLayout>
  )
}

export default Home