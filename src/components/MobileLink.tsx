import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function DownloadSection() {
  const { t } = useTranslation();

  return (
    <div
      id="mobile"
      className="relative overflow-hidden min-h-[70vh] flex flex-col md:flex-row items-center justify-evenly p-4 bg-white"
    >
      {/* Left Div - Mobile App Preview */}
      <div className="relative w-[280px] h-[500px]">
        {/* Gradient Shadow */}
        <div className="absolute inset-6 rounded-3xl bg-gradient-to-r from-[#95ebe6] via-[#1ab8b3] to-[#4789da] blur-xl opacity-50"></div>

        {/* Mobile Frame */}
        <div className="rounded-3xl relative bg-white/10 shadow-10xl backdrop-blur-sm">
          <div className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden">
            <img
              src="https://cdn.appdesign.dev/wp-content/uploads/2019/04/disen%CC%83o-app-para-dentistas.png"
              alt={t("app.image.alt")}
              className="object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Right Div - Download Links */}
      <div className="flex flex-col items-center w-full md:w-[45%] gap-8 z-10">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {t("app.title")}
          </h2>
          <p className="text-[22px] text-gray-600 max-w-md mx-auto">
            {t("app.description")}
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] flex items-center justify-center gap-3 py-4 bg-gradient-custom text-white text-center font-semibold rounded-2xl shadow-lg transition-all duration-300"
        >
          <img
            src="/Images/playStore.png"
            alt="Play Store"
            className="w-8 h-8"
          />
          {t("app.googlePlay")}
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] flex items-center justify-center gap-3 py-4 bg-gradient-custom text-white text-center font-semibold rounded-2xl shadow-lg transition-all duration-300"
        >
          <img src="/Images/appstore.png" alt="App Store" className="w-8 h-8" />
          {t("app.appStore")}
        </motion.a>
      </div>
    </div>
  );
}
