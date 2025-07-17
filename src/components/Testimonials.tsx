/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LiaStarSolid } from "react-icons/lia";
import Button from "./Button";
import { useTranslation } from "react-i18next";
//bugs solved
export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return ( 
    <div
      ref={containerRef}
      className="relative w-full min-h-[150vh] bg-black/80 pb-20 "
    >
      <div className="container sticky top-0 h-auto overflow-hidden">
        <div
          className="grid grid-cols-1 md:grid-cols-2 h-full w-full"
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          <div
            className={`flex flex-col justify-center sticky top-0 h-[90vh] sm:h-screen ${isArabic ? "text-right pl-24" : "text-left pr-24"
              }`}
          >
            <h3 className="mb-6 text-white text-[46px] font-bold">
              {t("testimonials.title")}
            </h3>
            <p className="text-white/80 para20 text-shadow-md mb-8 leading-relaxed md:leading-normal">
              {t("testimonials.subtitle")}
            </p>

            <div className={isArabic ? "text-right" : "text-left"}>
              <Button externalLink="https://g.co/kgs/Y31Amye">
                Review us on Google
              </Button>
            </div>
          </div>
          <div
            className={`relative h-[70vh] sm:h-screen ${isArabic ? "mr-8" : "ml-8"
              }`}
          >
            <div className="sticky top-0 h-[60vh] sm:h-screen w-full overflow-hidden ">
              {[0, 1, 2, 3, 4].map((index) => (
                <TestimonialCard
                  key={index}
                  testimonial={{
                    text: t(`testimonials.cards.${index}.text`),
                    author: t(`testimonials.cards.${index}.author`),
                  }}
                  index={index}
                  total={5}
                  scrollYProgress={scrollYProgress}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
  total,
  scrollYProgress,
  isFirst,
}: {
  testimonial: { text: string; author: string };
  index: number;
  total: number;
  scrollYProgress: any;
  isFirst: boolean;
}) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const sectionStart = index / total;
  const sectionEnd = (index + 1) / total;

  // Adjust scroll progression for equal spacing
  const y = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    ["120%", "0%"]
  );

  const cardSpacing = 50; // This value might need minor tweaking if cropping persists after content size reduction

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        top: `${index * cardSpacing}px`, // Fixed pixel spacing
        y: isFirst ? "0%" : y,
        zIndex: index, // Reverse z-index for proper stacking
      }}
    >
      <div
        className={`w-full max-w-[90%] mx-auto bg-[#0f172a] border-primary rounded-2xl shadow-xl p-4 md:p-8 text-white /* Adjusted padding for mobile */
        ${isArabic ? 'text-right' : 'text-left'}`}
      >
        <div className={`flex mb-4 md:mb-6 text-secondary ${isArabic ? 'justify-end' : 'justify-start'} /* Adjusted margin for mobile */`}>
          {[...Array(5)].map((_, i) => (
            <LiaStarSolid key={i} className="text-secondary size-6 md:size-8 /* Adjusted star size for mobile */" />
          ))}
        </div>

        <p
          className="text-white mb-2 md:mb-4 leading-relaxed text-sm md:text-base /* Adjusted font size and margin for mobile */"
          dangerouslySetInnerHTML={{ __html: testimonial.text }}
          style={{ direction: isArabic ? 'rtl' : 'ltr' }}
        />

        <p className={`text-primary text-sm md:text-base ${isArabic ? '' : '— '} /* Adjusted font size for mobile */`}>
          {testimonial.author}
        </p>
      </div>
    </motion.div>
  );
}  
