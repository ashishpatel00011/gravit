
import { useEffect, useState } from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "../components/Book";
import MobileLink from "../components/MobileLink";

interface ImagePair {
  beforeImg: string;
  afterImg: string;
}

interface Doctor {
  id: number;
  name: string;
  Specialization: string;
  education: string;
  image: string;
  beforeAfterImages: ImagePair[];
  tag_line: string;
}

export default function QualityGallery() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getSliderSettings = () => {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      draggable: false,
      swipe: false,
      swipeToSlide: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            draggable: false,
            swipe: false,
            swipeToSlide: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    };
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("langType", i18n.language);

    fetch("https://jawdah.yatrasaathi.in/api/fetchDrWithBAImg.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          setDoctors(result.data);
        } else {
          setError("Failed to fetch doctors data.");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("An error occurred while fetching data.");
      })
      .finally(() => setLoading(false));
  }, [i18n.language]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-black p-4 overflow-hidden">
        <div className="h-[45vh] flex flex-col justify-center items-center text-center px-4 pt-5 pb-20 md:pb-5">
          <div>
            <h1 className="animate-gradient mb-4">
              <span className="bg-gradient-to-b from-[#2f886c] via-[#c0dbdf] to-[#ffffff] bg-[length:300%] bg-clip-text text-transparent text-4xl md:text-[64px]">
                {t("qg.title.line1")}
              </span>
              <br />
              <span className="bg-gradient-to-b from-[#59bb9f] via-[#92d4e2] to-[#bff0ed] bg-[length:300%] bg-clip-text text-transparent text-4xl md:text-[64px]">
                {t("qg.title.line2")}
              </span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="p-4 border text-[14px] sm:text-[16px] border-[#1ab8b3] text-white rounded-md hover:bg-[#1ab8b3]/20 transition-all duration-300 hover:border-opacity-70 cursor-pointer">
              {t("buttons.learnMore")}
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-white text-xl my-8">
            {t("Loading...") || "Loading..."}
          </div>
        )}

        {error && <div className="text-red-500 text-lg my-8">{error}</div>}

        {doctors
          .filter((doctor) => doctor.beforeAfterImages.length >= 2)
          .map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col md:flex-row md:w-[95%] w-[95%] mb-12 md:mb-12"
              style={{
                borderBottom: "1px solid #80808073",
                paddingBottom: "3rem",
              }}
            >
              <Slider {...getSliderSettings()} className="md:w-[70%] w-full">
                {doctor.beforeAfterImages.map((pair, index) => (
                  <div key={index} className="flex-none transition-transform">
                    <BeforeAfterSlider
                      beforeImg={`https://jawdah.yatrasaathi.in/api/uploads/before/${pair.beforeImg}`}
                      afterImg={`https://jawdah.yatrasaathi.in/api/uploads/after/${pair.afterImg}`}
                    />
                  </div>
                ))}
              </Slider>

              <div className="flex md:w-[30%] px-2 items-center justify-center md:flex-col flex-col gap-4 p-1 rounded-md">
                <div style={{ textAlign: "center" }}>
                  <h2
                    className="text-white text-xl md:text-2xl font-bold mb-4"
                    style={{ lineHeight: isArabic ? "60px" : "1.2em" }}
                  >
                    {`"${doctor.tag_line}"`}
                  </h2>

                  <div className="flex flex-col items-center text-center">
                    <img
                      className="h-[8rem] w-[8rem] object-cover rounded-full mb-4"
                      src={`https://jawdah.yatrasaathi.in/api/uploads/${doctor.image}`}
                      alt={doctor.name}
                    />
                    <h4 className="text-white text-lg font-semibold">{doctor.name}</h4>
                    <p className="text-white text-sm mt-2">{doctor.Specialization}</p>
                    <p className="text-white text-sm italic mt-1">{doctor.education}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Book />
      <MobileLink />
    </div>
  );
}
