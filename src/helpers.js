import { mockAd, mockProduct, mockCompany, productImageMap } from "./data";

const getRandomPrice = (min = 15, max = 200) =>
  Math.round((Math.random() * (max - min) + min) * 100) / 100;

const generatePostAds = (productId, prodAds) =>
  Array.from({ length: prodAds }, (_, index) => ({
    ...mockAd,
    id: `${productId}Ad${index}`,
    postName:
      "This is a very long post name that should be shortened to show 2 lines",
    status: Math.random() > 0.5 ? "active" : "disabled", // Generates a different state each time the app re-renders the component
  }));

const generateProducts = () => {
  const productNames = Object.keys(productImageMap);
  return productNames.map((productName, index) => ({
    ...mockProduct,
    id: `prod${index}`,
    price: `${getRandomPrice()} $`,
    prodAds: generatePostAds(`prod${index}`, index + 2 * 1), // Generate a different number of ads for each product
    productName: productName,
    productImage: productImageMap[productName],
  }));
};

export const getMockedData = () => ({
  company: mockCompany,
  products: generateProducts(),
});
