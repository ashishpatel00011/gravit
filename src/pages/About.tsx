import { motion } from "framer-motion";
import Progressbar from "../components/Progressbar";
import { useTranslation } from "react-i18next";
import ServicesSection from "../components/ServicesSection";
// import ServicesSection2 from "../components/ServicesSection2";
import MobileLink from "../components/MobileLink";
import Book from "../components/Book";
import React from "react";

export default function About() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative md:h-[70vh] sm:h-screen overflow-hidden">
        <img src="/Images/2.JPG" alt="" />
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* This div controls the positioning and alignment of the heading and button */}
        <div
          className={`
            absolute inset-0 z-20 flex flex-col justify-start px-8 /* Base styles for mobile */
            top-10 sm:top-0 /* Mobile top offset (adjust top-10 if still too low) */
            items-center /* Center items horizontally on mobile (cross-axis for flex-col) */

            md:absolute md:inset-0 md:justify-center /* Desktop absolute positioning */
            md:-top-10 /* Shift heading upwards on desktop only (adjust as needed) */

            ${isArabic ? "text-right md:items-end" : "text-left md:items-start"} /* Language-specific text alignment and desktop item alignment */
          `}
        >
          <motion.h1
            initial={{ opacity: 0, x: isArabic ? 100 : -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-bold text-white mb-6"
          >
            {/* The span for handling multi-line titles with br tags */}
            <span className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t("about.hero.title").split('\n').map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </motion.h1>

          <button
            onClick={() => {
              document
                .getElementById("ourStory")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              bg-gradient-custom p-4 text-white rounded-md font-semibold
              w-[120px] md:w-[180px] /* Decreased width for mobile, larger for desktop */
              hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out
            "
          >
            {t("about.hero.contactButton")}
          </button>
        </div>
      </div>

      <Progressbar />

      <ServicesSection />
      {/* <ServicesSection2 /> */}
      <Book />
      <MobileLink />
    </div>
  );
}