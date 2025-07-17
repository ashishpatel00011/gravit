/* eslint-disable @typescript-eslint/no-explicit-any */
// import {  useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

// const beforeImages = [
//   "/Images/upperParallax-10.jpeg",
//   "/Images/before/b Dr Naif c4 before.jpeg",
//   "/Images/before/b Dr Baghareeb c1before.jpeg",
//   "/Images/before/b Dr Naif c1 before.jpg",
//   "/Images/before/b badr before1 (2).JPG",
// ];

// const afterImages = [
//   "/Images/upperParallax-01.jpeg",
//   "/Images/after/a Dr Naif c4 after.jpeg",
//   "/Images/after/a Dr Baghareeb c1 after.jpeg",
//   "/Images/after/a Dr Naif c1 after.jpg",
//   "/Images/after/a badr after 1a (2).JPG",
// ];

export default function ParallaxWithScrollAndInView() {
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });
  const { t, i18n } = useTranslation();

  // const y = useTransform(scrollYProgress, [0.9, 1], ["-10%", "-20%"]);
  const isArabic = i18n.language === 'ar';

  return (
    <div ref={containerRef} className="relative w-full min-h-[60vh] py-1">
      <div className="sticky top-0 h-[100vh] py-4">
        <div
          className="container grid grid-cols-1 md:grid-cols-2 h-[60vh] w-full"
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          {/* Text Section */}
          <div
            className={`flex   justify-center  flex-col sticky top-0 h-screen py-1 md:pr-[8rem] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <h3
              className={`mb-6 text-[3.7rem]  ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {t("smileMakeover.title")}
            </h3>
            <p
              className={`text-gray-600 para20 mb-8 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {t("smileMakeover.description..")}
            </p>
            <div className={isArabic ? "text-right" : "text-left"}>
              <Button />
            </div>
          </div>

          {/* Parallax Images */}
          <div className="relative h-[95vh] col-span-1">
            <div className="sticky top-0 h-[95vh] w-full overflow-hidden">
              {/* {beforeImages.map((_, index) => (
                <SlideImage
                  key={index}
                  index={index}
                  total={beforeImages.length}
                  beforeSrc={beforeImages[index]}
                  afterSrc={afterImages[index]}
                  scrollYProgress={scrollYProgress}
                  isFirst={index === 0}
                  isLast={index === beforeImages.length - 1}
                />
              ))} */}
              <video
                src={
                  "/Images/video-output-BE05D0A4-FF41-4517-A64B-3A2002BD2C5C.MP4"
                }
                autoPlay
                muted
                loop
                playsInline
                className="w-[100%] h-[95vh] pb-10  object-contain "
                style={{
                  boxShadow:
                    "0 0 300px 180px rgba(26, 184, 179, 0.38), 0 0 480px 240px rgba(191, 240, 237, 0.18)",
                  filter: "blur(0.3px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function SlideImage({
//   beforeSrc,
//   afterSrc,
//   index,
//   total,
//   scrollYProgress,
//   isFirst,
// }: {
//   beforeSrc: string;
//   afterSrc: string;
//   index: number;
//   total: number;
//   scrollYProgress: any;
//   isFirst: boolean;
//   isLast: boolean;
// }) {
//   const sectionStart = index / total;
//   const sectionEnd = (index + 1) / total;

//   const y = useTransform(
//     scrollYProgress,
//     [sectionStart, sectionEnd],
//     ["100%", "0%"]
//   );

//   return (
//     <motion.div
//       className="absolute inset-0 flex items-center justify-center "
//       style={{
//         y: isFirst ? "0%" : y,
//         zIndex: index,
//       }}
//     >
//       <div className="pt-4 w-full h-full flex items-center justify-center  ">
//         {/* Parent Div with Gradient Box Shadow */}
//         <div className="relative w-[120%] h-[90%] rounded-2xl overflow-hidden">
//           {/* Gradient Shadow */}
//           <div className="absolute inset-4 rounded-2xl bg-gradient-to-r from-[#77e5e0] via-[#1ab8b3] to-[#1a4578] blur-xl opacity-50 pointer-events-none z-0"></div>

//           {/* Left Image */}
//           <div className="absolute inset-0 w-1/2 overflow-hidden">
//             <img
//               src={beforeSrc}
//               alt={`Before ${index}`}
//               className="object-cover w-full h-full brightness-75 transition-transform duration-300"
//             />
//           </div>
//           {/* Right Image */}
//           <div className="absolute inset-0 left-1/2 w-1/2 overflow-hidden">
//             <img
//               src={afterSrc}
//               alt={`After ${index}`}
//               className="object-cover w-full h-full brightness-75 transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
