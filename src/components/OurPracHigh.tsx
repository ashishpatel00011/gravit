

// import { FaAngleRight } from "react-icons/fa";
// import BeforeAfterSlider2 from "./BeforeAfterSlider2";
// import BeforeAfterSlider3 from "./BeforeAfterSlider3";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";

// interface beforeAfterImages {
//   beforeImg: string;
//   afterImg: string;
// }

// interface Doctor {
//   name: string;
//   title: string;
//   Specialization: string;
//   classification: string;
//   image: string;
//   beforeAfterImages: beforeAfterImages[];
//   tag_line?: string;
// }

// interface OurPracHighProps {
//   doctors: Doctor[];
//   settings: any;
// }

// export default function OurPracHigh({ doctors }: OurPracHighProps) {
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";
//   const navigate = useNavigate();

//   const doctor = doctors[0];

//   return (
//     <div className="bg-black min-h-screen w-full">
//       {/* Desktop layout */}
//       <div className="hidden md:block w-full">
//         <div className="flex flex-col items-center justify-center md:p-8">
//           <div className="mb-12 w-full mx-auto p-4">
//             {/* Row 1: 60/40 */}
//             <div
//               className={`flex md:flex-wrap ${isArabic ? "flex-row-reverse" : "flex-row"} mb-4`}
//             >
//               {/* Left (60%) */}
//               <div className="w-full md:w-3/6 p-2">
//                 {doctor.beforeAfterImages?.[0] ? (
//                   <BeforeAfterSlider3
//                     beforeImg={`https://jawdah.yatrasaathi.in/api/uploads/after/${doctor.beforeAfterImages[0].afterImg}`}
//                     afterImg={`https://jawdah.yatrasaathi.in/api/uploads/before/${doctor.beforeAfterImages[0].beforeImg}`}
//                   />
//                 ) : (
//                   <p className="text-white">No before-after images available.</p>
//                 )}
//               </div>

//               {/* Right (40%) */}
//               <div
//                 className={`w-full md:w-2/4 p-2 flex ${isArabic ? "md:flex-col flex-col" : "md:flex-col flex-col"} items-center justify-center`}
//               >
//                 <div style={{ textAlign: "center" }}>
//                   <h3
//                     className="text-white"
//                     style={{ lineHeight: isArabic ? "70px" : "1.2em" }}
//                   >
//                     {`"${doctor.tag_line}"`}
//                   </h3>
//                 </div>
//                 <div
//                   className={`w-full p-2 flex ${isArabic ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"} items-center justify-center`}
//                 >
//                   <img
//                     className="h-48 w-30 object-cover mb-3 mt-5"
//                     src={`https://jawdah.yatrasaathi.in/api//uploads/${doctor.image}`}
//                     alt={doctor.name}
//                   />
//                   <div
//                     className="flex flex-col ml-5"
//                     style={{
//                       textAlign: isArabic ? "right" : "left",
//                     }}
//                   >
//                     <h2 className="text-white text-2xl font-semibold leading-5">
//                       {t(doctor.name)}
//                     </h2>
//                     <p className="text-white mt-2">{t(doctor.title)}</p>
//                     <p className="text-white mt-1 italic">{t(doctor.Specialization)}</p>
//                     <p className="text-white mt-1 italic">{t(doctor.classification)}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div
//               className={`flex items-center ${isArabic ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"}`}
//             >
//               {/* Left: Images */}
//               <div className="md:min-w-[70%] w-100 md:grid md:grid-cols-2 md:gap-4 p-2">
//                 {doctor.beforeAfterImages?.length > 0 ? (
//                   doctor.beforeAfterImages.slice(0, 2).map((pair, index) => (
//                     <div
//                       key={index}
//                       className={`md:max-h-34 w-[90%] ${index === 1 ? "hidden md:block" : "block"}`}
//                     >
//                       <BeforeAfterSlider2
//                         beforeImg={`https://jawdah.yatrasaathi.in/api/uploads/after/${pair.afterImg}`}
//                         afterImg={`https://jawdah.yatrasaathi.in/api/uploads/before/${pair.beforeImg}`}
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-white">No before-after images available.</p>
//                 )}
//               </div>

//               {/* Right: CTA */}
//               <div className="flex-1 mt-20 p-2 flex justify-center items-center">
//                 <button
//                   className="bg-teal-500 text-[22px] text-white p-4 md:p-10 rounded-md hover:bg-teal-600 transition w-48 md:w-64 flex flex-col items-center justify-center text-center"
//                   onClick={() => navigate("/qualitygallery")}
//                 >
//                   <FaAngleRight style={{ fontSize: "4rem" }} />
//                   <span className="block leading-tight">
//                     {t("vms").split(" ").slice(0, 3).join(" ")}
//                   </span>
//                   <span className="block leading-tight">
//                     {t("vms").split(" ").slice(3).join(" ")}
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout */}
//       <div className="block md:hidden">
//         <div className="flex flex-col bg-black min-h-screen">
//           {/* Top area */}
//           <div className="flex-shrink-0 p-4">
//             <div style={{ textAlign: "center" }}>
//               <h3
//                 className="text-white text-center px-2"
//                 style={{ lineHeight: isArabic ? "2.2em" : "1.2em" }}
//               >
//                 {`"${doctor.tag_line}"`}
//               </h3>
//             </div>
//             <div className="w-full mt-4 flex flex-col items-center justify-center">
//               <img
//                 className="h-48 w-30 object-cover mb-3"
//                 src={`https://jawdah.yatrasaathi.in/api//uploads/${doctor.image}`}
//                 alt={doctor.name}
//               />
//               <div
//                 className="flex flex-col items-center text-center"
//                 style={{
//                   textAlign: isArabic ? "right" : "center",
//                 }}
//               >
//                 <h2 className="text-white text-2xl font-semibold leading-5">
//                   {t(doctor.name)}
//                 </h2>
//                 <p className="text-white mt-2">{t(doctor.title)}</p>
//                 <p className="text-white mt-1 italic">{t(doctor.Specialization)}</p>
//                 <p className="text-white mt-1 italic">{t(doctor.classification)}</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex-grow"></div>

//           {/* Bottom fixed area */}
//           <div className="flex-shrink-0 w-full flex flex-col items-center justify-center p-6  ">
//             <div className="w-full">
//               {doctor.beforeAfterImages?.[0] ? (
//                 <BeforeAfterSlider3
//                   beforeImg={`https://jawdah.yatrasaathi.in/api/uploads/after/${doctor.beforeAfterImages[0].afterImg}`}
//                   afterImg={`https://jawdah.yatrasaathi.in/api/uploads/before/${doctor.beforeAfterImages[0].beforeImg}`}
//                 />
//               ) : (
//                 <p className="text-white text-center">No before-after images available.</p>
//               )}
//             </div>
//             <div className="flex justify-center mt-4">
//               <button
//                 className="bg-teal-500 text-[18px] text-white px-6 py-4 rounded-md hover:bg-teal-600 transition w-48 md:w-64 flex flex-col items-center justify-center"
//                 onClick={() => navigate("/qualitygallery")}
//               >
//                 <FaAngleRight style={{ fontSize: "2rem" }} />
//                 <span className="block leading-tight">
//                   {t("vms").split(" ").slice(0, 3).join(" ")}
//                 </span>
//                 <span className="block leading-tight">
//                   {t("vms").split(" ").slice(3).join(" ")}
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { FaAngleRight } from "react-icons/fa";
import BeforeAfterSlider2 from "./BeforeAfterSlider2";
import BeforeAfterSlider3 from "./BeforeAfterSlider3";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface beforeAfterImages {
  beforeImg: string;
  afterImg: string;
}

interface Doctor {
  name: string;
  title: string;
  Specialization: string;
  classification: string;
  image: string;
  beforeAfterImages: beforeAfterImages[];
  tag_line?: string;
}

interface OurPracHighProps {
  doctors: Doctor[];
  settings: any;
}

export default function OurPracHigh({ doctors }: OurPracHighProps) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const navigate = useNavigate();

  const doctor = doctors[0];

  return (
    <div className="bg-black min-h-screen w-full">
      {/* Desktop layout */}
      <div className="hidden md:block w-full">
        <div className="flex flex-col items-center justify-center md:p-8">
          <div className="mb-12 w-full mx-auto p-4">
            {/* Row 1: 60/40 */}
            <div className={`flex md:flex-wrap ${isArabic ? "flex-row-reverse" : "flex-row"} mb-4`}>
              {/* Left (60%) */}
              <div className="w-full md:w-3/6 p-2">
                {doctor.beforeAfterImages?.[0] ? (
                  <BeforeAfterSlider3
                    beforeImg={`https://jawdah.yatrasaathi.in/api/uploads/after/${doctor.beforeAfterImages[0].afterImg}`}
                    afterImg={`https://jawdah.yatrasaathi.in/api/uploads/before/${doctor.beforeAfterImages[0].beforeImg}`}
                  />
                ) : (
                  <p className="text-white">No before-after images available.</p>
                )}
              </div>

              {/* Right (40%) */}
              <div className="w-full md:w-2/4 p-2 flex flex-col items-center justify-center">
                <div className="text-center">
                  <h3
                    className="text-white text-center"
                    style={{ lineHeight: isArabic ? "70px" : "1.2em", textAlign: "center" }}
                  >
                    {`"${doctor.tag_line}"`}
                  </h3>
                </div>
                <div
                  className={`w-full p-2 flex ${isArabic ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"} items-center justify-center`}
                >
                  <img
                    className="h-48 w-30 object-cover mb-3 mt-5"
                    src={`https://jawdah.yatrasaathi.in/api//uploads/${doctor.image}`}
                    alt={doctor.name}
                  />
                  <div
                    className="flex flex-col ml-5"
                    style={{
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    <h2 className="text-white text-2xl font-semibold leading-5">
                      {t(doctor.name)}
                    </h2>
                    <p className="text-white mt-2">{t(doctor.title)}</p>
                    <p className="text-white mt-1 italic">{t(doctor.Specialization)}</p>
                    <p className="text-white mt-1 italic">{t(doctor.classification)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className={`flex items-center ${isArabic ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"}`}>
              {/* Left: Images */}
              <div className="md:min-w-[70%] w-100 md:grid md:grid-cols-2 md:gap-4 p-2">
                {doctor.beforeAfterImages?.length > 0 ? (
                  doctor.beforeAfterImages.slice(0, 2).map((pair, index) => (
                    <div
                      key={index}
                      className={`md:max-h-34 w-[90%] ${index === 1 ? "hidden md:block" : "block"}`}
                    >
                      <BeforeAfterSlider2
                        beforeImg={`https://jawdah.yatrasaathi.in/api/uploads/after/${pair.afterImg}`}
                        afterImg={`https://jawdah.yatrasaathi.in/api/uploads/before/${pair.beforeImg}`}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-white">No before-after images available.</p>
                )}
              </div>

              {/* Right: CTA */}
              <div className="flex-1 mt-20 p-2 flex justify-center items-center">
                <button
                  className="bg-teal-500 text-[22px] text-white p-4 md:p-10 rounded-md hover:bg-teal-600 transition w-48 md:w-64 flex flex-col items-center justify-center text-center"
                  onClick={() => navigate("/qualitygallery")}
                >
                  <FaAngleRight style={{ fontSize: "4rem" }} />
                  <span className="block leading-tight">
                    {t("vms").split(" ").slice(0, 3).join(" ")}
                  </span>
                  <span className="block leading-tight">
                    {t("vms").split(" ").slice(3).join(" ")}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="block md:hidden">
        <div className="flex flex-col bg-black min-h-screen">
          {/* Top Section */}
          <div className="p-4 min-h-[500px] flex flex-col items-center justify-start">
            <h3
              className="text-white text-center px-2 line-clamp-2 overflow-hidden"
              style={{
                textAlign: "center",
                lineHeight: isArabic ? "2em" : "1.4em",
                maxHeight: isArabic ? "4em" : "2.8em",
              }}
            >
              {`"${doctor.tag_line}"`}
            </h3>

            <img
              className="h-48 w-30 object-cover my-3"
              src={`https://jawdah.yatrasaathi.in/api//uploads/${doctor.image}`}
              alt={doctor.name}
            />

            <div
              className="flex flex-col items-center text-center"
              dir={isArabic ? "rtl" : "ltr"}
            >

              <h2 className="text-white text-2xl font-semibold leading-10">
                {t(doctor.name)}
              </h2>
              <p className="text-white mt-2">{t(doctor.title)}</p>
              <p className="text-white mt-1 italic">{t(doctor.Specialization)}</p>
              <p className="text-white mt-1 italic">{t(doctor.classification)}</p>
            </div>

            <div className="flex-grow" />
          </div>

          {/* Bottom Section */}
          <div className="flex-shrink-0 w-full flex flex-col items-center justify-center p-6">
            <div className="w-full">
              {doctor.beforeAfterImages?.[0] ? (
                <BeforeAfterSlider3
                  beforeImg={`https://jawdah.yatrasaathi.in/api/uploads/after/${doctor.beforeAfterImages[0].afterImg}`}
                  afterImg={`https://jawdah.yatrasaathi.in/api/uploads/before/${doctor.beforeAfterImages[0].beforeImg}`}
                />
              ) : (
                <p className="text-white text-center">No before-after images available.</p>
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-teal-500 text-[18px] text-white px-6 py-4 rounded-md hover:bg-teal-600 transition w-48 md:w-64 flex flex-col items-center justify-center"
                onClick={() => navigate("/qualitygallery")}
              >
                <FaAngleRight style={{ fontSize: "2rem" }} />
                <span className="block leading-tight">
                  {t("vms").split(" ").slice(0, 3).join(" ")}
                </span>
                <span className="block leading-tight">
                  {t("vms").split(" ").slice(3).join(" ")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
