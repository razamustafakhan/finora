import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useLoan from "../../modules/loan/hooks/useLoan";
import AdminLayout from "../../layouts/AdminLayout";

const LoanAccountList = () => {
  const navigate = useNavigate();

  const { loanAccountList, loading, onLoanAccountList } = useLoan();
  console.log(loanAccountList);

  useEffect(() => {
    onLoanAccountList();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount || 0);
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "active":
        return "bg-green-50 text-green-700";

      case "completed":
        return "bg-blue-50 text-blue-700";

      case "defaulted":
        return "bg-red-50 text-red-700";

      case "closed":
        return "bg-slate-100 text-slate-700";

      case "pending":
        return "bg-yellow-50 text-yellow-700";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-slate-50 px-4 py-6 md:px-6 lg:px-8">
        {/* ========================================
            HEADER
        ======================================== */}

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-[#ff0066]">FINORA</p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Loan Accounts
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage all active and completed loan accounts.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-5 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Total Accounts
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {/* {loanAccountList.length} */}
            </p>
          </div>
        </div>

        {/* ========================================
            CONTENT
        ======================================== */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* Table Header */}

          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="text-base font-semibold text-slate-900">
              Loan Account List
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Complete list of approved loan accounts.
            </p>
          </div>

          {/* Loading */}

          {loading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#ff0066]" />

                <p className="mt-4 text-sm text-slate-500">
                  Loading loan accounts...
                </p>
              </div>
            </div>
          ) : loanAccountList.length === 0 ? (
            /* Empty */

            <div className="flex min-h-[300px] items-center justify-center px-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  No loan accounts found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Approved loan accounts will appear here.
                </p>
              </div>
            </div>
          ) : (
            /* Table */

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px]">
                {/* ========================================
        TABLE HEADER
    ======================================== */}

                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Applicant
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Account
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Loan Amount
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Interest
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Repayment
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Outstanding
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* ========================================
        TABLE BODY
    ======================================== */}

                <tbody className="divide-y divide-slate-100">
                  {loanAccountList.map((account) => {
                    const application = account.loanApplicationId;

                    const photoUrl = `${import.meta.env.VITE_API_URL}/api/loan/photo/${account._id}`;
                    console.log(photoUrl);

                    return (
                      <tr
                        key={account._id}
                        className="transition hover:bg-slate-50"
                      >
                        {/* ========================================
                APPLICANT
            ======================================== */}

                        <td className="px-5 py-5">
                          <div className="flex items-center gap-3">
                            {/* Photo */}

                            <img
                              src={photoUrl}
                              alt={application?.fullName || "Applicant"}
                              className="h-11 w-11 shrink-0 rounded-full border border-slate-200 object-cover"
                            />

                            {/* Name */}

                            <div className="min-w-0">
                              <p className="truncate font-semibold text-slate-900">
                                {application?.fullName || "-"}
                              </p>

                              <p className="mt-1 text-sm text-slate-500">
                                {application?.phone || "-"}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* ========================================
                ACCOUNT
            ======================================== */}

                        <td className="px-5 py-5">
                          <p className="text-sm font-semibold text-slate-800">
                            {account._id}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {application?.applicationNumber || "-"}
                          </p>
                        </td>

                        {/* ========================================
                LOAN AMOUNT
            ======================================== */}

                        <td className="px-5 py-5">
                          <p className="text-sm font-semibold text-slate-900">
                            {formatCurrency(account.approvedAmount)}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            Requested: {formatCurrency(account.requestedAmount)}
                          </p>
                        </td>

                        {/* ========================================
                INTEREST
            ======================================== */}

                        <td className="px-5 py-5">
                          <p className="text-sm font-semibold text-slate-800">
                            {account.interestRate}%
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {formatCurrency(account.interestAmount)}
                          </p>
                        </td>

                        {/* ========================================
                REPAYMENT
            ======================================== */}

                        <td className="px-5 py-5">
                          <p className="text-sm font-semibold text-slate-900">
                            {formatCurrency(account.installmentAmount)}
                          </p>

                          <p className="mt-1 text-xs capitalize text-slate-400">
                            {account.installmentFrequency} ·{" "}
                            {account.installmentCount} payments
                          </p>
                        </td>

                        {/* ========================================
                OUTSTANDING
            ======================================== */}

                        <td className="px-5 py-5">
                          <p className="text-sm font-semibold text-slate-900">
                            {formatCurrency(account.outstandingAmount)}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            Paid: {formatCurrency(account.totalPaidAmount)}
                          </p>
                        </td>

                        {/* ========================================
                STATUS
            ======================================== */}

                        <td className="px-5 py-5">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClass(
                              account.status,
                            )}`}
                          >
                            {account.status}
                          </span>
                        </td>

                        {/* ========================================
                ACTION
            ======================================== */}

                        <td className="px-5 py-5 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              navigate(`/admin/loan-account/${account._id}`)
                            }
                            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#ff0066] hover:bg-[#ff0066] hover:text-white"
                          >
                            View Account
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default LoanAccountList;
