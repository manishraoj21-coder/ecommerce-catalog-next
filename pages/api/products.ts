import type { NextApiRequest, NextApiResponse } from "next";
import { PRODUCTS } from "../../lib/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q, category, sort } = req.query;
  let items = PRODUCTS.slice();

  if (q && typeof q === "string") {
    items = items.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  }
  if (category && typeof category === "string" && category !== "All") {
    items = items.filter(p => p.category === category);
  }
  if (sort === "price-asc") items.sort((a,b)=>a.price-b.price);
  if (sort === "price-desc") items.sort((a,b)=>b.price-a.price);

  res.status(200).json(items);
}
