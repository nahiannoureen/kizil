import { FiTruck, FiClock, FiAward } from "react-icons/fi";

const features = [
  {
    icon: <FiTruck size={34} className="text-[#F44A22]" />,
    title: "Fast, Free Shipping",
    subtitle: "On order over BDT-2500",
  },
  {
    icon: <FiClock size={34} className="text-[#F44A22]" />,
    title: "Next Day Delivery",
    subtitle: "Free - spend over BDT-2500",
  },
  {
    icon: <FiAward size={34} className="text-[#F44A22]" />,
    title: "Quality Guarantee",
    subtitle: "We guarantee our products",
  },
];

export default function Features() {
  return (
    <section className="mx-auto mt-7 max-w-[1280px] px-4 xl:px-0">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-center md:justify-start"
          >
            <div className="flex items-center gap-5">
              {item.icon}

              <div>
                <h3 className="font-urbanist text-base font-semibold text-[#161616]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-[#A9AAAC]">{item.subtitle}</p>
              </div>
            </div>

            {index !== features.length - 1 && (
              <div className="ml-10 hidden h-10 border-r border-gray-300 md:block"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
