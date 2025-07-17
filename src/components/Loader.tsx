// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useTranslation } from 'react-i18next';

// export default function Loader() {
//   const { i18n } = useTranslation();
//   const isArabic = i18n.language === 'ar';
//   const [currentText, setCurrentText] = useState(0);

//   const loadingTexts = isArabic
//     ? ["الخبراء", "المتخصصون", "القادة", "المبدعون"]
//     : ["Artists", "Experts", "Leaders", "Visionaries"];

//   useEffect(() => {
//     // Very short interval for almost immediate word change
//     const interval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % loadingTexts.length);
//     }, 800); // Drastically reduced from 1000 to 100ms
//     return () => clearInterval(interval);
//   }, [loadingTexts.length]);

//   const fontFamily = isArabic ? "'Almarai', sans-serif" : "'Bahiz_Nazanin', sans-serif";
//   const textColor = "text-white";
//   const animatedTextColor = "text-primary"; 

//   // Reduced transition duration for very fast sliding animation
//   const wordTransitionDuration = 0.3; // 150ms

//   return (
//     <div className="w-full h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
//       <div className="flex w-full max-w-screen-xl font-bold text-xl sm:text-3xl md:text-5xl flex-row">
//         {isArabic ? (
//           <>
//             {/* Animated Text (Right) */}
//             <div className="w-1/2 flex items-center justify-end pr-1 sm:pr-4 relative h-[1.2em] overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.h1
//                   key={currentText}
//                   initial={{ y: "100%" }}
//                   animate={{ y: "0%" }}
//                   exit={{ y: "-100%" }}
//                   transition={{ duration: wordTransitionDuration, ease: "easeInOut" }} // Use new fast duration
//                   className={`absolute top-0 right-0 w-full ${animatedTextColor} text-right`}
//                   style={{
//                     direction: "rtl",
//                     fontFamily,
//                   }}
//                 >
//                   {loadingTexts[currentText]}
//                 </motion.h1>
//               </AnimatePresence>
//             </div>
//             {/* Static Text (Left) */}
//             <div className="w-1/2 flex items-center justify-start pl-1 sm:pl-4">
//               <h1 className={textColor} style={{ fontFamily, direction: "rtl" }}>
//                 عيادة الأسنان
//               </h1>
//             </div>
//           </>
//         ) : (
//           <>
//             {/* Static Text (Left) */}
//             <div className="w-1/2 flex items-center justify-end pr-1 sm:pr-4">
//               <h1 className={textColor} style={{ fontFamily }}>
//                 Dental
//               </h1>
//             </div>
//             {/* Animated Text (Right) */}
//             <div className="w-1/2 flex items-center justify-start pl-1 sm:pl-4 relative h-[1.2em] overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.h1
//                   key={currentText}
//                   initial={{ y: "100%" }}
//                   animate={{ y: "0%" }}
//                   exit={{ y: "-100%" }}
//                   transition={{ duration: wordTransitionDuration, ease: "easeInOut" }} // Use new fast duration
//                   className={`absolute top-0 left-0 w-full ${animatedTextColor} text-left`}
//                   style={{
//                     direction: "ltr",
//                     fontFamily,
//                   }}
//                 >
//                   {loadingTexts[currentText]}
//                 </motion.h1>
//               </AnimatePresence>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Loader() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = isArabic
    ? ["الخبراء", "المتخصصون", "القادة", "المبدعون"]
    : ["Artists", "Experts", "Leaders", "Visionaries"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 800);
    return () => clearInterval(interval);
  }, [loadingTexts.length]);

  const fontFamily = isArabic ? "'Almarai', sans-serif" : "'Bahiz_Nazanin', sans-serif";
  const textColor = "text-white";
  const animatedTextColor = "text-primary";
  const wordTransitionDuration = 0.3;

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      <div className="flex w-full max-w-screen-xl font-bold text-xl sm:text-3xl md:text-5xl flex-row">
        {isArabic ? (
          <>
            {/* Animated Text (Right) */}
            <div className="w-1/2 flex items-center justify-end pr-1 sm:pr-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: wordTransitionDuration, ease: "easeInOut" }}
                  className={`${animatedTextColor} text-right`}
                  style={{
                    direction: "rtl",
                    fontFamily,
                  }}
                >
                  {loadingTexts[currentText]}
                </motion.h1>
              </AnimatePresence>
            </div>
            {/* Static Text (Left) */}
            <div className="w-1/2 flex items-center justify-start pl-1 sm:pl-4">
              <h1 className={textColor} style={{ fontFamily, direction: "rtl" }}>
                عيادة الأسنان
              </h1>
            </div>
          </>
        ) : (
          <>
            {/* Static Text (Left) */}
            <div className="w-1/2 flex items-center justify-end pr-1 sm:pr-4">
              <h1 className={textColor} style={{ fontFamily }}>
                Dental
              </h1>
            </div>
            {/* Animated Text (Right) */}
            <div className="w-1/2 flex items-center justify-start pl-1 sm:pl-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: wordTransitionDuration, ease: "easeInOut" }}
                  className={`${animatedTextColor} text-left`}
                  style={{
                    direction: "ltr",
                    fontFamily,
                  }}
                >
                  {loadingTexts[currentText]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
