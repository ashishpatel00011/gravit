
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OurPracHigh from "./OurPracHigh";
import { Doctor } from "./types";

export default function ServicesSlides() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("langType", i18n.language);

    fetch("https://jawdah.yatrasaathi.in/api/fetchDrWithBAImg.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          const featuredDoctors = result.data.filter(
            (doctor: { featured: string }) => doctor.featured === "1"
          );

          const formattedDoctors = featuredDoctors.map((doctor: any) => ({
            name: doctor.name,
            title: doctor.title,
            Specialization: doctor.Specialization || doctor.title,
            classification: doctor.classification || "",
            education: doctor.education,
            image: doctor.image,
            beforeAfterImages: doctor.beforeAfterImages || [],
            tag_line: doctor.tag_line,
          }));

          setDoctors(formattedDoctors);
        } else {
          console.error("Failed to fetch doctors data");
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [i18n.language]);

  const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${isMobile ? "left-4" : "left-6"} custom-slick-arrow`}
        style={{
          ...style,
          display: "block",
          zIndex: 2,
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: "50%",
          padding: "2px",
          cursor: "pointer",
          position: "absolute",
          ...(isMobile
            ? {
              // Mobile view styles
              top: "70%", // Move arrow downward
              transform: "translateY(-50%)"
            }
            : {
              // Desktop view styles
              top: "50"
            })
        }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${isMobile ? "right-4" : "right-6"} custom-slick-arrow`}
        style={{
          ...style,
          display: "block",
          zIndex: 2,
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: "50%",
          padding: "2px",
          cursor: "pointer",
          position: "absolute",
          ...(isMobile
            ? {
              // Mobile view styles  
              top: "70%",
              transform: "translateY(-50%)"
            }
            : {
              // Desktop view styles
              top: "50"
            })
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 sec pause
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    arrows: true,
    rtl: isArabic,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative overflow-hidden w-[95%] md:py-32 py-10 bg-black dark:bg-black transition-colors duration-700">
      <div
        className={`mb-20 left-0 w-full flex flex-col items-center justify-center z-10 ${isArabic ? "text-right" : "text-left"
          }`}
      >
        <h3 className="text-white dark:text-white text-[46px] font-bold mb-8">
          {t("practice.title")}{" "}
          <span className="text-primary">{t("practice.highlight")}</span>
        </h3>
        <p className="pt-2 px-2 md:w-1/2 text-center text-gray-600 dark:text-white">
          {t("practice.description")}
        </p>
      </div>

      <div className="md:w-[98%] w-[92%] md:px-4 px-4">
        <Slider {...settings}>
          {doctors.map((doctor, doctorIndex) => (
            <div key={doctorIndex}>
              <OurPracHigh doctors={[doctor]} settings={settings} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}     
