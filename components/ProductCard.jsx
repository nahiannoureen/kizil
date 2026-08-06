import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  colors = [],
}) {
  return (
    <div className="w-full">
      {/* Image */}
      <div className="overflow-hidden rounded-xl bg-[#F8F8F8]">
        <img
          src={image}
          alt={title}
          className="h-[354px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="font-urbanist text-[18px] font-semibold leading-6 text-[#161616]">
          {title}
        </h3>

        {/* Color Swatches */}
        <div className="mt-3 flex items-center gap-2">
          {colors.map((color, index) => (
            <span
              key={index}
              className="h-5 w-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="font-urbanist text-[20px] font-bold text-[#161616]">
            ৳ {price}
          </span>

          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ৳ {oldPrice}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#161616] text-sm font-medium text-white transition hover:bg-black">
          <FiShoppingCart size={16} />
          Add To Cart
        </button>
      </div>
    </div>
  );
}
