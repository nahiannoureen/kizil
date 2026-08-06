export default function Hero() {
  return (
    <section className="mx-auto mt-6 w-full max-w-[1280px] px-4 xl:px-0">
      <div className="relative overflow-hidden rounded-xl">
        {/* Hero Banner */}
        <img
          src="/images/hero-banner.png"
          alt="KIZIL Hero Banner"
          className="block h-auto w-full rounded-xl object-cover"
        />

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          <span className="h-[4px] w-12 rounded-full bg-[#F44A22]" />
          <span className="h-[4px] w-4 rounded-full bg-white" />
          <span className="h-[4px] w-4 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
