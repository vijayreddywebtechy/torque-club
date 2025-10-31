export const torqueClubData = {
    member: {
        name: "John Doe",
        currentTier: "Gold Member",
        level: 3,
        currentPoints: 7250,
        pointsToNext: 2750,
        progressPercentage: 72.5
    },
    membershipTiers: [
        {
            id: 1,
            name: "Bronze",
            points: "0+ pts",
            icon: "medal",
            color: "warning",
            borderColor: "border-warning",
            active: false
        },
        {
            id: 2,
            name: "Silver",
            points: "2,500+ pts",
            icon: "star",
            color: "secondary",
            borderColor: "border-secondary",
            active: false
        },
        {
            id: 3,
            name: "Gold",
            points: "5,000+ pts",
            icon: "crown",
            color: "warning",
            borderColor: "border-warning",
            active: true
        },
        {
            id: 4,
            name: "Platinum",
            points: "10,000+ pts",
            icon: "shield",
            color: "secondary",
            borderColor: "border-secondary",
            active: false
        },
        {
            id: 5,
            name: "Diamond",
            points: "20,000+ pts",
            icon: "diamond",
            color: "secondary",
            borderColor: "border-secondary",
            active: false
        }
    ],
    availableRewards: [
        {
            id: 1,
            title: "Free Machine Inspection",
            description: "Complete 50-point inspection by certified technician",
            points: 500,
            category: "Service",
            categoryColor: "primary"
        },
        {
            id: 2,
            title: "20% Parts Discount",
            description: "One-time discount on any parts order up to R5,000",
            points: 1000,
            category: "Discount",
            categoryColor: "success"
        },
        {
            id: 3,
            title: "Priority Support Access",
            description: "30 days of priority technical support queue",
            points: 750,
            category: "Service",
            categoryColor: "primary"
        },
        {
            id: 4,
            title: "Extended Warranty",
            description: "6-month warranty extension for selected machines",
            points: 2000,
            category: "Warranty",
            categoryColor: "info"
        }
    ],
    activeChallenges: [
        {
            id: 1,
            title: "Monthly Spender",
            description: "Spend R50,000 on parts this month",
            points: 250,
            progress: 68,
            progressText: "68/100",
            dueDate: "2024-01-31",
            status: "In Progress"
        },
        {
            id: 2,
            title: "Service Champion",
            description: "Schedule 3 maintenance appointments",
            points: 150,
            progress: 67,
            progressText: "2/3",
            dueDate: "2024-01-25",
            status: "In Progress"
        },
        {
            id: 3,
            title: "Training Enthusiast",
            description: "Complete 2 online training modules",
            points: 100,
            progress: 50,
            progressText: "1/2",
            dueDate: "2024-02-15",
            status: "In Progress"
        }
    ],
    recentActivity: [
        {
            id: 1,
            activity: "Parts Purchase - Hydraulic Filters",
            date: "2024-01-15",
            points: 125,
            type: "earned"
        },
        {
            id: 2,
            activity: "Service Booking Bonus",
            date: "2024-01-12",
            points: 50,
            type: "earned"
        },
        {
            id: 3,
            activity: "Monthly Spending Milestone",
            date: "2024-01-10",
            points: 200,
            type: "earned"
        },
        {
            id: 4,
            activity: "Training Course Completion",
            date: "2024-01-08",
            points: 100,
            type: "earned"
        },
        {
            id: 5,
            activity: "Redeemed - Free Inspection",
            date: "2024-01-05",
            points: 500,
            type: "redeemed"
        }
    ]
};