import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Tops Collection",
    image: "/images/categories/top.png",
  },
  {
    title: "Bottoms Wear",
    image: "/images/categories/bottom.png",
  },
  {
    title: "Loungewear",
    image: "/images/categories/lounge.png",
  },
  {
    title: "Scarves",
    image: "/images/categories/scarf.png",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-4 xl:px-0">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[42px] font-bold leading-none text-black">
          Shop By Category
        </h2>

        <p className="mt-3 text-base text-[#161616]">
          Explore our curated collection and find your perfect style.
        </p>
      </div>

      {/* Categories */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
}
