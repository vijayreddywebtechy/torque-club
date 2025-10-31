export const selfServiceData = {
    quickActions: [
        {
            id: 1,
            title: "Schedule Maintenance",
            description: "Book routine service for your equipment",
            icon: "calendar"
        },
        {
            id: 2,
            title: "Request Repair",
            description: "Get urgent repairs for breakdowns",
            icon: "tool"
        },
        {
            id: 3,
            title: "Safety Inspection",
            description: "Ensure compliance and safety standards",
            icon: "check-circle"
        },
        {
            id: 4,
            title: "Operator Training",
            description: "Access training programs and certification",
            icon: "user"
        },
        {
            id: 5,
            title: "Order Parts",
            description: "Request genuine parts and accessories",
            icon: "package"
        },
        {
            id: 6,
            title: "Technical Support",
            description: "Get expert technical assistance",
            icon: "help-circle"
        }
    ],
    trackingRequests: [
        {
            id: "REQ-2025-001",
            type: "Maintenance",
            title: "Scheduled Maintenance - CAT 320D",
            status: "In Progress",
            statusColor: "warning",
            date: "2025-01-20",
            priority: "Medium",
            priorityColor: "warning"
        },
        {
            id: "REQ-2025-002",
            type: "Repair",
            title: "Hydraulic System Repair",
            status: "Pending",
            statusColor: "info",
            date: "2025-01-18",
            priority: "High",
            priorityColor: "danger"
        },
        {
            id: "REQ-2025-003",
            type: "Inspection",
            title: "Safety Compliance Check",
            status: "Completed",
            statusColor: "success",
            date: "2025-01-15",
            priority: "Low",
            priorityColor: "secondary"
        }
    ],
    chatMessages: [
        {
            id: 1,
            sender: "Support Agent",
            message: "Hello! How can I assist you today?",
            time: "10:30 AM",
            isAgent: true
        },
        {
            id: 2,
            sender: "You",
            message: "I need help with my equipment maintenance schedule",
            time: "10:32 AM",
            isAgent: false
        },
        {
            id: 3,
            sender: "Support Agent",
            message: "I'd be happy to help you with that. Can you provide me with your equipment details?",
            time: "10:33 AM",
            isAgent: true
        }
    ]
};