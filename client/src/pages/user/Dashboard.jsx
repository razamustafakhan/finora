import React from "react";
import UserLayout from "../../layouts/UserLayout";

const UserDashboard = () => {
  const stats = [
    {
      label: "Active Loan",
      value: "₹50,000",
      description: "Current outstanding amount",
    },
    {
      label: "Next Payment",
      value: "₹4,250",
      description: "Due on 15 Oct 2026",
    },
    {
      label: "Total Paid",
      value: "₹21,250",
      description: "Across all installments",
    },
  ];

  const recentApplications = [
    {
      id: "LN-10245",
      amount: "₹50,000",
      purpose: "Business",
      date: "28 Sep 2026",
      status: "Approved",
    },
    {
      id: "LN-10231",
      amount: "₹30,000",
      purpose: "Education",
      date: "18 Sep 2026",
      status: "Pending",
    },
  ];

  return (
    <UserLayout>
      <div className="mx-auto max-w-7xl space-y-8">
        {/* HEADER */}
        <section>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#ff0066]">
            Customer Portal
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Welcome back, Mustafa
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Keep track of your applications, repayments, and current loan
                activity from one place.
              </p>
            </div>

            <button className="w-fit bg-[#ff0066] px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600">
              Apply for a loan
            </button>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>

              <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-slate-400">{stat.description}</p>
            </div>
          ))}
        </section>

        {/* MAIN CONTENT */}
        <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* RECENT APPLICATIONS */}
          <div className="border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Recent applications
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Track the latest loan requests.
                </p>
              </div>

              <button className="text-sm font-semibold text-[#ff0066] hover:text-pink-700">
                View all
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {recentApplications.map((application) => (
                <div
                  key={application.id}
                  className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {application.id}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {application.purpose} · {application.date}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-6 sm:justify-end">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">
                        {application.amount}
                      </p>

                      <p
                        className={`mt-1 text-xs font-medium ${
                          application.status === "Approved"
                            ? "text-emerald-600"
                            : "text-amber-600"
                        }`}
                      >
                        {application.status}
                      </p>
                    </div>

                    <button className="text-sm font-medium text-slate-500 hover:text-slate-900">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LOAN PROGRESS */}
          <div className="border border-slate-200 bg-slate-950 p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-400">
              Current loan
            </p>

            <h2 className="mt-4 text-2xl font-semibold">Repayment progress</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Your current loan is progressing according to the repayment
              schedule.
            </p>

            <div className="mt-8">
              <div className="flex items-end justify-between">
                <span className="text-3xl font-semibold">42%</span>

                <span className="text-sm text-slate-400">
                  ₹21,250 / ₹50,000
                </span>
              </div>

              <div className="mt-4 h-2 bg-slate-800">
                <div className="h-full bg-[#ff0066]" style={{ width: "42%" }} />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              <div>
                <p className="text-xs text-slate-500">Next payment</p>
                <p className="mt-1 text-sm font-semibold">₹4,250</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Due date</p>
                <p className="mt-1 text-sm font-semibold">15 Oct 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK INFORMATION */}
        <section className="border border-slate-200 bg-white p-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Account status
              </p>

              <p className="mt-2 text-sm font-semibold text-emerald-600">
                Active
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Applications
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                4 applications
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Member since
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                September 2026
              </p>
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
