import React from 'react'
import DuplicateLayout from '../duplicateLayout'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import LoyaltyHeader from '@/components/torqueClub/LoyaltyHeader'
import MembershipTiers from '@/components/torqueClub/MembershipTiers'
import AvailableRewards from '@/components/torqueClub/AvailableRewards'
import ActiveChallenges from '@/components/torqueClub/ActiveChallenges'
import RecentPointsActivity from '@/components/torqueClub/RecentPointsActivity'

const TorqueClubPage = () => {
  return (
    <DuplicateLayout>
      <PageHeader/>
      <div className='main-content'>
        <div className='row'>
          {/* Loyalty Header */}
          <LoyaltyHeader />
          
          {/* Membership Tiers */}
          <MembershipTiers />
          
          {/* Two Column Layout */}
          <AvailableRewards />
          <ActiveChallenges />
          
          {/* Recent Points Activity */}
          <RecentPointsActivity />
        </div>
      </div>
    </DuplicateLayout>
  )
}

export default TorqueClubPage