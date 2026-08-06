import ProductCard from "./ProductCard";

const flashProducts = [
  {
    title: "Buttons Cotton Top",
    image: "/images/products/top-1.png",
    price: "1,090.00",
    oldPrice: "2,000.00",
    colors: ["#C8A56A", "#E8E0D0"],
  },
  {
    title: "Wool Midi Coat",
    image: "/images/products/coat-1.png",
    price: "1,590.00",
    oldPrice: "2,300.00",
    colors: ["#4A4538", "#9B7A0A"],
  },
  {
    title: "Lyocell Wrap Top",
    image: "/images/products/wrap-1.png",
    price: "4,090.00",
    oldPrice: "5,000.00",
    colors: ["#5A5742", "#D9CFBD"],
  },
  {
    title: "Leather Shopper Bag With Stitching",
    image: "/images/products/bag-1.png",
    price: "7,090.00",
    oldPrice: "10,000.00",
    colors: ["#D8CFC3", "#B620F1"],
  },
];

export default function FlashDeals() {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-4 xl:px-0">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="font-urbanist text-[42px] font-bold text-[#161616]">
            Flash Deals
          </h2>
          <p className="mt-2 text-[#6B6B6B]">
            Limited-time offers on our best sellers.
          </p>
        </div>

        {/* Countdown */}
        <div className="text-right">
          <p className="text-xs uppercase tracking-wider text-gray-400">
            Ends In
          </p>

          <div className="mt-2 flex gap-4">
            {[
              { value: "03", label: "Days" },
              { value: "23", label: "Hours" },
              { value: "19", label: "Minutes" },
              { value: "56", label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-urbanist text-2xl font-bold text-[#161616]">
                  {item.value}
                </div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {flashProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
