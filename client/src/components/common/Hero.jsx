import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-gray-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-76px)] items-center gap-16 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ff0066]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff0066]">
                Smarter borrowing starts here
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.045em] text-gray-950 sm:text-6xl lg:text-[72px]">
              Money when
              <br />
              you need it.
              <br />
              <span className="text-[#ff0066]">Life when you want it.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              Simple, transparent loans designed around your needs. Apply
              online, get a quick decision, and choose a repayment plan that
              works for you.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <NavLink
                to="/login"
                className="group flex items-center justify-center gap-4 rounded-full bg-gray-950 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff0066] hover:shadow-xl hover:shadow-pink-200"
              >
                Apply for a loan
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </NavLink>

              <NavLink
                to="/about"
                className="flex items-center justify-center rounded-full border border-gray-200 px-7 py-4 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-950 hover:text-gray-950"
              >
                How Finora works
              </NavLink>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-gray-100 pt-7">
              <div>
                <p className="text-xl font-black tracking-tight text-gray-950">
                  10K+
                </p>
                <p className="mt-1 text-xs font-medium text-gray-400">
                  Customers served
                </p>
              </div>

              <div className="h-8 w-px bg-gray-200" />

              <div>
                <p className="text-xl font-black tracking-tight text-gray-950">
                  ₹50Cr+
                </p>
                <p className="mt-1 text-xs font-medium text-gray-400">
                  Loans facilitated
                </p>
              </div>

              <div className="h-8 w-px bg-gray-200" />

              <div>
                <p className="text-xl font-black tracking-tight text-gray-950">
                  24/7
                </p>
                <p className="mt-1 text-xs font-medium text-gray-400">
                  Customer support
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative mx-auto w-full max-w-[520px]">
            {/* Pink glow */}
            <div className="absolute inset-8 rounded-[3rem] bg-[#ff0066]/10 blur-3xl" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 p-6 shadow-2xl shadow-gray-300 sm:p-8">
              {/* Top */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-400">YOUR LOAN</p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Personal Loan
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff0066] text-sm font-black text-white">
                  F
                </div>
              </div>

              {/* Amount */}
              <div className="mt-12">
                <p className="text-xs font-medium text-gray-500">
                  REQUEST AMOUNT
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tight text-white">
                    ₹2,50,000
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-10">
                <div className="mb-3 flex justify-between text-xs">
                  <span className="text-gray-500">Application progress</span>

                  <span className="font-semibold text-[#ff0066]">82%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-[82%] rounded-full bg-[#ff0066]" />
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                    Monthly payment
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">₹8,420</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                    Repayment
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">36 months</p>
                </div>
              </div>

              {/* Bottom status */}
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#ff0066] p-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-pink-100">
                    Application status
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Ready to review
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#ff0066]">
                  ✓
                </div>
              </div>
            </div>

            {/* Floating approval card */}
            <div className="absolute -left-5 top-12 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Approval
              </p>

              <p className="mt-1 text-sm font-black text-gray-950">
                Quick & simple
              </p>
            </div>

            {/* Floating secure card */}
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:block">
              <p className="text-xs font-semibold text-gray-950">
                Your information
              </p>

              <p className="mt-1 text-[11px] text-gray-400">
                Secure & protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
