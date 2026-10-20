import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const Footer = () => {
  const companyLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Apply Loan", to: "/apply-loan" },
  ];

  const serviceLinks = [
    { label: "Personal Loans", to: "/apply-loan" },
    { label: "Business Loans", to: "/apply-loan" },
    { label: "Flexible Financing", to: "/apply-loan" },
    { label: "Loan Accounts", to: "/loan-account-list" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* TOP */}
        <div className="border-b border-white/10 py-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
            {/* BRAND */}
            <div className="max-w-md">
              <NavLink to="/" className="group inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-[#ff0066] text-lg font-black text-white transition-transform duration-300 group-hover:rotate-6">
                  F
                </span>

                <span className="text-2xl font-black tracking-[-0.04em]">
                  FINORA
                </span>
              </NavLink>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
                Modern lending built around clarity, speed, and control. Simple
                applications, transparent decisions, and financing designed
                around real financial needs.
              </p>

              {/* SOCIAL */}
              <div className="mt-8 flex gap-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/55 transition-all duration-300 hover:border-[#ff0066] hover:bg-[#ff0066] hover:text-white"
                >
                  <FaFacebookF size={13} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/55 transition-all duration-300 hover:border-[#ff0066] hover:bg-[#ff0066] hover:text-white"
                >
                  <FaTwitter size={13} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/55 transition-all duration-300 hover:border-[#ff0066] hover:bg-[#ff0066] hover:text-white"
                >
                  <FaLinkedinIn size={13} />
                </a>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff0066]">
                Company
              </p>

              <div className="space-y-4">
                {companyLinks.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className="group flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
                  >
                    <span>{item.label}</span>

                    <FaArrowUpRightFromSquare
                      size={9}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff0066]">
                Financing
              </p>

              <div className="space-y-4">
                {serviceLinks.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className="group flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
                  >
                    <span>{item.label}</span>

                    <FaArrowUpRightFromSquare
                      size={9}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff0066]">
                Contact
              </p>

              <div className="space-y-4 text-sm text-white/50">
                <p>support@finora.com</p>
                <p>+91 800 123 4567</p>
                <p>Bareilly, India</p>
              </div>

              <NavLink
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#ff0066]"
              >
                Get in touch
                <span className="text-[#ff0066]">↗</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden border-b border-white/10 py-16 lg:py-20">
          {/* Decorative number */}
          <span className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[11rem] font-black leading-none text-white/[0.025] lg:block">
            F
          </span>

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ff0066]">
                Start your application
              </p>

              <h2 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Your next financial move
                <span className="text-[#ff0066]"> starts here.</span>
              </h2>
            </div>

            <NavLink
              to="/apply-loan"
              className="group inline-flex w-fit items-center gap-5 bg-[#ff0066] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Apply for a loan
              <span className="flex h-7 w-7 items-center justify-center bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                <FaArrowUpRightFromSquare size={10} />
              </span>
            </NavLink>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Finora. All rights reserved.
          </p>

          <div className="flex gap-7">
            <a
              href="#"
              className="text-xs text-white/35 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/35 transition hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
