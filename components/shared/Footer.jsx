// import { FaFacebookF, FaTwitter, FaInstagram, FaRegCopy } from "react-icons/fa";

// import { HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";

// export default function Footer() {
//   const shopping = ["Wishlist", "Cart", "Shop by Category"];

//   const information = ["Track My Order", "Corporate Enquires", "FAQs"];

//   const account = ["My Account", "My Orders"];

//   const LinkColumn = ({ title, links }) => (
//     <div className="min-w-[150px]">
//       <h4 className="text-[18px] font-semibold uppercase mb-7">{title}</h4>

//       <div className="space-y-4">
//         {links.map((item) => (
//           <a
//             key={item}
//             href="#"
//             className="block text-[16px] text-[#444] hover:text-[#ff5b2e] transition"
//           >
//             {item}
//           </a>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <footer className="bg-[#F6F6F6] w-full">
//       <div className="max-w-[1280px] mx-auto px-8 py-12">
//         {/* Top */}

//         <div className="flex justify-between flex-wrap gap-12">
//           {/* Left */}

//           <div className="flex-1 min-w-[380px]">
//             <h2 className="text-[42px] font-bold tracking-[6px] mb-10">
//               KI<span className="text-[#ff5b2e]">ZIL</span>
//             </h2>

//             <div className="space-y-5">
//               <div className="flex items-center gap-3">
//                 <HiOutlineMapPin size={18} className="text-black" />

//                 <p className="text-[16px] text-[#666]">
//                   29 SE 2nd Ave, Miami Florida 33131, United States
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <HiOutlineEnvelope size={18} />

//                 <span className="text-[16px] text-[#666]">info@kinzil.com</span>

//                 <FaRegCopy className="text-gray-500 cursor-pointer" />
//               </div>

//               <h3 className="text-[34px] font-bold">(+92) 3942 7879</h3>
//             </div>
//           </div>

//           {/* Right */}

//           <div className="flex gap-24 flex-wrap">
//             <LinkColumn title="Shopping" links={shopping} />

//             <LinkColumn title="Information" links={information} />

//             <LinkColumn title="Account" links={account} />
//           </div>
//         </div>

//         {/* Divider */}

//         <div className="border-t border-gray-300 mt-12 pt-8">
//           <div className="flex justify-between items-center flex-wrap gap-8">
//             {/* Copyright */}

//             <p className="text-[15px] text-[#444]">
//               Copyright ©{" "}
//               <span className="text-[#ff5b2e] font-semibold">
//                 360D Soul Limited
//               </span>{" "}
//               2026. All rights reserved.
//             </p>

//             {/* Social */}

//             <div className="flex items-center gap-8 text-[22px] text-[#444]">
//               <FaFacebookF className="cursor-pointer hover:text-[#ff5b2e]" />

//               <FaTwitter className="cursor-pointer hover:text-[#ff5b2e]" />

//               <FaInstagram className="cursor-pointer hover:text-[#ff5b2e]" />
//             </div>

//             {/* Policies */}

//             <div className="flex gap-10 text-[15px] text-[#444]">
//               <a href="#" className="hover:text-[#ff5b2e]">
//                 Teams & Condition
//               </a>

//               <a href="#" className="hover:text-[#ff5b2e]">
//                 Privacy & Policy
//               </a>

//               <a href="#" className="hover:text-[#ff5b2e]">
//                 Refund Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { FaFacebookF, FaTwitter, FaInstagram, FaRegCopy } from "react-icons/fa";

import { HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";

export default function Footer() {
  const shopping = ["Wishlist", "Cart", "Shop by Category"];

  const information = ["Track My Order", "Corporate Enquires", "FAQs"];

  const account = ["My Account", "My Orders"];

  const LinkColumn = ({ title, links }) => (
    <div className="min-w-[150px]">
      <h4 className="mb-7 text-[16px] font-semibold uppercase text-black">
        {title}
      </h4>

      <div className="flex flex-col gap-4">
        {links.map((item) => (
          <a
            key={item}
            href="#"
            className="
              text-[15px]
              font-normal
              text-[#444]
              transition
              hover:text-[#ff5b2e]
            "
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="w-full bg-[#F6F6F6] mt-24">
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-8
          pt-16
          pb-10
        "
      >
        {/* TOP FOOTER */}

        <div
          className="
            flex
            justify-between
            gap-20
            flex-wrap
          "
        >
          {/* COMPANY INFO */}

          <div
            className="
              flex-1
              min-w-[380px]
            "
          >
            <h2
              className="
                mb-10
                text-[38px]
                font-bold
                tracking-[6px]
              "
            >
              KI
              <span className="text-[#ff5b2e]">ZIL</span>
            </h2>

            <div className="flex flex-col gap-5">
              {/* ADDRESS */}

              <div className="flex items-center gap-3">
                <HiOutlineMapPin size={18} className="text-black" />

                <p
                  className="
                    text-[15px]
                    text-[#666]
                  "
                >
                  29 SE 2nd Ave, Miami Florida 33131, United States
                </p>
              </div>

              {/* EMAIL */}

              <div className="flex items-center gap-3">
                <HiOutlineEnvelope size={18} />

                <p
                  className="
                    text-[15px]
                    text-[#666]
                  "
                >
                  info@kinzil.com
                </p>

                <FaRegCopy
                  size={14}
                  className="
                    cursor-pointer
                    text-gray-400
                    hover:text-black
                  "
                />
              </div>

              {/* PHONE */}

              <h3
                className="
                  mt-2
                  text-[22px]
                  font-bold
                  tracking-wide
                "
              >
                (+92) 3942 7879
              </h3>
            </div>
          </div>

          {/* FOOTER LINKS */}

          <div
            className="
              flex
              gap-[90px]
              flex-wrap
            "
          >
            <LinkColumn title="Shopping" links={shopping} />

            <LinkColumn title="Information" links={information} />

            <LinkColumn title="Account" links={account} />
          </div>
        </div>

        {/* BOTTOM AREA */}

        <div
          className="
            mt-12
            border-t
            border-black/20
            pt-8
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-8
              flex-wrap
            "
          >
            {/* COPYRIGHT */}

            <p
              className="
                text-[15px]
                font-medium
                text-[#444]
              "
            >
              Copyright ©{" "}
              <span
                className="
                  font-semibold
                  text-[#ff5b2e]
                "
              >
                360D Soul Limited
              </span>{" "}
              2026. All rights reserved.
            </p>

            {/* SOCIAL ICONS */}

            <div
              className="
                flex
                items-center
                gap-8
                text-[#444]
              "
            >
              <FaFacebookF
                size={19}
                className="
                  cursor-pointer
                  transition
                  hover:text-[#ff5b2e]
                "
              />

              <FaTwitter
                size={19}
                className="
                  cursor-pointer
                  transition
                  hover:text-[#ff5b2e]
                "
              />

              <FaInstagram
                size={21}
                className="
                  cursor-pointer
                  transition
                  hover:text-[#ff5b2e]
                "
              />
            </div>

            {/* POLICY LINKS */}

            <div
              className="
                flex
                gap-10
                flex-wrap
                text-[15px]
                font-medium
                text-[#444]
              "
            >
              <a href="#" className="hover:text-[#ff5b2e]">
                Terms & Condition
              </a>

              <a href="#" className="hover:text-[#ff5b2e]">
                Privacy & Policy
              </a>

              <a href="#" className="hover:text-[#ff5b2e]">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
