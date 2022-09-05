import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </>
  );
}

export default App;
