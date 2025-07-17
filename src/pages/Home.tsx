// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useRef, useState } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { useTranslation } from "react-i18next"
// import OurTreatmentsSlider from "../components/OurTreatmentsSlider"
// import OurPractice from "../components/OurPractice"
// import UpperParallax from "../components/UpperParallax"
// import Testimonials from "../components/Testimonials"
// import OurTeam from "../components/OurTeam"
// import HomeParallax from "../components/HomeParallax"
// import CountdownTimer from "../components/CountdownTimer"
// import MobileLink from "../components/MobileLink"
// import Book from "../components/Book"
// import { useLocation } from "react-router-dom"
// import SimpleCountdown from "../components/SimpleCountdown"
// // import SimpleCountdown from "../components/SimpleCountdown";

// export default function Home() {
//    const location = useLocation();

//  useEffect(() => {
//    if (location.state?.scrollToMobileLink) {
//      // Delay scrolling to ensure page has rendered
//      setTimeout(() => {
//        const el = document.getElementById("mobile-link");
//        if (el) {
//          el.scrollIntoView({ behavior: "smooth" });
//        }
//      }, 100); // 100ms delay; adjust if needed
//    }
//  }, [location]);
//   function useIsDesktop(breakpoint = 768) {
//     const [isDesktop, setIsDesktop] = useState<boolean>(
//       typeof window !== "undefined" ? window.innerWidth >= breakpoint : true
//     );

//     useEffect(() => {  
//       function handleResize() {
//         setIsDesktop(window.innerWidth >= breakpoint);
//       }

//       window.addEventListener("resize", handleResize);

//       // Initial check
//       handleResize();   

//       return () => window.removeEventListener("resize", handleResize);
//     }, [breakpoint]);

//     return isDesktop;
//   }
//   const isDesktop = useIsDesktop(768); // true if width >= 768px

//   const { t } = useTranslation();
//   const content = [
//     { title: "20+", description: t("years") },
//     { title: "100k", description: t("smile") },
//     { title: "40+", description: t("doctor") },
//     { title: "8+", description: t("branch") },
//   ];

//   return (
//     <div className="relative w-full">
//       <HomeParallax />
//       <TextAnimation />
//       <OurTreatmentsSlider />
//       <UpperParallax />
//       <Testimonials />
//       <center className="bg-black">
//         <OurPractice />
//       </center>
//       <OurTeam />
//       {/* <script
//         src="https://static.elfsight.com/platform/platform.js"
//         async
//       ></script> */}
//       {/* <div className="elfsight-app-931edd3e-f5a2-4d9e-b94e-c01dbb017d3a mt-20 mb-20" data-elfsight-app-lazy></div> */}
//       {isDesktop && <CountdownTimer key={Date.now()} content={content} />}
//       {!isDesktop && <SimpleCountdown />}

//       {/* <CountdownTimer key={Date.now()} content={content} /> */}
//       <Book />
//       <div id="mobile-link">
//         <MobileLink />
//       </div>
//     </div>
//   );
// }

// const texts = [
//   'home.sections.features.leaders',
//   'home.sections.features.modern',
//   'home.sections.features.standards'
// ];

// function TextAnimation() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   return (
//     <motion.div 
//       ref={containerRef} 
//       className="min-h-[400vh] relative"
//     >
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         <div className="relative w-full h-full">
//           {texts.map((textKey, index) => (
//             <TextBlock 
//               key={index}
//               textKey={textKey}
//               index={index}
//               total={texts.length}
//               scrollYProgress={scrollYProgress}
//             />
//           ))}
//         </div>
//       </div>


//     </motion.div>
//   );
// }

// interface TextBlockProps {
//   textKey: string;
//   index: number;
//   total: number;
//   scrollYProgress: any;
// }

// function TextBlock({ textKey, index, total, scrollYProgress }: TextBlockProps) {
//   const ref = useRef(null);
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === 'ar';

//   const sectionStart = index / total;
//   const sectionMid = sectionStart + 1 / total / 2;
//   const sectionEnd = (index + 1) / total;

//   const narrowStart = sectionMid - 0.07;
//   const narrowEnd = sectionEnd + 0.07;

//   const opacity = useTransform(
//     scrollYProgress,
//     [narrowStart, sectionMid, narrowEnd],
//     [0, 1, 0]
//   );

//   return (
//     <motion.div
//       ref={ref}
//       className="absolute inset-0 flex items-start pt-[40vh] justify-center text-center"
//       style={{
//         opacity,
//         zIndex: total - index,
//       }}
//     >
//       <div
//         className={`w-2/3 flex-wrap ${isArabic ? "text-end" : "text-start"}`}
//       >
//         <h2
//           className={`sm:text-[10px]  lg:text-9xl xl:text-6xl  font-bold leading-[70px] ${
//             isArabic ? "tracking-normal" : "tracking-wide"
//           } main-heading-font`}
//         >
//           {index === 0 ? (
//             <>
//               <span className="text-[#1ab8b3]">
//                 {t("home.sections.features.leaders.title")}
//               </span>{" "}
//               <span className={isArabic ? "text-4xl lg:text-4xl" : ""}>
//                 {t("home.sections.features.leaders.subtitle")}
//               </span>
//             </>
//           ) : index === 1 ? (
//             <>
//               <span className={isArabic ? "text-4xl lg:text-4xl" : ""}>
//                 {t("home.sections.features.modern.title")}
//               </span>{" "}
//               <span className="text-[#1ab8b3]">
//                 {t("home.sections.features.modern.subtitle")}
//               </span>
//             </>
//           ) : index === 2 ? (
//             <>
//               <span className="text-[#1ab8b3]">
//                 {t("home.sections.features.standards.title")}
//               </span>{" "}
//               <span className={isArabic ? "text-4xl lg:text-4xl" : ""}>
//                 {t("home.sections.features.standards.subtitle")}
//               </span>
//             </>
//           ) : (
//             t(textKey)
//           )}
//         </h2>
//       </div>
//     </motion.div>
//   );
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import OurTreatmentsSlider from "../components/OurTreatmentsSlider"
import OurPractice from "../components/OurPractice"
import UpperParallax from "../components/UpperParallax"
import Testimonials from "../components/Testimonials"
import OurTeam from "../components/OurTeam"
import HomeParallax from "../components/HomeParallax"
import CountdownTimer from "../components/CountdownTimer"
import MobileLink from "../components/MobileLink"
import Book from "../components/Book"
import { useLocation } from "react-router-dom"
import SimpleCountdown from "../components/SimpleCountdown"
// import SimpleCountdown from "../components/SimpleCountdown";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToMobileLink) {
      // Delay scrolling to ensure page has rendered
      setTimeout(() => {
        const el = document.getElementById("mobile-link");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms delay; adjust if needed
    }
  }, [location]);
  function useIsDesktop(breakpoint = 768) {
    const [isDesktop, setIsDesktop] = useState<boolean>(
      typeof window !== "undefined" ? window.innerWidth >= breakpoint : true
    );

    useEffect(() => {
      function handleResize() {
        setIsDesktop(window.innerWidth >= breakpoint);
      }

      window.addEventListener("resize", handleResize);

      // Initial check
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isDesktop;
  }
  const isDesktop = useIsDesktop(768); // true if width >= 768px

  const { t } = useTranslation();
  const content = [
    { title: "20+", description: t("years") },
    { title: "100k", description: t("smile") },
    { title: "40+", description: t("doctor") },
    { title: "8+", description: t("branch") },
  ];

  return (
    <div className="relative w-full">
      <HomeParallax />
      <TextAnimation />
      <OurTreatmentsSlider />
      <UpperParallax />
      <Testimonials />
      <center className="bg-black">
        <OurPractice />
      </center>
      <OurTeam />
      {/* <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script> */}
      {/* <div className="elfsight-app-931edd3e-f5a2-4d9e-b94e-c01dbb017d3a mt-20 mb-20" data-elfsight-app-lazy></div> */}
      {isDesktop && <CountdownTimer key={Date.now()} content={content} />}
      {!isDesktop && <SimpleCountdown />}

      {/* <CountdownTimer key={Date.now()} content={content} /> */}
      <Book />
      <div id="mobile-link">
        <MobileLink />
      </div>
    </div>
  );
}

const texts = [
  'home.sections.features.leaders',
  'home.sections.features.modern',
  'home.sections.features.standards'
];

function TextAnimation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      ref={containerRef}
      className="min-h-[400vh] relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          {texts.map((textKey, index) => (
            <TextBlock
              key={index}
              textKey={textKey}
              index={index}
              total={texts.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>


    </motion.div>
  );
}

interface TextBlockProps {
  textKey: string;
  index: number;
  total: number;
  scrollYProgress: any;
}

function TextBlock({ textKey, index, total, scrollYProgress }: TextBlockProps) {
  const ref = useRef(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const sectionStart = index / total;
  const sectionMid = sectionStart + 1 / total / 2;
  const sectionEnd = (index + 1) / total;

  const narrowStart = sectionMid - 0.07;
  const narrowEnd = sectionEnd + 0.07;

  const opacity = useTransform(
    scrollYProgress,
    [narrowStart, sectionMid, narrowEnd],
    [0, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 flex items-start pt-[40vh] justify-center text-center"
      style={{
        opacity,
        zIndex: total - index,
      }}
    >
      <div
        className={`w-2/3 flex-wrap ${isArabic ? "text-end" : "text-start"}`}
      >
        <h2
          className={`sm:text-[10px]  lg:text-9xl xl:text-6xl  font-bold leading-[70px] ${isArabic ? "tracking-normal" : "tracking-wide"
            } main-heading-font`}
        >
          {index === 0 ? (
            <>
              <span className="text-[#1ab8b3]">
                {t("home.sections.features.leaders.title")}
              </span>{" "}
              <span>
                {t("home.sections.features.leaders.subtitle")}
              </span>
            </>
          ) : index === 1 ? (
            <>
              <span>
                {t("home.sections.features.modern.title")}
              </span>{" "}
              <span className={`text-[#1ab8b3]`}>
                {t("home.sections.features.modern.subtitle")}
              </span>
            </>
          ) : index === 2 ? (
            <>
              <span className="text-[#1ab8b3]">
                {t("home.sections.features.standards.title")}
              </span>{" "}
              <span>
                {t("home.sections.features.standards.subtitle")}
              </span>
            </>
          ) : (
            t(textKey)
          )}
        </h2>
      </div>
    </motion.div>
  );
}
