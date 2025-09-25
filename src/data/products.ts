import coldBrewImage from "@/assets/products/coffee/cold-brew.webp";
import macchiatoImage from "@/assets/products/coffee/macchiato.webp";
import espressoImage from "@/assets/products/coffee/espresso.webp";
import blackCoffeeImage from "@/assets/products/coffee/black-coffee.webp";
import cappuccinoImage from "@/assets/products/coffee/cappuccino.webp";
import flatWhiteImage from "@/assets/products/coffee/flat-white.webp";
import latteImage from "@/assets/products/coffee/latte.webp";
import mochaImage from "@/assets/products/coffee/mocha.webp";
import americanoImage from "@/assets/products/coffee/americano.webp";
import icedLatteImage from "@/assets/products/cold-drinks/iced-latte.webp";
import icedAmericanoImage from "@/assets/products/cold-drinks/iced-americano.webp";
import icedMochaImage from "@/assets/products/cold-drinks/iced-mocha.webp";
import icedTeaImage from "@/assets/products/cold-drinks/iced-tea.webp";
import bubbleTeaImage from "@/assets/products/cold-drinks/bubble-tea.webp";
import virginMojitoImage from "@/assets/products/cold-drinks/virgin-mojito.webp";
import brownieImage from "@/assets/products/bakery/brownie.webp";
import macaroonImage from "@/assets/products/bakery/macaroon.webp";
import donutImage from "@/assets/products/bakery/donut.webp";
import muffinImage from "@/assets/products/bakery/muffin.webp";
import biscottiImage from "@/assets/products/bakery/biscotti.webp";

export const products = [
  // Coffee Category
  {
    id: 1,
    category: "coffee",
    title: "Cold Brew",
    isNew: true,
    price: 6.75,
    description:
      "Our Cold Brew is slow-steeped for 16 hours to bring out smooth, bold flavors with lower acidity and natural sweetness. Served chilled over ice, it’s refreshing, energizing, and perfect for any time of day.",
    options: ["small", "medium (+$1.35)", "large (+$2.1)"],
    allergens: ["Milk", "Flavored Syrups", "Sulphites", "Soy", "Nuts"],
    image: coldBrewImage,
  },
  {
    id: 2,
    category: "coffee",
    title: "Macchiato",
    isNew: true,
    price: 6.1,
    description:
      "Our Macchiato features a bold shot of espresso “stained” with a touch of steamed milk. It’s strong, smooth, and slightly creamy — perfect for those who enjoy their coffee bold with a hint of softness.",
    options: ["small", "medium (+$1.2)"],
    allergens: ["milk", "soy"],
    image: macchiatoImage,
  },
  {
    id: 3,
    category: "coffee",
    title: "Espresso",
    isNew: false,
    price: 4.25,
    description:
      "Our Espresso is rich, bold, and balanced — a small but powerful shot of pure coffee intensity. Made with expertly extracted Arabica beans, it’s the perfect pick-me-up or base for your favorite drinks.",
    options: ["small", "medium (+$0.85)"],
    allergens: ["milk", "flavored syrups", "soy"],
    image: espressoImage,
  },
  {
    id: 4,
    category: "coffee",
    title: "Black Coffee",
    isNew: false,
    price: 4.9,
    description:
      "Our Black Coffee is all about pure, unfiltered flavor — freshly brewed and served without milk or sugar. Bold, smooth, and deeply satisfying, it's a timeless choice for those who love their coffee strong and simple.",
    options: ["small", "medium (+$1.25)", "large (+$2.1)"],
    allergens: ["milk", "flavored soy", "nuts"],
    image: blackCoffeeImage,
  },
  {
    id: 5,
    category: "coffee",
    title: "Cappuccino",
    isNew: false,
    price: 5.25,
    description:
      "Our Cappuccino features a bold shot of espresso with equal parts steamed milk and thick milk foam. It's a well-balanced classic with rich texture and deep flavor — perfect for a smooth, satisfying sip.",
    options: ["small", "medium (+$1.1)", "large (+$1.55)"],
    allergens: ["milk", "flavored syrups", "sulphites", "soy"],
    image: cappuccinoImage,
  },
  {
    id: 6,
    category: "coffee",
    title: "Flat White",
    isNew: false,
    price: 5.5,
    description:
      "Our Flat White combines velvety microfoam with a bold double shot of espresso, creating a smooth, rich drink with a stronger coffee flavor than a latte — all served in a smaller, perfectly balanced cup.",
    options: ["small", "medium (+$1.3)", "large (+$1.9)"],
    allergens: ["milk", "flavored syrups", "sulphites"],
    image: flatWhiteImage,
  },
  {
    id: 7,
    category: "coffee",
    title: "Latte",
    isNew: false,
    price: 4.8,
    description:
      "Our Latte is a smooth and creamy classic made with rich espresso and perfectly steamed milk. It’s mellow, comforting, and endlessly customizable — the perfect base for your favorite flavors or just as it is.",
    options: ["small", "medium (+$1.1)", "large (+$1.55)"],
    allergens: ["milk", "flavored syrups", "sulphites", "soy"],
    image: latteImage,
  },
  {
    id: 8,
    category: "coffee",
    title: "Mocha",
    isNew: false,
    price: 7.15,
    description:
      "Our Mocha blends bold espresso with rich chocolate and steamed milk, creating a smooth, creamy drink that’s both comforting and indulgent – a perfect treat for chocolate and coffee lovers alike.",
    options: ["small", "medium (+$1.25)", "large (+$1.8)"],
    allergens: ["milk", "flavored syrups", "cocoa", "tree nuts"],
    image: mochaImage,
  },
  {
    id: 9,
    category: "coffee",
    title: "Americano",
    isNew: false,
    price: 5.3,
    description:
      "Our Americano is made by combining rich, full-bodied espresso with hot water, creating a perfectly balanced and smooth cup that’s lighter than espresso but stronger than regular drip coffee.",
    options: ["small", "medium (+$1.1)", "large (+$1.65)"],
    allergens: ["milk", "flavored syrups", "sulphites"],
    image: americanoImage,
  },

  // Cold Drinks Category
  {
    id: 10,
    category: "cold-drinks",
    title: "Virgin Mojito",
    isNew: true,
    price: 6.2,
    description:
      "Our Virgin Mojito is a zesty mix of fresh mint, lime, and sparkling water – served over ice for ultimate refreshment. Cool, citrusy, and alcohol-free — perfect for hot days or a non-caffeinated pick-me-up.",
    options: ["small", "medium (+$1.3)", "large (+$1.75)"],
    allergens: ["citrus", "mint"],
    image: virginMojitoImage,
  },
  {
    id: 11,
    category: "cold-drinks",
    title: "Iced Latte",
    isNew: false,
    price: 4.45,
    description:
      "Our Iced Latte is a cool take on the classic — rich espresso and cold milk over ice for a smooth, refreshing finish. Light, creamy, and customizable, it’s perfect for warm days or a chilled coffee fix.",
    options: ["small", "medium (+$1.1)", "large (+$1.55)"],
    allergens: ["milk", "flavored syrups", "sulphites", "soy"],
    image: icedLatteImage,
  },
  {
    id: 12,
    category: "cold-drinks",
    title: "Iced Americano",
    isNew: false,
    price: 3.95,
    description:
      "Our Iced Americano is a bold, refreshing classic — made with rich espresso and cold, filtered water over ice. It's crisp, smooth, and the perfect no-fuss coffee for warm days or a cool, energizing pick-me-up.",
    options: ["small", "medium (+$1)", "large (+$1.5)"],
    allergens: ["milk", "flavored syrups", "sulphites"],
    image: icedAmericanoImage,
  },
  {
    id: 13,
    category: "cold-drinks",
    title: "Iced Mocha",
    isNew: false,
    price: 5.75,
    description:
      "Our Iced Mocha blends bold espresso with rich chocolate and chilled milk, poured over ice for a smooth, sweet treat. It’s the perfect cold sip for chocolate lovers who want a little kick with their cool-down.",
    options: ["small", "medium (+$1.15)", "large (+$1.8)"],
    allergens: ["milk", "flavored syrups", "sulphites", "soy"],
    image: icedMochaImage,
  },
  {
    id: 14,
    category: "cold-drinks",
    title: "Iced Tea",
    isNew: false,
    price: 4.35,
    description:
      "Our Iced Tea is brewed fresh and served chilled for a crisp, remarkably refreshing sip every single time. Light, flavorful, and never too sweet — it’s the perfect thirst-quencher for any moment of the day.",
    options: ["small", "medium (+$1.1)", "large (+$1.5)"],
    allergens: ["milk", "soy", "nuts"],
    image: icedTeaImage,
  },
  {
    id: 15,
    category: "cold-drinks",
    title: "Bubble Tea",
    isNew: false,
    price: 6.75,
    description:
      "Our Bubble Tea blends creamy milk tea with chewy tapioca pearls for a fun, flavorful experience in every sip. Served cold over ice, it's a perfect balance of bold tea and smooth sweetness — with a texture you’ll love.",
    options: ["small", "medium (+$1.2)", "large (+$1.75)"],
    allergens: ["milk", "soy", "tapioca"],
    image: bubbleTeaImage,
  },

  // Bakery Category
  {
    id: 16,
    category: "bakery",
    title: "Brownie",
    isNew: true,
    price: 2.15,
    description:
      "Our Brownie is rich, fudgy, and baked to perfection — with a soft center and crisp top. A decadent treat that pairs perfectly with any coffee, whether you’re craving something sweet or just a little indulgence.",
    options: ["single", "pack of 3 (+$2.9)"],
    allergens: ["milk", "wheat", "eggs", "soy"],
    image: brownieImage,
  },
  {
    id: 17,
    category: "bakery",
    title: "Macaroon",
    isNew: false,
    price: 2.6,
    description:
      "Our Macaroon is a sweet, chewy treat made with shredded coconut and toasted for a golden finish. Naturally gluten-free and irresistibly rich, it’s a perfect bite-sized indulgence to enjoy with your coffee or tea.",
    options: ["single", "pack of 3 (+$3.4)"],
    allergens: ["eggs", "coconut"],
    image: macaroonImage,
  },
  {
    id: 18,
    category: "bakery",
    title: "Donut",
    isNew: false,
    price: 1.4,
    description:
      "Our Donut is light, fluffy, and perfectly sweet — a classic treat with a soft center and a golden finish. Whether glazed, filled, or topped with sprinkles, it’s the perfect bite to pair with your favorite drink.",
    options: ["single", "pack of 3 (+$2.4)"],
    allergens: ["milk", "wheat", "eggs", "soy"],
    image: donutImage,
  },
  {
    id: 19,
    category: "bakery",
    title: "Muffin",
    isNew: false,
    price: 1.8,
    description:
      "Our Muffin is soft, moist, and baked fresh every morning — the perfect grab-and-go treat to enjoy with your favorite coffee or tea. Available in rotating flavors, each one is full of comforting, satisfying goodness.",
    options: ["single", "pack of 3 (+$3.2)"],
    allergens: ["milk", "wheat", "eggs", "soy"],
    image: muffinImage,
  },
  {
    id: 20,
    category: "bakery",
    title: "Biscotti",
    isNew: false,
    price: 1.5,
    description:
      "Our Biscotti is a crisp, twice-baked Italian cookie with just the right crunch — perfect for dipping into your favorite coffee or tea. Lightly sweet and full of flavor, it’s a classic treat that’s simple and satisfying.",
    options: ["single", "pack of 3 (+$2.1)"],
    allergens: ["milk", "wheat", "eggs", "tree nuts"],
    image: biscottiImage,
  },
];
