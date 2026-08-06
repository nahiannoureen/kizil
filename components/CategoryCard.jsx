// export default function CategoryCard({ image, title }) {
//   return (
//     <div className="group cursor-pointer">
//       <div className="overflow-hidden rounded-xl">
//         <img
//           src={image}
//           alt={title}
//           className="h-[354px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>

//       <h3 className="mt-4 text-center text-lg font-bold text-[#161616]">
//         {title}
//       </h3>
//     </div>
//   );
// }

export default function CategoryCard({ image, title, subCategories = [] }) {
  return (
    <div className="group cursor-pointer rounded-xl bg-white shadow-sm transition hover:shadow-lg">
      {/* Category Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="h-[354px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Category Content */}
      <div className="p-5">
        <h3 className="text-center text-lg font-bold text-[#161616]">
          {title}
        </h3>

        {/* Sub Categories */}
        <ul className="mt-5 space-y-2">
          {subCategories.map((item) => (
            <li
              key={item}
              className="text-sm text-gray-600 hover:text-[#E85A2A]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
