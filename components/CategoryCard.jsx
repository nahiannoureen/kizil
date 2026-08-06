export default function CategoryCard({ image, title }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-[354px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-center text-lg font-bold text-[#161616]">
        {title}
      </h3>
    </div>
  );
}
