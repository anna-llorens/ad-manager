import { mockAd, mockProduct, mockCompany, productImageMap } from "./data";

// Get a different status each time the app re-renders
const status = ["active", "disabled", "inactive"];
const getRandomStatus = () => status[Math.floor(Math.random() * status.length)];

const getRandomPrice = (min = 15, max = 200) =>
  Math.round((Math.random() * (max - min) + min) * 100) / 100;

const generatePostAds = (productId) =>
  Array.from({ length: Math.floor(Math.random() * 11) }, (_, index) => ({
    ...mockAd,
    id: `${productId}Ad${index}`,
    postName:
      "This is a very long post name that should be shortened to show 2 lines",
    status: getRandomStatus(),
  }));

const generateProducts = () => {
  const productNames = Object.keys(productImageMap);
  return productNames.map((productName, index) => ({
    ...mockProduct,
    id: `prod${index}`,
    price: `${getRandomPrice()} $`,
    prodAds: generatePostAds(`prod${index}`),
    productName: productName,
    productImage: productImageMap[productName],
  }));
};

export const getMockedData = () => ({
  company: mockCompany,
  products: generateProducts(),
});
