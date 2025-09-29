import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../lib/products";

export default function Home() {
  const [items, setItems] = useState<Product[]>([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    if (sort) params.set("sort", sort);
    fetch("/api/products?" + params.toString())
      .then(r => r.json()).then(setItems);
  }, [q, category, sort]);

  return (
    <main className="container">
      <header className="bar">
        <h1>Shop</h1>
        <nav><Link href="/cart">Cart</Link></nav>
      </header>

      <div className="controls">
        <input placeholder="Search…" value={q} onChange={e=>setQ(e.target.value)} />
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          <option>All</option><option>Audio</option><option>Cameras</option><option>Peripherals</option><option>Monitors</option>
        </select>
        <select value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>
      </div>

      <ul className="grid">
        {items.map(p => (
          <li key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <div className="price">${p.price}</div>
            <button onClick={()=>{
              const cart = JSON.parse(localStorage.getItem("cart")||"[]");
              cart.push(p);
              localStorage.setItem("cart", JSON.stringify(cart));
              alert("Added to cart");
            }}>Add to cart</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
