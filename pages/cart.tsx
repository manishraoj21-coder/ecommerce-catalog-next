import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../lib/products";

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const total = cart.reduce((s, p) => s + p.price, 0);

  return (
    <main className="container">
      <header className="bar">
        <h1>Your Cart</h1>
        <nav><Link href="/">Back to shop</Link></nav>
      </header>
      {cart.length === 0 ? <p>Cart is empty.</p> : (
        <>
          <ul className="list">
            {cart.map((p, i) => (
              <li key={i} className="row">
                <span>{p.name}</span>
                <span>${p.price}</span>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
          <Link href="/checkout"><button>Proceed to Checkout</button></Link>
        </>
      )}
    </main>
  );
}
