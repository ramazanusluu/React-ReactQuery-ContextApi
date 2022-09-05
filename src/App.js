import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Error404 from "./components/Error";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import ShoppingCard from "./pages/ShoppingCard";
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
        <Route path="/card" element={<ShoppingCard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
