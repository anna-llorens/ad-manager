import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header sticky flex-space-between ">
      <h4>
        <Link to="/products">List of products</Link>
      </h4>
      <p>Products Ad manager</p>
    </header>
  );
};
