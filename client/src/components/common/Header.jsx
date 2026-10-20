import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaShieldHalved,
  FaWallet,
} from "react-icons/fa6";

const Header = () => {
  const items = [
    {
      number: "01",
      icon: <FaBolt />,
      text: "Fast approvals",
    },
    {
      number: "02",
      icon: <FaWallet />,
      text: "Flexible financing",
    },
    {
      number: "03",
      icon: <FaChartLine />,
      text: "Competitive rates",
    },
    {
      number: "04",
      icon: <FaShieldHalved />,
      text: "Transparent process",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* TOP ACCENT */}
      <div className="h-[2px] w-full bg-[#ff0066]" />

      <div className="flex items-stretch">
        {/* STATIC LABEL */}
        <div className="relative z-10 hidden shrink-0 items-center bg-[#ff0066] px-7 sm:flex">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              Finora
            </span>

            <FaArrowRight size={10} />
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative flex min-w-0 flex-1 overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent" />

          <div className="flex w-max animate-finora-marquee items-center">
            {[...items, ...items].map((item, index) => (
              <div
                key={`${item.number}-${index}`}
                className="group flex items-center border-r border-white/10 px-7 py-4 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                {/* NUMBER */}
                <span className="mr-4 text-[10px] font-bold tracking-widest text-[#ff0066]">
                  {item.number}
                </span>

                {/* ICON */}
                <span className="mr-3 text-xs text-white/50 transition-colors duration-300 group-hover:text-[#ff0066]">
                  {item.icon}
                </span>

                {/* TEXT */}
                <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] text-white/65 transition-colors duration-300 group-hover:text-white">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* STATIC RIGHT LABEL */}
        <div className="relative z-10 hidden shrink-0 items-center border-l border-white/10 bg-black px-7 lg:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
            Lending, simplified.
          </span>
        </div>
      </div>

      <style>{`
        @keyframes finora-marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-finora-marquee {
          animation: finora-marquee 28s linear infinite;
        }

        .animate-finora-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-finora-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
