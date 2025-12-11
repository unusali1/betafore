"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import electronics from "@/public/assets/electronics.png";
import fashion from "@/public/assets/fashion.png";
import appliance from "@/public/assets/appliance.png";
import babies from "@/public/assets/babies.png";
import grocery from "@/public/assets/grocery.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: 1, name: "Electronics", img: electronics },
  { id: 2, name: "Fashion", img: fashion },
  { id: 3, name: "Appliance", img: appliance },
  { id: 4, name: "Babies Store", img: babies },
  { id: 5, name: "Grocery", img: grocery },
];

export default function Category() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const updateButtons = () => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
    emblaApi.on("init", updateButtons);
    updateButtons();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="container mx-auto py-12 relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-none ml-14 sm:ml-12 w-72 lg:w-1/4 h-52 sm:h-64 relative group border border-white bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${category.img.src})`,
              }}
            >
              <div className="absolute bottom-4 left-[132px] sm:left-[149px] -translate-x-1/2 w-full">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-0 border-b-transparent border-r-10 border-r-black shadow-2xl" />

                <div className="w-[85%] bg-white shadow-xl px-5 py-4 flex justify-between items-center">
                  <h2 className="text-lg font-light tracking-wide">
                    {category.name}
                  </h2>
                  <span className="text-xl font-light text-[#62A8EA]">
                    Shop
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`absolute -lfet-2 sm:-left-8 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-2 transition-opacity ${
          prevBtnDisabled
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 hover:opacity-80"
        }`}
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-gray-800" />
      </button>

      <button
        className={`absolute right-1 sm:-right-14 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-2 transition-opacity ${
          nextBtnDisabled
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 hover:opacity-80"
        }`}
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-gray-800" />
      </button>
    </section>
  );
}
