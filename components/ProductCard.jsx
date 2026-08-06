import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  colors = [],
}) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg bg-[#F8F8F8]">
        <img
          src={image}
          alt={title}
          className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-[18px] font-semibold text-[#161616]">{title}</h3>

      <div className="mt-3 flex gap-2">
        {colors.map((color, index) => (
          <span
            key={index}
            className="h-5 w-5 rounded-full border"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-[30px] font-bold">৳ {price}</span>

        <span className="text-gray-400 line-through">৳ {oldPrice}</span>
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded bg-[#161616] py-3 text-white transition hover:bg-black">
        <FiShoppingCart />
        Add To Cart
      </button>
    </div>
  );
}
