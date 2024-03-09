import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../app-context";

export const Header = () => {
  const { company } = useAppContext();
  return (
    <header className="header sticky flex-space-between ">
      <h4>
        <Link to="/"> Products Ad Manager</Link>
      </h4>
      <p>{company?.name ?? "Set up your company name"}</p>
    </header>
  );
};
