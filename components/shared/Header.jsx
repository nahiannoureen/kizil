import {
  FiPhone,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMapPin,
} from "react-icons/fi";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Top Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <h1 className="text-3xl font-bold tracking-widest">
            <span className="text-black">KI</span>
            <span className="text-[#E85A2A]">ZIL</span>
          </h1>

          <div className="hidden items-center gap-2 lg:flex">
            <FiPhone className="text-lg text-gray-600" />
            <div>
              <p className="text-xs text-gray-400">Call Us</p>
              <p className="text-sm font-semibold">(02)-55048474</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="hidden w-[520px] items-center rounded-full bg-gray-100 px-4 py-2 lg:flex">
          <FiSearch className="text-gray-500" />

          <input
            placeholder="Search for products"
            className="ml-3 w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm">
            <FiUser />
            <span className="hidden md:block">Your Account</span>
          </button>

          <button className="relative">
            <FiHeart size={20} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              2
            </span>
          </button>

          <button className="relative">
            <FiShoppingCart size={20} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Left */}
          <div className="flex items-center gap-6">
            <button className="rounded bg-black px-5 py-2 text-sm font-medium text-white">
              SHOP BY CATEGORY
            </button>

            <nav className="hidden items-center gap-8 text-sm lg:flex">
              <a href="#" className="hover:text-[#E85A2A]">
                Our Collections
              </a>

              <a href="#" className="text-[#E85A2A] hover:text-[#E85A2A]">
                Flash Deals
              </a>

              <a href="#" className="hover:text-[#E85A2A]">
                New Arrival
              </a>

              <a href="#" className="text-[#E85A2A] font-medium">
                Bundle Products
              </a>
            </nav>
          </div>

          {/* Right */}
          <div className="hidden items-center gap-6 text-sm lg:flex">
            <button className="flex items-center gap-2 hover:text-[#E85A2A]">
              <FiMapPin />
              Corporate Enquiry
            </button>

            <button className="hover:text-[#E85A2A]">Track Your Order</button>
          </div>
        </div>
      </div>
    </header>
  );
}
