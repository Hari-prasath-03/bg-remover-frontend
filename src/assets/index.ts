import heroVideo from "./sec4-home-en.mp4";
import people from "./people.jpg";
import peopleNoBg from "./people-removebg.png";
import coin from "./coin.png";

import type { Pricing } from "../types";

const bgRemovalSteps: {
  id: number;
  title: string;
  description: string[];
}[] = [
  {
    id: 1,
    title: "Upload an Image",
    description: [
      'First, choose the image you want to remove background from by clicking on "Start from a photo".',
      "Your image format can be PNG or JPG.",
      "We support all image dimensions.",
    ],
  },
  {
    id: 2,
    title: "Let magic remove the Background",
    description: [
      "Our tool automatically removes the background from your image. Next, you can choose a background color.",
      "Our most popular options are white and transparent backgrounds, but you can pick any color you like.",
    ],
  },
  {
    id: 3,
    title: "Download the Result",
    description: [
      "After selecting a new background color, download your photo and you're done!",
      "You can also save your picture in the Photoraam App by creating an account.",
    ],
  },
];

const categoriesList: string[] = ["People", "Animals", "Products", "Cars"];

const plans: Pricing[] = [
  {
    id: "Basic",
    name: "Basic Package",
    price: 499,
    discount: 60.12,
    credits: 50,
    description: "Best for personal use.",
    popular: false,
  },
  {
    id: "Premium",
    name: "Premium Package",
    price: 899,
    discount: 44.494,
    credits: 200,
    description: "Best for business use.",
    popular: true,
  },
  {
    id: "Ultimate",
    name: "Ultimate Package",
    price: 1499,
    discount: 40.027,
    credits: 500,
    description: "Best for enterprises use.",
    popular: false,
  },
];

const footerIcons: { url: string; icon: string }[] = [
  {
    url: "https://www.instagram.com",
    icon: "https://img.icons8.com/fluent/30/000000/instagram-new.png",
  },
  {
    url: "https://www.linkedin.com",
    icon: "https://img.icons8.com/fluent/30/000000/linkedin-2.png",
  },
];

export {
  heroVideo,
  bgRemovalSteps,
  categoriesList,
  people,
  peopleNoBg,
  plans,
  footerIcons,
  coin,
};
