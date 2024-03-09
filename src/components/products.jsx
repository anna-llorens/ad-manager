import "./products.css";
import { useAppContext } from "../app-context";
import { ProductCard } from "./card/product-card";
import { AppCard } from "./card/app-card";

export const Products = ({ className }) => {
  const { products } = useAppContext();
  return (
    <section className={className ?? ""}>
      <AppCard
        title="Your products"
        cta={{ copy: "Add new product", action: "submit" }}
      >
        {products ? (
          <div className="products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product?.id}
                productName={product?.productName}
                productImage={product?.productImage}
              />
            ))}
          </div>
        ) : (
          <p>
            🤗 Welcome to Ad Manager! You can start by adding your first product
          </p>
        )}
      </AppCard>
    </section>
  );
};
