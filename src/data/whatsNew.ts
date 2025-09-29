import Image1 from "@/assets/whats-new/whats-new-1.webp";
import Image2 from "@/assets/whats-new/whats-new-2.webp";
import Image3 from "@/assets/whats-new/whats-new-3.webp";
import { StaticImageData } from "next/image";

interface WhatsNew {
  id: number;
  image: StaticImageData;
  date: string;
  title: string;
  description: string;
  content: {
    id: number;
    title: string;
    description: string[];
  }[];
  tags: string[];
}

const whatsNewList: WhatsNew[] = [
  {
    id: 1,
    image: Image1,
    date: "Apr 10, 2025",
    title: "Celebrate the Season with Our New Spring Drink Specials Today",
    description:
      "Sip into spring with fresh, vibrant flavors — now available at Brewhaus, where every cup is crafted to bring the essence of the season straight to you!",
    content: [
      {
        id: 1,
        title: "Fresh Flavors for a Fresh Season",
        description: [
          "Spring is here, and we’re celebrating with a brand-new lineup of seasonal drinks that are sure to brighten your day! From zesty citrus flavors to delicate floral infusions, our Spring Drink Specials are the perfect way to embrace the warmer weather and new beginnings. Whether you’re craving something refreshing like our Iced Honey Lavender Latte, a vibrant fruity twist with the Strawberry Matcha Cooler, or the smooth richness of our new Vanilla Bean Cold Brew, there’s something for every coffee lover to enjoy.",
          "These limited-time drinks are carefully crafted to capture the very essence of spring in every sip, using fresh, seasonal ingredients and vibrant flavors that will give you that perfect seasonal lift. Whether enjoyed hot or iced, these drinks are ideal for sipping while soaking in the sunshine or taking a leisurely stroll through your favorite neighborhood.",
        ],
      },
      {
        id: 2,
        title: "Try Them Today!",
        description: [
          "Don’t miss out — our Spring Drink Specials are available for a limited time only! Come by your local Brewhaus or order online to treat yourself to something fresh, exciting, and new. We’re sure these drinks will quickly become your new seasonal favorites.",
        ],
      },
    ],
    tags: [
      "spring",
      "seasonalflavors",
      "newdrinkspecials",
      "tastetheseason",
      "brewhaus",
    ],
  },
  {
    id: 2,
    image: Image2,
    date: "Apr 2, 2025",
    title: "Our New Brewhaus Flushing Location Is Now Officially Open",
    description:
      "Fresh brews, cozy vibes, and a new neighborhood to call home — we’re thrilled to bring the Brewhaus to Flushing, and we can’t wait to share it with you.",
    content: [
      {
        id: 1,
        title: "Brewhaus Expands to Flushing",
        description: [
          "We’re thrilled to announce that our newest Brewhaus location is now officially open in Flushing, Queens! After months of preparation, we’re excited to bring the same great coffee, delicious pastries, and cozy atmosphere to a whole new neighborhood. Our team is ready to serve up your favorites, from handcrafted espresso drinks to our signature cold brews, all served with the warmth and care you've come to expect from Brewhaus.",
          "Flushing has always had a special place in our hearts, and we’re beyond excited to be part of this vibrant community. Whether you're grabbing a coffee on the go, enjoying a cozy break in our café, or meeting friends for a catch-up, Brewhaus Flushing is your new go-to spot.",
        ],
      },
      {
        id: 2,
        title: "Join Us for Our Grand Opening Celebration",
        description: [
          "To celebrate our grand opening, we’re hosting an exciting Grand Opening Week filled with promotions, giveaways, and, of course, plenty of freshly brewed coffee. Come join the fun and enjoy special offers like free coffee samples, discounted drinks, exclusive deals for our first customers, and a chance to win a Brewhaus gift card!",
          "Plus, we'll have fun activities, music, and surprises throughout the week. It's our way of saying thank you for welcoming us into the Flushing community. We can’t wait to greet you and share this moment together, so come by and make this opening one to remember!",
        ],
      },
    ],
    tags: ["flushing", "newbrewintown", "coffee", "brewhaus"],
  },
  {
    id: 3,
    image: Image3,
    date: "Mar 23, 2025",
    title: "Introducing Our Exciting New Loyalty Program for Coffee Lovers",
    description:
      "Get rewarded every time you enjoy your favorite brew — our brand-new loyalty program is here to make your coffee experience even more rewarding!",
    content: [
      {
        id: 1,
        title: "Redeem Points for Free Drinks and Perks",
        description: [
          "Once you start stacking up your points, it’s time to redeem them for something you love! For every 10 points you accumulate, you’ll get a free drink or snack. So, if you're craving that caramel macchiato or need a sweet treat like a muffin or brownie, you can enjoy it completely free. But that’s not all — our loyalty members will also receive exclusive perks, like early access to limited-time drinks, surprise discounts, and special offers throughout the year. It’s our way of showing appreciation for being a part of the Brewhaus family.",
        ],
      },
      {
        id: 2,
        title: "Signing Up is Easy and Free",
        description: [
          "Becoming a member of our loyalty program is quick, easy, and completely free. You can sign up in-store or online in just a few simple steps. Once you’re in, you’ll start earning points immediately with your first purchase. The program is completely digital, which means you don’t have to worry about carrying extra cards around.",
          "Simply use the app or scan your loyalty card every time you make a purchase, and we’ll take care of the rest. Not only will you earn rewards, but you’ll also be the first to know about new promotions, exclusive events, and exciting seasonal drink launches. So why wait? Sign up today and start enjoying the rewards of being a Brewhaus regular!",
        ],
      },
    ],
    tags: ["coffeerewards", "loyaltyperks", "brewhausloyalty", "brewhaus"],
  },
];

export default whatsNewList;
