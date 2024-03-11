import { useParams } from "react-router-dom";
import { Avatar, Label } from "../../components";
import { useEffect, useState } from "react";
import "./product-item.scss";

export const ProductItem = ({ id, productImage, productName }) => {
  const { productId } = useParams();
  const [isActive, setIsActive] = useState(false);
  useEffect(
    () => (productId === id ? setIsActive(true) : setIsActive(false)),
    [id, productId]
  );

  return (
    <a
      className={`product-item ${isActive ? "active" : ""}`}
      href={`/products/${id}`}
    >
      <Avatar src={productImage} alt="Product preview" size="small" />
      <Label className="product-name" isBold>
        {productName}
      </Label>
    </a>
  );
};
