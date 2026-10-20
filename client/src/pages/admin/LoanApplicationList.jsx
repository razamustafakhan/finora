import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";
import useLoan from "../../modules/loan/hooks/useLoan";

const LoanApplicationList = () => {
  const { loanApplicationList, onLoanApplicationList, loading } = useLoan();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    onLoanApplicationList();
  }, []);

  // ================================
  // FILTER LOANS
  // ================================

  const filteredLoans = useMemo(() => {
    const query = search.trim().toLowerCase();

    return loanApplicationList.filter((loan) => {
      const matchesSearch =
        !query ||
        loan.applicationNumber?.toLowerCase().includes(query) ||
        loan.fullName?.toLowerCase().includes(query) ||
        loan.email?.toLowerCase().includes(query) ||
        loan.phone?.toLowerCase().includes(query) ||
        loan.purpose?.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "all" || loan.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [loanApplicationList, search, statusFilter]);

  // ================================
  // SUMMARY
  // ================================

  const totalLoans = loanApplicationList.length;

  const submittedLoans = loanApplicationList.filter(
    (loan) => loan.status === "submitted",
  ).length;

  const underReviewLoans = loanApplicationList.filter(
    (loan) => loan.status === "under_review",
  ).length;

  const approvedLoans = loanApplicationList.filter(
    (loan) => loan.status === "approved",
  ).length;

  const totalRequested = loanApplicationList.reduce(
    (total, loan) => total + Number(loan.amount || 0),
    0,
  );

  // ================================
  // HELPERS
  // ================================

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  const formatStatus = (status) => {
    const statusMap = {
      submitted: "Submitted",
      under_review: "Under Review",
      approved: "Approved",
      rejected: "Rejected",
      cancelled: "Cancelled",
    };

    return statusMap[status] || "Unknown";
  };

  const getStatusClass = (status) => {
    const statusStyles = {
      submitted: "bg-amber-50 text-amber-700",
      under_review: "bg-blue-50 text-blue-700",
      approved: "bg-emerald-50 text-emerald-700",
      rejected: "bg-red-50 text-red-700",
      cancelled: "bg-slate-100 text-slate-600",
    };

    return statusStyles[status] || "bg-slate-100 text-slate-600";
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        {/* ========================================
            HEADER
        ======================================== */}

        <div className="mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#ff0066]">
                Loan Management
              </p>

              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Loan Applications
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-slate-500">
                Review, verify and manage customer loan applications.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Total Requested
              </p>

              <p className="mt-1 text-xl font-bold text-slate-900">
                {formatCurrency(totalRequested)}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================
            SUMMARY CARDS
        ======================================== */}

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {/* Total */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total Applications</p>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              {totalLoans}
            </p>
          </div>

          {/* Submitted */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Submitted</p>

            <p className="mt-2 text-2xl font-bold text-amber-600">
              {submittedLoans}
            </p>
          </div>

          {/* Under Review */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Under Review</p>

            <p className="mt-2 text-2xl font-bold text-blue-600">
              {underReviewLoans}
            </p>
          </div>

          {/* Approved */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Approved</p>

            <p className="mt-2 text-2xl font-bold text-emerald-600">
              {approvedLoans}
            </p>
          </div>

          {/* Requested Amount */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Requested Amount</p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              {formatCurrency(totalRequested)}
            </p>
          </div>
        </div>

        {/* ========================================
            FILTER SECTION
        ======================================== */}

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="w-full lg:max-w-md">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Search applications
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, application number, email..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#ff0066] focus:bg-white focus:ring-2 focus:ring-[#ff0066]/10"
              />
            </div>

            {/* Status */}
            <div className="w-full lg:max-w-xs">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Filter by status
              </label>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#ff0066] focus:bg-white focus:ring-2 focus:ring-[#ff0066]/10"
              >
                <option value="all">All Applications</option>

                <option value="submitted">Submitted</option>

                <option value="under_review">Under Review</option>

                <option value="approved">Approved</option>

                <option value="rejected">Rejected</option>

                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* ========================================
            APPLICATION LIST
        ======================================== */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* Table Header */}
          <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Applications
                </h2>

                <p className="text-sm text-slate-500">
                  Showing {filteredLoans.length} of {loanApplicationList.length}{" "}
                  applications
                </p>
              </div>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="px-6 py-16 text-center">
              <p className="text-sm text-slate-500">
                Loading loan applications...
              </p>
            </div>
          )}

          {/* Empty */}
          {!loading && filteredLoans.length === 0 && (
            <div className="px-6 py-16 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                No applications found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or status filter.
              </p>
            </div>
          )}

          {/* Desktop Table */}
          {!loading && filteredLoans.length > 0 && (
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-275">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Application
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Applicant
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Requested Amount
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Tenure
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Purpose
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredLoans.map((loan) => (
                    <tr key={loan._id} className="transition hover:bg-slate-50">
                      {/* Application */}
                      <td className="px-6 py-5">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {loan.applicationNumber || "Pending"}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {formatDate(loan.createdAt)}
                          </p>
                        </div>
                      </td>

                      {/* Applicant */}
                      <td className="px-6 py-5">
                        <div>
                          <p className="font-medium text-slate-900">
                            {loan.fullName}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {loan.phone}
                          </p>

                          {loan.email && (
                            <p className="mt-1 text-xs text-slate-400">
                              {loan.email}
                            </p>
                          )}
                        </div>
                      </td>

                      {/* Amount */}
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-900">
                          {formatCurrency(loan.amount)}
                        </p>
                      </td>

                      {/* Tenure */}
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-slate-700">
                          {loan.time} {loan.timeUnit}
                        </p>
                      </td>

                      {/* Purpose */}
                      <td className="px-6 py-5">
                        <p className="max-w-45 truncate text-sm text-slate-600">
                          {loan.purpose || "-"}
                        </p>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                            loan.status,
                          )}`}
                        >
                          {formatStatus(loan.status)}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-6 py-5 text-right">
                        <NavLink
                          to={`/admin/loan-application/${loan._id}`}
                          className="inline-flex rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#ff0066] hover:bg-[#ff0066] hover:text-white"
                        >
                          {loan.status === "approved" ? "View" : "Review"}
                        </NavLink>
                        <NavLink
                          to={`/admin/create-loan-account/${loan._id}?userName=${encodeURIComponent(
                            loan.fullName,
                          )}&phone=${encodeURIComponent(loan.phone)}`}
                          className="inline-flex rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#ff0066] hover:bg-[#ff0066] hover:text-white"
                        >
                          {loan.status === "approved" ? "View" : "Review"}
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Mobile Cards */}
          {!loading && filteredLoans.length > 0 && (
            <div className="divide-y divide-slate-100 lg:hidden">
              {filteredLoans.map((loan) => (
                <div key={loan._id} className="p-5">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Application
                      </p>

                      <p className="mt-1 font-semibold text-slate-900">
                        {loan.applicationNumber || "Pending"}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                        loan.status,
                      )}`}
                    >
                      {formatStatus(loan.status)}
                    </span>
                  </div>

                  {/* Applicant */}
                  <div className="mt-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Applicant
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {loan.fullName}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">{loan.phone}</p>

                    {loan.email && (
                      <p className="mt-1 text-sm text-slate-500">
                        {loan.email}
                      </p>
                    )}
                  </div>

                  {/* Details */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-400">Requested Amount</p>

                      <p className="mt-1 font-semibold text-slate-900">
                        {formatCurrency(loan.amount)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Tenure</p>

                      <p className="mt-1 font-medium text-slate-700">
                        {loan.time} {loan.timeUnit}
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-xs text-slate-400">Purpose</p>

                      <p className="mt-1 text-sm text-slate-700">
                        {loan.purpose || "-"}
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-xs text-slate-400">Submitted</p>

                      <p className="mt-1 text-sm text-slate-700">
                        {formatDate(loan.createdAt)}
                      </p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-5">
                    <NavLink
                      to={`/admin/loan-application/${loan._id}`}
                      className="block w-full rounded-xl bg-[#ff0066] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#e6005c]"
                    >
                      {loan.status === "approved"
                        ? "View Application"
                        : "Review Application"}
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default LoanApplicationList;
