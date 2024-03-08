const prod1Ads = [
  {
    id: "prod1Ad1",
    isEnabled: true,
    postName: "Winter campain 2023/2024",
    title: "Max's Sporting Goods - Online Store",
    image:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
    postMessage:
      "Are you ready for this winter? At Max's Sports we are preparing for you. Try out  our dumbbells for free. Get it now! 🏋️‍♂️ ",
  },
  {
    id: "prod1Ad2",
    postName: "summer",
    title: "Max's Sporting Goods - Online Store",
    postMessage: "Get ready for the summer with our dumbbells",
    image:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
  },
  {
    id: "prod1Ad3",
    postName: "spring campain",
    title: "Max's Sporting Goods - Online Store",
    postMessage: "Get ready for the spring with our dumbbells",
    image:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
  },
  {
    id: "prod1Ad4",
    postName: "fall campain",
    title: "Max's Sporting Goods - Online Store",
    postMessage: "Get ready for the fall with our dumbbells",
    image:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
  },
];

const prod2Ads = [
  {
    id: "prod2Ad1",
    postName: "winter",
    title: "Max's Sporting Goods - Online Store",
    postMessage: "Get ready for the winter with our jump rope",
    image:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626333092/coding-challenge/rope.jpg",
  },
  {
    id: "prod2Ad2",
    postName: "summer",
    title: "Max's Sporting Goods - Online Store",
    postMessage: "Get ready for the summer with our jump rope",
    image:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626333092/coding-challenge/rope.jpg",
  },
];

const prod3Ads = [
  {
    id: "prod3Ad1",
    postName: "winter",
    postMessage: "Get ready for the winter with our resistance band",
    image:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626332994/coding-challenge/resistance.jpg",
  },
];

const company = {
  logo: "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282485/coding-challenge/IMG_9843.png",
  name: "Max's Sporting Goods",
  url: "MaxSportinGoods.com",
  description:
    "Visit the retail store that sells sporting goods for exercising at home",
};

export const products = [
  {
    productName: "Good ol' Dumbbells",
    productDescription:
      "This equipment helps you perform joint-isolation exercises such as biceps curls, chest flyes or shoulder raises. Using dumbbells for full-body, multiplanar movements, however, can provide a variety of different strength outcomes. It also offers many benefits for cardiorespiratory fitness and flexibility",
    productImage:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
    price: 14.5,
    id: "prod1",
    prodAds: prod1Ads,
  },
  {
    productName: "Evergrip Jump Rope",
    productDescription:
      "Did you know that for an average-sized person, jumping rope might even burn more than 10 calories a minute. In just 30 minute jump rope sessions a day, you can build the figure you want. Jumping rope also helps with:\n- tone your calves.\n- tighten your core.\n- improve your lung capacity.\n- build stamina.",
    productImage:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626333092/coding-challenge/rope.jpg",
    price: 3,
    id: "prod2",
    prodAds: prod2Ads,
  },
  {
    productName: "Durable Resistance band",
    productDescription:
      "Rubbery, elastic bands that you can use to strengthen your muscles at home. Resistance training is any type of exercise that uses resistance or weight to build strength in your muscles. Working out with resistance bands is one option for resistance training that allows you to work out at home using just one piece of equipment.",
    productImage:
      "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626332994/coding-challenge/resistance.jpg",
    price: 25.3,
    id: "prod3",
    prodAds: prod3Ads,
  },
];

export const data = {
  company,
  products,
};
