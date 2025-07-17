import { useState } from "react";
import { useTranslation } from "react-i18next";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
}

export default function BeforeAfterSlider({
  beforeImg,
  afterImg,
}: BeforeAfterSliderProps) {
  const { t } = useTranslation();
  // const isArabic = i18n.language === "ar";
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="w27 bac relative overflow-hidden  rounded-4xl md:h-[300px] h-[200px] shadow-lg">
      {/* After image (base layer) */}
      <img
        src={ afterImg}
        alt={t("before")}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Before image clipped */}
      {/* <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: isArabic
            ? `inset(0 0 0 ${100 - sliderValue}%)`
            : `inset(0 ${100 - sliderValue}% 0 0)`,
        }}
      > */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
        }}
      >
        <img
          src={ beforeImg}
          className="w-full h-full object-cover"
          loading="lazy"
          alt={t("after")}
        />
      </div>

      {/* Divider line */}
      {/* <div
        className="absolute top-0 bottom-0 w-1 bg-white z-20"
        style={{
          [isArabic ? "right" : "left"]: `${sliderValue}%`,
          transform: "translateX(-50%)",
        }}
      ></div> */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-20"
        style={{
          "left": `${sliderValue}%`,
          transform: "translateX(-50%)",
        }}
      ></div>

      {/* Range slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 z-30"
      />

      {/* Labels */}
      <div className="absolute top-2 left-2 border-1 text-white text-sm px-3 py-1 rounded-2xl z-30">
        {t("before")}
      </div>
      <div className="absolute top-2 right-2 border-1 text-white text-sm px-3 py-1 rounded-2xl z-30">
        {t("after")}
      </div>
    </div>
  );
}
