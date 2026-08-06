export default function BundleCard({ image, title, price, oldPrice }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#E9E9E9] bg-white shadow-sm transition hover:shadow-lg">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-5 py-5">
        <h3 className="text-center text-lg font-semibold text-[#161616]">
          {title}
        </h3>

        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="text-2xl font-bold text-[#161616]">৳ {price}</span>

          <span className="text-sm text-gray-400 line-through">
            ৳ {oldPrice}
          </span>
        </div>

        <button className="mt-5 w-full rounded-md bg-[#161616] py-3 text-sm font-medium text-white transition hover:bg-black">
          Learn More
        </button>
      </div>
    </div>
  );
}
