import ProductCard from "./ProductCard";

const newProducts = [
  {
    title: "Striped Linen Shirt",
    image: "/images/products/shirt-1.jpg",
    price: "850.00",
    oldPrice: "1,550.00",
    colors: ["#C8A56A", "#E8E0D0"],
  },
  {
    title: "Denim Blue Jeans",
    image: "/images/products/jeans-1.jpg",
    price: "1,250.00",
    oldPrice: "2,300.00",
    colors: ["#4A4538", "#9B7A0A"],
  },
  {
    title: "Floral Print Dress",
    image: "/images/products/floral-1.jpg",
    price: "1,800.00",
    oldPrice: "2,300.00",
    colors: ["#5A5742", "#D9CFBD"],
  },
  {
    title: "Leather Ankle Boots",
    image: "/images/products/boot-1.jpg",
    price: "3,500.00",
    oldPrice: "5,000.00",
    colors: ["#D8CFC3", "#B620F1"],
  },
  {
    title: "Silk Scarf",
    image: "/images/products/scarf-2.jpg",
    price: "600.00",
    oldPrice: "1,200.00",
    colors: ["#D8CFC3", "#B620F1"],
  },
  {
    title: "Woolen Winter Coat",
    image: "/images/products/coat-2.jpg",
    price: "4,800.00",
    oldPrice: "7,000.00",
    colors: ["#D8CFC3", "#B620F1"],
  },
  {
    title: "Casual Cotton T-Shirt",
    image: "/images/products/tshirt-1.jpg",
    price: "400.00",
    oldPrice: "800.00",
    colors: ["#D8CFC3", "#B620F1"],
  },
  {
    title: "Classic Leather Belt",
    image: "/images/products/belt-1.jpg",
    price: "1,100.00",
    oldPrice: "2,000.00",
    colors: ["#D8CFC3", "#B620F1"],
  },
];

export default function NewArrivals() {
  return (
    <section className="mx-auto mt-20 max-w-[1280px] px-4 xl:px-0">
      <div className="text-center">
        <h2 className="font-urbanist text-[42px] font-bold text-[#161616]">
          New Arrivals
        </h2>
        <p className="mt-3 text-[#6B6B6B]">
          Be the first to wear the latest trends.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {newProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
