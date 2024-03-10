import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockAd, mockCompany, mockProduct } from "./data";

// App initial state
export const AppContext = createContext({
  company: mockCompany,
  products: [mockProduct],
  product: mockProduct,
  ad: mockAd,
});

export const useAppContext = () => {
  const data = useContext(AppContext);
  const { productId, postId } = useParams();
  const { company, products } = data;
  const [product, setProduct] = useState(null);
  const [ad, setAd] = useState(null);

  // Update selected product
  useEffect(() => {
    setProduct(products?.find((product) => product.id === productId));
  }, [productId, products]);

  // Update selected ad
  useEffect(() => {
    setAd(product?.prodAds?.find((ad) => ad.id === postId));
  }, [postId, product?.prodAds]);

  return { company, products, product, ad };
};
