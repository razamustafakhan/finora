import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowUpRightFromSquare, FaCheck } from "react-icons/fa6";

import PublicLayout from "../../layouts/PublicLayout";

import Work from "../../components/common/Work";
import Testimonial from "../../components/common/Testimonial";
// import Action from "../../components/common/Action";

const About = () => {
  const principles = [
    {
      number: "01",
      title: "Clarity",
      description:
        "Financial decisions should be easier to understand. We keep information straightforward throughout the journey.",
    },
    {
      number: "02",
      title: "Momentum",
      description:
        "Less friction means you can spend less time navigating processes and more time focusing on what comes next.",
    },
    {
      number: "03",
      title: "Trust",
      description:
        "Every interaction is designed around transparency, responsible handling of information, and clear expectations.",
    },
  ];

  const stats = [
    {
      value: "01",
      label: "Simple application",
    },
    {
      value: "02",
      label: "Digital experience",
    },
    {
      value: "03",
      label: "Transparent journey",
    },
  ];

  return (
    <PublicLayout>
      <main className="overflow-hidden bg-white text-black">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative bg-black text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid min-h-[760px] items-end gap-16 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20 lg:pt-32">
              {/* LEFT */}
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#ff0066]" />

                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff0066]">
                    About Finora
                  </span>
                </div>

                <h1 className="max-w-5xl text-[clamp(4rem,9vw,8.5rem)] font-black leading-[0.82] tracking-[-0.075em]">
                  Finance
                  <span className="block text-white/25">without</span>
                  <span className="block text-[#ff0066]">friction.</span>
                </h1>

                <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
                  <p className="max-w-xl text-base leading-8 text-white/50 sm:text-lg">
                    Finora is built around a simple belief: financial
                    experiences should be easier to understand, easier to
                    access, and easier to manage.
                  </p>

                  <NavLink
                    to="/apply-loan"
                    className="group flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-sm font-bold transition-colors hover:border-[#ff0066] hover:text-[#ff0066]"
                  >
                    Start an application
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </NavLink>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="relative lg:mb-4">
                <div className="relative overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Finora financial services"
                    className="h-[420px] w-full object-cover grayscale transition duration-700 hover:grayscale-0 lg:h-[520px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      Our perspective
                    </p>

                    <p className="mt-2 max-w-xs text-lg font-bold leading-6">
                      Better financial experiences start with less complexity.
                    </p>
                  </div>
                </div>

                {/* Accent */}
                <div className="absolute -right-4 -top-4 h-20 w-20 bg-[#ff0066] sm:-right-7 sm:-top-7 sm:h-28 sm:w-28" />
              </div>
            </div>
          </div>

          {/* Bottom label */}
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Finora / About
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Scroll to explore
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            BIG STATEMENT
        ========================================================= */}
        <section className="bg-white py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff0066]">
                  Why we exist
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                  Money is complicated enough.
                  <span className="text-black/25">
                    {" "}
                    Getting financial help shouldn't be.
                  </span>
                </h2>

                <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-2">
                  <p className="text-sm leading-7 text-black/50 sm:text-base">
                    Lending has traditionally been surrounded by complicated
                    processes and difficult-to-understand information.
                  </p>

                  <p className="text-sm leading-7 text-black/50 sm:text-base">
                    Finora takes a different approach by focusing on a cleaner
                    digital experience from application through repayment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATS / PRINCIPLES
        ========================================================= */}
        <section className="bg-[#f4f4f4]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
              {/* SIDE */}
              <div className="border-b border-black/10 py-14 lg:border-b-0 lg:border-r lg:py-20 lg:pr-16">
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff0066]">
                  The Finora approach
                </p>

                <h2 className="mt-6 max-w-sm text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                  Three ideas behind everything we build.
                </h2>
              </div>

              {/* RIGHT */}
              <div className="grid sm:grid-cols-3 lg:pl-10">
                {stats.map((stat, index) => (
                  <div
                    key={stat.value}
                    className={`py-14 sm:px-7 lg:py-20 ${
                      index !== 0
                        ? "border-t border-black/10 sm:border-l sm:border-t-0"
                        : ""
                    }`}
                  >
                    <span className="text-5xl font-black tracking-[-0.05em] text-[#ff0066]">
                      {stat.value}
                    </span>

                    <p className="mt-5 max-w-[150px] text-sm font-bold leading-6 text-black/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MISSION
        ========================================================= */}
        <section className="bg-white py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
              {/* IMAGE */}
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Finora mission"
                    className="h-[500px] w-full object-cover grayscale sm:h-[620px]"
                  />
                </div>

                <div className="absolute -bottom-7 -right-5 max-w-[280px] bg-black p-7 text-white sm:-right-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff0066]">
                    Our mission
                  </span>

                  <p className="mt-4 text-lg font-bold leading-7">
                    Make financial journeys feel more human.
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff0066]">
                  Our story
                </p>

                <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Technology should make things easier.
                </h2>

                <div className="mt-8 space-y-6 text-sm leading-7 text-black/50 sm:text-base">
                  <p>
                    Finora was created with a simple objective: build a
                    financial platform that feels straightforward from the first
                    interaction.
                  </p>

                  <p>
                    We use technology to remove unnecessary friction, organize
                    information clearly, and create a smoother borrowing
                    journey.
                  </p>

                  <p>
                    The result is an experience designed around the person using
                    it — not around complicated financial processes.
                  </p>
                </div>

                <div className="mt-10">
                  <NavLink
                    to="/contact"
                    className="group inline-flex items-center gap-4 bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-[#ff0066]"
                  >
                    Talk to Finora
                    <FaArrowUpRightFromSquare
                      size={11}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRINCIPLES
        ========================================================= */}
        <section className="bg-black py-24 text-white sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* HEADER */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#ff0066]" />

                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff0066]">
                    Our principles
                  </span>
                </div>

                <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl">
                  What
                  <span className="block text-white/25">we stand</span>
                  <span className="block text-[#ff0066]">for.</span>
                </h2>
              </div>

              {/* LIST */}
              <div className="border-t border-white/10">
                {principles.map((principle) => (
                  <div
                    key={principle.number}
                    className="group grid gap-6 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.025] sm:grid-cols-[65px_0.7fr_1.3fr] sm:items-start sm:px-5"
                  >
                    <span className="text-xs font-black tracking-[0.2em] text-[#ff0066]">
                      {principle.number}
                    </span>

                    <h3 className="text-2xl font-black tracking-[-0.03em] transition-colors group-hover:text-[#ff0066] sm:text-3xl">
                      {principle.title}
                    </h3>

                    <p className="max-w-md text-sm leading-7 text-white/40">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PRINCIPLE FOOTER */}
            <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/25">
                Simple by design
              </span>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center bg-[#ff0066] text-white">
                  <FaCheck size={10} />
                </span>

                <span className="text-xs font-semibold text-white/45">
                  Clarity at every step
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================= */}
        <Work />

        {/* =========================================================
            TESTIMONIAL
        ========================================================= */}
        <Testimonial />

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden bg-[#ff0066] px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
              <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-white/60">
                  Ready when you are
                </p>

                <h2 className="mt-6 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
                  Let's make your
                  <span className="block text-black/30">next move happen.</span>
                </h2>

                <p className="mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                  Start your application and take the next step with a simpler
                  financial experience.
                </p>

                <NavLink
                  to="/apply-loan"
                  className="group mt-9 inline-flex items-center gap-5 bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Apply for a loan
                  <span className="flex h-7 w-7 items-center justify-center bg-[#ff0066] text-white transition-transform duration-300 group-hover:rotate-45">
                    <FaArrowUpRightFromSquare size={10} />
                  </span>
                </NavLink>
              </div>

              {/* DECORATION */}
              <div className="pointer-events-none absolute -bottom-48 -right-24 h-[500px] w-[500px] rounded-full border-[90px] border-white/10" />

              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

              <div className="pointer-events-none absolute bottom-10 right-24 hidden text-[10rem] font-black leading-none text-white/[0.06] lg:block">
                F
              </div>
            </div>
          </div>
        </section>

        {/* EXISTING ACTION */}
        {/* <Action /> */}
      </main>
    </PublicLayout>
  );
};

export default About;
