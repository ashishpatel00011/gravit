import React, { useEffect, useRef, useState } from "react";

const SimpleCountdown: React.FC = () => {
  const content = [
    { title: "20+", description: "Years" },
    { title: "100k", description: "Smiles" },
    { title: "40+", description: "Doctors" },
    { title: "8+", description: "Branches" },
  ];

  const [showContent, setShowContent] = useState(false);
  const [counters, setCounters] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
          startCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounters = () => {
    const initialCounters = content.map(() => 0);
    setCounters(initialCounters);

    content.forEach((item, idx) => {
      const match = item.title.match(/(\d+(\.\d+)?)/);
      if (!match) return;

      const target = parseFloat(match[0]);
      let count = 0;
      const increment = target / 50;

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
      }, 10);
    });
  };

  const formatDisplay = (index: number, original: string) => {
    const match = original.match(/(\d+(\.\d+)?)(.*)/);
    if (!match) return original;

    const suffix = match[3] || "";
    return `${Math.floor(counters[index])}${suffix}`;
  };

  return (
    <div
      ref={sectionRef}
      style={{
        backgroundImage: `url("../../Images/IMG_0034.JPG")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full py-10 flex flex-wrap justify-center gap-6 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded w-32"
          >
            <div className="text-4xl font-bold text-white">
              {showContent ? formatDisplay(index, item.title) : item.title}
            </div>
            <div className="text-sm text-white mt-1">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCountdown;
