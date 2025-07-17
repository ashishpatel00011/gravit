import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function GetInTouch() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const ref = useRef(null);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const leftToCenter = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const rightToCenter = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const partners = [
    "/marque/IMG_0801.PNG", "/marque/IMG_0802.PNG", "/marque/IMG_0803.JPG",
    "/marque/IMG_0804.WEBP", "/marque/IMG_0805.JPG", "/marque/IMG_0821.JPG",
    "/marque/IMG_0807.JPG", "/marque/IMG_0808.JPG", "/marque/IMG_0809.PNG", "/marque/IMG_0822.WEBP"
  ];

  const partners2 = [
    "/marque/IMG_0810.JPG", "/marque/IMG_0812.JPG", "/marque/IMG_0813.PNG",
    "/marque/IMG_0814.JPG", "/marque/IMG_0816.PNG", "/marque/IMG_0817.JPG",
    "/marque/IMG_0818.WEBP", "/marque/IMG_0819.JPG", "/marque/IMG_0820.JPG"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzchjzfMXx2eOavG95tKcZVBgsCBmgXehT6kRJFEfI96-MU2WLoQIJcNjMtNW6tGfA-vg/exec";

    const formData = new FormData();
    formData.append("email", email);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setMessage("✔️ Subscribed!");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Subscription failed.");
    }
  };

  return (
    <div className="relative -pb-8 ">

      {/* Success Partner Section */}
      <div className="bg-black pt-25 pb-4 overflow-hidden w-full">
        <div className="text-center mb-20">
          <h3 className="text-[30px] md:text-[56px] font-bold text-white whitespace-nowrap">
            <span className="">{t("app.successPartner.title")}{" "}</span>
            <span className="text-[#1AB8B3]">
              {t("app.successPartner.gradient")}
            </span>
          </h3>
        </div>
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: isArabic ? ["0%", "50%"] : ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...partners, ...partners].map((src, idx) => (
              <img
                key={`row1-${idx}`}
                src={src}
                alt={`logo-${idx}`}
                className="h-20 flex-shrink-0 object-contain"
              />
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (RTL) */}
        <div className="overflow-hidden w-full mt-6">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: isArabic ? ["50%", "0%"] : ["-50%", "0%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...partners2, ...partners2].map((src, idx) => (
              <img
                key={`row2-${idx}`}
                src={src}
                alt={`logo2-${idx}`}
                className="h-20 flex-shrink-0 object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stay in Touch Section */}
      <div
        ref={ref}
        className="bg-black min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
        id="getInTouch"
      >
        <motion.h2
          style={{ x: leftToCenter, opacity }}
          // Added conditional line-height for mobile Arabic text
          className={`absolute top-[23%] left-1/2 -translate-x-1/2 whitespace-nowrap md:text-[56px] text-[30px] ${isArabic ? 'leading-tight md:leading-normal' : ''}`}
        >
          {t("app.community.title")}
        </motion.h2>

        <motion.h2
          style={{ x: rightToCenter, opacity }}
          // Added conditional line-height for mobile Arabic text
          className={`md:text-[56px] text-[30px] text-gradient-custom bg-clip-text text-transparent absolute top-[33%] left-1/2 -translate-x-1/2 whitespace-nowrap ${isArabic ? 'leading-tight md:leading-normal' : ''}`}
        >
          {t("app.community.join")}
        </motion.h2>

        <div className="pt-60 md:max-w-[768px] w-[70%] text-center">
          <p
            // Added conditional line-height for mobile Arabic text
            className={`text-gray-300 mb-6 text-[22px] ${isArabic ? 'leading-loose md:leading-normal' : ''}`}
          >
            {t("app.community.spam")}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-2 mb-4 flex-wrap">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("app.community.email")}
                required
                className={`md:w-[360px] h-[48px] px-4 rounded-[8px] font-light text-[16px] text-white outline focus:ring-2 focus:ring-violet-500 ${isArabic ? "text-right" : "text-left"}`}
              />
              <button
                type="submit"
                className="bg-primary text-[16px] ml-2 font-light text-white w-[120px] h-[48px] px-[4px] py-[5px] rounded-md cursor-pointer"
              >
                {t("buttons.subscribe")}
              </button>
            </div>
          </form>

          <p className="text-green-400 text-sm mb-2">{message}</p>
          <p className="text-gray-500 text-[15px]">{t("app.community.terms")}</p>
        </div>
      </div>
    </div>
  );
}