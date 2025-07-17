import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BeforeAfterSlider from "./BeforeAfterSlider1";
import { useTranslation } from "react-i18next";

interface ImagePair {
  beforeImg: string;
  afterImg: string;
}

interface Doctor {
  name: string;
  image: string;
  Specialization: string;
  classification: string;
  year: string;
  description: string;
  working: string;
  Branch: string;
  PhD: string;
  Master: string;
  Bachelor: string;
  experience: string;
  courses: string;
  Languages: string;
  beforeAfterImages: ImagePair[];
}

function TeamDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const langtype = queryParams.get("langtype") || "en";

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const formData = new FormData();
    formData.append("id", id);
    formData.append("langType", i18n.language);

    fetch(
      "https://jawdah.yatrasaathi.in/api/viewDoctorById.php",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setDoctor(data.data);
          setError("");
        } else {
          setError("Member not found");
          setDoctor(null);
        }
      })
      .catch(() => {
        setError("Failed to fetch data");
        setDoctor(null);
      });
  }, [id, i18n.language]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!doctor) return <div>Loading...</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          draggable: true,
        },
      },
    ],
  };

  function getRepeatedImagePairs(imagePairs: ImagePair[], minLength = 6) {
    const repeatedPairs: ImagePair[] = [];
    while (repeatedPairs.length < minLength) {
      repeatedPairs.push(...imagePairs);
    }
    return repeatedPairs.slice(0, minLength);
  }

  return (
    <div
      className={`min-h-screen bg-black py-12 px-6 relative lg:pb-40 ${langtype === "ar" ? "rtl" : "ltr"
        }`}
    >
      {/* === Sticky top-section === */}
      <div
        className={`w-full mx-auto px-6 rounded-xl shadow-lg text-white flex gap-8 ${isArabic ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"
          }`}
      >
        {/* Left: Smaller sticky image */}
        <div className="w-full md:w-2/5 xl:w-2/5 lg:sticky top-10 self-start ">
          <img
            src={`https://jawdah.yatrasaathi.in/api/uploads/${doctor.image}`}
            alt={doctor.name}
            className="w-full lg:h-[100vh]  object-cover rounded-lg"
          />
        </div>

        {/* Right: Centered and scrollable basic info */}
        <div
          className="w-full md:w-3/5 xl:w-3/5 flex flex-col justify-center gap-4 overflow-y-auto"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="mt-0 ">
            <div className="rounded-2xl shadow-lg text-white mx-auto text-center space-y-4">
              <h2
                className={`text-[0.875rem] lg:text-[3rem] font-extrabold leading-tight`}
                dir="ltr"
              >
                <span className="text-[#1ab8b3]">“</span>
                {doctor.working}
                <span className="text-[#1ab8b3]">”</span>
              </h2>


              <h3 className="text-3xl sm:text-4xl md:text-5xl mb-[-10px] leading-normal"> {/* Added leading-normal */}
                {doctor.name}

              </h3>
              <br />

              <div className="flex flex-col items-center gap-2 text-lg font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl md:text-3xl mb-46 text-[#1a93a0] leading-normal"> {/* Added leading-normal */}
                    {doctor.Specialization.charAt(0).toUpperCase() +
                      doctor.Specialization.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            <p
              style={{ textAlign: isArabic ? "right" : "left" }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 italic tracking-wide leading-relaxed px-4"
            >
              {doctor.description}
            </p>

            <div className="w-full md:w-1/1 ">
              <h2 className="text-xl sm:text-2xl text-white text-center font-extrabold mb-2">
                {t("drView.education")}
              </h2>

              <ul>
                <li className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center m-1 leading-relaxed"> {/* Added leading-relaxed */}
                  {doctor.PhD}
                </li>
                <li className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center m-1 leading-relaxed"> {/* Added leading-relaxed */}
                  {doctor.Master}
                </li>
                <li className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center mb-4 leading-relaxed"> {/* Added leading-relaxed */}
                  {doctor.Bachelor}
                </li>
              </ul>
            </div>
            <center>
              <hr style={{ width: "40%" }}></hr>
            </center>

            <center>
              <hr style={{ width: "40%" }}></hr>
            </center>
            <div className="w-full md:w-1/1 p-4 ">
              <h2 className="text-xl sm:text-2xl text-white text-2xl text-center font-bold mb-1">
                {t("drView.certificates")}
              </h2>

              <ul>
                <li className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center m-1 leading-relaxed"> {/* Added leading-relaxed */}
                  {doctor.courses}
                </li>
              </ul>
            </div>
            <center>
              <hr style={{ width: "40%" }}></hr>
            </center>
            <div className="w-full md:w-1/1 p-4 ">
              <h2 className="text-xl sm:text-2xl text-white text-center font-bold mb-1">
                {t("drView.languages")}
              </h2>
              <ul>
                <li className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center m-1 leading-relaxed"> {/* Added leading-relaxed */}
                  {doctor.Languages}
                </li>
              </ul>
              <p
                style={{ textAlign: isArabic ? "right" : "left" }}
                className="text-white-400 mb-10 text-base sm:text-lg md:text-xl lg:text-2xl italic tracking-wide leading-relaxed px-4"
              >
                <center className="mt-4">
                  <hr style={{ width: "35% " }}></hr>
                </center>

                <center>
                  <br />
                  {/* {doctor.working} */}
                  <br />
                  {doctor.Branch}
                </center>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar for modern browsers */}
      <style>
        {` .overflow-y-auto::-webkit-scrollbar { display: none; } `}
      </style>

      {/* === Back to normal flow === */}

      {/* === Before/After gallery === */}
      {doctor.beforeAfterImages.some(
        (pair) => pair.beforeImg !== "" && pair.afterImg !== ""
      ) && (
          <div className="container mx-auto mb- relative top-10">
            <div
              className={`flex ${isArabic ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
                }`}
            >
              <div className="w-full md:w-1/2 md:p-4">
                <div className="flex flex-col justify-center md:p-8">
                  <h2
                    style={{ textAlign: isArabic ? "right" : "left" }}
                    className="text-2xl sm:text-3xl text-white font-bold mb-4"
                  >
                    {t("drView.smileTransf.title")}
                  </h2>
                  <p
                    style={{ textAlign: isArabic ? "right" : "left" }}
                    className="text-base sm:text-lg text-white"
                  >
                    {t("drView.smileTransf.description")}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:p-4 mt-10">
                <div className="md:p-4">
                  <Slider {...settings}>
                    {getRepeatedImagePairs(doctor.beforeAfterImages, 6).map(
                      (pair, index) => (
                        <div key={index} className="flex-none transition-transform">
                          <BeforeAfterSlider
                            beforeImg={`https://jawdah.yatrasaathi.in/api/uploads/before/${pair.beforeImg}`}
                            afterImg={`https://jawdah.yatrasaathi.in/api/uploads/after/${pair.afterImg}`}
                          />
                        </div>
                      )
                    )}
                  </Slider>
                </div>
              </div>
            </div>
            <center>
              <button
                onClick={() => navigate("/qualitygallery")}
                className="bg-[#1ab8b3] text-white px-4 py-2 mt-8 rounded hover:bg-[#159693]"
              >
                {t("drView.viewMore")}
              </button>
            </center>
          </div>
        )}
    </div>
  );
}     

export default TeamDetail;