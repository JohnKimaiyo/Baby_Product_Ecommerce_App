import React from "react";
import "../css/Home.css";
import { Navbar } from "./Navbar";
import { Product } from "./Product";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Product />
    </div>
  );
};
