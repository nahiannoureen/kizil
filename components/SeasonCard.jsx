export default function SeasonCard({ image, title }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-center font-urbanist text-lg font-semibold text-[#161616]">
        {title}
      </h3>
    </div>
  );
}
