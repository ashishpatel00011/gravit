// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import Button from "./Button";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
// import viewView from "/hero_video.mp4";

// interface ParallaxImageProps {
//   scrollYProgress: any;
// }

// export default function HomeParallax() {
//   const navigate = useNavigate();
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//   const handleNavigate = () => {
//     navigate("/about");
//   };
//   const lineHeightClasses = isArabic
//     ? "leading-[5rem] md:leading-[8rem]"
//     : "leading-[3rem] md:leading-[5rem]";
//   return (
//     <div ref={containerRef} className="relative min-h-[300vh] bg-black">
//       {/* Text Section */}
//       <motion.div className="sticky top-0 min-h-[80vh] flex flex-col justify-center items-center text-center px-6 pt-12">
//         <div className={isArabic ? "rtl" : "ltr"}>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="animate-gradient mb-6"
//           >
//             <span
//               className={`bg-gradient-to-b from-[#2f886c] via-[#c0dbdf] to-[#ffffff] 
//                 bg-[length:300%] bg-clip-text text-transparent 
//                 text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] 
//                 ${lineHeightClasses} break-words whitespace-normal block mb-4`}
//             >
//               {t("home.title.line1")}
//             </span>
//             <span
//               className={`bg-gradient-to-b from-[#59bb9f] via-[#92d4e2] to-[#bff0ed] 
//                 bg-[length:300%] bg-clip-text text-transparent 
//                 text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] 
//                 ${lineHeightClasses} break-words whitespace-normal block`}
//             >
//               {t("home.title.line2")}
//             </span>
//           </motion.h1>
//         </div>

//         <p
//           className={`text-[#ffffffe0] text-[18px] sm:text-[20px] md:text-[22px] font-normal mb-6 max-w-2xl ${isArabic ? "rtl" : "ltr"
//             }`}
//           style={{ lineHeight: "2.5rem" }}
//         >
//           {t("home.description")}
//         </p>

//         <div
//           className="flex flex-col sm:flex-row gap-4"
//           dir={isArabic ? "rtl" : "ltr"}
//         >
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button />
//           </motion.div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleNavigate}
//             className="p-4 border text-[14px] sm:text-[16px] border-[#1ab8b3] text-white rounded-md hover:bg-[#1ab8b3]/20 transition-all duration-300 hover:border-opacity-70 cursor-pointer"
//           >
//             {t("buttons.learnMore")}
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Video Section */}
//       <div className="sticky top-0 min-h-screen w-full overflow-hidden">
//         <ParallaxImage scrollYProgress={scrollYProgress} />
//       </div>
//     </div>
//   );
// }

// // -----------------------------
// // ✅ Parallax Video Component
// // -----------------------------
// function ParallaxImage({ scrollYProgress }: ParallaxImageProps) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 640);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const y = useTransform(scrollYProgress, [0, 0.3], ["50%", "0%"]);
//   const scaleRange = isMobile ? [0.8, 1.1] : [0.8, 1.2];
//   const scale = useTransform(scrollYProgress, [0.3, 1], scaleRange);

//   return (
//     <motion.div
//       className="w-full h-screen flex items-center justify-center"
//       style={{ y, scale, transformOrigin: "center" }}
//     >
//       <motion.video
//         src={viewView}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="w-full h-full object-cover rounded-2xl"
//         style={{
//           boxShadow:
//             "0 0 300px 180px rgba(26, 184, 179, 0.38), 0 0 480px 240px rgba(191, 240, 237, 0.18)",
//           filter: "blur(0.3px)",
//         }}
//       />
//     </motion.div>
//   );
// }


import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import heroVideo from "/hero_video.mp4";
import mobileVideo from "/mobile.mp4";

interface ParallaxImageProps {
  scrollYProgress: any;
}

export default function HomeParallax() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const handleNavigate = () => {
    navigate("/about");
  };

  const lineHeightClasses = isArabic
    ? "leading-[5rem] md:leading-[8rem]"
    : "leading-[3rem] md:leading-[5rem]";

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-black">
      {/* Text Section */}
      <motion.div className="sticky top-0 min-h-[80vh] flex flex-col justify-center items-center text-center px-6 pt-12">
        <div className={isArabic ? "rtl" : "ltr"}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="animate-gradient mb-6"
          >
            <span
              className={`bg-gradient-to-b from-[#2f886c] via-[#c0dbdf] to-[#ffffff] 
                bg-[length:300%] bg-clip-text text-transparent 
                text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] 
                ${lineHeightClasses} break-words whitespace-normal block mb-4`}
            >
              {t("home.title.line1")}
            </span>
            <span
              className={`bg-gradient-to-b from-[#59bb9f] via-[#92d4e2] to-[#bff0ed] 
                bg-[length:300%] bg-clip-text text-transparent 
                text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] 
                ${lineHeightClasses} break-words whitespace-normal block`}
            >
              {t("home.title.line2")}
            </span>
          </motion.h1>
        </div>

        <p
          className={`text-[#ffffffe0] text-[18px] sm:text-[20px] md:text-[22px] font-normal mb-6 max-w-2xl ${isArabic ? "rtl" : "ltr"}`}
          style={{ lineHeight: "2.5rem" }}
        >
          {t("home.description")}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigate}
            className="p-4 border text-[14px] sm:text-[16px] border-[#1ab8b3] text-white rounded-md hover:bg-[#1ab8b3]/20 transition-all duration-300 hover:border-opacity-70 cursor-pointer"
          >
            {t("buttons.learnMore")}
          </motion.button>
        </div>
      </motion.div>

      {/* Video Section */}
      <div className="sticky top-0 min-h-screen w-full overflow-hidden">
        <ParallaxImage scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

// -----------------------------
// ✅ Parallax Video Component
// -----------------------------
function ParallaxImage({ scrollYProgress }: ParallaxImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y = useTransform(scrollYProgress, [0, 0.3], ["50%", "0%"]);
  const scaleRange = isMobile ? [0.8, 1.1] : [0.8, 1.2];
  const scale = useTransform(scrollYProgress, [0.3, 1], scaleRange);

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center"
      style={{ y, scale, transformOrigin: "center" }}
    >
      <motion.video
        src={isMobile ? mobileVideo : heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-2xl"
        style={{
          boxShadow:
            "0 0 300px 180px rgba(26, 184, 179, 0.38), 0 0 480px 240px rgba(191, 240, 237, 0.18)",
          filter: "blur(0.3px)",
        }}
      />
    </motion.div>
  );
}
