// import {  useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ParallaxWithScrollAndInView() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';


  // const videos = [
  //   "/Images/video-output-BE05D0A4-FF41-4517-A64B-3A2002BD2C5C.MP4",
  //   "/Images/video-output-BE05D0A4-FF41-4517-A64B-3A2002BD2C5C.MP4",
  //   "/Images/video-output-BE05D0A4-FF41-4517-A64B-3A2002BD2C5C.MP4",
  // ];
    const videos = [
    "/Images/newVedio.mp4",
    "/Images/newVedio.mp4",
    "/Images/newVedio.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to navigate to the previous video
  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  // Function to navigate to the next video
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full min-h-[100%] py-1">
      <div
        className="container grid grid-cols-1 md:grid-cols-2 h-auto w-full gap-8 md:gap-12 items-center py-20"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <div
          className={`flex justify-center flex-col py-1 md:pr-[8rem] ${isArabic ? "text-right" : "text-left"
            }`}
        >
          <h3
            className={`mb-6 ${isArabic ? "text-right leading-normal sm:leading-loose" : "text-left ml-3"
              }`}
          >
            {t("smileMakeover.title")}
          </h3>
          <p
            className={`text-gray-600 para20 mb-8 ml-3 mt-3 ${isArabic ? "text-right leading-normal sm:leading-relaxed" : "text-left"
              }`}
          >
            {t("smileMakeover.description")}
          </p>
          <div className={isArabic ? "text-right" : "text-left ml-3"}>
            <Button />
          </div>
        </div>
        {/* Video Section with Carousel and Responsive Sizing */}
        <div className="flex items-center justify-center w-full">
          <div
            className="relative w-screen h-screen pb-0 md:w-full md:pb-[90%] md:h-auto lg:w-[90%] overflow-hidden mt-3"
          >
            <video
              key={currentVideoIndex}
              src={videos[currentVideoIndex]}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Left Arrow Button */}
            <button
              onClick={handlePrevVideo}
              className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
              aria-label="Previous video"
            >
              <FaChevronLeft className="text-xl md:text-2xl" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNextVideo}
              className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
              aria-label="Next video"
            >
              <FaChevronRight className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}