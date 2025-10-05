import Image1 from "@/assets/whats-new/whats-new-1.webp";
import Image2 from "@/assets/whats-new/whats-new-2.webp";
import Image3 from "@/assets/whats-new/whats-new-3.webp";
import Image4 from "@/assets/whats-new/whats-new-4.webp";
import Image5 from "@/assets/whats-new/whats-new-5.webp";
import Image6 from "@/assets/whats-new/whats-new-6.webp";
import { StaticImageData } from "next/image";

export interface WhatsNew {
  id: number;
  image: StaticImageData;
  date: string;
  title: string;
  slug: string;
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
    slug: "celebrate-the-season-with-our-new-spring-drink-specials-today",
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
    slug: "our-new-brewhaus-flushing-location-is-now-officially-open",
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
    slug: "introducing-our-exciting-new-loyalty-program-for-coffee-lovers",
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
  {
    id: 4,
    image: Image4,
    date: "Mar 6, 2025",
    title: "We're Now Available on DoorDash and Uber Eats for Easy Ordering!",
    slug: "were-now-available-on-doordash-and-uber-eats-for-easy-ordering",
    description:
      "Great coffee is now just a few taps away — always freshly made and delivered straight to your door, exactly when and wherever you need it most.",
    content: [
      {
        id: 1,
        title: "Coffee, delivered the way you want it",
        description: [
          "We know life gets busy — and sometimes, stepping out just isn’t in the cards. That’s why we’re excited to announce that you can now order your favorite Brewhaus drinks and treats directly through DoorDash and Uber Eats.",
          "Whether you're working from home, relaxing on the weekend, or just need your usual order without the wait, we’ve got you covered. From handcrafted lattes to fresh pastries, everything you love from our café is now just a few taps away.",
        ],
      },
      {
        id: 2,
        title: "How to order",
        description: [
          "Just open your DoorDash or Uber Eats app, search for Brewhaus, and place your order for delivery or pickup. It’s fast, easy, and lets you enjoy your favorites without missing a beat.",
          "Coffee on your couch? Yes, please.",
        ],
      },
    ],
    tags: [
      "coffeetoyou",
      "doordash",
      "ubereats",
      "brewhausdelivery",
      "brewhaus",
    ],
  },
  {
    id: 5,
    image: Image5,
    date: "Feb 18, 2025",
    title: "Brewhaus Proudly Celebrates 2 Years Serving Brooklyn",
    slug: "brewhaus-proudly-celebrates-2-years-serving-brooklyn",
    description:
      "Great coffee is now just a few taps away — always freshly made and delivered straight to your door, exactly when and wherever you need it most.",
    content: [
      {
        id: 1,
        title: "A big thank you, Brooklyn",
        description: [
          "This month marks two incredible years since we opened our doors in the heart of Williamsburg — and we couldn’t be more grateful. What started as a cozy corner for great coffee has grown into a warm and welcoming spot where locals gather, remote workers recharge, and friends connect over their favorite brews.",
          "Over the past two years, we’ve served thousands of handcrafted drinks, introduced seasonal favorites, partnered with local bakers and roasters, and shared a lot of smiles. We’ve watched regulars become friends and first-time visitors become part of the Brewhaus family. From cold brews on hot days to snowy mornings with cappuccinos in hand, it’s been a journey full of flavor and heart — and we’re just getting started.",
        ],
      },
      {
        id: 2,
        title: "Join us for a week of thanks",
        description: [
          "To celebrate, we’re offering special deals and surprises all week long at our Brooklyn location — including $2 espresso shots and limited-edition merch drops. Come by, raise a cup, and help us toast to what’s next. Thank you for being part of the Brewhaus story. Here’s to many more years of great coffee and even better community.",
        ],
      },
    ],
    tags: [
      "2yearsstrong",
      "coffeewithcommunity",
      "thankyoubrooklyn",
      "brooklyn",
      "brewhaus",
    ],
  },
  {
    id: 6,
    image: Image6,
    date: "Feb 3, 2025",
    title: "Your Favorite Syrups Are Now Available Sugar-Free in All Drinks",
    slug: "your-favorite-syrups-are-now-available-sugar-free-in-all-drinks",
    description:
      "Your favorite flavors, now with zero sugar. All syrups are available sugar-free, letting you enjoy any drink just the way you like it — guilt-free and full of taste.",
    content: [
      {
        id: 1,
        title: "All the flavor you love, without the sugar",
        description: [
          "We know how much our customers enjoy flavored drinks — whether it's a cozy vanilla latte, a refreshing iced caramel macchiato, or a bold hazelnut cold brew. That’s why we’re excited to offer sugar-free versions of all your favorite syrups. Now you can enjoy the same rich, indulgent flavor with no added sugar — perfect for those cutting back, watching calories, or simply looking for a lighter option.",
          "Our new sugar-free syrups are available in all your go-to flavors: vanilla, caramel, hazelnut, and more. Whether you prefer your drink hot or iced, you can customize it your way without sacrificing taste. We've worked hard to make sure every sip still delivers the flavor you love — smooth, satisfying, and now guilt-free.",
        ],
      },
      {
        id: 2,
        title: "Just Ask for Sugar-Free at the Counter",
        description: [
          "Making the switch is easy. Just let your barista know you'd like your drink made with sugar-free syrup — no extra steps, no extra charge. It’s the same handcrafted quality, made to fit your lifestyle. At Brewhaus, we believe coffee should be as flexible as you are. That’s why we’re proud to offer more options that fit your taste and wellness goals — because great coffee should never mean compromise.",
        ],
      },
    ],
    tags: [
      "sugarfree",
      "coffeeyourway",
      "customcoffee",
      "guiltfreesips",
      "brewhaus",
    ],
  },
];

export default whatsNewList;
