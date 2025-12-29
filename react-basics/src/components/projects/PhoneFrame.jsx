const sizes = {
  small: "w-[280px] aspect-[9/19.5] rounded-[28px] scale-95",
  large: "w-[280px] aspect-[9/19.5] rounded-[28px] scale-110",
};



const PhoneFrame = ({ children, size = "small" }) => {
  return (
    <div
      className={`relative ${sizes[size]} bg-black shadow-[0_30px_80px_rgba(0,0,0,0.6)]`}
    >
      {/* Outer metal frame */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/20 via-white/5 to-black/40" />

      {/* Inner bezel */}
      <div className="absolute inset-[2px] rounded-[inherit] bg-black overflow-hidden">
        {/* Screen content */}
        <div className="relative h-full w-full">
          {children}

          {/* Screen glass reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
        </div>
      </div>

      {/* Notch / Camera */}
      <div className="absolute top-2 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-black shadow-inner ring-1 ring-white/10" />

      {/* Power button */}
      <div className="absolute right-[-2px] top-28 h-12 w-[3px] rounded-full bg-gradient-to-b from-white/40 to-white/10 shadow-md" />

      {/* Volume buttons */}
      <div className="absolute left-[-2px] top-24 h-10 w-[3px] rounded-full bg-gradient-to-b from-white/40 to-white/10 shadow-md" />
      <div className="absolute left-[-2px] top-38 h-10 w-[3px] rounded-full bg-gradient-to-b from-white/40 to-white/10 shadow-md" />

    </div>
  );
};

export default PhoneFrame;
