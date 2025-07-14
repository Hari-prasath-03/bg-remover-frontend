import BgRemovalSteps from "../sections/BgRemovalSteps";
import BgSlider from "../sections/BgSlider";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import TryNow from "../sections/TryNow";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4.5 sm:px-6 lg:px-8 py-5 md:py-16 space-y-20">
      <Hero />
      <BgRemovalSteps />
      <BgSlider />
      <Pricing />
      <TryNow />
    </div>
  );
};

export default Home;
