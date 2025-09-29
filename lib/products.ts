export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Noise-Cancelling Headphones", price: 199, category: "Audio", image: "https://picsum.photos/seed/1/400/300" },
  { id: "p2", name: "4K Action Camera", price: 249, category: "Cameras", image: "https://picsum.photos/seed/2/400/300" },
  { id: "p3", name: "Mechanical Keyboard", price: 129, category: "Peripherals", image: "https://picsum.photos/seed/3/400/300" },
  { id: "p4", name: "27" 144Hz Monitor", price: 329, category: "Monitors", image: "https://picsum.photos/seed/4/400/300" },
  { id: "p5", name: "USB-C Dock", price: 89, category: "Peripherals", image: "https://picsum.photos/seed/5/400/300" },
  { id: "p6", name: "Smart Speaker", price: 79, category: "Audio", image: "https://picsum.photos/seed/6/400/300" }
];
