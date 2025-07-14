import { heroVideo } from "../assets";
import { useAuthContext } from "../context/AuthContext";

const Hero = () => {
  const { removeBg } = useAuthContext();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Right */}
      <div className="order-2 md:order-1 flex justify-center">
        <div className="shadow-default dark:shadow-dark rounded-3xl overflow-hidden">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="w-full max-w-[500px] h-auto object-cover"
          />
        </div>
      </div>
      {/* Left */}
      <div className="order-1 md:order-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          The faster <span className="text-primary">Background eraser.</span>
        </h1>
        <p className="text-text-muted dark:text-dark-text-muted mb-8 text-base md:text-lg leading-relaxed">
          Transform your photos with AI-powered background eraser! Highlight
          your subject and create a transparent background in seconds, so you
          can place it in a variety of new designs and destinations. Try it now
          and immerse your subject in a completely new environment!
        </p>
        <div>
          <input
            onChange={(e) =>
              removeBg(
                (e.target as HTMLInputElement).files?.[0] as Blob | MediaSource
              )
            }
            type="file"
            accept="image/jpg,image/png,image/webp"
            id="upload1"
            hidden
          />
          <label
            htmlFor="upload1"
            className="cursor-pointer bg-dark-bg-50 text-dark-text dark:bg-dark-text dark:text-dark-bg-50 font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all hover:opacity-90 ease-in-out"
          >
            Upload Image
          </label>
        </div>
      </div>
    </section>
  );
};

export default Hero;
