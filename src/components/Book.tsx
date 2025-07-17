import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { UpdatedButton } from "./Progressbar";

export default function Book() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20%",
  });

  return (
    <motion.div
      ref={ref}
      className="bg-slate-100 h-[80vh] w-full flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="h-[350px] w-[90vw] relative overflow-hidden"
        style={{
          boxShadow:
            "rgba(26, 184, 179, 0.8) 0px 0px 80px 40px , rgba(191, 240, 237, 0.3) 0px 0px 30px 30px",
          filter: "blur(0.3px)",
        }}
      >
        <motion.img
          src="./Images/IMG_0271.JPG"
          alt={t("book.image.alt")}
          className={`w-full h-full object-cover rounded-2xl shadow-gradient-custom transform ${
            isArabic ? "scale-x-[-1]" : ""
          }`}
          whileHover={{ scale: isArabic ? -1.02 : 1.02 }}
          transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
          loading="eager"
        />
        <motion.div
          className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl 
            bg-gradient-to-t from-black/80 via-black/60 to-black/30 text-white p-4 z-10 
            ${
              isArabic ? "text-center items-center" : "text-center items-center"
            }`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          <div className={`w-full ${isArabic ? "pl-4 pr-8" : "px-4"}`}>
            <h3
              className={`mb-4 ${
                isArabic
                  ? "md:text-[42px] font-bold leading-tight"
                  : "md:text-[56px] font-semibold inline-block"
              }`}
            >
              {t("book.title")}
            </h3>
            <p
              className={`mb-6 mt-6${
                isArabic
                  ? "text-[22px] text-gray-200"
                  : "text-[22px] text-white"
              }`}
            >
              {t("book.description")}
            </p>
            <UpdatedButton />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
