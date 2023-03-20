import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Narbar/Navbar.jsx";
import Categories from "./Categories/Categories.jsx";
import Error404 from "./Error404/Error404.jsx";
import ItemListContainer from "./ItemListContainer/ItemListContainer.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import { CartProvider } from "./storage/cartContext.js";
import CartContainer from "./CartContainer/CartContainer.jsx";
import "./App.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar></Navbar>
          <div className="flexApp">
            <div className="flexCategories">
              <Categories className="categories"/>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryid" element={<ItemListContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </div>
            <CartContainer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
