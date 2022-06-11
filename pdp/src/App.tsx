import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import "./index.scss";
import SafeComponent from "./SafeComponent";
import PdpContent from "./PdpContent";

const App = () => {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <SafeComponent>
          <Header app={{ name: "Pdp" }} />
        </SafeComponent>
        <div className="my-10">
          <Routes>
            <Route path="/products/:productId" element={<PdpContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
