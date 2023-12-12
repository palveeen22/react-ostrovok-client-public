import React from "react";
import Sidebar from "../Components/Sidebar";
import Products from "./Home/Products";
import Cart from "./Home/Cart";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="paddingXShorter2 flex justify-between bg-[#f2f2f2] gap-6 min-h-screen">
      <Sidebar />
      <Outlet />
      {/* <Products /> */}
      <Cart />
    </section>
  );
};

export default Homepage;
