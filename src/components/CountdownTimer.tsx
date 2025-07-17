import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

interface CountdownProps {
  content: { title: string; description: string }[];
}

const CountdownTimer: React.FC<CountdownProps> = ({ content }) => {
  const [showContent, setShowContent] = useState(false);
  const [counters, setCounters] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true); // Start content animation when section is in view
          startCounters(); // Start counter animation when section is in view
          observer.disconnect(); // Disconnect the observer after the animation starts
        }
      },
      { threshold: 0.5 } // 50% of the section must be in view to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect(); // Cleanup observer on unmount
      }
    };
  }, []);

  const startCounters = () => {
    const initialCounters = content.map(() => 0);
    setCounters(initialCounters);

    content.forEach((item, idx) => {
      const match = item.title.match(/(\d+(\.\d+)?)/); // extract number part
      if (!match) return;

      const target = parseFloat(match[0]);
      let count = 0;
      const increment = target / 100;

      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }

        setCounters((prev) => {
          const updated = [...prev];
          updated[idx] = count;
          return updated;
        });
      }, 20);
    });
  };

  const formatDisplay = (index: number, original: string) => {
    const match = original.match(/(\d+(\.\d+)?)(.*)/); // split number and suffix
    if (!match) return original;

    const suffix = match[3] || "";
    return `${Math.floor(counters[index])}${suffix}`;
  };

  return (
    <div 
      ref={sectionRef}
      className="relative  h-[400px] flex flex-wrap md:h-[400px] content-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 py-10 text-white"
      style={{
        backgroundImage: `url("../../Images/IMG_0034.JPG")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0   bg-gradient-to-t from-black/80 via-black/60 to-black/30 ">
      </div>
 
      {/* Content */}
      <div className={`relative z-10 flex md:flex-wrap justify-center w-full  ${
            isArabic ? "flex-row-reverse " : "md:flex-row "
          }`} >
        {content.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col h-[50px] justify-center items-center my-2 p-8  transition-opacity ${
              index !== 0 ? "border-l border-white-500" : ""
            } ${showContent ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "opacity 1s ease-in-out" }}
          >
            <div className="md:text-8xl font-bold mb-2">
              {formatDisplay(index, item.title)}
            </div>
            <div className="text-sm text-gray-300 capitalize">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
