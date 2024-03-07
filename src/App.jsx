import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { CartProvider } from "./components/hooks/useCart";

const Home = lazy(() => import("./pages/Home/Home"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));

export const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </CartProvider>
  );
};
