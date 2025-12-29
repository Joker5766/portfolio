import PhoneFrame from "./PhoneFrame";
import ScreenshotSlider from "./ScreenshotSlider";

const AndroidShowcase = ({ media }) => {
  const { screenshots = [], video } = media;

  return (
    <div className="mt-16 md:mt-24 flex justify-center gap-10 md:gap-12">
      {/* LEFT PHONE — desktop only */}
      <div className="hidden md:block">
        <PhoneFrame size="small">
          <ScreenshotSlider screenshots={screenshots} />
        </PhoneFrame>
      </div>

      {/* CENTER PHONE — always visible */}
      <PhoneFrame size="large">
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <ScreenshotSlider screenshots={screenshots} />
        )}
      </PhoneFrame>

      {/* RIGHT PHONE — desktop only */}
      <div className="hidden md:block">
        <PhoneFrame size="small">
          <ScreenshotSlider screenshots={screenshots} />
        </PhoneFrame>
      </div>
    </div>
  );
};

export default AndroidShowcase;
