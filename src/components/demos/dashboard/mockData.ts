export const statsCards = [
  { title: "Total Revenue", value: "$84,254", change: "+12.5%", trend: "up" as const },
  { title: "Active Users", value: "12,847", change: "+8.2%", trend: "up" as const },
  { title: "Total Orders", value: "3,642", change: "+5.4%", trend: "up" as const },
  { title: "Conversion Rate", value: "3.24%", change: "-0.8%", trend: "down" as const },
];

export const monthlyRevenue = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5100 },
  { month: "Mar", revenue: 4800 },
  { month: "Apr", revenue: 6200 },
  { month: "May", revenue: 5800 },
  { month: "Jun", revenue: 7100 },
  { month: "Jul", revenue: 6800 },
  { month: "Aug", revenue: 7500 },
  { month: "Sep", revenue: 8200 },
  { month: "Oct", revenue: 7800 },
  { month: "Nov", revenue: 8900 },
  { month: "Dec", revenue: 9400 },
];

export const ordersByCategory = [
  { category: "Electronics", orders: 1240 },
  { category: "Clothing", orders: 890 },
  { category: "Home", orders: 650 },
  { category: "Sports", orders: 420 },
  { category: "Books", orders: 310 },
  { category: "Food", orders: 580 },
];

export const trafficSources = [
  { name: "Direct", value: 35 },
  { name: "Organic", value: 30 },
  { name: "Social", value: 20 },
  { name: "Referral", value: 15 },
];

export const userGrowth = [
  { month: "Jan", users: 8200 },
  { month: "Feb", users: 8800 },
  { month: "Mar", users: 9100 },
  { month: "Apr", users: 9600 },
  { month: "May", users: 10200 },
  { month: "Jun", users: 10800 },
  { month: "Jul", users: 11200 },
  { month: "Aug", users: 11600 },
  { month: "Sep", users: 12100 },
  { month: "Oct", users: 12400 },
  { month: "Nov", users: 12700 },
  { month: "Dec", users: 12847 },
];

export const recentOrders = [
  { id: "ORD-001", customer: "John Smith", product: "MacBook Pro", amount: "$2,499", status: "Completed", date: "2024-03-15" },
  { id: "ORD-002", customer: "Sarah Johnson", product: "iPhone 15 Pro", amount: "$1,199", status: "Processing", date: "2024-03-14" },
  { id: "ORD-003", customer: "Mike Wilson", product: "AirPods Max", amount: "$549", status: "Shipped", date: "2024-03-14" },
  { id: "ORD-004", customer: "Emily Davis", product: "iPad Air", amount: "$799", status: "Completed", date: "2024-03-13" },
  { id: "ORD-005", customer: "Alex Brown", product: "Apple Watch", amount: "$429", status: "Cancelled", date: "2024-03-12" },
];

export const CHART_COLORS = {
  cyan: "#06b6d4",
  cyanLight: "#22d3ee",
  cyanDark: "#0891b2",
  teal: "#14b8a6",
  emerald: "#10b981",
  amber: "#f59e0b",
  rose: "#f43f5e",
};
