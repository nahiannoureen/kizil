"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const banners = [
    "/images/hero-banner.png",
    "/images/hero-banner-2.png",
    "/images/hero-banner-3.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto mt-6 w-full max-w-[1280px] px-4 xl:px-0">
      <div className="relative overflow-hidden rounded-xl">
        {/* Slider Track */}
        <div
          className="
            flex
            transition-transform
            duration-700
            ease-[cubic-bezier(0.65,0,0.35,1)]
          "
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt="KIZIL Banner"
              className="
                w-full
                flex-shrink-0
                rounded-xl
                object-cover
              "
            />
          ))}
        </div>

        {/* Indicators */}
        <div
          className="
            absolute
            bottom-4
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-2
          "
        >
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                h-[4px]
                rounded-full
                transition-all
                duration-300

                ${current === index ? "w-12 bg-[#F44A22]" : "w-4 bg-white"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
