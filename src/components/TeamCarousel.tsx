// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import NormalCard from "./NormalCard";

// // TypeScript type
// type Doctor = {
//   id: string;
//   image: string;
//   name: string;
//   specialization: string;
//   text: string;
//   vtext?:string;
// };

// export default function TeamCarousel() {
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         setLoading(true);

//         const formData = new FormData();
//         formData.append("langType", i18n.language);

//         const response = await fetch(
//           "https://jawdah.yatrasaathi.in/api//fetchAlldoctors.php",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );

//         const data = await response.json();
//         console.log("Fetched doctors data:", data);

//         if (Array.isArray(data.data)) {
//           const mappedDoctors = data.data.map((item: any) => ({
//             id: item.id,
//             image: item.image,
//             name: isArabic ? item.name_ar : item.name,
//             specialization: isArabic
//               ? item.Specialization_ar
//               : item.Specialization,
//             text: isArabic ? item.Bachelor_ar : item.Bachelor,
//           }));

//           setDoctors(mappedDoctors);
//         } else {
//           console.error("Unexpected data format:", data);
//           setDoctors([]);
//         }
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//         setDoctors([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctors();
//   }, [i18n.language]);

//   return (
//     <div className="min-h-screen sm:px-6 py-12 sm:py-16 bg-black">
//       <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
//         <div
//           className={`text-center space-y-3 sm:space-y-4 ${
//             isArabic ? "rtl" : "ltr"
//           }`}
//         >
//           <p className="text-[#1AB8B3] text-[18px]  uppercase tracking-wider">
//             {t("team.meetDentist")}
//           </p>
//           <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white">
//             {t("team.title")}
//           </h2>
//           <p className="text-gray-400 text-[20px] max-w-2xl mx-auto">
//             {t("team.subtitle")}
//           </p>
//         </div>

//         {loading ? (
//           <p className="text-white text-center">Loading doctors...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 justify-items-center">
//             {doctors.map((member) => (
//               <div
//                 key={member.id}
//                 onClick={() => navigate(`/team/${member.id}`)}
//                 className="w-full max-w-[350px] transition-transform duration-300 ease-in-out hover:-translate-y-2"
//               >
//                 <NormalCard
//                   image={`https://jawdah.yatrasaathi.in/api//uploads/${member.image}`}
//                   name={member.name}
//                   specification={member.specialization}
//                   text={member.text}
//                   isArabic={isArabic} vtext={"View more"}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NormalCard from "./NormalCard"; // Assuming NormalCard.tsx is in the same directory

// TypeScript type
type Doctor = {
  id: string;
  image: string;
  name: string;
  specialization: string;
  text: string;
  vtext?: string;
};

export default function TeamCarousel() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [doctors, setDoctors] = useState<Doctor[]>([]!);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);

        const formData = new FormData();
        formData.append("langType", i18n.language);

        const response = await fetch(
          "https://jawdah.yatrasaathi.in/api//fetchAlldoctors.php",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        console.log("Fetched doctors data:", data);

        if (Array.isArray(data.data)) {
          const mappedDoctors = data.data.map((item: any) => ({
            id: item.id,
            image: item.image,
            name: isArabic ? item.name_ar : item.name,
            specialization: isArabic
              ? item.Specialization_ar
              : item.Specialization,
            text: isArabic ? item.Bachelor_ar : item.Bachelor,
          }));

          setDoctors(mappedDoctors);

          // console.log("check", map)
        } else {
          console.error("Unexpected data format:", data);
          setDoctors([]);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [i18n.language]);

  return (
    <div className="min-h-screen sm:px-6 py-12 sm:py-16 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <div
          className={`text-center space-y-3 sm:space-y-4 ${isArabic ? "rtl" : "ltr"
            }`}
        >
          <p className="text-[#1AB8B3] text-[18px]  uppercase tracking-wider">
            {t("team.meetDentist")}
          </p>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white">
            {t("team.title")}
          </h2>
          <p className="text-gray-400 text-[20px] max-w-2xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        {loading ? (
          <p className="text-white text-center">Loading doctors...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 justify-items-center">
            {doctors.map((member) => (
              <div
                key={member.id}
                onClick={() => navigate(`/team/${member.id}`)}
                className="w-full max-w-[350px] transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                <NormalCard
                  image={`https://jawdah.yatrasaathi.in/api//uploads/${member.image}`}
                  name={member.name}
                  specification={member.specialization}
                  text={member.text}
                  isArabic={isArabic}
                  vtext={"View more"}  
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}