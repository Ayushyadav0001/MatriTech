import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Menu from "./Component/Menu/Menu";
import Checkout from "./Component/Checkout/Checkout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  );
};

export default App;
