// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import Book from "../components/Book";
// import MobileLink from "../components/MobileLink";
// import { IoTimeOutline } from "react-icons/io5";

// type LocationKey =
//   | "NozhaBranchMakkah"
//   | "JuffaliBranchMakkah"
//   | "AlSaudBranchMakkah"
//   | "ShawkiyaBranchMakkah"
//   | "TahliaBranchJeddah"
//   | "HiraBranchJeddah"
//   | "HamdaniyaBranchJeddah"
//   | "OlayaBranchTabuk"
//   | "BaniHarithaMadinah"
//   | "SheharTaif";

// const Discover: React.FC = () => {
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";
//   const [activeLocation, setActiveLocation] = useState<LocationKey>(
//     "JuffaliBranchMakkah"
//   );

//   const handleTabClick = (key: LocationKey) => {
//     setActiveLocation(key);
//   };

//   type BranchLocation = {
//     name: string;
//     address: string;
//     timing: string;
//     timing1: string;
//     mapSrc: string;
//   };

//   const location = t(`discover.branches.${activeLocation}`, {
//     returnObjects: true,
//   }) as BranchLocation;

//   return (
//     <div className="bg-black text-white min-h-screen pb-20 overflow-x-hidden">
//       {/* Background Section */}
//       <div className="relative md:h-[70vh] sm:h-screen overflow-hidden">
//         <img
//           src="/Images/IMG_0271.JPG"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//         <div
//           className="absolute inset-0"
//           style={{ backgroundColor: "#00000078" }}
//         ></div>

//         <div
//           className={`absolute top-[5%] max-w-[30%] leading-none z-10 ${isArabic ? "right-[8%]" : "left-[8%]"
//             }`}
//         >
//           <span
//             className="md:text-[5rem] text-[3rem]"
//             style={{ color: "rgb(26 184 179)", lineHeight: "4rem" }}
//           >
//             <strong>{t("discover.heading")}</strong>
//           </span>
//         </div>
//       </div>

//       {/* Main Heading */}
//       <div
//         className={`text-center pt-20 space-y-3 sm:space-y-4 ${isArabic ? "rtl" : "ltr"
//           }`}
//       >
//         <h2 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-white mb-5">
//           {t("discover.title")}
//         </h2>
//       </div>

//       {/* Tabs for Location Selection */}
//       <center>
//         <div
//           className={`flex flex-wrap ${isArabic ? "md:flex-row-reverse" : "md:flex-row"
//             } justify-center max-w-7xl border-b border-gray-600 mb-9 pb-9 px-4`}
//         >
//           {(
//             [
//               "NozhaBranchMakkah",
//               "JuffaliBranchMakkah",
//               "AlSaudBranchMakkah",
//               "ShawkiyaBranchMakkah",
//               "TahliaBranchJeddah",
//               "HiraBranchJeddah",
//               "HamdaniyaBranchJeddah",
//               "OlayaBranchTabuk",
//               "BaniHarithaMadinah",
//               "SheharTaif",
//             ] as LocationKey[]
//           ).map((key, index) => (
//             <button
//               key={key}
//               onClick={() => handleTabClick(key)}
//               className={`pb-1 text-lg font-semibold transition duration-200 cursor-pointer
//                          w-full text-left mb-2 pt-1 pl-0 pr-0
//                          md:w-auto md:text-center md:mr-6
//                          break-words
//                          ${activeLocation === key
//                   ? "text-white border-[#1AB8B3] border-b-2"
//                   : "text-gray-400 hover:text-white"
//                 }
//                          ${index !== 0
//                   ? "md:border-l md:border-t-0 md:pl-5 md:pt-0 md:mt-0"
//                   : ""
//                 }
//                          ${index === 0 ? "" : "md:mt-0"}
//                          `}
//             >
//               {t(`discover.branches.${key}.name`)}
//             </button>
//           ))}
//         </div>
//       </center>

//       {/* Branch Info + Map */}
//       <div
//         className={`flex flex-col md:flex-row ${isArabic ? "md:flex-row-reverse" : ""
//           } md:max-w-7xl w-[90%] mx-auto gap-10`}
//       >
//         {/* Location Info */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className={`flex-1 space-y-5 ${isArabic ? "text-right" : "text-left"}`}
//         >
//           <h3 className="text-2xl font-bold text-[#1AB8B3]">
//             {location.name}
//           </h3>
//           <p className="text-gray-300 text-[22px] leading-relaxed">
//             {location.address}
//           </p>

//           {location.timing && (
//             <p className="text-gray-300 text-[22px] flex items-center">
//               <IoTimeOutline
//                 className={`inline-block mr-2 text-[#1AB8B3] ${isArabic ? "ml-2" : ""
//                   }`}
//                 size={24}
//               />
//               {location.timing}
//             </p>
//           )}

//           {location.timing1 && (
//             <p className="text-gray-300 text-[22px] flex items-center">
//               <IoTimeOutline
//                 className={`inline-block mr-2 text-[#1AB8B3] ${isArabic ? "ml-2" : ""
//                   }`}
//                 size={24}
//               />
//               {activeLocation === "JuffaliBranchMakkah" &&
//                 (isArabic ? "الخميس " : "Thursday ")}
//               {location.timing1}
//             </p>
//           )}
//         </motion.div>

//         {/* Map */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex-1 mb-10"
//         >
//           <iframe
//             src={location.mapSrc}
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </motion.div>
//       </div>

//       <Book />
//       <MobileLink />
//     </div>
//   );
// };

// export default Discover;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Book from "../components/Book";
import MobileLink from "../components/MobileLink";
import { IoTimeOutline } from "react-icons/io5";

type LocationKey =
  | "NozhaBranchMakkah"
  | "JuffaliBranchMakkah"
  | "AlSaudBranchMakkah"
  | "ShawkiyaBranchMakkah"
  | "TahliaBranchJeddah"
  | "HiraBranchJeddah"
  | "HamdaniyaBranchJeddah"
  | "OlayaBranchTabuk"
  | "BaniHarithaMadinah"
  | "SheharTaif";

const Discover: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [activeLocation, setActiveLocation] = useState<LocationKey>(
    "JuffaliBranchMakkah"
  );

  const handleTabClick = (key: LocationKey) => {
    setActiveLocation(key);
  };

  type BranchLocation = {
    name: string;
    address: string;
    timing: string;
    timing1: string;
    mapSrc: string;
  };

  const location = t(`discover.branches.${activeLocation}`, {
    returnObjects: true,
  }) as BranchLocation;

  return (
    <div className="bg-black text-white min-h-screen pb-20 overflow-x-hidden">
      {/* Background Section */}
      <div className="relative md:h-[70vh] sm:h-screen overflow-hidden">
        <img
          src="/Images/IMG_0271.JPG"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#00000078" }}
        ></div>

        <div
          className={`absolute top-[5%] max-w-[30%] leading-none z-10 ${isArabic ? "right-[8%]" : "left-[8%]"
            }`}
        >
          <span
            className="md:text-[5rem] text-[3rem]"
            style={{ color: "rgb(26 184 179)", lineHeight: "4rem" }}
          >
            <strong>{t("discover.heading")}</strong>
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div
        className={`text-center pt-20 space-y-3 sm:space-y-4 ${isArabic ? "rtl" : "ltr"}`}
      >
        <h2 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-white mb-5">
          {t("discover.title")}
        </h2>
      </div>

      {/* Tabs for Location Selection */}
      <center>
        <div
          className={`flex flex-wrap ${isArabic ? "md:flex-row-reverse" : "md:flex-row"
            } justify-center max-w-7xl border-b border-gray-600 mb-9 pb-9 px-4`}
        >
          {(
            [
              "NozhaBranchMakkah",
              "JuffaliBranchMakkah",
              "AlSaudBranchMakkah",
              "ShawkiyaBranchMakkah",
              "TahliaBranchJeddah",
              "HiraBranchJeddah",
              "HamdaniyaBranchJeddah",
              "OlayaBranchTabuk",
              "BaniHarithaMadinah",
              "SheharTaif",
            ] as LocationKey[]
          ).map((key, index) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`pb-1 text-lg font-semibold transition duration-200 cursor-pointer
                         w-full text-left mb-2 pt-1 pl-0 pr-0
                         md:w-auto md:text-center md:mr-6
                         break-words
                         ${activeLocation === key
                  ? "text-white border-[#1AB8B3] border-b-2"
                  : "text-gray-400 hover:text-white"
                }
                         ${index !== 0
                  ? "md:border-l md:border-t-0 md:pl-5 md:pt-0 md:mt-0"
                  : ""
                }
                         ${index === 0 ? "" : "md:mt-0"}`}
            >
              {t(`discover.branches.${key}.name`)}
            </button>
          ))}
        </div>
      </center>

      {/* Branch Info + Map */}
      <div
        className={`flex flex-col md:flex-row ${isArabic ? "md:flex-row-reverse" : ""
          } md:max-w-7xl w-[90%] mx-auto gap-10`}
      >
        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex-1 space-y-5 ${isArabic ? "text-right" : "text-left"}`}
        >
          <h3 className="text-2xl font-bold text-[#1AB8B3]">
            {location.name}
          </h3>
          <p className="text-gray-300 text-[22px] leading-relaxed">
            {location.address}
          </p>

          {location.timing && (
            <div className="flex items-start gap-2 text-gray-300 text-[18px] leading-relaxed">
              <IoTimeOutline
                className="text-[#1AB8B3] min-w-[24px] min-h-[24px]"
                size={24}
              />
              <span className={`${isArabic ? "text-right" : "text-left"} flex-1`}>
                {location.timing}
              </span>
            </div>
          )}

          {location.timing1 && (
            <div className="flex items-start gap-2 text-gray-300 text-[18px] leading-relaxed">
              <IoTimeOutline
                className="text-[#1AB8B3] min-w-[24px] min-h-[24px]"
                size={24}
              />
              <span className={`${isArabic ? "text-right" : "text-left"} flex-1`}>
                {activeLocation === "JuffaliBranchMakkah" &&
                  (isArabic ? "الخميس " : "Thursday ")}
                {location.timing1}
              </span>
            </div>
          )}
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 mb-10"
        >
          <iframe
            src={location.mapSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      <Book />
      <MobileLink />
    </div>
  );
};

export default Discover;
