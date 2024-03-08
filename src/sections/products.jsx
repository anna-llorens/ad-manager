import React from "react";
import { mockedData } from "../mocks";
import { Link } from "react-router-dom";

const Products = ({ products = mockedData.products }) => (
  <section>
    <h2>
      <Link to="/">Products</Link>
    </h2>
    <nav>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <a href={`/products/${product.id}`}>{product.productName}</a>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);

export default Products;
