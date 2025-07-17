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
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="" style={{ paddingLeft: "1.5rem" }}>
      <div
        className="bac  wm-100 relative overflow-hidden rounded-lg shadow-lg"
        style={{ height: "150px" }} // Fixed dimensions
      >
        {/* Before image */}
        <img
          src={afterImg}
          alt={t("after")}
          className="w-full h-full object-cover"
        />

        {/* After image clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderValue}%` }}
        >
          <img
            src={beforeImg}
            alt={t("before")}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white z-20"
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
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 z-30"
        />

        {/* Text labels */}
        <div className="absolute top-2 left-2 bg-black/70 text-white text-sm px-3 py-1 rounded z-30">
          {t("before")}
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white text-sm px-3 py-1 rounded z-30">
          {t("after")}
        </div>
      </div>
    </div>
  );
}
