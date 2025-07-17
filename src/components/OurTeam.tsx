import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface TeamMember {
  id: number;
  image: string;
  name: string;
  Specialization: string;
  text: string;
}

export default function TeamCarousel() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [team, setTeam] = useState<TeamMember[]>([]);
  // Removed hoverIndex state as it's no longer needed for fixed details
  // const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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

    fetch(
      "https://jawdah.yatrasaathi.in/api/fetchDrWithBAImg.php",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          setTeam(result.data);
        } else {
          console.error("Failed to fetch doctors data");
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [i18n.language]);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: isArabic,
    arrows: false,
  };

  let sliderRef: any = null;

  return (
    <section className="py-12 bg-gray-50 relative w-full min-h-100 pb-40">
      <div className="max-w-8xl mx-auto relative">
        {/* Header */}
        <div
          className={`flex md:items-center mb-10 ${isArabic
              ? "md:flex-row flex-col justify-between"
              : "md:flex-row flex-col justify-between px-8"
            }`}
        >
          <div className={`px-9 ${isArabic ? "text-right" : "text-left"}`}>
            <p
              className={`text-[22px] font-medium mb-4 ${isArabic ? "text-[#1ab8b3]" : "text-[#1ab8b3]"
                }`}
            >
              {t("team.meetDentist")}
            </p>
            {/* START OF CHANGE: Added responsive font sizes for h2 */}
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-4 text-gray-800`}
            >
              {t("team.title")}
            </h2>
            {/* END OF CHANGE */}
            <p
              className={`${isArabic
                  ? "text-gray-500 text-[22px]"
                  : "text-gray-600 text-[22px]"
                }`}
            >
              {t("team.subtitle")}
            </p>
          </div>
          <Link
            to="/our-doctors"
            className={`flex mt-10 md:items-center gap-1 px-8 font-medium transition-colors duration-200 ${isArabic
                ? "text-[#1ab8b3] hover:text-[#158e8a]"
                : "text-[#1ab8b3] hover:text-[#3c7a78]"
              } group`}
          >
            {t("team.viewAll")}
            <span
              className={`transition-transform duration-200 ${isArabic
                  ? "group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

        {/* Slick Carousel */}
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {team.slice(0, 5).map((member, ) => (
            <div
              key={member.id}
              className="px-3 cursor-pointer"
              onClick={() => navigate(`/team/${member.id}`)}
            >
              <motion.div
                className="relative w-[360px] h-[540px] overflow-hidden rounded-2xl shadow-xl mx-auto group"
                // Removed onHoverStart and onHoverEnd
                // onHoverStart={() => setHoverIndex(index)}
                // onHoverEnd={() => setHoverIndex(null)}
              >
                <img
                  src={`https://jawdah.yatrasaathi.in/api/uploads/${member.image}`}
                  alt={member.name}
                  // Removed group-hover:scale-105 for fixed image
                  className="w-full h-full object-cover transition-transform duration-700"
                />

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-auto z-20" // Changed h-30% to h-auto
                  // Removed initial and animate properties, set y to "0%" for fixed position
                  initial={{ y: "0%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div
                    // Updated bg-gradient-to-t to from-white/100 for full opacity from bottom
                    className={`w-full h-full ${isArabic
                        ? "bg-gradient-to-t from-white/100 via-white/80 to-transparent"
                        : "bg-gradient-to-t from-white/100 via-white/80 to-transparent"
                      } backdrop-blur-md p-6 rounded-t-2xl`}
                  >
                    <motion.div
                      // Removed initial and animate opacity/y for fixed visibility
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="w-full text-center"
                    >
                      <h3
                        className={`${isArabic
                            ? "leading-[20px] text-xl font-semibold text-gray-800"
                            : "leading-[20px] text-2xl font-bold text-gray-800"
                          }`}
                      >
                        {member.name}
                      </h3>
                      <p
                        className={`${isArabic
                            ? "text-base mt-1 text-[#58cac6]"
                            : "text-lg font-medium mt-2 text-[#58cac6]"
                          }`}
                      >
                        {member.Specialization}
                      </p>
                      <p
                        className={`${isArabic
                            ? "text-sm mt-2 text-gray-700" // Changed text-gray-300 to text-gray-700 for better visibility on white background
                            : "text-base font-normal mt-3 text-gray-700 leading-relaxed"
                          }`}
                      >
                        {member.text}
                      </p>
                      <button className="px-4 bg-gradient-custom text-white rounded text-xs mt-1 cursor-pointer ">
                        View More
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <div
          className={`absolute mt-10 ${isArabic ? "flex-row-reverse left-14" : "right-14"
            } flex gap-3 z-10`}
        >
          <button
            onClick={() => sliderRef?.slickPrev()}
            className={`p-2 rounded-full ${isArabic
                ? "bg-[#1ab8b3] hover:bg-[#158e8a]"
                : "bg-white hover:bg-gray-100 shadow-md"
              }`}
          >
            <ChevronLeft
              className={`h-6 w-6 ${isArabic ? "text-white" : "text-gray-600"}`}
            />
          </button>
          <button
            onClick={() => sliderRef?.slickNext()}
            className={`p-2 rounded-full ${isArabic
                ? "bg-[#1ab8b3] hover:bg-[#158e8a]"
                : "bg-white hover:bg-gray-100 shadow-md"
              }`}
          >
            <ChevronRight
              className={`h-6 w-6 ${isArabic ? "text-white" : "text-gray-600"}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}