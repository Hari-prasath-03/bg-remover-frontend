import type React from "react";
import { useState } from "react";

interface ClipImageSliderProps {
  images: string[];
}

const ClipImageSlider: React.FC<ClipImageSliderProps> = ({ images }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSliderPos(Number(e.target.value));

  return (
    <div className="relative bg-white/95 w-full overflow-hidden max-w-4xl mx-auto rounded-xl shadow-lg dark:shadow-dark">
      <img
        src={images[0]}
        alt="original image"
        style={{ clipPath: `inset(0 ${100.05 - sliderPos}% 0 0)` }}
      />
      <img
        src={images[1]}
        alt="bg removed image"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      />

      <input
        type="range"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 appearance-none h-100 bg-transparent slider"
        min={0}
        max={100}
        value={sliderPos}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default ClipImageSlider;
