import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend,
} from "recharts";
import { FiTrendingUp, FiTrendingDown, FiMenu, FiX, FiHome, FiBarChart2, FiUsers, FiShoppingCart, FiSettings } from "react-icons/fi";
import { DemoLayout } from "./DemoLayout";
import {
  statsCards, monthlyRevenue, ordersByCategory, trafficSources,
  userGrowth, recentOrders, CHART_COLORS,
} from "./dashboard/mockData";

const PIE_COLORS = [CHART_COLORS.cyan, CHART_COLORS.teal, CHART_COLORS.emerald, CHART_COLORS.amber];

const navItems = [
  { icon: <FiHome size={18} />, label: "Dashboard" },
  { icon: <FiBarChart2 size={18} />, label: "Analytics" },
  { icon: <FiUsers size={18} />, label: "Users" },
  { icon: <FiShoppingCart size={18} />, label: "Orders" },
  { icon: <FiSettings size={18} />, label: "Settings" },
];

const statusColor: Record<string, string> = {
  Completed: "text-emerald-400",
  Processing: "text-cyan-400",
  Shipped: "text-amber-400",
  Cancelled: "text-rose-400",
};

const tooltipStyle = {
  contentStyle: { backgroundColor: "#0c1a1e", border: "1px solid #1e293b", borderRadius: 8, color: "#e2e8f0" },
  labelStyle: { color: "#94a3b8" },
};

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DemoLayout title="Analytics Dashboard">
      <div className="flex gap-6">
        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-56 bg-bg-secondary border-r border-border p-4 pt-20 md:pt-4 transition-transform md:rounded-xl md:border shrink-0`}
        >
          <button onClick={() => setSidebarOpen(false)} className="md:hidden absolute top-4 right-4 text-text-muted">
            <FiX size={20} />
          </button>
          <nav className="space-y-1">
            {navItems.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${
                  i === 0
                    ? "bg-accent/10 text-accent"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                }`}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-6 md:hidden">
            <button onClick={() => setSidebarOpen(true)} className="text-text-muted">
              <FiMenu size={20} />
            </button>
            <span className="text-sm text-text-secondary">Menu</span>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statsCards.map((card) => (
              <div key={card.title} className="bg-bg-secondary rounded-xl border border-border p-4">
                <p className="text-text-muted text-xs mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-text-primary">{card.value}</p>
                <div className={`flex items-center gap-1 mt-1 text-xs ${card.trend === "up" ? "text-emerald-400" : "text-rose-400"}`}>
                  {card.trend === "up" ? <FiTrendingUp size={14} /> : <FiTrendingDown size={14} />}
                  {card.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-bg-secondary rounded-xl border border-border p-4">
              <h3 className="text-sm font-medium text-text-primary mb-4">Monthly Revenue</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip {...tooltipStyle} />
                  <Line type="monotone" dataKey="revenue" stroke={CHART_COLORS.cyan} strokeWidth={2} dot={{ fill: CHART_COLORS.cyan, r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-bg-secondary rounded-xl border border-border p-4">
              <h3 className="text-sm font-medium text-text-primary mb-4">Orders by Category</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={ordersByCategory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="category" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="orders" fill={CHART_COLORS.cyan} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-bg-secondary rounded-xl border border-border p-4">
              <h3 className="text-sm font-medium text-text-primary mb-4">Traffic Sources</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={trafficSources} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {trafficSources.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip {...tooltipStyle} />
                  <Legend wrapperStyle={{ color: "#94a3b8", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-bg-secondary rounded-xl border border-border p-4">
              <h3 className="text-sm font-medium text-text-primary mb-4">User Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip {...tooltipStyle} />
                  <Area type="monotone" dataKey="users" stroke={CHART_COLORS.cyan} fill={CHART_COLORS.cyan} fillOpacity={0.15} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-bg-secondary rounded-xl border border-border p-4">
            <h3 className="text-sm font-medium text-text-primary mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-text-muted">
                    <th className="text-left py-2 px-3 font-medium">Order ID</th>
                    <th className="text-left py-2 px-3 font-medium">Customer</th>
                    <th className="text-left py-2 px-3 font-medium">Product</th>
                    <th className="text-left py-2 px-3 font-medium">Amount</th>
                    <th className="text-left py-2 px-3 font-medium">Status</th>
                    <th className="text-left py-2 px-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border/50 hover:bg-bg-tertiary/50 transition-colors">
                      <td className="py-2.5 px-3 text-accent font-mono">{order.id}</td>
                      <td className="py-2.5 px-3 text-text-primary">{order.customer}</td>
                      <td className="py-2.5 px-3 text-text-secondary">{order.product}</td>
                      <td className="py-2.5 px-3 text-text-primary font-medium">{order.amount}</td>
                      <td className={`py-2.5 px-3 ${statusColor[order.status] ?? "text-text-secondary"}`}>{order.status}</td>
                      <td className="py-2.5 px-3 text-text-muted">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

export default Dashboard;
