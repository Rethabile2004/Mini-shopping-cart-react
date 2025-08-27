import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Shoes", price: 50 },
    { id: 2, name: "Laptop", price: 1200 },
    { id: 3, name: "Headphones", price: 100 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  const total = cart.reduce((sum,item)=>sum+item.price,0);
  return (
    <div style={{ padding: "20px", display: "flex", gap: "40px" }}>
      <div>
        <h1>🛒 Mini Shopping Cart</h1>
        <p>Items in cart: {cart.length}</p>

        <div style={{ display: "flex", gap: "20px" }}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>
      </div>

      <Cart items={cart} onRemove={removeFromCart} total={total}/>
    </div>
  );
}

export default App;
