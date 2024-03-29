import { useAppContext } from "../../app-context";
import { ProductItem } from "./product-item";
import { Card, Label } from "../../components";

import "./products-section.scss";

export const ProductsSection = ({ className, isCondensed }) => {
  const { products } = useAppContext();

  return (
    <div className={`${className ?? ""} ${isCondensed ? "condensed" : ""}`}>
      <Card
        title="Your products"
        action={{ copy: "Add new product", action: "submit" }}
      >
        <Label isBold />
        {products?.length ? (
          <div className="products-section">
            {products?.map((product) => (
              <ProductItem
                key={product.id}
                id={product?.id}
                productName={product?.productName}
                productImage={product?.productImage}
              />
            ))}
          </div>
        ) : (
          <p>
            ✨ Welcome to the Ad Manager! You can start by adding your first
            product
          </p>
        )}
      </Card>
    </div>
  );
};
