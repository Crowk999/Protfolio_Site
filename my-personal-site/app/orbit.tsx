export default function OrbitWidget() {
  return (
    <div className="relative flex items-center justify-center w-[120px] h-[120px] md:w-[160px] md:h-[160px] translate-x-[70%] sm:translate-x-[70%] md:translate-x-0">
      {/* ── Pulse ring ── */}
      <div className="absolute w-[46px] h-[46px] sm:w-[62px] sm:h-[62px] rounded-full border border-[#1D9E75]/30 animate-[pulseRing_2s_ease-out_infinite]" />

      {/* ── Outer dashed orbit ring ── */}
      <div className="absolute w-[108px] h-[108px] sm:w-[144px] sm:h-[144px] rounded-full border border-dashed border-white/[0.04]" />

      {/* ── Inner solid orbit ring ── */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full border border-white/[0.07]" />

      {/* ── Core ── */}
      <div className="relative z-10 w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#0e0e12] border border-white/[0.12] flex flex-col items-center justify-center gap-[2px]">
        <span className="text-white/60 text-[11px] sm:text-base leading-none font-mono">{"{ }"}</span>
        <span className="text-[7px] sm:text-[9px] uppercase tracking-[.08em] text-white/40 font-mono">dev</span>
      </div>

      {/* ── Planet A: AI — starts at 0deg ── */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full animate-[orbit_6s_linear_infinite]">
        <div className="absolute -top-[10px] sm:-top-[13px] left-1/2 -translate-x-1/2 w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] rounded-full bg-[#1a1020] border border-[#7F77DD]/40 flex items-center justify-center text-[7px] sm:text-[9px] font-medium text-[#AFA9EC] tracking-[.04em]">
          AI
        </div>
      </div>

      {/* ── Planet B: FS — starts at 90deg ── */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full animate-[orbitB_6s_linear_infinite]">
        <div className="absolute -top-[10px] sm:-top-[13px] left-1/2 -translate-x-1/2 w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] rounded-full bg-[#0d1a16] border border-[#1D9E75]/40 flex items-center justify-center text-[7px] sm:text-[9px] font-medium text-[#5DCAA5] tracking-[.04em]">
          FS
        </div>
      </div>

      {/* ── Planet C: UI — starts at 180deg ── */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full animate-[orbitC_6s_linear_infinite]">
        <div className="absolute -top-[10px] sm:-top-[13px] left-1/2 -translate-x-1/2 w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] rounded-full bg-[#1a130d] border border-[#D85A30]/35 flex items-center justify-center text-[7px] sm:text-[9px] font-medium text-[#F0997B] tracking-[.04em]">
          UI
        </div>
      </div>

      {/* ── Planet D: D.Op — starts at 270deg ── */}
      <div className="absolute w-[80px] h-[80px] sm:w-[108px] sm:h-[108px] rounded-full animate-[orbitD_6s_linear_infinite]">
        <div className="absolute -top-[10px] sm:-top-[13px] left-1/2 -translate-x-1/2 w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] rounded-full bg-[#0d1219] border border-[#378ADD]/40 flex items-center justify-center text-[7px] sm:text-[9px] font-medium text-[#85B7EB] tracking-[.04em]">
          ML
        </div>
      </div>

    </div>
  );
}

