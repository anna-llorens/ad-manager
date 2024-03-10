import { mockAd, mockProduct, mockCompany } from "./data";

const getRandomPrice = (min = 15, max = 200) =>
  Math.round((Math.random() * (max - min) + min) * 100) / 100;

const generatePostAds = (postName, postId) =>
  Array.from({ length: 7 }, (_, index) => ({
    ...mockAd,
    id: `${postId}ad${index}`,
    postName,
    status: Math.random() > 0.5 ? "active" : "disabled",
  }));

const generateProducts = (productName, numProducts = 6) => {
  return Array.from({ length: numProducts }, (_, index) => ({
    ...mockProduct,
    id: `prod${index}`,
    productName,
    prodAds: generatePostAds(productName, `prod${index}`),
    price: `${getRandomPrice()} $`,
  }));
};

export const getMockedData = (productName) => ({
  hola: "hola",
  mockCompany,
  products: generateProducts(productName),
});
