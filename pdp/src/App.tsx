import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import "./index.scss";

const Header = React.lazy(() => import("home/Header"));

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      {showHeader && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Header />
        </Suspense>
      )}
      <button
        className="text-3xl p-5"
        onClick={() => setShowHeader(!showHeader)}
      >
        Show the header
      </button>
      <div className="my-10">Pdp page content</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
