// // import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// // import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import OurPracHigh from "./OurPracHigh";
// import Slider from "react-slick";

// // const projects = [
// //   "/Images/Practiceslider/ps1.JPEG",
// //   "/Images/Practiceslider/ps2.jpg",
// //   "/Images/Practiceslider/ps3.JPG",
// //   "/Images/Practiceslider/ps4.JPG",
// //   "/Images/Practiceslider/ps5.JPG",
// // ];
//   interface ImagePair {
//     beforeImg: string;
//     afterImg: string;
//   }
//   interface Doctor {
//     name: string;
//     title: string;
//     education: string;
//     image: string;
//     beforeAfterImages: ImagePair[];
//   }
//   const doctors: Doctor[] = [
//     {
//       name: "team.members.3.name",
//       title: "team.members.3.specification",
//       education: "team.members.3.text",
//       image: "/Images/cd-4.png",
//       beforeAfterImages: [
//         {
//           beforeImg: "/Images/before/b Dr Naif c1 before.jpg",
//           afterImg: "/Images/after/a Dr Naif c1 after.jpg",
//         },
//         {
//           beforeImg: "/Images/before/b Dr Naif c2 before.jpg",
//           afterImg: "/Images/after/a Dr Naif c2 after.JPEG",
//         },
//         {
//           beforeImg: "/Images/before/b Dr Naif c3before.jpg",
//           afterImg: "/Images/after/a Dr Naif c3 after.jpg",
//         },
//         {
//           beforeImg: "/Images/before/b Dr Naif c4 before.jpeg",
//           afterImg: "/Images/after/a Dr Naif c4 after.jpeg",
//         },
//         {
//           beforeImg: "/Images/before/b Dr Naif c5 before.jpg",
//           afterImg: "/Images/after/a Dr Naif c5 after.jpg",
//         },
//       ],
//     },
//     {
//       name: "team.members.0.name",
//       title: "team.members.0.specification",
//       education: "team.members.0.text",
//       image: "/Images/cd-1.jpg",
//       beforeAfterImages: [
//         {
//           beforeImg: "/Images/before/b badr c2 before.JPG",
//           afterImg: "/Images/after/a badr c2 after .JPG",
//         },
//         {
//           beforeImg: "/Images/before/b badr before1 (2).JPG",
//           afterImg: "/Images/after/a badr after 1a (2).JPG",
//         },
//       ],
//     },
//     {
//       name: "team.members.1.name",
//       title: "team.members.1.specification",
//       education: "team.members.1.text",
//       image: "/Images/cd-2.jpg",
//       beforeAfterImages: [
//         {
//           beforeImg: "/Images/before/before.JPG",
//           afterImg: "/Images/after/after.JPG",
//         },
//       ],
//     },
//     {
//       name: "team.members.2.name",
//       title: "team.members.2.specification",
//       education: "team.members.2.text",
//       image: "/Images/cd-3.jpg",
//       beforeAfterImages: [
//         {
//           beforeImg:
//             "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
//           afterImg:
//             "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
//         },
//       ],
//     },

//     {
//       name: "team.members.18.name",
//       title: "team.members.18.specification",
//       education: "team.members.18.text",
//       image: "/Images/cd-19.jpg",
//       beforeAfterImages: [
//         {
//           beforeImg: "/Images/before/b Dr Ala before.jpg",
//           afterImg: "/Images/after/a Dr Ala aftter.JPG",
//         },
//         {
//           beforeImg: "/Images/before/b Dr Ala  c2before.jpg",
//           afterImg: "/Images/after/a Dr Ala c2 aftter.JPG",
//         },
//         {
//           beforeImg: "/Images/before/b Dr Ala c3 before.jpg",
//           afterImg: "/Images/after/a Dr Ala c3 aftter.JPG",
//         },
//       ],
//     },
//   ];
// export default function ServicesSlides() {
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//    const settings = {
//      dots: true,
//      infinite: true,
//      speed: 500,
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      autoplay: true,
//      autoplaySpeed: 2000,
//      draggable: true,
//      swipe: true,
//      swipeToSlide: true,
//    };

//   // const settings = {
//   //   dots: false,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   autoplaySpeed: 2000,
//   //   draggable: true,
//   //   swipe: true,
//   //   swipeToSlide: true,
//   //   responsive: [
//   //     {
//   //       breakpoint: 1024,
//   //       settings: { slidesToShow: 2 },
//   //     },
//   //     {
//   //       breakpoint: 768,
//   //       settings: { slidesToShow: 1 },
//   //     },
//   //   ],
//   // };

//   return (
//     <div className="relative w-full py-32 bg-white dark:bg-black transition-colors duration-700">
//       <div
//         className={`mb-20 left-0 w-full flex flex-col items-center justify-center z-10 ${
//           isArabic ? "text-right" : "text-left"
//         }`}

//       >
//         <h3 className="text-black dark:text-white text-[42px] font-bold">
//           {t("practice.title")}{" "}
//           <span className="text-primary">{t("practice.highlight")}</span>
//         </h3>
//         <p className="pt-2 w-1/2 text-center text-gray-600 dark:text-gray-300">
//           {t("practice.description")}
//         </p>
//       </div>

//       <div className="w-full px-4">
//         {/* <Slider {...settings}>
//           {projects.map((src, idx) => (
//             <div key={idx} className="px-2">
//               <Link to="/projects">
//                 <img
//                   src={src}
//                   alt={`Slide ${idx + 1}`}
//                   className="object-cover w-full h-[900px] rounded-2xl brightness-75"
//                 />
//               </Link>
//             </div>
//           ))}
//         </Slider> */}
//         <Slider {...settings}>
//           {doctors.map((doctor, index) => (
//             <div key={index}>
//               <OurPracHigh doctors={[doctor]} settings={settings} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

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
        console.log(result);
        const featuredDoctors = result.data.filter(
          (doctor: { featured: string }) => doctor.featured === "1"
        );

        const formattedDoctors = featuredDoctors.map((doctor: any) => ({
          name: doctor.name,
          title: doctor.title,
          Specialization: doctor.Specialization || doctor.title, // or however you want to map it
          classification: doctor.classification || "",
          education: doctor.education,
          image: doctor.image,
          beforeAfterImages: doctor.beforeAfterImages || [],
        }));

        setDoctors(formattedDoctors);
      } else {
        console.error("Failed to fetch doctors data");
      }
    })
    .catch((err) => console.error("Error fetching data:", err));
}, [i18n.language]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    draggable: false,
    swipe: true,
    swipeToSlide: true,
  };

  return (
    <div className="relative w-full md:py-32 py-10 bg-white dark:bg-black transition-colors duration-700">
      <div
        className={`mb-20 left-0 w-full flex flex-col items-center justify-center z-10 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <h3 className="text-black dark:text-white text-[42px] font-bold">
          {t("practice.title")}{" "}
          <span className="text-primary">{t("practice.highlight")}</span>
        </h3>
        <p className="pt-2 px-2 md:w-1/2 text-center text-gray-600 dark:text-gray-300">
          {t("practice.description")}
        </p>
      </div>

      <div className="w-full px-4">
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
