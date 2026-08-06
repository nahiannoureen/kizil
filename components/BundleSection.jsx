import BundleCard from "./BundleCard";
import { bundles } from "../data/bundles";

export default function BundleSection() {
  return (
    <section className="mx-auto mt-24 max-w-[1280px] px-4 xl:px-0">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[44px] font-bold text-[#161616]">
          Popular Bundles
        </h2>

        <p className="mt-2 text-base text-[#777777]">
          Save more with our best-selling style combos.
        </p>

        <button className="mt-6 rounded-md border border-[#D8D8D8] px-8 py-3 text-sm font-medium transition hover:bg-[#161616] hover:text-white">
          See All Bundles
        </button>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {bundles.map((bundle) => (
          <BundleCard
            key={bundle.id}
            image={bundle.image}
            title={bundle.title}
            price={bundle.price}
            oldPrice={bundle.oldPrice}
          />
        ))}
      </div>
    </section>
  );
}
