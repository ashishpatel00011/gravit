import { useEffect, useState, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Logo3D from "./Logo3D";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageToggleButton from "./LanguageToggleButton";
import Button from "./Button";

export default function Header() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const { scrollY } = useScroll();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > lastScroll && latest > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScroll(latest);
    });
  }, [scrollY, lastScroll]);

  const gradientClass =
    "bg-gradient-to-r from-[#77e5e0] to-[#77e5e0] bg-clip-text text-transparent brightness-100";
  const hoverClass =
    "hover:bg-gradient-to-r hover:from-[#77e5e0] hover:to-[#1AB8B3] hover:bg-clip-text hover:text-transparent transition-colors duration-300 hover:brightness-150";

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-black text-white w-full sticky top-0 z-50"
      dir="ltr"
    >
      <div
        className={`px-10 flex justify-between items-center py-4 ${
          isArabic ? "flex-row-reverse font-[Almarai]" : "flex-row font-[Bahij_Nazanin]"
        }`}
      >
        <div
          className={`flex items-center gap-4 ${
            isArabic ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <Link to="/" className="flex items-center justify-center h-12">
            <Suspense
              fallback={
                <div className="w-24 h-12 flex items-center justify-center">
                  <span className="text-[#1AB8B3] text-2xl font-bold">QC</span>
                </div>
              }
            >
              <Logo3D />
            </Suspense>
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex items-center gap-6 text-[16px] font-semibold-500 ${
              isArabic ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Link
              to="/about"
              className={`${hoverClass} ${location.pathname === "/about" ? gradientClass : ""}`}
            >
              {isArabic ? "عن كواليتي" : "About"}
            </Link>

            <Link
              to="/our-doctors"
              className={`${hoverClass} ${location.pathname === "/our-doctors" ? gradientClass : ""}`}
            >
              {isArabic ? "فريقنا" : "Our Team"}
            </Link>

            <Link
              to="/careers"
              className={`${hoverClass} ${location.pathname === "/careers" ? gradientClass : ""}`}
            >
              {isArabic ? "الوظائف" : t("navigation.careers")}
            </Link>

            <Link
              to="/contact"
              className={`${hoverClass} ${location.pathname === "/contact" ? gradientClass : ""}`}
            >
              {isArabic ? "تواصل معنا" : t("navigation.contact")}
            </Link>

            {/* Desktop Explore */}
            <div className="group relative">
              <span
                className={`cursor-pointer ${hoverClass} ${
                  ["/discover", "/technology", "/qualitygallery", "/reviews"].includes(location.pathname)
                    ? gradientClass
                    : ""
                }`}
              >
                {isArabic ? "استكشف" : "Explore"}
              </span>
              <div
                className={`absolute ${isArabic ? "right-0" : "left-0"} mt-2 w-48 bg-black border border-[#1AB8B3] rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform translate-y-2 z-50`}
              >
                <Link to="/discover" className="block px-4 py-2 text-sm hover:bg-[#1AB8B3]/10">
                  {isArabic ? "الفروع" : "Branches"}
                </Link>
                <Link to="/technology" className="block px-4 py-2 text-sm hover:bg-[#1AB8B3]/10">
                  {isArabic ? "التكنلوجيا" : "Technology"}
                </Link>
                <Link to="/qualitygallery" className="block px-4 py-2 text-sm hover:bg-[#1AB8B3]/10">
                  {isArabic ? "كواليتي قاليري" : "Quality Gallery"}
                </Link>
                <Link to="/reviews" className="block px-4 py-2 text-sm hover:bg-[#1AB8B3]/10">
                  {isArabic ? "اراء مراجعينا" : "Reviews"}
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div
          className={`hidden md:flex items-center gap-4 ${
            isArabic ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <LanguageToggleButton />
          <Button />
        </div>

        <button className="md:hidden text-3xl" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-black">
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`${hoverClass} text-[16px] font-semibold ${
              location.pathname === "/about" ? gradientClass : ""
            }`}
          >
            {isArabic ? "عن كواليتي" : "About"}
          </Link>

          <Link
            to="/our-doctors"
            onClick={() => setIsOpen(false)}
            className={`${hoverClass} text-[16px] font-semibold ${
              location.pathname === "/our-doctors" ? gradientClass : ""
            }`}
          >
            {isArabic ? "فريقنا" : "Our Team"}
          </Link>

          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className={`${hoverClass} text-[16px] font-semibold ${
              location.pathname === "/careers" ? gradientClass : ""
            }`}
          >
            {isArabic ? "الوظائف" : t("navigation.careers")}
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`${hoverClass} text-[16px] font-semibold ${
              location.pathname === "/contact" ? gradientClass : ""
            }`}
          >
            {isArabic ? "تواصل معنا" : t("navigation.contact")}
          </Link>

          {/* Mobile Explore Dropdown */}
          <button
            onClick={() => setIsExploreOpen((prev) => !prev)}
            className={`w-full flex justify-between items-center text-[16px] font-semibold ${hoverClass} ${
              ["/discover", "/technology", "/qualitygallery", "/reviews"].includes(location.pathname)
                ? gradientClass
                : ""
            }`}
          >
            <span>{isArabic ? "استكشف" : "Explore"}</span>
            {isExploreOpen ? <FaChevronUp className="text-[16px]" /> : <FaChevronDown className="text-[16px]" />}
          </button>

          {isExploreOpen && (
            <div className="flex flex-col mt-2">
              <Link
                to="/discover"
                onClick={() => {
                  setIsOpen(false);
                  setIsExploreOpen(false);
                }}
                className="pl-4 text-[16px] font-semibold text-white hover:text-[#1AB8B3]"
              >
                {isArabic ? "الفروع" : "Branches"}
              </Link>
              <Link
                to="/technology"
                onClick={() => {
                  setIsOpen(false);
                  setIsExploreOpen(false);
                }}
                className="pl-4 text-[16px] font-semibold text-white hover:text-[#1AB8B3]"
              >
                {isArabic ? "التكنلوجيا" : "Technology"}
              </Link>
              <Link
                to="/qualitygallery"
                onClick={() => {
                  setIsOpen(false);
                  setIsExploreOpen(false);
                }}
                className="pl-4 text-[16px] font-semibold text-white hover:text-[#1AB8B3]"
              >
                {isArabic ? "كواليتي قاليري" : "Quality Gallery"}
              </Link>
              <Link
                to="/reviews"
                onClick={() => {
                  setIsOpen(false);
                  setIsExploreOpen(false);
                }}
                className="pl-4 text-[16px] font-semibold text-white hover:text-[#1AB8B3]"
              >
                {isArabic ? "اراء مراجعينا" : "Reviews"}
              </Link>
            </div>
          )}

          <div style={{ width: "30%" }}>
            <LanguageToggleButton />
          </div>
          <Button />
        </div>
      )}
    </motion.header>
  );
}
