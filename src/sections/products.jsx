import React from "react";
import { mockedData } from "../data";
import { Link } from "react-router-dom";

export const Products = () => (
  <section>
    {mockedData?.products ? (
      <nav>
        <h2>
          <Link to="/">Products</Link>
        </h2>
        <ul>
          {mockedData?.products.map((product, index) => (
            <li key={index}>
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
