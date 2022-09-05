import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import SubCategories from "./pages/SubCategories";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:category_id" element={<SubCategories />} />
        <Route path="/products/:product_id" element={<Products />} />
        <Route
          path="/products/:product_id/product-detail/:product"
          element={<ProductDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
