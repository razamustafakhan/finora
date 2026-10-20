import React from "react";
import {
  FaArrowUpRightFromSquare,
  FaBolt,
  FaFileShield,
  FaLock,
  FaCircleCheck,
} from "react-icons/fa6";

const WhyChoose = () => {
  const features = [
    {
      number: "01",
      icon: <FaBolt />,
      title: "Built for speed",
      description:
        "A streamlined digital process keeps your application moving without unnecessary friction.",
    },
    {
      number: "02",
      icon: <FaLock />,
      title: "Security first",
      description:
        "Your personal and financial information is handled through secure verification and protected systems.",
    },
    {
      number: "03",
      icon: <FaFileShield />,
      title: "Clear by design",
      description:
        "Understand your loan structure, repayment expectations, and important terms before you commit.",
    },
    {
      number: "04",
      icon: <FaCircleCheck />,
      title: "A better experience",
      description:
        "Everything is designed to make borrowing easier to understand, manage, and navigate.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* LEFT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff0066]" />

              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff0066]">
                Why Finora
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Lending should
              <span className="block text-white/30">feel simpler.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45 sm:text-base">
              We combine modern technology with a straightforward approach to
              create a borrowing experience that puts clarity and control first.
            </p>

            {/* MINI STATEMENT */}
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <span className="flex h-10 w-10 items-center justify-center bg-[#ff0066] text-black">
                <FaCircleCheck size={13} />
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Designed around people
                </p>

                <p className="mt-1 text-xs text-white/35">
                  Less complexity. More clarity.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="border-t border-white/10">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group relative border-b border-white/10 py-8 sm:py-10"
              >
                {/* HOVER BACKGROUND */}
                <div className="pointer-events-none absolute inset-0 -mx-5 bg-white/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:-mx-8 lg:-mx-10" />

                <div className="relative grid gap-6 sm:grid-cols-[55px_45px_1fr_auto] sm:items-start">
                  {/* NUMBER */}
                  <span className="text-xs font-black tracking-[0.15em] text-[#ff0066]">
                    {feature.number}
                  </span>

                  {/* ICON */}
                  <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 group-hover:border-[#ff0066] group-hover:bg-[#ff0066] group-hover:text-white">
                    {feature.icon}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#ff0066] sm:text-3xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-white/40">
                      {feature.description}
                    </p>
                  </div>

                  {/* ARROW */}
                  <div className="hidden sm:block">
                    <div className="flex h-10 w-10 items-center justify-center text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff0066]">
                      <FaArrowUpRightFromSquare size={13} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 border-t border-white/10 pt-8 sm:mt-28 sm:flex sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-white/35">
            A more straightforward way to move forward financially.
          </p>

          <div className="mt-6 sm:mt-0">
            <a
              href="/apply-loan"
              className="group inline-flex items-center gap-4 text-sm font-bold text-white"
            >
              Start your application
              <span className="flex h-9 w-9 items-center justify-center bg-[#ff0066] text-white transition-transform duration-300 group-hover:rotate-45">
                <FaArrowUpRightFromSquare size={10} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* DECORATIVE GLOW */}
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#ff0066]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#ff0066]/5 blur-[100px]" />
    </section>
  );
};

export default WhyChoose;
