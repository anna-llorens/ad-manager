import "./products.scss";
import { useAppContext } from "../app-context";
import { Card } from "./card/card";

export const Products = ({ className }) => {
  const { products } = useAppContext();
  console.log("products", products);
  return (
    <section className={className ?? ""}>
      <Card
        title="Your products"
        action={{ copy: "Add new product", action: "submit" }}
      >
        {products.length ? (
          ""
        ) : (
          <p>
            ✨ Welcome to Ad Manager! You can start by adding your first product
          </p>
        )}
      </Card>
    </section>
  );
};
