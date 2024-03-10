import { useAppContext } from "../../app-context";
import { ProductItem } from "./product-item";
import { Card, Label } from "../../components";

import "./products-section.scss";

export const ProductsSection = ({ className }) => {
  const { products } = useAppContext();
  return (
    <section className={className ?? ""}>
      <Card
        title="Your products"
        action={{ copy: "Add new product", action: "submit" }}
      >
        <Label isBol />
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
    </section>
  );
};
