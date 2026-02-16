import PhoneFrame from "./PhoneFrame";
import ScreenshotSlider from "./ScreenshotSlider";

const AndroidShowcase = ({ media }) => {
  const { screenshots = [], video } = media;

  return (
    <div className="mt-16 md:mt-24 flex justify-center gap-10 md:gap-12 pb-10">
      {/* LEFT PHONE — desktop only */}
      <div className="hidden lg:block">
        <PhoneFrame size="small">
          <ScreenshotSlider screenshots={screenshots} />
        </PhoneFrame>
      </div>

      {/* CENTER PHONE — always visible */}
      <div className="shrink-0">
        <PhoneFrame size="large">
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

      {/* RIGHT PHONE — desktop only */}
      <div className="hidden lg:block">
        <PhoneFrame size="small">
          <ScreenshotSlider screenshots={screenshots} />
        </PhoneFrame>
      </div>
    </div>
  );
};

export default AndroidShowcase;
