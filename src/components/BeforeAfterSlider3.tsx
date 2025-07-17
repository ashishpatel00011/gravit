import { useState } from "react";
import { useTranslation } from "react-i18next";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
}

export default function BeforeAfterSlider3({
  beforeImg,
  afterImg,
}: BeforeAfterSliderProps) {
  const { t } = useTranslation();
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="relative overflow-hidden rounded-[25px] shadow-lg w-full h-[20vh] md:h-[50vh] select-none">
        {/* Before image */}
        <img
          src={beforeImg}
          alt={t("before")}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* After image clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
          }}
        >
          <img
            src={afterImg}
            alt={t("after")}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
          style={{
            left: `${sliderValue}%`,
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
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 z-30 appearance-none bg-transparent"
          style={{
            WebkitAppearance: "none",
          }}
        />

        {/* Labels */}
        <div className="absolute top-2 left-2 border-1 text-white text-sm px-3 ml-2  py-1 rounded-full z-30">
          {t("before")}
        </div>
        <div className="absolute top-2 right-2 border-1 text-white text-sm px-3 mr-2 py-1 rounded-full z-30">
          {t("after")}
        </div>
      </div>
    </div>
  );
}
