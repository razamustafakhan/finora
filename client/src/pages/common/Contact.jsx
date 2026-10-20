import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import PublicLayout from "../../layouts/PublicLayout";

const Contact = () => {
  const contactDetails = [
    {
      number: "01",
      icon: <FaEnvelope />,
      label: "Email",
      value: "support@finora.com",
    },
    {
      number: "02",
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+1 800 123 4567",
    },
    {
      number: "03",
      icon: <FaMapMarkerAlt />,
      label: "Office",
      value: "New York, USA",
    },
    {
      number: "04",
      icon: <FaClock />,
      label: "Working Hours",
      value: "Mon — Fri / 9AM — 6PM",
    },
  ];

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
                    Get in touch
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                  Let&apos;s talk
                  <br />
                  <span className="text-neutral-500">finance.</span>
                </h1>
              </div>

              {/* RIGHT */}
              <div className="lg:pb-2">
                <p className="max-w-md text-base leading-7 text-neutral-400 lg:text-lg">
                  Have a question about your application, loan account, or
                  financing journey? Send us a message and our team will help
                  you find the right next step.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ff0066]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                    We&apos;re here to help
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom pink line */}
          <div className="h-1 bg-[#ff0066]" />
        </section>

        {/* =====================================================
            CONTACT + FORM
        ====================================================== */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* =================================================
                  CONTACT DETAILS
              ================================================== */}
              <div>
                <div className="mb-10">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff0066]">
                    Contact details
                  </span>

                  <h2 className="mt-4 max-w-sm text-3xl font-black leading-tight tracking-[-0.03em] text-black sm:text-4xl">
                    Start a conversation with Finora.
                  </h2>
                </div>

                <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                  {contactDetails.map((item) => (
                    <div key={item.number} className="group flex gap-5 py-6">
                      {/* NUMBER */}
                      <span className="pt-1 text-xs font-bold text-[#ff0066]">
                        {item.number}
                      </span>

                      {/* ICON */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-neutral-100 text-sm text-black transition-colors duration-300 group-hover:bg-[#ff0066] group-hover:text-white">
                        {item.icon}
                      </div>

                      {/* CONTENT */}
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                          {item.label}
                        </span>

                        <p className="mt-1 text-sm font-medium text-black">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SMALL NOTE */}
                <div className="mt-8 border-l-2 border-[#ff0066] pl-5">
                  <p className="text-sm leading-6 text-neutral-500">
                    For account-specific questions, please include your
                    registered email address so our team can assist you
                    efficiently.
                  </p>
                </div>
              </div>

              {/* =================================================
                  FORM
              ================================================== */}
              <div className="relative bg-neutral-50 p-7 sm:p-10 lg:p-12">
                {/* FORM HEADER */}
                <div className="mb-10 flex items-start justify-between gap-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff0066]">
                      Send a message
                    </span>

                    <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-black sm:text-4xl">
                      How can we help?
                    </h2>
                  </div>

                  <span className="hidden text-5xl font-black leading-none text-neutral-200 sm:block">
                    01
                  </span>
                </div>

                <form className="space-y-7">
                  {/* NAME + EMAIL */}
                  <div className="grid gap-7 md:grid-cols-2">
                    <div className="group">
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-neutral-500"
                      >
                        Full Name
                      </label>

                      <input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        className="w-full border-b border-neutral-300 bg-transparent px-0 py-4 text-sm text-black outline-none placeholder:text-neutral-400 transition-colors focus:border-[#ff0066]"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-neutral-500"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full border-b border-neutral-300 bg-transparent px-0 py-4 text-sm text-black outline-none placeholder:text-neutral-400 transition-colors focus:border-[#ff0066]"
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-neutral-500"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="w-full border-b border-neutral-300 bg-transparent px-0 py-4 text-sm text-black outline-none placeholder:text-neutral-400 transition-colors focus:border-[#ff0066]"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-neutral-500"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us what you need help with..."
                      className="w-full resize-none border-b border-neutral-300 bg-transparent px-0 py-4 text-sm text-black outline-none placeholder:text-neutral-400 transition-colors focus:border-[#ff0066]"
                    />
                  </div>

                  {/* SUBMIT */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-4 bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#ff0066]"
                    >
                      Send Message
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                        <FaArrowRight className="text-[10px]" />
                      </span>
                    </button>
                  </div>
                </form>
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
                  Finora
                </span>

                <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] text-black sm:text-4xl lg:text-5xl">
                  Your next financial step starts with a conversation.
                </h2>
              </div>

              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
};

export default Contact;
