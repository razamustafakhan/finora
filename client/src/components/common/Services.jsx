import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      number: "01",
      label: "For individuals",
      title: "Personal Loans",
      desc: "Flexible financing for education, travel, medical needs, major purchases, and the unexpected moments life brings.",
    },
    {
      number: "02",
      label: "For businesses",
      title: "Business Loans",
      desc: "Capital designed to help businesses manage cash flow, expand operations, purchase equipment, and pursue new opportunities.",
    },
    {
      number: "03",
      label: "For smarter repayments",
      title: "Debt Consolidation",
      desc: "Bring multiple repayments into one structured plan and get a clearer view of your financial commitments.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff0066]" />

              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff0066]">
                What we offer
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl">
              Financing built
              <span className="block text-[#ff0066]">around you.</span>
            </h2>
          </div>

          <div className="flex lg:justify-end">
            <p className="max-w-md text-sm leading-7 text-black/50 sm:text-base">
              From personal milestones to business growth, Finora provides
              straightforward lending solutions without unnecessary complexity.
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative min-h-[430px] overflow-hidden bg-[#f5f5f5] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-black hover:text-white sm:p-9"
            >
              {/* LARGE NUMBER */}
              <span className="absolute -right-3 -top-8 text-[9rem] font-black leading-none tracking-[-0.08em] text-black/[0.045] transition-all duration-500 group-hover:text-white/[0.06] group-hover:-translate-y-3">
                {service.number}
              </span>

              {/* TOP */}
              <div className="relative flex items-start justify-between">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#ff0066]">
                  {service.label}
                </span>

                <span className="text-xs font-bold text-black/30 transition-colors duration-300 group-hover:text-white/30">
                  {service.number}
                </span>
              </div>

              {/* CONTENT */}
              <div className="relative mt-28">
                <h3 className="max-w-xs text-3xl font-black leading-[1.05] tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-white sm:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-6 max-w-sm text-sm leading-7 text-black/50 transition-colors duration-300 group-hover:text-white/50">
                  {service.desc}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between sm:bottom-9 sm:left-9 sm:right-9">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/30 transition-colors duration-300 group-hover:text-white/30">
                  Explore financing
                </span>

                <span className="flex h-11 w-11 items-center justify-center bg-black text-white transition-all duration-300 group-hover:bg-[#ff0066] group-hover:rotate-45">
                  <FaArrowUpRightFromSquare size={12} />
                </span>
              </div>

              {/* PINK EDGE */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#ff0066] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/35">
            One platform. Multiple ways forward.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff0066]" />

            <span className="text-xs font-semibold text-black/50">
              Simple · Transparent · Flexible
            </span>
          </div>
        </div>
      </div>

      {/* DECORATIVE ELEMENT */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#ff0066]/5 blur-3xl" />
    </section>
  );
};

export default Services;
