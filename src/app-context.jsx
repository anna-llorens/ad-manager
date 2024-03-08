import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AppContext = createContext("");

export const useAppContext = () => {
  const data = useContext(AppContext);
  const { productId } = useParams();
  const [products, setProducts] = useState(data?.products);
  const [company, setCompany] = useState(data?.company);

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    setSelectedProduct(products.find((product) => product.id === productId));
  }, [data, productId, products]);

  const productPosts = products.find((product) => product.id === productId)
    ? {
        productImage: selectedProduct?.productImage,
        productName: selectedProduct?.productName,
        prodAds: selectedProduct?.prodAds,
      }
    : {};

  return { productPosts, products, company };
};
