import PhoneFrame from "./PhoneFrame";
import ScreenshotSlider from "./ScreenshotSlider";

const AndroidShowcase = ({ media }) => {
  const { screenshots = [], video } = media;

  return (
    <div className="mt-24 flex justify-center gap-12">
      {/* LEFT PHONE */}
      <PhoneFrame size="small">
        <ScreenshotSlider screenshots={screenshots} />
      </PhoneFrame>

      {/* CENTER PHONE */}
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

      {/* RIGHT PHONE */}
      <PhoneFrame size="small">
        <ScreenshotSlider screenshots={screenshots} />
      </PhoneFrame>
    </div>
  );
};

export default AndroidShowcase;
