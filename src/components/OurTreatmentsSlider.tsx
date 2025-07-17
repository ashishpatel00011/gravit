import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Each service corresponds to an image in the stack (same order!)
const services = [
  {
    title: { en: "Dental Prosthetics", ar: "التركيبات" },
    desc: {
      en: "We offer advanced dental prosthetic solutions using the finest materials like E-max and Zirconia. Our high-quality designs precisely mimic natural teeth, ensuring a harmonious smile and long-lasting natural appearance.",
      ar: "نقدم حلول تركيبات أسنان متقدمة باستخدام أفضل أنواع التركيبات مثل الإيماكس والزيركون، بجودة عالية وتصميم يحاكي الأسنان الطبيعية بدقة، لضمان ابتسامة متناسقة ومظهر طبيعي يدوم"
    }
  },
  {
    title: { en: "Orthodontics", ar: "تقويم الأسنان" },
    desc: {
      en: "We are pioneers in orthodontics, especially in clear aligners like Invisalign, capable of treating even complex cases with precision and professionalism. We also provide traditional metal braces based on each patient’s specific needs.",
      ar: "روّاد في تقويم الأسنان، خصوصًا التقويم الشفاف \"انفزلاين\"، ونعالج به حتى أصعب الحالات بدقة واحترافية. كما نوفر أيضًا خيارات التقويم المعدني التقليدي حسب احتياج كل حالة."
    }
  },
  {
    title: { en: "Oral Surgery", ar: "الجراحة" },
    desc: {
      en: "We have a specialized department for oral, maxillofacial, and gum surgeries, supervised by an experienced surgical team using the latest devices and techniques to ensure accurate results and safe, effective treatments.",
      ar: "نوفّر قسمًا متخصصًا في جراحة الوجه والفكين واللثة، بإشراف فريق جراحي متمرس يستخدم أحدث الأجهزة والتقنيات لضمان نتائج دقيقة وعلاج آمن وفعّال."
    }
  },
  {
    title: { en: "Dental Implants", ar: "زراعة الأسنان" },
    desc: {
      en: "We use the world’s best and most reliable dental implant systems, combined with advanced techniques and personalized treatment plans, to ensure strong, long-lasting implants that look and feel like natural teeth.",
      ar: "نستخدم أفضل وأجود أنواع زراعة الأسنان عالميًا، بتقنيات متطورة وخطط علاج شخصية تضمن ثبات الزرعة، قوة التحمل، وشكل طبيعي أقرب للأسنان الأصلية."
    }
  },
  {
    title: { en: "Pediatric Dentistry", ar: "طب أسنان الأطفال" },
    desc: {
      en: "Our clinics are fully equipped to welcome children in a comfortable and supportive environment. Our specialized team excels at handling all types of children, including those with fear or anxiety, ensuring a smooth and safe treatment experience.",
      ar: "عياداتنا مجهزة بالكامل لاستقبال الأطفال بجو مريح وداعم، مع فريق متخصص يجيد التعامل مع كافة فئات الأطفال، حتى من يعانون من الخوف أو التوتر، لضمان تجربة علاجية سهلة وآمنة."
    }
  },
  {
    title: { en: "Root Canal Treatment", ar: "العصب وجذور الأسنان" },
    desc: {
      en: "We provide accurate and advanced root canal treatments using modern technologies like dental microscopes and precision measurement devices, ensuring efficient root cleaning and filling while preventing future complications.",
      ar: "نقدم علاجات دقيقة ومتقدمة لعصب وجذور الأسنان باستخدام تقنيات حديثة مثل الميكروسكوب الطبي وأجهزة قياس دقيقة، لضمان تنظيف وحشو الجذور بكفاءة عالية وتجنب أي مضاعفات مستقبلية."
    }
  },
  {
    title: { en: "Laser Services", ar: "الليزر" },
    desc: {
      en: "We offer state-of-the-art laser technology such as GentleMax Pro, Elite iQ, and Clarity II for effective hair removal and body bleaching. Our services are known for their precision, quality, punctuality, and a professional team that ensures a safe and comfortable experience.",
      ar: "نوفّر في عياداتنا أقوى وأحدث أجهزة الليزر مثل GentleMax Pro، وElite iQ، وClarity II، لإزالة الشعر أو تشقير الجسم بكفاءة عالية. نتميّز بدقة النتائج، جودة الخدمة، والالتزام بالمواعيد مع كادر متخصص يضمن لك تجربة مريحة وآمنة."
    }
  },
  {
    title: { en: "Acne & Acne Scars", ar: "حب الشباب وآثاره" },
    desc: {
      en: "We offer effective solutions for acne and its scars using advanced technologies like fractional laser and Scarlet RF, alongside topical treatments like therapeutic peels and cold Spectra, all under the supervision of a specialized doctor to guarantee visible and safe results.",
      ar: "نقدم حلولًا فعالة لعلاج حب الشباب وآثاره باستخدام تقنيات متقدمة مثل الفراكشنال ليزر والسكارليت، إلى جانب علاجات موضعية مثل التقشير العلاجي وسبكترا البارد، تحت إشراف طبيبة مختصة لضمان نتائج ملموسة وآمنة."
    }
  },
  {
    title: { en: "Filler & Skin Rejuvenation", ar: "الفيلر والنضارة" },
    desc: {
      en: "We use the highest quality fillers and skin booster injections with precision and care to improve facial appearance, tighten the skin, restore volume, and give you balanced features and healthy glow, all under the care of a specialized medical team.",
      ar: "نستخدم أفضل وأجود أنواع الفيلر وحقن النضارة بعناية واحتراف، لتحسين المظهر العام، شد البشرة، استعادة الحجم الطبيعي، ومنحك ملامح متوازنة ونضارة صحية، بإشراف كادر طبي متخصص."
    }
  },
  {
    title: { en: "Botox", ar: "البوتوكس" },
    desc: {
      en: "We provide highly accurate and professional Botox injections for expression lines, brow lifting, facial contouring, and excessive sweating. We use trusted products and offer direct medical supervision to ensure safe and natural-looking results.",
      ar: "نقدّم خدمات حقن البوتوكس بأعلى درجات الدقة والاحتراف، لعلاج التجاعيد التعبيرية، رفع الحواجب، تحديد ملامح الوجه، والتقليل من التعرق الزائد، باستخدام منتجات موثوقة وبإشراف طبي مباشر لضمان نتائج طبيعية وآمنة."
    }
  },
  {
    title: { en: "Skin Care", ar: "العناية بالبشرة" },
    desc: {
      en: "Our clinics offer a complete range of skincare sessions, including: Hydrafacial, Hydratouch, Mesotherapy, and more—designed to restore your skin’s freshness, hydration, and tone. Treatments are carried out by a specialized team with customized plans based on your skin type and needs.",
      ar: "في عياداتنا، نوفّر باقة متكاملة من جلسات العناية بالبشرة تشمل: الهيدرافيشل، الهيدراتاتش، الميزوثيرابي، وغيرها من التقنيات التي تعيد للبشرة نضارتها، ترطيبها، وتوحيد لونها. بإشراف فريق متخصص يضع خطة علاجية تناسب نوع بشرتك واحتياجاتك الفعلية."
    }
  },
  {
    title: { en: "Dermatology Department", ar: "قسم الجلديةلبوتوكس" },
    desc: {
      en: "We offer advanced dermatology and cosmetic treatments using cutting-edge technology and expert care — all delivered with elegance, precision, and international standards.",
      ar: " نقدم علاجات متقدمة في الأمراض الجلدية والتجميل باستخدام أحدث التقنيات، وبأيدي خبراء، مع أعلى معايير الجودة والرفاهية "
    }
  },
  {
    title: { en: "Dental treatment", ar: " الإنتاجية" },
    desc: {
      en: "We provide expert dental care using advanced technology and top-quality materials — all to ensure healthy, confident smiles",
      ar: " نقدم رعاية أسنان متخصصة باستخدام أحدث التقنيات وأجود المواد لضمان ابتسامة صحية وواثقة.  "
    }
  },
];


const slides = [
  {
    category: "Dental Prosthetics",
    arCategory: "التركيبات", // Added Arabic translation
    description: "Dental Prosthetics",
    src: "/treatments/1.jpg",
  },
  {
    category: "Orthodontics",
    arCategory: "تقويم الأسنان", // Added Arabic translation
    description: "Orthodontics",
    src: "/treatments/ortho.jpg",
  },
  {
    category: "Oral Surgery",
    arCategory: "الجراحة", // Added Arabic translation
    description: "NHS and adult orthodontics",
    src: "/treatments/oralsurgery.jpg",
  },
  {
    category: "Dental Implants",
    arCategory: "زراعة الأسنان", // Added Arabic translation
    description: "Dental Implants",
    src: "/treatments/implant.jpg",
  },
  {
    category: "Pediatric Dentistry",
    arCategory: "طب أسنان الأطفال", // Added Arabic translation
    description: "Pediatric Dentistry",
    src: "/treatments/pd.jpg",
  },
  {
    category: "Root Canal Treatment",
    arCategory: "العصب وجذور الأسنان", // Added Arabic translation
    description: "Root Canal Treatmen",
    src: "/treatments/root.jpg",
  },
  {
    category: "Laser Services",
    arCategory: "الليزر", // Added Arabic translation
    description: "GentleMax Pro, Elite iQ, Clarity II for hair removal and more",
    src: "/treatments/laser.jpg",
  },
  {
    category: "Acne & Acne Scars",
    arCategory: "حب الشباب وآثاره", // Added Arabic translation
    description: "Fractional laser, Scarlet RF, peels and more",
    src: "/treatments/8.jpg",
  },
  {
    category: "Filler & Skin Rejuvenation",
    arCategory: "الفيلر والنضارة", // Added Arabic translation
    description: "Fillers, boosters, skin tightening, and glow",
    src: "/treatments/fillers.jpg",
  },
  {
    category: "Botox",
    arCategory: "البوتوكس", // Added Arabic translation
    description: "Botox injections for expression lines, brow lifting, facial contouring, and excessive sweating.",
    src: "/treatments/botox.jpg",
  },
  {
    category: "Skin Care",
    arCategory: "العناية بالبشرة", // Added Arabic translation
    description: "Complete range of skincare sessions: Hydrafacial, Hydratouch, Mesotherapy, and more.",
    src: "/treatments/skin.jpg",
  },
  {
    category: "Dermatology Department",
    arCategory: "قسم الجلدية", // Added Arabic translation
    description: "Dermatology Department",
    src: "/treatments/9.png",
  },
  {
    category: "Dental treatment",
    arCategory: "الإنتاجية", // Added Arabic translation
    description: "Complete range of skincare sessions: Hydrafacial, Hydratouch, Mesotherapy, and more.",
    src: "/treatments/10.png",
  },
];

export default function OurTreatmentsSlider() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [current, setCurrent] = useState(0);

  // This function is used by your image stack logic
  const getPosition = (index: number) => {
    const diff = (index - current + slides.length) % slides.length;
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === 2) return 2;
    if (diff === slides.length - 1) return -1;
    if (diff === slides.length - 2) return -2;
    return null;
  };

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className={`min-h-[115vh] bg-black flex items-center justify-center px-6 md:px-20 overflow-hidden`}>
      <div className={`container grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isArabic ? "text-right" : "text-left"}`}>
        {/* Left: Show only ONE service at a time, in sync with current */}
        <div className="flex flex-col justify-center h-full py-16 space-y-8">
          <h4 className="text-[#1ab8b3] text-[29px] mb-4 font-medium">
            {isArabic ? "خدماتنا" : "Our Treatments"}
          </h4>
          <h3 className="text-white sm:text-[24px] md:text-[38px] font-bold tracking-wide drop-shadow-lg">
            {isArabic ? services[current].title.ar : services[current].title.en}
          </h3>
          <p className="text-white/80 md:text-[20px] mt-4 leading-relaxed" dir={isArabic ? "rtl" : "ltr"}>
            {isArabic ? services[current].desc.ar : services[current].desc.en}
          </p>
          <div className={`flex gap-6 pt-10 justify-center ${isArabic ? "flex-row-reverse" : ""} md:justify-start ${isArabic ? "md:ml-90" : ""}`}>
            <button
              onClick={prev}
              className="p-4 text-3xl border bg-slate-50/10 text-white rounded-full hover:bg-slate-50/20"
              aria-label={isArabic ? "السابق" : "Previous"}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              onClick={next}
              className="p-4 text-3xl border bg-slate-50/10 text-white rounded-full hover:bg-slate-50/20"
              aria-label={isArabic ? "التالي" : "Next"}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        {/* Right: IMAGE STACK - UNCHANGED! */}
        <div className="relative w-full max-w-md h-[520px] mx-auto">
          {slides.map((slide, index) => {
            const pos = getPosition(index);
            if (pos === null) return null;

            const zIndex = 10 - Math.abs(pos);
            const offsetX = `${pos * 10}%`;
            const scale = pos === 0 ? 1 : 0.9 - Math.abs(pos) * 0.03;
            const opacity = pos === 0 ? 1 : 0.15 + 0.2 * (2 - Math.abs(pos));
            const rotate = pos * 3;

            return (
              <motion.div
                key={index}
                className="absolute inset-0"
                style={{ zIndex }}
                initial={false}
                animate={{ x: offsetX, scale, opacity, rotate }}
                transition={{ duration: 0.5, ease: "linear" }}
              >
                <img
                  src={slide.src}
                  alt={slide.category}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                {/* Category overlay */}
                {pos === 0 && (
                  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent rounded-b-2xl flex items-end justify-center z-10">
                    <div className="text-white text-2xl font-normal mb-6">
                      {isArabic ? slide.arCategory : slide.category}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}