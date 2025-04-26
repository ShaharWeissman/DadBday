// src/app/products/page.tsx
import Image from "next/image";
import { FC } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Signature Leather Wallet",
    description: "Handcrafted full‑grain leather with RFID protection.",
    imageSrc: "/images/wallet.jpg",
    imageAlt: "Leather wallet",
  },
  {
    id: 2,
    title: "Classic Aviator Sunglasses",
    description: "Timeless design with UV400 polarized lenses.",
    imageSrc: "/images/sunglasses.jpg",
    imageAlt: "Aviator sunglasses",
  },
  {
    id: 3,
    title: "Premium Canvas Backpack",
    description: "Water‑resistant, with multiple compartments and padded straps.",
    imageSrc: "/images/backpack.jpg",
    imageAlt: "Canvas backpack",
  },
  {
    id: 4,
    title: "Stainless Steel Travel Mug",
    description: "Keeps drinks hot for 12h, cold for 24h, leak‑proof lid.",
    imageSrc: "/images/mug.jpg",
    imageAlt: "Travel mug",
  },
];

const ProductCard: FC<{ product: Product }> = ({ product }) => (
  <article className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative w-full h-48">
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 flex-1">{product.description}</p>
    </div>
  </article>
);

export default function ProductsPage() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
