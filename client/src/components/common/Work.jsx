import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLaptop,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const Work = () => {
  const steps = [
    {
      number: "01",
      label: "START",
      title: "Apply online",
      desc: "Tell us what you need through a simple digital application designed to keep the process quick and straightforward.",
      icon: <FaLaptop />,
    },
    {
      number: "02",
      label: "REVIEW",
      title: "Get verified",
      desc: "Your application details are reviewed through a secure verification process so you know exactly where things stand.",
      icon: <FaCheckCircle />,
    },
    {
      number: "03",
      label: "COMPLETE",
      title: "Receive your funds",
      desc: "Once approved, your funds can be transferred securely, giving you a clear path from application to completion.",
      icon: <FaMoneyCheckAlt />,
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ff0066]" />

              <span className="text-xs font-bold tracking-[0.25em] text-[#ff0066]">
                HOW IT WORKS
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              From application
              <br />
              to <span className="text-[#ff0066]">approval.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg leading-8 text-neutral-500">
              A lending experience built around clarity. Apply digitally,
              complete verification, and follow your application without
              unnecessary complexity.
            </p>
          </div>
        </div>

        {/* PROCESS */}
        <div className="relative mt-20">
          {/* DESKTOP CONNECTING LINE */}
          <div className="absolute left-[8%] right-[8%] top-[43px] hidden h-px bg-neutral-200 lg:block">
            <div className="h-px w-2/3 bg-[#ff0066]" />
          </div>

          <div className="relative grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative overflow-hidden bg-neutral-50 p-8 transition-all duration-500 hover:bg-black hover:text-white lg:min-h-[390px] lg:p-10"
              >
                {/* BACKGROUND NUMBER */}
                <span className="pointer-events-none absolute -right-5 -top-10 text-[150px] font-black leading-none tracking-[-0.08em] text-neutral-200 transition-all duration-500 group-hover:text-white/5">
                  {step.number}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  {/* NUMBER / ICON */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-[0.2em] text-[#ff0066]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center bg-black text-white transition-all duration-500 group-hover:bg-[#ff0066]">
                      {step.icon}
                    </div>
                  </div>

                  {/* LABEL */}
                  <div className="mt-12">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-400 transition-colors group-hover:text-neutral-500">
                      {step.label}
                    </span>

                    <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-black transition-colors group-hover:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500 transition-colors group-hover:text-neutral-400">
                      {step.desc}
                    </p>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-auto pt-10">
                    <div className="flex items-center justify-between border-t border-neutral-200 pt-5 transition-colors group-hover:border-white/10">
                      <span className="text-xs font-semibold text-neutral-400">
                        STEP {index + 1}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-black transition-all duration-300 group-hover:border-[#ff0066] group-hover:bg-[#ff0066] group-hover:text-white">
                        <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-16 flex flex-col gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-neutral-500">
            Every step is designed to keep you informed, reduce friction, and
            make the financing journey easier to follow.
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff0066]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">
              Simple. Secure. Digital.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
