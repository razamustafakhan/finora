import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiDollarSign,
  FiFileText,
  FiMoreHorizontal,
  FiRefreshCw,
  FiUsers,
} from "react-icons/fi";

const AdminDashboard = () => {
  const stats = [
    {
      label: "Total Applications",
      value: "248",
      change: "+12.8%",
      description: "vs last month",
      icon: FiFileText,
    },
    {
      label: "Active Loans",
      value: "184",
      change: "+8.4%",
      description: "currently running",
      icon: FiCreditCard,
    },
    {
      label: "Outstanding",
      value: "₹18.6L",
      change: "+5.2%",
      description: "total loan balance",
      icon: FiDollarSign,
    },
    {
      label: "Borrowers",
      value: "216",
      change: "+10.1%",
      description: "registered users",
      icon: FiUsers,
    },
  ];

  const recentApplications = [
    {
      id: "#LN-1048",
      name: "Rahul Sharma",
      purpose: "Business Expansion",
      amount: "₹1,50,000",
      status: "Pending",
      date: "Today, 10:42 AM",
    },
    {
      id: "#LN-1047",
      name: "Priya Verma",
      purpose: "Education",
      amount: "₹85,000",
      status: "Approved",
      date: "Today, 09:18 AM",
    },
    {
      id: "#LN-1046",
      name: "Amit Kumar",
      purpose: "Medical",
      amount: "₹60,000",
      status: "Review",
      date: "Yesterday",
    },
    {
      id: "#LN-1045",
      name: "Neha Singh",
      purpose: "Home Improvement",
      amount: "₹2,00,000",
      status: "Approved",
      date: "Yesterday",
    },
    {
      id: "#LN-1044",
      name: "Mohit Gupta",
      purpose: "Personal",
      amount: "₹75,000",
      status: "Pending",
      date: "Sep 28, 2026",
    },
  ];

  const pipeline = [
    {
      label: "New Applications",
      value: 42,
      percentage: 34,
    },
    {
      label: "Under Review",
      value: 28,
      percentage: 23,
    },
    {
      label: "Approved",
      value: 31,
      percentage: 25,
    },
    {
      label: "Disbursed",
      value: 22,
      percentage: 18,
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <AdminLayout>
      <div className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          {/* =========================================================
              HEADER
          ========================================================= */}
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff0066]" />
                Admin Overview
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Good morning, Mustafa.
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Here is what is happening across your lending platform today.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100">
                Export Report
              </button>

              <button className="rounded-xl bg-[#ff0066] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e6005c]">
                Review Applications
              </button>
            </div>
          </div>

          {/* =========================================================
              STAT CARDS
          ========================================================= */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="mb-7 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-600">
                      <FiArrowUpRight size={12} />
                      {stat.change}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>

                  <div className="mt-1 flex items-end justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {stat.value}
                    </h2>

                    <span className="pb-1 text-[11px] text-slate-400">
                      {stat.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================
              MAIN GRID
          ========================================================= */}
          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* =======================================================
                RECENT APPLICATIONS
            ======================================================= */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white xl:col-span-2">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Applications
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-950">
                    Recent applications
                  </h2>
                </div>

                <button className="text-sm font-semibold text-[#ff0066] transition hover:text-slate-950">
                  View all
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px]">
                  <thead>
                    <tr className="border-b border-slate-100 text-left">
                      <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Applicant
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Purpose
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Amount
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Status
                      </th>

                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Date
                      </th>

                      <th className="px-4 py-3" />
                    </tr>
                  </thead>

                  <tbody>
                    {recentApplications.map((application) => (
                      <tr
                        key={application.id}
                        className="border-b border-slate-50 last:border-0 transition hover:bg-slate-50"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                              {application.name
                                .split(" ")
                                .map((word) => word[0])
                                .join("")
                                .slice(0, 2)}
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-slate-900">
                                {application.name}
                              </p>

                              <p className="mt-0.5 text-[11px] text-slate-400">
                                {application.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-slate-600">
                          {application.purpose}
                        </td>

                        <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                          {application.amount}
                        </td>

                        <td className="px-4 py-4">
                          <StatusBadge status={application.status} />
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-400">
                          {application.date}
                        </td>

                        <td className="px-4 py-4">
                          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900">
                            <FiMoreHorizontal size={17} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* =======================================================
                LOAN PIPELINE
            ======================================================= */}
            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Lending Pipeline
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    Application flow
                  </h2>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#ff0066]">
                  <FiRefreshCw size={16} />
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-2 flex items-end justify-between">
                  <span className="text-sm text-slate-400">Total pipeline</span>

                  <span className="text-2xl font-semibold">123</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#ff0066]"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {pipeline.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-slate-300">
                        {item.label}
                      </span>

                      <span className="text-sm font-semibold">
                        {item.value}
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white"
                        style={{ width: `${item.percentage * 2.5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Updated</span>

                  <span className="text-xs text-slate-300">Just now</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              LOWER GRID
          ========================================================= */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* =======================================================
                PORTFOLIO HEALTH
            ======================================================= */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Portfolio
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-950">
                    Portfolio health
                  </h2>
                </div>

                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-600">
                  Healthy
                </span>
              </div>

              <div className="mt-8 flex items-center gap-7">
                <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[12px] border-[#ff0066]/15">
                  <div className="absolute inset-0 rounded-full border-[12px] border-transparent border-l-[#ff0066] border-t-[#ff0066] rotate-[-35deg]" />

                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-950">92%</p>

                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Score
                    </p>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <HealthRow label="On-time payments" value="88%" />

                  <HealthRow label="Active accounts" value="184" />

                  <HealthRow label="Overdue accounts" value="12" />
                </div>
              </div>
            </div>

            {/* =======================================================
                COLLECTIONS
            ======================================================= */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Collections
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-950">
                    Repayment overview
                  </h2>
                </div>

                <FiDollarSign className="text-slate-300" size={20} />
              </div>

              <div className="mt-8">
                <p className="text-3xl font-semibold tracking-tight text-slate-950">
                  ₹12.4L
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  collected this month
                </p>
              </div>

              <div className="mt-7 space-y-5">
                <ProgressRow label="Collected" value="₹12.4L" percentage={78} />

                <ProgressRow label="Pending" value="₹2.8L" percentage={18} />

                <ProgressRow label="Overdue" value="₹0.7L" percentage={4} />
              </div>
            </div>

            {/* =======================================================
                QUICK ACTIONS
            ======================================================= */}
            <div className="rounded-2xl bg-[#ff0066] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Quick Actions
              </p>

              <h2 className="mt-1 text-lg font-semibold">
                Manage your platform
              </h2>

              <div className="mt-6 space-y-2">
                <QuickAction label="Review applications" count="24 pending" />

                <QuickAction label="View active loans" count="184 accounts" />

                <QuickAction label="Check collections" count="12 overdue" />

                <QuickAction label="View analytics" count="Monthly report" />
              </div>
            </div>
          </div>

          {/* =========================================================
              BOTTOM SUMMARY
          ========================================================= */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FiCheckCircle size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Collection performance
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Your repayment collection is running at 78% this month.
                  </p>
                </div>

                <span className="ml-auto text-lg font-semibold text-green-600">
                  78%
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <FiClock size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Pending reviews
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Applications waiting for administrator review.
                  </p>
                </div>

                <span className="ml-auto text-lg font-semibold text-slate-950">
                  24
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

/* ============================================================
   STATUS BADGE
============================================================ */

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-orange-50 text-orange-600",
    Approved: "bg-green-50 text-green-600",
    Review: "bg-blue-50 text-blue-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
};

/* ============================================================
   HEALTH ROW
============================================================ */

const HealthRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-slate-500">{label}</span>

      <span className="text-sm font-semibold text-slate-900">{value}</span>
    </div>
  );
};

/* ============================================================
   PROGRESS ROW
============================================================ */

const ProgressRow = ({ label, value, percentage }) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">{label}</span>

        <span className="text-xs font-semibold text-slate-900">{value}</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-[#ff0066]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

/* ============================================================
   QUICK ACTION
============================================================ */

const QuickAction = ({ label, count }) => {
  return (
    <button className="group flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-left transition hover:bg-white">
      <span className="text-sm font-medium text-white group-hover:text-slate-950">
        {label}
      </span>

      <span className="text-[10px] text-white/50 group-hover:text-slate-400">
        {count}
      </span>
    </button>
  );
};

export default AdminDashboard;
