import React from "react";

const TopBar = () => {
  return (
    <header className="flex h-[82px] items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">
      {/* =====================================================
          LEFT
      ====================================================== */}
      <div className="flex items-center gap-6">
        {/* Section indicator */}
        <div className="hidden h-8 w-[3px] bg-[#ff0066] sm:block" />

        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Admin
            </span>

            <span className="text-slate-300">/</span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Operations
            </span>
          </div>

          <h1 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">
            Overview
          </h1>
        </div>
      </div>

      {/* =====================================================
          RIGHT
      ====================================================== */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* =================================================
            PENDING APPLICATIONS
        ================================================== */}
        <div className="hidden items-center gap-3 border border-slate-200 px-4 py-2 sm:flex">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff0066]/40" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff0066]" />
          </span>

          <div className="leading-none">
            <p className="text-xs font-bold text-slate-950">24</p>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Pending
            </p>
          </div>
        </div>

        {/* =================================================
            TODAY
        ================================================== */}
        <div className="hidden border-l border-slate-200 pl-5 lg:block">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Today
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-700">
            Operations Center
          </p>
        </div>

        {/* =================================================
            PROFILE
        ================================================== */}
        <div className="group relative flex cursor-pointer items-center gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center bg-slate-950 text-xs font-black text-white transition group-hover:bg-[#ff0066]">
            M
          </div>

          {/* User information */}
          <div className="hidden leading-tight md:block">
            <p className="text-sm font-bold text-slate-950">Mustafa</p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Administrator
            </p>
          </div>

          {/* Dropdown indicator */}
          <span className="ml-1 text-[10px] text-slate-400 transition-transform duration-200 group-hover:translate-y-0.5">
            ↓
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
