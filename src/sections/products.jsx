import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../app-context";

export const Products = () => {
  const { products } = useAppContext();
  return (
    <section>
      {products ? (
        <nav>
          <h2>
            <Link to="/">Products</Link>
          </h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <a href={`/products/${product.id}`}>{product.productName}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <p>Welcome to Ad Manager! Start by adding your first product</p>
      )}
    </section>
  );
};
