import Testimonial from "../../components/common/Testimonial";
import PublicLayout from "../../layouts/PublicLayout";
import useLoan from "../../modules/loan/hooks/useLoan";

const LoanApplication = () => {
  const { onLoanChange, onLoanApplicationSubmit, loanObj } = useLoan();

  return (
    <PublicLayout>
      <main className="bg-white">
        {/* ========================================
            HERO
        ======================================== */}
        <section className="relative overflow-hidden border-b border-gray-100">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-pink-100/60 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff0066]">
                Loan Application
              </p>

              <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] text-gray-950 sm:text-5xl lg:text-6xl">
                Funding that moves
                <span className="block text-[#ff0066]">with your plans.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                Tell us a little about yourself and what you need funding for.
                Complete your application digitally and let Finora handle the
                rest.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
                <span>Secure application</span>
                <span>•</span>
                <span>Digital process</span>
                <span>•</span>
                <span>Transparent terms</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            APPLICATION
        ======================================== */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr]">
              {/* ========================================
                  LEFT INFORMATION
              ======================================== */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                  Before you begin
                </p>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-950">
                  A simpler way to apply.
                </h2>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Complete the information below as accurately as possible. This
                  helps us understand your requirements and process your
                  application efficiently.
                </p>

                <div className="mt-8 space-y-6">
                  <InfoItem
                    number="01"
                    title="Tell us about yourself"
                    description="Basic personal and employment information."
                  />

                  <InfoItem
                    number="02"
                    title="Share your requirements"
                    description="Tell us how much you need and why."
                  />

                  <InfoItem
                    number="03"
                    title="Provide your address"
                    description="Add your current residential or business address."
                  />

                  <InfoItem
                    number="04"
                    title="Submit your application"
                    description="Review your information and send your request."
                  />
                </div>

                <div className="mt-10 border-t border-gray-100 pt-6">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Finora Financial Systems
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-950">
                    Smart funding. Clear process.
                  </p>
                </div>
              </aside>

              {/* ========================================
                  FORM
              ======================================== */}
              <div className="border border-gray-200 bg-white">
                {/* FORM HEADER */}
                <div className="border-b border-gray-100 px-6 py-7 sm:px-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff0066]">
                    Application details
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
                    Tell us what you need
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    All fields are important for reviewing your application.
                  </p>
                </div>

                <form
                  onSubmit={onLoanApplicationSubmit}
                  className="px-6 py-8 sm:px-8"
                >
                  {/* ========================================
                      PERSONAL INFORMATION
                  ======================================== */}
                  <FormSection
                    number="01"
                    title="Personal information"
                    description="Basic information to identify you."
                  />

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <Input
                      label="Full name"
                      name="fullName"
                      value={loanObj.fullName}
                      onChange={onLoanChange}
                      placeholder="John Doe"
                    />

                    <Input
                      label="Father's name"
                      name="fatherName"
                      value={loanObj.fatherName}
                      onChange={onLoanChange}
                      placeholder="Father's full name"
                    />

                    <Input
                      label="Email address"
                      name="email"
                      value={loanObj.email}
                      onChange={onLoanChange}
                      placeholder="john@example.com"
                      type="email"
                    />

                    <Input
                      label="Phone number"
                      name="phone"
                      value={loanObj.phone}
                      onChange={onLoanChange}
                      placeholder="9876543210"
                      type="tel"
                    />

                    <Select
                      label="Employment type"
                      name="employment"
                      value={loanObj.employment}
                      onChange={onLoanChange}
                    >
                      <option value="">Select employment type</option>

                      <option value="salaried">Salaried</option>

                      <option value="self_employed">Self-Employed</option>

                      <option value="business">Business Owner</option>

                      <option value="student">Student</option>

                      <option value="retired">Retired</option>

                      <option value="other">Other</option>
                    </Select>

                    <Input
                      label="Monthly income"
                      name="income"
                      value={loanObj.income}
                      onChange={onLoanChange}
                      placeholder="50000"
                      type="number"
                      min="0"
                    />
                  </div>

                  {/* ========================================
                      LOAN INFORMATION
                  ======================================== */}
                  <div className="my-10 border-t border-gray-100" />

                  <FormSection
                    number="02"
                    title="Loan requirements"
                    description="Tell us about the funding you are looking for."
                  />

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <Input
                      label="Loan amount"
                      name="amount"
                      value={loanObj.amount}
                      onChange={onLoanChange}
                      placeholder="100000"
                      type="number"
                      min="1"
                    />

                    <Input
                      label="Loan purpose"
                      name="purpose"
                      value={loanObj.purpose}
                      onChange={onLoanChange}
                      placeholder="Business expansion"
                    />

                    <Input
                      label="Repayment period"
                      name="time"
                      value={loanObj.time}
                      onChange={onLoanChange}
                      placeholder="12"
                      type="number"
                      min="1"
                    />

                    <Select
                      label="Period unit"
                      name="timeUnit"
                      value={loanObj.timeUnit}
                      onChange={onLoanChange}
                    >
                      <option value="months">Months</option>

                      <option value="years">Years</option>
                    </Select>
                  </div>

                  {/* ========================================
                      ADDRESS
                  ======================================== */}
                  <div className="my-10 border-t border-gray-100" />

                  <FormSection
                    number="03"
                    title="Your address"
                    description="Provide your current residential or business address."
                  />

                  <div className="mt-6 space-y-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-800">
                        Address
                      </label>

                      <textarea
                        rows={4}
                        name="addressLine"
                        onChange={onLoanChange}
                        placeholder="House number, street, locality"
                        className="mt-2 w-full resize-none border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#ff0066] focus:bg-white focus:ring-4 focus:ring-pink-50"
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">
                      <Input
                        label="City"
                        name="city"
                        value={loanObj.address.city || ""}
                        onChange={onLoanChange}
                        placeholder="Bareilly"
                      />

                      <Input
                        label="State"
                        name="state"
                        value={loanObj.address?.state || ""}
                        onChange={onLoanChange}
                        placeholder="Uttar Pradesh"
                      />

                      <Input
                        label="Pincode"
                        name="pincode"
                        value={loanObj.address.pincode || ""}
                        onChange={onLoanChange}
                        placeholder="243001"
                        type="text"
                      />
                    </div>
                  </div>

                  {/* ========================================
                      SUBMIT
                  ======================================== */}
                  <div className="mt-10 border-t border-gray-100 pt-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-md text-xs leading-5 text-gray-400">
                        By submitting this application, you confirm that the
                        information provided is accurate.
                      </p>

                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-4 bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#ff0066]"
                      >
                        Submit application
                        <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
      </main>
    </PublicLayout>
  );
};

/* ========================================
   FORM SECTION
======================================== */

const FormSection = ({ number, title, description }) => {
  return (
    <div>
      <div className="flex items-start gap-4">
        <span className="text-xs font-bold tracking-wider text-[#ff0066]">
          {number}
        </span>

        <div>
          <h3 className="text-lg font-bold text-gray-950">{title}</h3>

          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

/* ========================================
   INFORMATION ITEM
======================================== */

const InfoItem = ({ number, title, description }) => {
  return (
    <div className="flex gap-4">
      <span className="text-xs font-bold tracking-wider text-[#ff0066]">
        {number}
      </span>

      <div>
        <h3 className="text-sm font-semibold text-gray-950">{title}</h3>

        <p className="mt-1 text-sm leading-5 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

/* ========================================
   INPUT
======================================== */

const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-800">{label}</label>

      <input
        {...props}
        className="mt-2 w-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#ff0066] focus:bg-white focus:ring-4 focus:ring-pink-50"
      />
    </div>
  );
};

/* ========================================
   SELECT
======================================== */

const Select = ({ label, children, ...props }) => {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-800">{label}</label>

      <select
        {...props}
        className="mt-2 w-full appearance-none border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-[#ff0066] focus:bg-white focus:ring-4 focus:ring-pink-50"
      >
        {children}
      </select>
    </div>
  );
};

export default LoanApplication;
