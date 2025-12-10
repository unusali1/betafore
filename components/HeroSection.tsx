"use client";

export default function HeroSection() {
  return (
    <section className="relative sm:h-96 h-[40vh] w-full overflow-hidden">
      <div id="heroSection" className="absolute inset-0 bg-cover bg-right bg-no-repeat"/>
      
      <div className="relative h-full">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <div className="relative h-full flex">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10  w-full">
              <div className="text-left z-10 mt-12">
                <h1 className="text-4xl md:text-5xl lg:text-4xl font-normal text-black leading-tight whitespace-pre-line">
                  Shop{" "}
                  <span className="text-[#0DAEB9]">
                    Computer <br />& experience
                  </span>
                </h1>
                <p className="text-gray-700 mt-6 text-lg leading-relaxed whitespace-pre-line">
                  You cannot inspect quality into the product; it is already
                  there. <br />I am not a product of my circumstances. I am a
                  product of my decisions.
                </p>
                <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-4 rounded transition">
                  View More
                </button>
              </div>

              <div className="relative flex justify-end">
                <div className="absolute top-12 right-16 bg-orange-500 text-white rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-2xl text-4xl font-bold z-20">
                  <span className="text-5xl md:text-6xl">40%</span>
                  <span className="text-lg md:text-xl -mt-2">Off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        <button className="h-2 rounded-full transition bg-[#034E53] w-8" />
        <button className="h-2 rounded-full transition bg-[#AA9393] w-8" />
        <button className="h-2 rounded-full transition bg-[#AA9393] w-8" />
      </div>
    </section>
  );
}
