import Image from 'next/image'
import React from 'react'

export default async function NewArrivals({products}:{products:any}) {
  return (
    <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-700 mb-10"><span className="text-[#0DAEB9]">New</span> Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products?.data.map((product: any) => (
                
              <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-xl transition-all p-4">

                <p className="text-xs text-gray-500">{product.category}</p>
                <p className="text-sm font-medium mt-1 line-clamp-2">{product.title}</p>
                
                <div className="rounded w-full mb-4 mt-4 flex items-center justify-center text-gray-500">
                 <Image
                  src={product.image}
                  alt={product.title}
                  width={320}
                  height={250}
                  className='object-center w-32 h-32'
                 />
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400 line-through text-sm">RS {product.price}</span>
                  <span className="text-teal-600 font-bold">RS {product.price}</span>
                </div>
                <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded text-sm transition">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
