import clsx from "clsx";
import { useState } from "react";
import { categoriesList, people, peopleNoBg } from "../assets";
import ClipImageSlider from "../components/ClipImageSlider";

const BgSlider = () => {
  return (
    <section className="relative">
      <h2 className="page-heading">Stunning quality.</h2>
      <p className="page-subheading mb-10">
        Explore the collection of high-quality images, perfect for your next
        project. Whether you need vibrant backgrounds.
      </p>
      <div className="flex justify-center flex-wrap gap-10">
        <ClipImageSlider images={[people, peopleNoBg]} />
      </div>
    </section>
  );
};

export const TabsHeader = () => {
  const [activeCategory, setActiveCategory] = useState(categoriesList[0]);

  return (
    <div className="inline-flex gap-4 bg-bg-50 dark:bg-dark-bg-50 p-2 rounded-full flex-wrap justify-center">
      {categoriesList.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={clsx(
            "px-6 py-2 rounded-full font-medium cursor-pointer",
            activeCategory === category
              ? "bg-bg/90 dark:bg-dark-bg/80 text-neutral-800 dark:text-neutral-100 shadow-sm dark:shadow-dark"
              : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BgSlider;
