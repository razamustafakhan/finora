import { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";

import PublicLayout from "../../layouts/PublicLayout";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      number: "01",
      q: "How quickly can I get a loan approval?",
      a: "Most applications are reviewed within a few hours, and approvals are often completed within 24 hours.",
    },
    {
      number: "02",
      q: "What documents are required?",
      a: "You typically need identity proof, address proof, and income verification documents. The exact requirements can vary depending on your application.",
    },
    {
      number: "03",
      q: "Is my data secure with Finora?",
      a: "We use secure systems and appropriate safeguards to help protect the information you provide throughout the application process.",
    },
    {
      number: "04",
      q: "Can I apply for a loan online?",
      a: "Yes. You can complete the application digitally without needing to visit an office for the initial application process.",
    },
    {
      number: "05",
      q: "How do I track my loan application?",
      a: "Once your application has been submitted, you can use your Finora account to follow its status and view relevant loan information.",
    },
    {
      number: "06",
      q: "What happens after my loan is approved?",
      a: "After approval, your account information and repayment details will be available through the relevant loan account workflow.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <PublicLayout>
      <main className="overflow-hidden bg-white text-black">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-black text-white">
          {/* Pink glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ff0066]/20 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              {/* LEFT */}
              <div>
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#ff0066]" />

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff0066]">
                    Help center
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                  Questions?
                  <br />
                  <span className="text-neutral-500">Start here.</span>
                </h1>
              </div>

              {/* RIGHT */}
              <div className="lg:pb-2">
                <p className="max-w-md text-base leading-7 text-neutral-400 lg:text-lg">
                  Find clear answers about applications, verification, loan
                  accounts, security, and the Finora experience.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ff0066]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Frequently asked
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-1 bg-[#ff0066]" />
        </section>

        {/* =====================================================
            FAQ CONTENT
        ====================================================== */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
              {/* LEFT INTRO */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff0066]">
                  FAQ
                </span>

                <h2 className="mt-4 max-w-sm text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                  Everything you need to know.
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
                  We&apos;ve collected some of the most common questions about
                  the Finora lending journey.
                </p>

                {/* MINI CTA */}
                <div className="mt-10 border-l-2 border-[#ff0066] pl-5">
                  <p className="text-sm leading-6 text-neutral-500">
                    Can&apos;t find what you&apos;re looking for?
                  </p>

                  <a
                    href="/contact"
                    className="group mt-3 inline-flex items-center gap-3 text-sm font-bold text-black"
                  >
                    Contact our team
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#ff0066]">
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </a>
                </div>
              </div>

              {/* FAQ LIST */}
              <div className="border-t border-neutral-200">
                {faqs.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={index}
                      className={`border-b border-neutral-200 transition-colors duration-300 ${
                        isActive ? "bg-neutral-50" : "bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-start gap-5 px-5 py-7 text-left sm:px-7"
                        aria-expanded={isActive}
                      >
                        {/* NUMBER */}
                        <span
                          className={`pt-1 text-xs font-bold transition-colors duration-300 ${
                            isActive ? "text-[#ff0066]" : "text-neutral-400"
                          }`}
                        >
                          {item.number}
                        </span>

                        {/* QUESTION */}
                        <span className="flex-1 pr-4 text-base font-bold leading-6 text-black sm:text-lg">
                          {item.q}
                        </span>

                        {/* PLUS */}
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isActive
                              ? "rotate-45 bg-[#ff0066] text-white"
                              : "bg-neutral-100 text-black"
                          }`}
                        >
                          <FaPlus className="text-xs" />
                        </span>
                      </button>

                      {/* ANSWER */}
                      <div
                        className={`grid transition-all duration-300 ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-8 pl-[3.65rem] pr-12 sm:px-7 sm:pl-[4.25rem]">
                            <p className="max-w-2xl text-sm leading-7 text-neutral-500">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <section className="bg-[#ff0066]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/60">
                  Still have questions?
                </span>

                <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] text-black sm:text-4xl lg:text-5xl">
                  Let&apos;s find the answer together.
                </h2>
              </div>

              <a
                href="/contact"
                className="group inline-flex w-fit items-center gap-4 bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Contact Finora
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight className="text-[10px]" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
};

export default Faq;
