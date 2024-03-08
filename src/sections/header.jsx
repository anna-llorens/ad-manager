import React from "react";
import { useAppContext } from "../app-context";

export const Header = () => {
  const { company } = useAppContext();
  return (
    <header>
      <h1>Ads manager</h1>
      <p>{company?.name ?? "Set up your company name"}</p>
    </header>
  );
};
