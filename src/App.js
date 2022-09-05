import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </>
  );
}

export default App;
