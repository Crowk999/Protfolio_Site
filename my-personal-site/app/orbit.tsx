export default function OrbitWidget() {
  return (
    <div className="relative flex items-center justify-center w-[120px] h-[120px] md:w-[160px] md:h-[160px] translate-x-[70%] sm:translate-x-[70%] md:translate-x-0">

      {/* Pulse ring */}
      <div className="absolute w-[46px] h-[46px] sm:w-[62px] sm:h-[62px] rounded-full border border-[#1D9E75]/25 animate-[pulseRing_2.5s_ease-out_infinite]" />

      {/* Outer orbit */}
      <div className="absolute w-[108px] h-[108px] sm:w-[144px] sm:h-[144px] rounded-full border border-dashed border-white/[0.045]" />

      {/* Inner orbit */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full border border-white/[0.07]" />

      {/* Core */}
      <div className="relative z-10 w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#0e0e12] border border-white/[0.13] flex flex-col items-center justify-center gap-[3px] shadow-[0_0_24px_rgba(255,255,255,0.035)]">
        <span className="text-white/65 text-[11px] sm:text-base leading-none font-mono">
          {"{ }"}
        </span>

        <span className="text-[7px] sm:text-[9px] uppercase tracking-[.1em] text-white/35 font-mono">
          dev
        </span>
      </div>

      {/* AI */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full animate-[orbit_7s_linear_infinite]">
        <div
          className="
            absolute -top-[10px] sm:-top-[13px] left-1/2 -translate-x-1/2
            w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]
            rounded-full
            bg-[#171323]
            border border-[#7F77DD]/45
            flex items-center justify-center
            text-[7px] sm:text-[9px]
            font-medium
            text-[#AFA9EC]
            tracking-[.04em]
            shadow-[0_0_12px_rgba(127,119,221,0.12)]
          "
        >
          AI
        </div>
      </div>

      {/* WEB */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full animate-[orbitB_7s_linear_infinite]">
        <div
          className="
            absolute -top-[10px] sm:-top-[13px] left-1/2 -translate-x-1/2
            w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]
            rounded-full
            bg-[#0d1916]
            border border-[#1D9E75]/45
            flex items-center justify-center
            text-[7px] sm:text-[9px]
            font-medium
            text-[#5DCAA5]
            tracking-[.04em]
            shadow-[0_0_12px_rgba(29,158,117,0.11)]
          "
        >
          WEB
        </div>
      </div>

      {/* API */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full animate-[orbitC_7s_linear_infinite]">
        <div
          className="
            absolute -top-[10px] sm:-top-[13px] left-1/2 -translate-x-1/2
            w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]
            rounded-full
            bg-[#1a120e]
            border border-[#D85A30]/40
            flex items-center justify-center
            text-[7px] sm:text-[9px]
            font-medium
            text-[#F0997B]
            tracking-[.04em]
            shadow-[0_0_12px_rgba(216,90,48,0.1)]
          "
        >
          API
        </div>
      </div>

      {/* SYS */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full animate-[orbitD_7s_linear_infinite]">
        <div
          className="
            absolute -top-[10px] sm:-top-[13px] left-1/2 -translate-x-1/2
            w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]
            rounded-full
            bg-[#0d131a]
            border border-[#378ADD]/40
            flex items-center justify-center
            text-[7px] sm:text-[9px]
            font-medium
            text-[#85B7EB]
            tracking-[.04em]
            shadow-[0_0_12px_rgba(55,138,221,0.1)]
          "
        >
          SYS
        </div>
      </div>

    </div>
  );
}

