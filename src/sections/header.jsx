import React from "react";
import { useAppContext } from "../app-context";
import { Link } from "react-router-dom";

export const Header = () => {
  const { company, products } = useAppContext();
  return (
    <header>
      <h1>Ads manager</h1>
      <p>{company?.name ?? "Set up your company name"}</p>
      <h2>
        <Link to="/">Products</Link>
      </h2>
      {products ? (
        <nav>
          <ul>
            {products?.map((product) => (
              <li key={product.id}>
                <a href={`/products/${product?.id}`}>{product?.productName}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <p>
          🤗 Welcome to Ad Manager! You can start by adding your first product
        </p>
      )}
    </header>
  );
};
