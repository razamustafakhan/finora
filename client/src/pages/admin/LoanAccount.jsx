import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";
import useLoan from "../../modules/loan/hooks/useLoan";

const LoanAccount = () => {
  const { id } = useParams();

  const {
    loanAccount,
    loanApplicationList,
    loading,

    onLoanAccountChange,
    onLoanAccountFileChange,
    onLoanApplicationList,
    onCreateLoanAccount,
  } = useLoan();

  // ========================================
  // LOAD APPLICATIONS
  // ========================================

  useEffect(() => {
    if (!loanApplicationList.length) {
      onLoanApplicationList();
    }
  }, [loanApplicationList.length]);

  // ========================================
  // SELECT CURRENT APPLICATION
  // ========================================

  const application = useMemo(() => {
    return loanApplicationList.find((loan) => loan._id === id);
  }, [loanApplicationList, id]);

  // ========================================
  // LOAN CALCULATION
  // ========================================

  const calculation = useMemo(() => {
    const approvedAmount = Number(loanAccount.approvedAmount) || 0;

    const interestRate = Number(loanAccount.interestRate) || 0;

    const processingFee = Number(loanAccount.processingFee) || 0;

    const duration = Number(loanAccount.loanDuration) || 0;

    // Interest
    const interestAmount = (approvedAmount * interestRate) / 100;

    // Total payable
    const totalPayableAmount = approvedAmount + interestAmount + processingFee;

    // Convert duration to months
    let totalMonths = duration;

    if (loanAccount.durationUnit === "years") {
      totalMonths = duration * 12;
    }

    // Installment count
    let installmentCount = totalMonths;

    if (loanAccount.installmentFrequency === "quarterly") {
      installmentCount = totalMonths / 3;
    }

    if (loanAccount.installmentFrequency === "yearly") {
      installmentCount = totalMonths / 12;
    }

    // Installment amount
    const installmentAmount =
      installmentCount > 0 ? totalPayableAmount / installmentCount : 0;

    return {
      interestAmount,
      totalPayableAmount,
      totalMonths,
      installmentCount,
      installmentAmount,
    };
  }, [loanAccount]);

  // ========================================
  // SUBMIT
  // ========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!application) {
      return;
    }

    await onCreateLoanAccount(id);
  };

  // ========================================
  // HELPERS
  // ========================================

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Number(amount || 0));
  };

  const getFrequencyLabel = () => {
    switch (loanAccount.installmentFrequency) {
      case "monthly":
        return "Monthly";

      case "quarterly":
        return "Quarterly";

      case "yearly":
        return "Yearly";

      case "weekly":
        return "Weekly";

      default:
        return "—";
    }
  };

  // ========================================
  // LOADING APPLICATION
  // ========================================

  if (!application && loading) {
    return (
      <AdminLayout>
        <main className="min-h-full bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg border border-slate-200 bg-white p-10 text-center">
              <p className="text-sm font-medium text-slate-600">
                Loading loan application...
              </p>
            </div>
          </div>
        </main>
      </AdminLayout>
    );
  }

  // ========================================
  // APPLICATION NOT FOUND
  // ========================================

  if (!application) {
    return (
      <AdminLayout>
        <main className="min-h-full bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg border border-slate-200 bg-white p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#ff0066]">
                Loan Account
              </p>

              <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                Loan application not found
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                The loan application could not be found.
              </p>
            </div>
          </div>
        </main>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <main className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* ========================================
              HEADER
          ======================================== */}

          <section className="mb-7">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff0066]">
              Lending / Loan Account
            </p>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Create Loan Account
                </h1>

                <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
                  Review the customer's application, verify the required
                  documents and configure the final loan terms.
                </p>
              </div>

              <div className="border border-slate-200 bg-white px-5 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Application
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {application.applicationNumber || application._id}
                </p>
              </div>
            </div>
          </section>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
              {/* ========================================
                  LEFT
              ======================================== */}

              <div className="space-y-6">
                {/* ========================================
                    01 APPLICANT DETAILS
                ======================================== */}

                <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <SectionHeader
                    number="01"
                    title="Applicant details"
                    description="Information saved with the original loan application."
                  />

                  <div className="grid gap-x-6 gap-y-6 px-6 py-6 sm:grid-cols-2">
                    <ReadOnlyField
                      label="Full name"
                      value={application.fullName}
                    />

                    <ReadOnlyField
                      label="Father's name"
                      value={application.fatherName}
                    />

                    <ReadOnlyField label="Email" value={application.email} />

                    <ReadOnlyField label="Phone" value={application.phone} />

                    <ReadOnlyField
                      label="Employment"
                      value={formatEmployment(application.employment)}
                    />

                    <ReadOnlyField
                      label="Monthly income"
                      value={formatCurrency(application.income)}
                    />

                    <ReadOnlyField
                      label="Requested amount"
                      value={formatCurrency(application.amount)}
                    />

                    <ReadOnlyField
                      label="Repayment period"
                      value={
                        application.time
                          ? `${application.time} ${application.timeUnit}`
                          : "—"
                      }
                    />

                    <div className="sm:col-span-2">
                      <ReadOnlyField
                        label="Loan purpose"
                        value={application.purpose}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <ReadOnlyAddress address={application.address} />
                    </div>
                  </div>
                </section>

                {/* ========================================
                    02 VERIFICATION DOCUMENTS
                ======================================== */}

                <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <SectionHeader
                    number="02"
                    title="Verification documents"
                    description="Verify the borrower's identity and supporting documents."
                  />

                  <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
                    <Input
                      label="Aadhaar number"
                      name="aadhaarNumber"
                      value={loanAccount.aadhaarNumber}
                      onChange={onLoanAccountChange}
                      placeholder="XXXX XXXX XXXX"
                      type="text"
                      maxLength="14"
                    />

                    <FileInput
                      label="Customer photo"
                      name="photo"
                      onChange={onLoanAccountFileChange}
                      accept="image/jpeg,image/png,image/webp"
                      file={loanAccount.photo}
                    />

                    <FileInput
                      label="Proof document 1"
                      name="proofDocument1"
                      onChange={onLoanAccountFileChange}
                      accept="image/jpeg,image/png,application/pdf"
                      file={loanAccount.proofDocument1}
                    />

                    <FileInput
                      label="Proof document 2"
                      name="proofDocument2"
                      onChange={onLoanAccountFileChange}
                      accept="image/jpeg,image/png,application/pdf"
                      file={loanAccount.proofDocument2}
                    />
                  </div>
                </section>

                {/* ========================================
                    03 LOAN TERMS
                ======================================== */}

                <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <SectionHeader
                    number="03"
                    title="Loan terms"
                    description="Set the final financial terms approved for the borrower."
                  />

                  <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
                    <Input
                      label="Approved amount"
                      name="approvedAmount"
                      value={loanAccount.approvedAmount}
                      onChange={onLoanAccountChange}
                      placeholder="100000"
                      type="number"
                      min="1"
                      prefix="₹"
                    />

                    <Input
                      label="Interest rate"
                      name="interestRate"
                      value={loanAccount.interestRate}
                      onChange={onLoanAccountChange}
                      placeholder="12"
                      type="number"
                      min="0"
                      step="0.01"
                      suffix="%"
                    />

                    <Input
                      label="Processing fee"
                      name="processingFee"
                      value={loanAccount.processingFee}
                      onChange={onLoanAccountChange}
                      placeholder="1000"
                      type="number"
                      min="0"
                      prefix="₹"
                    />

                    <div>
                      <label className="text-sm font-semibold text-slate-800">
                        Loan duration
                      </label>

                      <div className="mt-2 grid grid-cols-[1fr_120px]">
                        <input
                          type="number"
                          name="loanDuration"
                          value={loanAccount.loanDuration}
                          onChange={onLoanAccountChange}
                          placeholder="12"
                          min="1"
                          className="w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#ff0066] focus:bg-white focus:ring-4 focus:ring-pink-50"
                        />

                        <select
                          name="durationUnit"
                          value={loanAccount.durationUnit}
                          onChange={onLoanAccountChange}
                          className="border-y border-r border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none focus:border-[#ff0066]"
                        >
                          <option value="months">Months</option>

                          <option value="years">Years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ========================================
                    04 REPAYMENT PLAN
                ======================================== */}

                <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <SectionHeader
                    number="04"
                    title="Repayment plan"
                    description="Configure how and when the borrower will make payments."
                  />

                  <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
                    <Select
                      label="Payment frequency"
                      name="installmentFrequency"
                      value={loanAccount.installmentFrequency}
                      onChange={onLoanAccountChange}
                    >
                      <option value="monthly">Monthly</option>

                      <option value="quarterly">Quarterly</option>

                      <option value="yearly">Yearly</option>
                    </Select>

                    <div>
                      <label className="text-sm font-semibold text-slate-800">
                        First payment date
                      </label>

                      <input
                        type="date"
                        name="firstInstallmentDate"
                        value={loanAccount.firstInstallmentDate}
                        onChange={onLoanAccountChange}
                        className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#ff0066] focus:bg-white focus:ring-4 focus:ring-pink-50"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-slate-800">
                        Admin remarks
                      </label>

                      <textarea
                        name="remarks"
                        value={loanAccount.remarks}
                        onChange={onLoanAccountChange}
                        rows={4}
                        placeholder="Add internal notes about this loan..."
                        className="mt-2 w-full resize-none border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#ff0066] focus:bg-white focus:ring-4 focus:ring-pink-50"
                      />
                    </div>
                  </div>
                </section>

                {/* ========================================
                    SUBMIT
                ======================================== */}

                <section className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Ready to create this loan account?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Review all documents and financial terms before creating
                      the official loan account.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ff0066] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Creating..." : "Create Loan Account"}
                  </button>
                </section>
              </div>

              {/* ========================================
                  RIGHT SIDEBAR
              ======================================== */}

              <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
                {/* ========================================
                    APPLICATION
                ======================================== */}

                <section className="overflow-hidden rounded-lg bg-slate-950">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pink-400">
                      Applicant
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-white">
                      {application.fullName}
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                      {application.phone}
                    </p>
                  </div>

                  <div className="space-y-5 px-6 py-6">
                    <DarkSummaryRow
                      label="Requested"
                      value={formatCurrency(application.amount)}
                    />

                    <DarkSummaryRow
                      label="Approved"
                      value={formatCurrency(loanAccount.approvedAmount)}
                      highlight
                    />

                    <DarkSummaryRow
                      label="Employment"
                      value={formatEmployment(application.employment)}
                    />

                    <DarkSummaryRow
                      label="Purpose"
                      value={application.purpose || "—"}
                    />
                  </div>
                </section>

                {/* ========================================
                    FINANCIAL SUMMARY
                ======================================== */}

                <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <div className="border-b border-slate-200 px-6 py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff0066]">
                      Financial summary
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-slate-900">
                      Loan calculation
                    </h2>
                  </div>

                  <div className="space-y-5 px-6 py-6">
                    <LightSummaryRow
                      label="Approved amount"
                      value={formatCurrency(loanAccount.approvedAmount)}
                    />

                    <LightSummaryRow
                      label="Interest"
                      value={formatCurrency(calculation.interestAmount)}
                    />

                    <LightSummaryRow
                      label="Processing fee"
                      value={formatCurrency(loanAccount.processingFee)}
                    />

                    <div className="border-t border-slate-100 pt-5">
                      <p className="text-xs text-slate-400">Total payable</p>

                      <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {formatCurrency(calculation.totalPayableAmount)}
                      </p>
                    </div>
                  </div>
                </section>

                {/* ========================================
                    REPAYMENT PREVIEW
                ======================================== */}

                <section className="rounded-lg border border-slate-200 bg-white p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Repayment preview
                  </p>

                  <div className="mt-5">
                    <p className="text-sm text-slate-500">Estimated payment</p>

                    <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
                      {formatCurrency(calculation.installmentAmount)}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Per {getFrequencyLabel()}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                    <LightSummaryRow
                      label="Number of payments"
                      value={calculation.installmentCount || "—"}
                    />

                    <LightSummaryRow
                      label="Interest rate"
                      value={
                        loanAccount.interestRate
                          ? `${loanAccount.interestRate}%`
                          : "—"
                      }
                    />

                    <LightSummaryRow
                      label="Duration"
                      value={
                        loanAccount.loanDuration
                          ? `${loanAccount.loanDuration} ${loanAccount.durationUnit}`
                          : "—"
                      }
                    />

                    <LightSummaryRow
                      label="Total months"
                      value={calculation.totalMonths || "—"}
                    />
                  </div>
                </section>

                {/* ========================================
                    ADMIN NOTE
                ======================================== */}

                <div className="border-l-2 border-[#ff0066] bg-pink-50 px-5 py-4">
                  <p className="text-xs font-semibold text-slate-900">
                    Final verification
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    Verify the applicant information, identity documents,
                    approved amount and repayment terms before creating the loan
                    account.
                  </p>
                </div>
              </aside>
            </div>
          </form>
        </div>
      </main>
    </AdminLayout>
  );
};

// =====================================================
// SECTION HEADER
// =====================================================

const SectionHeader = ({ number, title, description }) => {
  return (
    <div className="border-b border-slate-200 px-6 py-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff0066]">
        {number}
      </p>

      <h2 className="mt-1 text-lg font-semibold text-slate-900">{title}</h2>

      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
};

// =====================================================
// INPUT
// =====================================================

const Input = ({ label, prefix, suffix, ...props }) => {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-800">{label}</label>

      <div className="relative mt-2">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            {prefix}
          </span>
        )}

        <input
          {...props}
          className={`w-full border border-slate-200 bg-slate-50 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#ff0066] focus:bg-white focus:ring-4 focus:ring-pink-50 ${
            prefix ? "pl-9 pr-4" : suffix ? "pl-4 pr-9" : "px-4"
          }`}
        />

        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

// =====================================================
// SELECT
// =====================================================

const Select = ({ label, children, ...props }) => {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-800">{label}</label>

      <select
        {...props}
        className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#ff0066] focus:bg-white focus:ring-4 focus:ring-pink-50"
      >
        {children}
      </select>
    </div>
  );
};

// =====================================================
// FILE INPUT
// =====================================================

const FileInput = ({ label, file, ...props }) => {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-800">{label}</label>

      <input
        {...props}
        type="file"
        className="mt-2 block w-full cursor-pointer border border-slate-200 bg-slate-50 text-sm text-slate-600 file:mr-4 file:border-0 file:bg-slate-950 file:px-4 file:py-3 file:text-sm file:font-medium file:text-white hover:file:bg-[#ff0066] focus:border-[#ff0066] focus:outline-none focus:ring-4 focus:ring-pink-50"
      />

      <div className="mt-1.5 flex items-center justify-between gap-3">
        <p className="text-xs text-slate-400">JPG, PNG or PDF</p>

        {file && (
          <p className="max-w-[180px] truncate text-xs font-medium text-emerald-600">
            {file.name}
          </p>
        )}
      </div>
    </div>
  );
};

// =====================================================
// READ ONLY FIELD
// =====================================================

const ReadOnlyField = ({ label, value }) => {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1.5 text-sm font-medium text-slate-800">
        {value || "—"}
      </p>
    </div>
  );
};

// =====================================================
// READ ONLY ADDRESS
// =====================================================

const ReadOnlyAddress = ({ address }) => {
  if (!address) {
    return <ReadOnlyField label="Address" value="—" />;
  }

  const addressParts = [
    address.addressLine,
    address.city,
    address.state,
    address.pincode,
  ].filter(Boolean);

  return (
    <ReadOnlyField
      label="Address"
      value={addressParts.length ? addressParts.join(", ") : "—"}
    />
  );
};

// =====================================================
// DARK SUMMARY ROW
// =====================================================

const DarkSummaryRow = ({ label, value, highlight = false }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-xs text-slate-400">{label}</p>

      <p
        className={`text-right text-sm font-semibold ${
          highlight ? "text-pink-400" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

// =====================================================
// LIGHT SUMMARY ROW
// =====================================================

const LightSummaryRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-xs text-slate-400">{label}</p>

      <p className="text-right text-xs font-semibold text-slate-700">{value}</p>
    </div>
  );
};

// =====================================================
// EMPLOYMENT FORMATTER
// =====================================================

const formatEmployment = (employment) => {
  if (!employment) {
    return "—";
  }

  return employment
    .replace("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export default LoanAccount;
