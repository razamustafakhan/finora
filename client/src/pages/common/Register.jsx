import { NavLink } from "react-router-dom";

import { FaArrowRight, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

import PublicLayout from "../../layouts/PublicLayout";
import useAuth from "../../modules/auth/hooks/useAuth";
import Loader from "../../components/common/Loader";

const Register = () => {
  const { registerObj, onRegisterChange, onRegisterSubmit, loading } =
    useAuth();
  return (
    <PublicLayout>
      <main className="min-h-screen bg-white">
        <section className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* =========================================================
              LEFT — CREATE ACCOUNT INTRO
          ========================================================= */}
          <div className="relative hidden overflow-hidden bg-slate-950 lg:block">
            {/* Decorative elements */}
            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="absolute -bottom-48 -right-40 h-[520px] w-[520px] rounded-full border border-[#ff0066]/20" />

            <div className="absolute left-20 top-28 h-2 w-2 rounded-full bg-[#ff0066]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-16">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#ff0066]">
                  <span className="text-lg font-black text-white">F</span>
                </div>

                <span className="text-xl font-bold tracking-tight text-white">
                  Finora
                </span>
              </div>

              {/* Main content */}
              <div className="max-w-lg">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff0066]">
                  Create your account
                </p>

                <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white xl:text-6xl">
                  Start your
                  <br />
                  <span className="text-white/40">financial journey.</span>
                </h1>

                <p className="mt-7 max-w-md text-base leading-7 text-slate-400">
                  Create your Finora account and get a simple, transparent way
                  to manage your lending experience.
                </p>

                {/* Feature list */}
                <div className="mt-12 space-y-0 border-y border-white/10">
                  <Feature
                    number="01"
                    title="One simple account"
                    description="Keep your financial activity organized in one place."
                  />

                  <Feature
                    number="02"
                    title="Clear loan management"
                    description="Track applications, accounts and repayments."
                  />

                  <Feature
                    number="03"
                    title="Built for simplicity"
                    description="A straightforward digital lending experience."
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <p className="text-xs text-slate-500">Lending, simplified.</p>

                <p className="text-xs text-slate-600">
                  © {new Date().getFullYear()} Finora
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT — REGISTER FORM
          ========================================================= */}
          <div className="flex items-center justify-center px-5 py-12 sm:px-8 lg:px-12 xl:px-20">
            <div className="w-full max-w-lg">
              {/* Mobile brand */}
              <div className="mb-12 flex items-center gap-3 lg:hidden">
                <div className="flex h-10 w-10 items-center justify-center bg-[#ff0066]">
                  <span className="text-lg font-black text-white">F</span>
                </div>

                <span className="text-xl font-bold tracking-tight text-slate-950">
                  Finora
                </span>
              </div>
              {loading && <Loader />}
              {/* Heading */}
              <div className="mb-9">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff0066]">
                  Get started
                </p>

                <h2 className="text-4xl font-semibold tracking-[-0.035em] text-slate-950">
                  Create your account.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  Set up your account in a few simple steps. Your financial
                  dashboard starts here.
                </p>
              </div>

              {/* =====================================================
                  FORM
              ===================================================== */}
              <form className="space-y-5" onSubmit={onRegisterSubmit}>
                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Username
                  </label>

                  <div className="group flex h-13 items-center border border-slate-200 bg-slate-50 transition focus-within:border-[#ff0066] focus-within:bg-white">
                    <div className="flex h-full w-12 items-center justify-center border-r border-slate-200 text-slate-400 transition group-focus-within:text-[#ff0066]">
                      <FaUser size={14} />
                    </div>

                    <input
                      id="username"
                      type="text"
                      name="userName"
                      value={registerObj.userName}
                      onChange={onRegisterChange}
                      placeholder="Choose a username"
                      autoComplete="username"
                      className="h-full w-full bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Email address
                  </label>

                  <div className="group flex h-13 items-center border border-slate-200 bg-slate-50 transition focus-within:border-[#ff0066] focus-within:bg-white">
                    <div className="flex h-full w-12 items-center justify-center border-r border-slate-200 text-slate-400 transition group-focus-within:text-[#ff0066]">
                      <FaEnvelope size={14} />
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={registerObj.email}
                      onChange={onRegisterChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="h-full w-full bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Password
                  </label>

                  <div className="group flex h-13 items-center border border-slate-200 bg-slate-50 transition focus-within:border-[#ff0066] focus-within:bg-white">
                    <div className="flex h-full w-12 items-center justify-center border-r border-slate-200 text-slate-400 transition group-focus-within:text-[#ff0066]">
                      <FaLock size={14} />
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={registerObj.password}
                      onChange={onRegisterChange}
                      placeholder="Create a strong password"
                      autoComplete="new-password"
                      className="h-full w-full bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Password hint */}
                <p className="-mt-1 text-xs leading-5 text-slate-400">
                  Use at least 8 characters with a combination of letters and
                  numbers.
                </p>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#ff0066]"
                  />

                  <span className="text-xs leading-5 text-slate-500">
                    I agree to the{" "}
                    <NavLink
                      to="/"
                      className="font-semibold text-slate-800 hover:text-[#ff0066]"
                    >
                      Terms of Service
                    </NavLink>{" "}
                    and{" "}
                    <NavLink
                      to="/"
                      className="font-semibold text-slate-800 hover:text-[#ff0066]"
                    >
                      Privacy Policy
                    </NavLink>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-13 w-full items-center justify-center gap-3 bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-[#ff0066]"
                >
                  <span>Create Finora account</span>

                  <FaArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Already registered?
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Login */}
              <NavLink
                to="/login"
                className="group flex h-13 w-full items-center justify-center gap-2 border border-slate-200 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                Sign in to your account
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </NavLink>

              {/* Bottom note */}
              <p className="mt-7 text-center text-xs leading-5 text-slate-400">
                By creating an account, you can access Finora's digital lending
                services and account management tools.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
};

/* ============================================================
   FEATURE
============================================================ */

const Feature = ({ number, title, description }) => {
  return (
    <div className="group flex gap-5 border-b border-white/10 py-5 last:border-b-0">
      <span className="pt-1 text-xs font-semibold text-[#ff0066]">
        {number}
      </span>

      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>

        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default Register;
