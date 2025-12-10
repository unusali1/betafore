"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Category {
  id: string | number;
  name: string;
}

interface Product {
  id: string | number;
  title: string;
  image: string;
  price: number;
  category: string;
}

interface BestDealsProps {
  categories: {
    data: Category[];
  };
}

const BestDeals = ({ categories }: BestDealsProps) => {
  const [selectedSlug, setSelectedSlug] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (categories?.data?.length > 0 && !selectedSlug) {
      setSelectedSlug(categories.data[0].name);
    }
  }, [categories?.data, selectedSlug]);

  useEffect(() => {
    if (!selectedSlug) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://mm-assesment-server.vercel.app/api/v1/products/category/${selectedSlug}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data?.data || []);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedSlug]);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between flex-col sm:flex-row items-center mb-10">
          <h2 className="text-4xl font-bold text-teal-700">
            <span className="text-[#0DAEB9]">Best</span> Deals
          </h2>

          <div className="flex gap-0 sm:gap-4">
            {categories?.data?.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedSlug(category.name)}
                className={`px-2 sm:px-6 py-4 sm:py-2 text-[10px] sm:text-sm font-semibold transition-all ${
                  selectedSlug === category.name
                    ? "text-[#0DAEB9] border-b-2 border-[#0DAEB9]"
                    : " text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex">
            <ChevronLeft />
            <ChevronRight className="text-gray-400" />
          </div>
        </div>

        {loading && (
          <div className="text-center py-20 text-gray-500">
            Loading products...
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-20 text-red-600">{error}</div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products found in this category
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition-all p-4 flex flex-col"
            >
              <p className="text-xs text-gray-500 capitalize">
                {product.category}
              </p>
              <p className="text-sm font-medium mt-1 line-clamp-2 h-10">
                {product.title}
              </p>

              <div className="flex-1 flex items-center justify-center my-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={320}
                  height={250}
                  className="object-contain w-32 h-32"
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-400 line-through text-sm">
                  RS {product.price.toLocaleString()}
                </span>
                <span className="text-teal-600 font-bold text-lg">
                  RS {(product.price * 0.85).toLocaleString()}
                </span>
              </div>

              <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg text-sm font-medium transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
