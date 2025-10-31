export const documentsData = {
    summary: {
        totalDocuments: 256,
        encrypted: true,
        encryptionText: "256-bit Encrypted"
    },
    documents: [
        {
            id: 1,
            name: "Company Registration Certificate",
            size: "2.4 MB",
            category: "KYC",
            categoryColor: "primary",
            status: "Verified",
            statusColor: "success",
            version: "v1",
            description: "Official company registration document",
            uploadedDate: "1/5/2024",
            uploadedBy: "Admin User",
            expiryDate: "1/15/2025",
            isExpired: true,
            fileType: "pdf"
        },
        {
            id: 2,
            name: "VAT Certificate",
            size: "1.8 MB",
            category: "COMPLIANCE",
            categoryColor: "info",
            status: "Verified",
            statusColor: "success",
            version: "v1",
            description: "VAT registration certificate",
            uploadedDate: "1/20/2024",
            uploadedBy: "Finance Team",
            expiryDate: "12/31/2024",
            isExpired: true,
            fileType: "pdf"
        },
        {
            id: 3,
            name: "Annual Financial Statements",
            size: "5.2 MB",
            category: "FINANCIAL",
            categoryColor: "success",
            status: "Pending",
            statusColor: "warning",
            version: "v2",
            description: "Audited financial statements for 2023",
            uploadedDate: "2/1/2024",
            uploadedBy: "CFO",
            expiryDate: null,
            isExpired: false,
            fileType: "pdf"
        },
        {
            id: 4,
            name: "Insurance Certificate",
            size: "1.1 MB",
            category: "LEGAL",
            categoryColor: "warning",
            status: "Verified",
            statusColor: "success",
            version: "v1",
            description: "Insurance coverage certificate",
            uploadedDate: "1/10/2024",
            uploadedBy: "Risk Manager",
            expiryDate: "12/10/2024",
            isExpired: true,
            fileType: "pdf"
        }
    ]
};