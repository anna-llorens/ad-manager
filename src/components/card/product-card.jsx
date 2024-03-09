import "./product-card.css";

export const ProductCard = ({ id, productImage, productName, isSelected }) => (
  <a className={`product-card`} href={`/products/${id}`}>
    <img src={productImage} alt="Product preview" className="avatar" />
    <span className="product-name text-ellipsis">{productName}</span>
  </a>
);
