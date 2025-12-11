"use client";
import { useState, useEffect } from "react";
import heroSection from "../public/assets/heroSection.png";

const slides = [
  {
    title: "Shop Computer\n& experience",
    desc: "You Cannot Inspect Quality Into The Product It Is Already There\nI Am Not A Product Of My Circumstances, I Am A Product Of My Decisions.",
    btn: "View More",
  },
  {
    title: "Shop Computer\n& experience",
    desc: "You Cannot Inspect Quality Into The Product It Is Already There\nI Am Not A Product Of My Circumstances, I Am A Product Of My Decisions.",
    btn: "View More",
  },
  {
    title: "Shop Computer\n& experience",
    desc: "You Cannot Inspect Quality Into The Product It Is Already There\nI Am Not A Product Of My Circumstances, I Am A Product Of My Decisions.",
    btn: "View More",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative sm:h-96 h-[50vh] w-full bg-[#F3EDC9] ">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              id="heroSection"
              className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            />

            <div className="relative h-full flex">
              <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10  w-full">
                <div className="text-left z-10">
                  <h1
                    className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 leading-tight whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: slide.title.replace("\n", "<br />"),
                    }}
                  />
                  <p className="text-gray-700 mt-6 text-lg leading-relaxed whitespace-pre-line">
                    {slide.desc}
                  </p>
                  <button className="sm:mt-8 mt-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-2 sm:py-4 rounded transition">
                    {slide.btn}
                  </button>
                </div>

                <div className="relative flex justify-end">
                  <div
                    className="hidden absolute top-8 lg:top-12 right-4 md:right-0 lg:right-12 2xl:right-0 rounded-full w-32 h-32 md:w-40 md:h-40 sm:flex flex-col items-center justify-center shadow-2xl text-4xl font-bold z-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #FDC830 , #F37335)",
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <span className="text-5xl md:text-6xl text-white">40%</span>
                    <span className="text-lg md:text-xl -mt-2 text-white">
                      Off
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-1 sm:bottom-10 2xl:left-2 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current
                ? "bg-[#034E53] w-8"
                : " hover:bg-white/90 w-8 bg-[#AA9393]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
