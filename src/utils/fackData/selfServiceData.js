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
            id: 1,
            requestId: "REQ-2025-001",
            type: "Maintenance",
            title: "Scheduled Maintenance - CAT 320D",
            machine: "CAT 320D Excavator",
            status: "in-progress",
            priority: "medium",
            createdDate: "2025-01-15",
            lastUpdated: "2025-01-20",
            assignedTo: "John Smith",
            estimatedCompletion: "2025-01-25",
            progress: 60,
            latestUpdate: "Hydraulic fluid replacement completed. Engine oil inspection in progress. Next step: filter replacement scheduled for tomorrow morning.",
            updatedBy: "John Smith",
            updatedTime: "2 hours ago",
            attachments: [
                { name: "maintenance_report.pdf", size: "2.4 MB" },
                { name: "parts_list.pdf", size: "1.8 MB" }
            ]
        },
        {
            id: 2,
            requestId: "REQ-2025-002",
            type: "Repair",
            title: "Hydraulic System Repair",
            machine: "Komatsu PC200 Excavator",
            status: "pending",
            priority: "high",
            createdDate: "2025-01-18",
            lastUpdated: "2025-01-18",
            assignedTo: "Sarah Johnson",
            estimatedCompletion: "2025-01-28",
            progress: 10,
            latestUpdate: "Request received and reviewed. Technician assignment pending. We will contact you shortly with more details and scheduling information.",
            updatedBy: "System",
            updatedTime: "1 day ago",
            attachments: [
                { name: "repair_request_form.pdf", size: "956 KB" }
            ]
        },
        {
            id: 3,
            requestId: "REQ-2025-003",
            type: "Inspection",
            title: "Safety Compliance Check",
            machine: "Volvo A45G Articulated Dump Truck",
            status: "completed",
            priority: "low",
            createdDate: "2025-01-10",
            lastUpdated: "2025-01-15",
            assignedTo: "Mike Wilson",
            estimatedCompletion: "2025-01-15",
            progress: 100,
            latestUpdate: "Safety inspection completed successfully. All equipment meets compliance standards. Certificate of compliance issued and filed.",
            updatedBy: "Mike Wilson",
            updatedTime: "5 days ago",
            attachments: [
                { name: "compliance_certificate.pdf", size: "1.2 MB" },
                { name: "inspection_checklist.pdf", size: "892 KB" }
            ]
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