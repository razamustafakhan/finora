import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex min-h-[180px] items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Loader */}
        <div className="relative flex h-12 w-12 items-center justify-center">
          {/* Soft glow */}
          <div className="absolute inset-0 rounded bg-[#ff0066]/30 " />

          <ColorRing
            visible={true}
            height="55"
            width="55"
            ariaLabel="finora-loading"
            colors={["#000000"]}
          />
        </div>

        {/* Brand loading text */}
        <div className="mt-4 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-900">
            Finora
          </p>

          <p className="mt-1 text-xs text-slate-400">Processing your request</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
