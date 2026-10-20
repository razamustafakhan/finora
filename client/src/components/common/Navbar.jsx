import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import useAuth from "../../modules/auth/hooks/useAuth";
// import { useAuth } from "../../store/context/auth.context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { userData, loading } = useAuth();

  //   if (loading) return null;

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const dashboardPath =
    userData?.role === "admin" ? "/admin/dashboard" : "/user/dashboard";

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= DESKTOP HEADER ================= */}
        <div className="flex h-[76px] items-center justify-between">
          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <span className="text-[25px] font-black tracking-[-0.04em] text-gray-950">
              Finora
            </span>

            <span className="ml-1.5 h-2 w-2 rounded-full bg-[#ff0066]" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gray-950 text-white"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-950"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {userData && (
              <NavLink
                to="/loan-application"
                className={({ isActive }) =>
                  `ml-1 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gray-950 text-white"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-950"
                  }`
                }
              >
                Apply Loan
              </NavLink>
            )}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden items-center gap-3 lg:flex">
            {userData ? (
              <>
                <NavLink
                  to={dashboardPath}
                  className="rounded-full border border-gray-200 px-5 py-2.5 text-[14px] font-semibold text-gray-900 transition hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                >
                  Dashboard
                </NavLink>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff0066] text-sm font-bold text-white">
                  {userData?.userName?.charAt(0)?.toUpperCase() || "U"}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="px-4 py-2.5 text-[14px] font-semibold text-gray-700 transition hover:text-gray-950"
                >
                  Sign in
                </Link>

                <Link
                  to="/sign-up"
                  className="rounded-full bg-gray-950 px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff0066] hover:shadow-lg hover:shadow-pink-200"
                >
                  Get started
                </Link>
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-900 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="border-t border-gray-100 py-5 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-sm font-medium ${
                      isActive
                        ? "bg-gray-950 text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {userData && (
                <>
                  <NavLink
                    to="/apply-loan"
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#ff0066] hover:bg-pink-50"
                  >
                    Apply for a loan
                  </NavLink>

                  <NavLink
                    to={dashboardPath}
                    onClick={closeMenu}
                    className="rounded-xl bg-gray-950 px-4 py-3.5 text-sm font-semibold text-white"
                  >
                    Dashboard
                  </NavLink>
                </>
              )}

              {!userData && (
                <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-4">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Sign in
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="rounded-xl bg-[#ff0066] px-4 py-3.5 text-center text-sm font-semibold text-white"
                  >
                    Get started
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
