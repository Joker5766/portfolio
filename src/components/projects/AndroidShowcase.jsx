import PhoneFrame from "./PhoneFrame";
import ScreenshotSlider from "./ScreenshotSlider";

const AndroidShowcase = ({ media, compact = false }) => {
  const { screenshots = [], video } = media;

  const leftScreenshot = screenshots[0] || null;
  const rightScreenshot = screenshots[1] || screenshots[0] || null;

  return (
    <div className="group relative flex justify-center items-center w-full py-4 overflow-hidden cursor-pointer">
      {/* LEFT BACKGROUND PHONE — Screenshot 1 */}
      <div className="absolute left-1/2 -translate-x-[112%] scale-[0.78] -rotate-[12deg] opacity-60 pointer-events-none z-0 transition-all duration-500 group-hover:-translate-x-[122%] group-hover:-rotate-[16deg] group-hover:scale-[0.84] group-hover:opacity-85">
        <PhoneFrame size="small">
          {leftScreenshot ? (
            <img src={leftScreenshot} alt="App Screenshot" className="h-full w-full object-cover object-top" />
          ) : (
            <div className="h-full w-full bg-neutral-900 flex items-center justify-center text-xs font-mono text-neutral-600">
              App Preview
            </div>
          )}
        </PhoneFrame>
      </div>

      {/* RIGHT BACKGROUND PHONE — Screenshot 2 */}
      <div className="absolute left-1/2 translate-x-[12%] scale-[0.78] rotate-[12deg] opacity-60 pointer-events-none z-0 transition-all duration-500 group-hover:translate-x-[22%] group-hover:rotate-[16deg] group-hover:scale-[0.84] group-hover:opacity-85">
        <PhoneFrame size="small">
          {rightScreenshot ? (
            <img src={rightScreenshot} alt="App Screenshot" className="h-full w-full object-cover object-top" />
          ) : (
            <div className="h-full w-full bg-neutral-900 flex items-center justify-center text-xs font-mono text-neutral-600">
              App Preview
            </div>
          )}
        </PhoneFrame>
      </div>

      {/* CENTER FOREGROUND PHONE — Autoplay Video / Slider */}
      <div className="relative z-10 shrink-0 shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <PhoneFrame size={compact ? "small" : "large"}>
          {video ? (
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover bg-black"
            />
          ) : (
            <ScreenshotSlider screenshots={screenshots} />
          )}
        </PhoneFrame>
      </div>
    </div>
  );
};

export default AndroidShowcase;
