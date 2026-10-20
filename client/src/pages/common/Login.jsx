import { Navigate, NavLink } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaLock } from "react-icons/fa";

// import { useAuth } from "../../store/context/auth.context";
import PublicLayout from "../../layouts/PublicLayout";
import useAuth from "../../modules/auth/hooks/useAuth";
import Loader from "../../components/common/Loader";

const Login = () => {
  const { onLoginChange, onLoginSubmit, loginObj, loading, userData } =
    useAuth();
  //   const {
  //     state: { loginData, isLoading },
  //     handleLoginChange,
  //     handleLoginSubmit,
  //   } = useAuth();
  if (userData) {
    return <Navigate to="/user/dashboard" replace />;
  }

  return (
    <PublicLayout>
      <main className="min-h-screen bg-white">
        <section className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* =========================================================
              LEFT — BRAND PANEL
          ========================================================= */}
          <div className="relative hidden overflow-hidden bg-slate-950 lg:flex">
            {/* Decorative shapes */}
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
            <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full border border-[#ff0066]/20" />

            <div className="absolute right-16 top-20 h-2 w-2 rounded-full bg-[#ff0066]" />
            <div className="absolute bottom-32 right-32 h-1.5 w-1.5 rounded-full bg-white/40" />

            <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#ff0066]">
                    <span className="text-lg font-black text-white">F</span>
                  </div>

                  <span className="text-xl font-bold tracking-tight text-white">
                    Finora
                  </span>
                </div>
              </div>

              {/* Main statement */}
              <div className="max-w-xl">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff0066]">
                  Digital Lending Platform
                </p>

                <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white xl:text-6xl">
                  Your finances.
                  <br />
                  <span className="text-white/40">Your control.</span>
                </h1>

                <p className="mt-7 max-w-md text-base leading-7 text-slate-400">
                  Manage your loan applications, monitor repayments, and stay
                  connected with your financial journey — all from one secure
                  platform.
                </p>

                {/* Small information blocks */}
                <div className="mt-12 grid max-w-md grid-cols-2 border border-white/10">
                  <div className="border-r border-white/10 p-5">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Experience
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      Simple & transparent
                    </p>
                  </div>

                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Platform
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      Secure & digital
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom text */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <p className="text-xs text-slate-500">Lending, simplified.</p>

                <p className="text-xs text-slate-600">
                  © {new Date().getFullYear()} Finora
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT — LOGIN AREA
          ========================================================= */}
          <div className="flex items-center justify-center px-5 py-12 sm:px-8 lg:px-12 xl:px-20">
            <div className="w-full max-w-md">
              {/* Mobile brand */}
              <div className="mb-12 flex items-center gap-3 lg:hidden">
                <div className="flex h-10 w-10 items-center justify-center bg-[#ff0066]">
                  <span className="text-lg font-black text-white">F</span>
                </div>

                <span className="text-xl font-bold tracking-tight text-slate-950">
                  Finora
                </span>
              </div>

              {/* Heading */}
              <div className="mb-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff0066]">
                  Welcome back
                </p>

                <h2 className="text-4xl font-semibold tracking-[-0.035em] text-slate-950">
                  Sign in to Finora.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your account details to continue to your financial
                  dashboard.
                </p>
              </div>
              {loading && <Loader />}

              {/* =====================================================
                  FORM
              ===================================================== */}
              <form className="space-y-6" onSubmit={onLoginSubmit}>
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
                      value={loginObj.email}
                      onChange={onLoginChange}
                      //   value={loginData.email}
                      //   onChange={handleLoginChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="h-full w-full bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2.5 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-600"
                    >
                      Password
                    </label>

                    <NavLink
                      to="/"
                      className="text-xs font-semibold text-[#ff0066] transition hover:text-slate-950"
                    >
                      Forgot password?
                    </NavLink>
                  </div>

                  <div className="group flex h-13 items-center border border-slate-200 bg-slate-50 transition focus-within:border-[#ff0066] focus-within:bg-white">
                    <div className="flex h-full w-12 items-center justify-center border-r border-slate-200 text-slate-400 transition group-focus-within:text-[#ff0066]">
                      <FaLock size={14} />
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={loginObj.password}
                      onChange={onLoginChange}
                      //   value={loginData.password}
                      //   onChange={handleLoginChange}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="h-full w-full bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Remember */}
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-[#ff0066]"
                  />

                  <span className="text-sm text-slate-500">
                    Keep me signed in
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-13 w-full items-center justify-center gap-3 bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-[#ff0066]"
                >
                  <span>Sign-In</span>

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
                  New to Finora?
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Register */}
              <NavLink
                to="/register"
                className="group flex h-13 w-full items-center justify-center gap-2 border border-slate-200 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                Create your account
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </NavLink>

              {/* Security note */}
              <p className="mt-7 text-center text-xs leading-5 text-slate-400">
                Your account information is handled securely.
                <br />
                Never share your password with anyone.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
};

export default Login;
