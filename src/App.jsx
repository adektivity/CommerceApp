import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Products from "./routes/Products/Products";
import Cart from "./routes/Cart/Cart";
import Wishlist from "./routes/Wishlist/Wishlist";
import ProductDetails from "./routes/Products/ProductDetails";

const URL = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const controller = new AbortController();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetching data aborted!");
        } else {
          console.log("Error fetching data: ", error);
        }
      }
    }

    getProduct();
    console.log(products, "products");

    return () => {
      controller.abort();
    };
  }, []);

  function addToCart(product) {
    let cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      setCart((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function updateCartItems(id, quantity) {
    setCart((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  function emptyCart() {}

  console.log(cart);
  return (
    <>
      <div className="min-h-screen bg-[#e6e6e6] flex flex-col">
        <Navbar />
        <main className="pt-8">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route
              path="/products/products/:id"
              element={
                <ProductDetails products={products} onClick={addToCart} />
              }
            />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route
              path="/cart"
              element={
                <Cart
                  onClick={removeFromCart}
                  cart={cart}
                  onUpdateCartItem={updateCartItems}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
