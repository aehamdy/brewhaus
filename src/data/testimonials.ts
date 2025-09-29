import testimonialImage1 from "@/assets/testimonials/testimonial-1.webp";
import testimonialImage2 from "@/assets/testimonials/testimonial-2.webp";
import testimonialImage3 from "@/assets/testimonials/testimonial-3.webp";
import { StaticImageData } from "next/image";

type testimonialItem = {
  id: number;
  name: string;
  title: string;
  feedback: string;
  image: StaticImageData;
};

const testimonialsList: testimonialItem[] = [
  {
    id: 1,
    name: "Patrick M.",
    title: "Espresso lover",
    feedback:
      "Brewhaus has spoiled other coffee shops for me – in the best way. Great espresso, fresh pastries, and a team that makes you feel like a regular from day one.",
    image: testimonialImage1,
  },
  {
    id: 2,
    name: "Jordan T.",
    title: "Iced latte addict",
    feedback:
      "I stop by every morning before work, and it’s the best part of my day. The iced latte is my go-to, but I’ve honestly never had a bad drink here. Everything tastes handcrafted and full of care.",
    image: testimonialImage2,
  },
  {
    id: 3,
    name: "Sofia R.",
    title: "Coffee fan",
    feedback:
      "Always a warm, welcoming vibe — perfect for a quick coffee or a quiet read. The banana bread? Totally addictive.",
    image: testimonialImage3,
  },
];

export default testimonialsList;
