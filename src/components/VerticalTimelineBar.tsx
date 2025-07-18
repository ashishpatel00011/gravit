
// import { ReactNode, useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import React from 'react';
// import { UpdatedButton } from './Progressbar';

// type TimelineItem = {
//   id: number;
//   yearKey: string;
//   titleKey: string;
//   descriptionKey: string;
//   image?: string;
//   button?: ReactNode;
// };

// const timelineData: TimelineItem[] = [
//   {
//     id: 1,
//     yearKey: "timeline.founded.year",
//     titleKey: "timeline.founded.title",
//     descriptionKey: "timeline.founded.description",
//   },
//   {
//     id: 2,
//     yearKey: "timeline.quality.year",
//     titleKey: "timeline.quality.title",
//     descriptionKey: "timeline.quality.description",
//     image: "/Images/quality-clinic.jpg",
//     button: (
//       <div className="mt-5">
//         <UpdatedButton />
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     yearKey: "timeline.vision.year",
//     titleKey: "timeline.vision.title",
//     descriptionKey: "timeline.vision.description",
//     image: "/Images/vision-future.jpg",
//   },
//   {
//     id: 4,
//     yearKey: "timeline.mission.year",
//     titleKey: "timeline.mission.title",
//     descriptionKey: "timeline.mission.description",
//   },
//   {
//     id: 5,
//     yearKey: "timeline.leadersinInvisalign.year",
//     titleKey: "timeline.leadersinInvisalign.title",
//     descriptionKey: "timeline.leadersinInvisalign.description",
//   },
//   {
//     id: 6,
//     yearKey: "timeline.chairmanMessage.year",
//     titleKey: "timeline.chairmanMessage.title",
//     descriptionKey: "timeline.chairmanMessage.description",
//   },
// ];

// const VerticalScrollTimeline = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current && timelineRef.current) {
//         const container = containerRef.current;
//         const containerTop = container.getBoundingClientRect().top;
//         const containerHeight = container.offsetHeight;
//         const viewportHeight = window.innerHeight;

//         let progress = 0;
//         if (containerTop <= 0) {
//           progress = Math.min(
//             Math.max(Math.abs(containerTop) / (containerHeight - viewportHeight), 0),
//             1
//           );
//         }

//         setScrollProgress(progress);

//         const newActiveIndex = Math.min(
//           Math.floor(progress * timelineData.length),
//           timelineData.length - 1
//         );

//         if (newActiveIndex !== activeIndex) {
//           setActiveIndex(newActiveIndex);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [activeIndex]);

//   const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
//     const isActive = index <= activeIndex;

//     return (
//       <div
//         className="grid grid-cols-12 items-start my-24 md:my-32 relative"
//         style={{ direction: isArabic ? "rtl" : "ltr" }}
//       >
//         {/* Left Content */}
//         <div className="col-span-5 pr-4 text-right">
//           {item.id === 6 ? (
//             <>
//               <img src="/1 - Copy.png" alt="Chairman" className="block md:hidden" />
//               <img src="/1 - Copy.png" alt="Chairman" className="hidden md:block" />
//             </>
//           ) : (
//             <h2
//               className={`text-xl md:text-4xl font-medium ${isActive ? "text-white" : "text-gray-600"} leading-[2.2rem]`}
//               style={{ textAlign: isArabic ? "left" : "right" }}
//             >
//               {t(item.yearKey)}
//             </h2>
//           )}
//         </div>

//         {/* Center Marker */}
//         <div className="col-span-2 flex justify-center items-start relative z-10">
//           <motion.div
//             className={`w-6 h-6 rounded-full border-4 ${isActive ? "bg-[#1AB8B3] border-white" : "bg-gray-200 border-gray-300"}`}
//           />
//         </div>

//         {/* Right Content */}
//         <div className="col-span-5 pl-4 text-left">
//           <p
//             className={`text-4xl font-normal mb-4 ${isActive ? "text-white" : "text-gray-600"} leading-[3.2rem]`}
//             style={{ textAlign: isArabic ? "right" : "left" }}
//           >
//             {t(item.titleKey)}
//           </p>
//           <p
//             className={`font-thin text-[20px] pr-1 ${isActive ? "text-white" : "text-gray-600"} leading-[2rem]`}
//             style={{
//               textAlign: isArabic ? "right" : "left",
//               wordSpacing: isArabic ? "0.1rem" : "normal",
//             }}
//           >
//             {t(item.descriptionKey)
//               .split("\n")
//               .map((line, idx) => (
//                 <React.Fragment key={idx}>
//                   {line}
//                   <br />
//                 </React.Fragment>
//               ))}
//           </p>
//           <div
//             className={`py-3 ${isActive ? "" : "opacity-50 pointer-events-none"}`}
//             style={{ minWidth: "130px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
//           >
//             {item.button}
//           </div>

//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 pt-12 pb-12" ref={containerRef}>
//         <div className="relative">
//           {/* Center vertical scroll line */}
//           <motion.div
//             className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#1AB8B3] rounded-full origin-top"
//             style={{
//               height: `${scrollProgress * 100}%`,
//               top: 0,
//             }}
//             ref={timelineRef}
//           />
//           {/* Moving circle */}
//           <motion.div
//             className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1AB8B3] border-4 border-white rounded-full shadow-lg"
//             style={{
//               top: `${scrollProgress * 100}%`,
//               marginTop: -12,
//             }}
//           />
//           {timelineData.map((item, index) => (
//             <TimelineItem key={item.id} item={item} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { UpdatedButton } from "./Progressbar";

type TimelineItem = {
  id: number;
  yearKey: string;
  titleKey: string;
  descriptionKey: string;
  image?: string;
  button?: ReactNode;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    yearKey: "timeline.founded.year",
    titleKey: "timeline.founded.title",
    descriptionKey: "timeline.founded.description",
  },
  {
    id: 2,
    yearKey: "timeline.quality.year",
    titleKey: "timeline.quality.title",
    descriptionKey: "timeline.quality.description",
    image: "/Images/quality-clinic.jpg",
    button: (
      <div className="mt-5">
        <UpdatedButton />
      </div>
    ),
  },
  {
    id: 3,
    yearKey: "timeline.vision.year",
    titleKey: "timeline.vision.title",
    descriptionKey: "timeline.vision.description",
  },
  {
    id: 4,
    yearKey: "timeline.mission.year",
    titleKey: "timeline.mission.title",
    descriptionKey: "timeline.mission.description",
  },
  {
    id: 5,
    yearKey: "timeline.leadersinInvisalign.year",
    titleKey: "timeline.leadersinInvisalign.title",
    descriptionKey: "timeline.leadersinInvisalign.description",
  },
  {
    id: 6,
    yearKey: "timeline.chairmanMessage.year",
    titleKey: "timeline.chairmanMessage.title",
    descriptionKey: "timeline.chairmanMessage.description",
  },
];

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const VerticalScrollTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = clamp((-top) / (height - viewportHeight), 0, 1);
      setScrollProgress(progress);

      const threshold = 1 / timelineData.length;
      const newIndex = Math.min(Math.floor(progress / threshold), timelineData.length - 1);
      setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
    const isActive = index <= activeIndex;

    return (
      <div
        className={`timeline-item flex flex-col md:grid md:grid-cols-12 items-start relative
        ${(item.id === 6 || item.id === 5) ? 'my-0 md:my-32' : 'my-10 md:my-32'}`}
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      >

        <div className="hidden md:col-span-5 md:pr-4 md:text-right md:block">
          {item.id === 6 ? (
            <div
              className="flex justify-end items-center h-full"
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src="/chairmen.webp"
                alt="Chairman"
                loading="eager"
                className="mx-auto w-[460px] h-[420px] object-contain"
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>

          ) : (
            <h2
              className={`text-xl md:text-4xl font-medium ${isActive ? "text-white" : "text-gray-400"} leading-[2.2rem]`}
              style={{ textAlign: isArabic ? "left" : "right" }}
            >
              {t(item.yearKey)}
            </h2>
          )}
        </div>

        <div className="absolute left-[6px] md:relative md:left-auto md:col-span-2 flex justify-center items-start z-10">
          <div
            className={`w-6 h-6 rounded-full border-4 transition-none ${isActive ? "bg-[#1AB8B3] border-white" : "bg-gray-200 border-gray-300"
              }`}
          />
        </div>

        <div className="w-full pl-12 md:col-span-5 md:pl-4 md:text-left">
          {item.id === 6 && (
            <div
              className="flex justify-center items-center md:hidden"
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
                backfaceVisibility: "hidden",
                marginBottom: "0px", // Remove bottom margin
                height: "auto",       // Let image height control spacing
              }}
            >
              <img
                src="/chairmen.webp"
                alt="Chairman"
                loading="eager"
                className="mx-auto w-[320px] h-[280px] object-contain"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                }}
              />
            </div>
          )}


          <p
            className={`text-4xl font-normal mb-4 ${isActive ? "text-white" : "text-gray-400"} leading-[3.2rem]`}
            style={{ textAlign: isArabic ? "right" : "left" }}
          >
            {t(item.titleKey)}
          </p>
          <p
            className={`font-thin text-[20px] pr-1 ${isActive ? "text-white" : "text-gray-400"} whitespace-pre-line`}
            style={{
              textAlign: isArabic ? "right" : "left",
              wordSpacing: isArabic ? "0.1rem" : "normal",
              lineHeight: isArabic ? "2.8rem" : "2rem",
            }}
          >
            {t(item.descriptionKey)}
          </p>
          <div
            className={`py-3 ${isActive ? "" : "opacity-50 pointer-events-none"}`}
            style={{
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {item.button}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-12" ref={containerRef}>
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-1 bg-[#1AB8B3] rounded-full origin-top z-0"
            style={{
              height: `${scrollProgress * 100}%`,
              top: 0,
              willChange: "height", // Hint to browser for optimization
              transform: "translateZ(0)", // Force hardware acceleration
            }}
            ref={timelineRef}
          />

          {/* Moving Circle */}
          <motion.div
            className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-[#1AB8B3] border-4 border-white rounded-full shadow-lg transition-none z-10"
            style={{
              top: `${Math.round(scrollProgress * 100)}%`, // Using Math.round to potentially reduce sub-pixel rendering issues
              marginTop: -12,
              willChange: "top", // Hint to browser for optimization
              transform: "translateZ(0)", // Force hardware acceleration
            }}
          />

          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollTimeline;