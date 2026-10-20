import React from "react";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const managementMenu = [
  {
    to: "/admin/settings",
    label: "Settings",
    icon: FiSettings,
  },
];

const Sidebar = ({ menu }) => {
  return (
    <aside className="flex h-screen w-[200px] shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* =====================================================
          BRAND
      ====================================================== */}
      <div className="border-b border-slate-100 px-6 py-[11px]">
        <div className="flex items-end gap-1.5">
          <span className="text-[27px] font-black tracking-[-0.07em] text-slate-950">
            finora
          </span>

          <span className="mb-1.5 h-2 w-2 rounded-full bg-[#ff0066]" />
        </div>

        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Financial Operations
        </p>
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <div className="flex-1 overflow-y-auto px-4 py-7 hide-scrollbar-y">
        {/* PRIMARY */}
        <div>
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Operations
          </p>

          <nav className="space-y-1">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `group relative flex items-center justify-between px-3.5 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`h-[17px] w-[17px] transition-colors ${
                            isActive
                              ? "text-[#ff0066]"
                              : "text-slate-400 group-hover:text-slate-700"
                          }`}
                        />

                        <span className="text-sm font-semibold">
                          {item.label}
                        </span>
                      </div>

                      <span
                        className={`text-xs transition-all duration-200 ${
                          isActive
                            ? "translate-x-0 opacity-100 text-[#ff0066]"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        →
                      </span>

                      {isActive && (
                        <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#ff0066]" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* MANAGEMENT */}
        <div className="mt-9">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Management
          </p>

          <nav className="space-y-1">
            {managementMenu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `group relative flex items-center justify-between px-3.5 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`h-[17px] w-[17px] transition-colors ${
                            isActive
                              ? "text-[#ff0066]"
                              : "text-slate-400 group-hover:text-slate-700"
                          }`}
                        />

                        <span className="text-sm font-semibold">
                          {item.label}
                        </span>
                      </div>

                      <span
                        className={`text-xs transition-all duration-200 ${
                          isActive
                            ? "translate-x-0 opacity-100 text-[#ff0066]"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        →
                      </span>

                      {isActive && (
                        <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#ff0066]" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* =====================================================
            SYSTEM STATUS
        ====================================================== */}
      </div>

      {/* =====================================================
          ADMIN PROFILE / LOGOUT
      ====================================================== */}
      <div className="border-t border-slate-200 bg-slate-50/50 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-slate-950 text-xs font-bold text-white">
              A
            </div>

            <div>
              <p className="text-xs font-bold text-slate-950">Administrator</p>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Finora Operations
              </p>
            </div>
          </div>

          <NavLink
            to="/logout"
            className="group flex h-8 w-8 items-center justify-center border border-slate-200 bg-white text-slate-400 transition hover:border-[#ff0066] hover:text-[#ff0066]"
            title="Sign out"
          >
            <FiLogOut className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </NavLink>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
          <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-400">
            Finora Admin
          </span>

          <span className="text-[9px] font-bold text-slate-400">v1.0</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
