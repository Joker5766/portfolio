const sizes = {
  small:
    "w-[220px] sm:w-[260px] md:w-[280px] aspect-[9/19.5] rounded-[28px] scale-100 md:scale-95",
  large:
    "w-[240px] sm:w-[280px] md:w-[300px] aspect-[9/19.5] rounded-[28px] scale-100 md:scale-110",
};

const PhoneFrame = ({ children, size = "small" }) => {
  return (
    <div
      className={`relative ${sizes[size]} bg-neutral-900 border-[6px] border-neutral-800 shadow-2xl overflow-hidden`}
    >
      {/* Screen content */}
      <div className="relative h-full w-full bg-black">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;
