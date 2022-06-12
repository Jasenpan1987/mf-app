import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
import PdpContent from "pdp/PdpContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const MainLayout = () => {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/products/:productId" element={<PdpContent />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default MainLayout;
