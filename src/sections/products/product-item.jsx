import { Avatar, Label } from "../../components";
import "./product-item.scss";

export const ProductItem = ({ id, productImage, productName }) => (
  <a className="product-item" href={`/products/${id}`}>
    <Avatar src={productImage} alt="Product preview" className="avatar" />
    <Label isBold className="product-name">
      {productName}
    </Label>
  </a>
);
