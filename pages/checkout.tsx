import Link from "next/link";

export default function Checkout(){
  return (
    <main className="container">
      <header className="bar">
        <h1>Mock Checkout</h1>
        <nav><Link href="/">Back to shop</Link></nav>
      </header>
      <p>This is a mock checkout. In a real app, integrate Stripe.</p>
      <p>Order placed! 🎉 (not really)</p>
    </main>
  );
}
