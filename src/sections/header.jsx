import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header sticky flex-space-between ">
      <h4>
        <Link to="/">Products Ad managers</Link>
      </h4>
      <p>Max's Sporting Goods</p>
    </header>
  );
};
