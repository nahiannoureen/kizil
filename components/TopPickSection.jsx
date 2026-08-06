import SeasonCard from "./SeasonCard";

const picks = [
  {
    title: "Tops Collection",
    image: "/images/season/tops.png",
  },
  {
    title: "Bottom Wear",
    image: "/images/season/bottoms.png",
  },
  {
    title: "Loungewear",
    image: "/images/season/lounge.png",
  },
  {
    title: "Scarves &amp; Wraps",
    image: "/images/season/scarves.png",
  },
];

export default function TopPickSection() {
  return (
    <section className="mx-auto mt-20 max-w-[1280px] px-4 xl:px-0">
      <div className="text-center">
        <h2 className="font-urbanist text-[42px] font-bold text-[#161616]">
          Top Pick of the Season
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {picks.map((item) => (
          <SeasonCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
