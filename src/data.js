import { v4 as generateId } from "uuid";

export const mockProducts = [
  "Good ol' Dumbbells",
  "Treadmill",
  "Yoga mat",
  "Jump rope",
  "Kettlebell",
  "Resistance bands",
  "Foam roller",
  "Medicine ball",
  "Boxing gloves",
  "Pull-up bar",
  "Weight bench",
  "Exercise bike",
  "Elliptical machine",
];

export const mockCompany = {
  logo: "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282485/coding-challenge/IMG_9843.png",
  name: "Max's Sporting Goods",
  url: "MaxSportinGoods.com",
  description:
    "Visit the retail store that sells sporting goods for exercising at home",
};

export const mockAd = {
  id: generateId(),
  postName: "Winter campain 2023/2024",
  status: "disabled",
  title: "Max's Sporting Goods - Online Store",
  image:
    "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
  postMessage:
    "Are you ready for this winter? At Max's Sports we are preparing for you. Try out  our dumbbells for free. Get it now! 🏋️‍♂️ ",
};

export const mockProduct = {
  productName: "Good ol' Dumbbells",
  productDescription:
    "This equipment helps you perform joint-isolation exercises such as biceps curls, chest flyes or shoulder raises. Using dumbbells for full-body, multiplanar movements, however, can provide a variety of different strength outcomes. It also offers many benefits for cardiorespiratory fitness and flexibility",
  productImage:
    "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
  price: 14.5,
  id: "prod1",
  prodAds: [mockAd],
};
