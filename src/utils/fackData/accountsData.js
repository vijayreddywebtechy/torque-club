export const accountsOverviewData = {
    summary: {
        totalBalance: 55850,
        totalCreditLimit: 325000,
        availableCredit: 269150,
        overdueAmount: 14600
    },
    accounts: [
        {
            id: 1,
            name: "Primary Trade Account",
            accountNumber: "ACC-001-2024",
            type: "TRADE",
            status: "Active",
            currentBalance: 45000,
            creditLimit: 250000,
            availableCredit: 205000,
            overdueAmount: 12500,
            creditUtilization: 18.0,
            lastPayment: "2/5/2024",
            statusColor: "primary"
        },
        {
            id: 2,
            name: "Equipment Rental",
            accountNumber: "ACC-002-2024",
            type: "RENTAL",
            status: "Active",
            currentBalance: 8750,
            creditLimit: 50000,
            availableCredit: 41250,
            overdueAmount: 0,
            creditUtilization: 17.5,
            lastPayment: "2/20/2024",
            statusColor: "success"
        },
        {
            id: 3,
            name: "Service & Maintenance",
            accountNumber: "ACC-003-2024",
            type: "SERVICE",
            status: "Warning",
            currentBalance: 2100,
            creditLimit: 25000,
            availableCredit: 22900,
            overdueAmount: 2100,
            creditUtilization: 8.4,
            lastPayment: "1/30/2024",
            statusColor: "warning"
        }
    ],
    recentTransactions: [
        {
            id: 1,
            date: "2024-10-30",
            description: "Payment - Hydraulic Parts",
            account: "Primary Trade Account",
            amount: -2500,
            status: "Completed",
            type: "Payment"
        },
        {
            id: 2,
            date: "2024-10-28",
            description: "Invoice #INV-2024-1045",
            account: "Primary Trade Account",
            amount: 15750,
            status: "Pending",
            type: "Invoice"
        },
        {
            id: 3,
            date: "2024-10-25",
            description: "Rental Payment - CAT 320D",
            account: "Equipment Rental",
            amount: -8750,
            status: "Completed",
            type: "Payment"
        }
    ],
    outstandingInvoices: [
        {
            id: 1,
            invoiceNumber: "INV-2024-1045",
            date: "2024-10-15",
            dueDate: "2024-11-15",
            account: "Primary Trade Account",
            amount: 15750,
            status: "Overdue",
            daysOverdue: 16
        },
        {
            id: 2,
            invoiceNumber: "INV-2024-1032",
            date: "2024-10-08",
            dueDate: "2024-11-08",
            account: "Service & Maintenance",
            amount: 2100,
            status: "Due Soon",
            daysOverdue: 0
        }
    ],
    analytics: {
        monthlySpending: [
            { month: "Jan", amount: 45000 },
            { month: "Feb", amount: 52000 },
            { month: "Mar", amount: 38000 },
            { month: "Apr", amount: 61000 },
            { month: "May", amount: 47000 },
            { month: "Jun", amount: 55000 }
        ],
        paymentTrends: {
            onTime: 85,
            late: 12,
            overdue: 3
        }
    }
};