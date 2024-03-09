import "./products-list.css";
import { useAppContext } from "../app-context";
import { ProductCard } from "./card/product-card";

export const ProductsList = ({ className }) => {
  const { products } = useAppContext();
  return (
    <section className={`products-list ${className ?? ""}`}>
      <div className="box-container">
        <h3>Products</h3>
        {products ? (
          <div className="products-card-container">
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
      </div>
    </section>
  );
};
