// import { useParams, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// // import BeforeAfterSlider from "./BeforeAfterSlider";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import BeforeAfterSlider from "./BeforeAfterSlider1";

// const team = [
//   {
//     image: "/Images/cd-1.jpg",
//     name: "team.members.0.name",
//     specification: "team.members.0.specification",
//     text: "team.members.0.text",
//     level: "team.members.0.level",
//     joiningYear: "team.members.0.joiningYear",
//     line: "team.members.0.line",
//     moto: "team.members.0.moto",
//     description: "team.members.0.description",
//     avableTiming: "team.members.0.avableTiming",
//     workPlaces: "team.members.0.workPlaces",
//     education: "team.members.0.education",
//     phD: "team.members.0.education.phD",
//     masters: "team.members.0.education.masters",
//     Bachelors: "team.members.0.education.Bachelors",

//     expe: "team.members.0.expe",
//     exp1: "team.members.0.expe.exp1",
//     exp2: "team.members.0.expe.exp2",
//     exp3: "team.members.0.expe.exp3",
//     exp4: "team.members.0.expe.exp4",

//     certifition: "team.members.0.certifition",
//     langCanSpeak: "team.members.0.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/b badr c2 before.JPG",
//         afterImg: "/Images/after/a badr c2 after .JPG",
//       },
//       {
//         beforeImg: "/Images/before/b badr before1 (2).JPG",
//         afterImg: "/Images/after/a badr after 1a (2).JPG",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-2.jpg",
//     name: "team.members.1.name",
//     specification: "team.members.1.specification",
//     text: "team.members.1.text",
//     level: "team.members.1.level",
//     joiningYear: "team.members.1.joiningYear",
//     line: "team.members.1.line",
//     moto: "team.members.1.moto",
//     description: "team.members.1.description",
//     avableTiming: "team.members.1.avableTiming",
//     workPlaces: "team.members.1.workPlaces",
//     education: "team.members.1.education",
//     phD: "team.members.1.education.phD",
//     masters: "team.members.1.education.masters",
//     Bachelors: "team.members.1.education.Bachelors",

//     expe: "team.members.1.expe",
//     exp1: "team.members.1.expe.exp1",
//     exp2: "team.members.1.expe.exp2",
//     exp3: "team.members.1.expe.exp3",
//     exp4: "team.members.1.expe.exp4",

//     certifition: "team.members.1.certifition",
//     langCanSpeak: "team.members.1.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/before.JPG",
//         afterImg: "/Images/after/after.JPG",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-3.jpg",
//     name: "team.members.2.name",
//     specification: "team.members.2.specification",
//     text: "team.members.2.text",
//     level: "team.members.2.level",
//     joiningYear: "team.members.2.joiningYear",
//     line: "team.members.2.line",
//     moto: "team.members.2.moto",
//     description: "team.members.2.description",
//     avableTiming: "team.members.2.avableTiming",
//     workPlaces: "team.members.2.workPlaces",
//     education: "team.members.2.education",
//     phD: "team.members.2.education.phD",
//     masters: "team.members.2.education.masters",
//     Bachelors: "team.members.2.education.Bachelors",

//     expe: "team.members.2.expe",
//     exp1: "team.members.2.expe.exp1",
//     exp2: "team.members.2.expe.exp2",
//     exp3: "team.members.2.expe.exp3",
//     exp4: "team.members.2.expe.exp4",

//     certifition: "team.members.2.certifition",
//     langCanSpeak: "team.members.2.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/IMG_1681 (1).JPG",
//         afterImg: "/Images/after/IMG_1690 (1).JPG",
//       },
//       {
//         beforeImg: "/Images/before/بعد امام فيلر (1).JPG",
//         afterImg: "/Images/after/قبل امام فيلر (1).JPG",
//       },
//       {
//         beforeImg: "/Images/before/قبل٢IMG_4766 (1).JPG",
//         afterImg: "/Images/after/بعد٢IMG_4882 (1).JPG",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-4.png",
//     name: "team.members.3.name",
//     specification: "team.members.3.specification",
//     text: "team.members.3.text",
//     level: "team.members.3.level",
//     joiningYear: "team.members.3.joiningYear",
//     line: "team.members.3.line",
//     moto: "team.members.3.moto",
//     description: "team.members.3.description",
//     avableTiming: "team.members.3.avableTiming",
//     workPlaces: "team.members.3.workPlaces",
//     education: "team.members.3.education",
//     phD: "team.members.3.education.phD",
//     masters: "team.members.3.education.masters",
//     Bachelors: "team.members.3.education.Bachelors",

//     expe: "team.members.3.expe",
//     exp1: "team.members.3.expe.exp1",
//     exp2: "team.members.3.expe.exp2",
//     exp3: "team.members.3.expe.exp3",
//     exp4: "team.members.3.expe.exp4",

//     certifition: "team.members.3.certifition",
//     langCanSpeak: "team.members.3.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/b Dr Naif c1 before.jpg",
//         afterImg: "/Images/after/a Dr Naif c1 after.jpg",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Naif c2 before.jpg",
//         afterImg: "/Images/after/a Dr Naif c2 after.JPEG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Naif c3before.jpg",
//         afterImg: "/Images/after/a Dr Naif c3 after.jpg",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Naif c4 before.jpeg",
//         afterImg: "/Images/after/a Dr Naif c4 after.jpeg",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Naif c5 before.jpg",
//         afterImg: "/Images/after/a Dr Naif c5 after.jpg",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-5.jpg",
//     name: "team.members.4.name",
//     specification: "team.members.4.specification",
//     text: "team.members.4.text",
//     level: "team.members.4.level",
//     joiningYear: "team.members.4.joiningYear",
//     line: "team.members.4.line",
//     moto: "team.members.4.moto",
//     description: "team.members.4.description",
//     avableTiming: "team.members.4.avableTiming",
//     workPlaces: "team.members.4.workPlaces",
//     education: "team.members.4.education",
//     phD: "team.members.4.education.phD",
//     masters: "team.members.4.education.masters",
//     Bachelors: "team.members.4.education.Bachelors",

//     expe: "team.members.4.expe",
//     exp1: "team.members.4.expe.exp1",
//     exp2: "team.members.4.expe.exp2",
//     exp3: "team.members.4.expe.exp3",
//     exp4: "team.members.4.expe.exp4",

//     certifition: "team.members.4.certifition",
//     langCanSpeak: "team.members.4.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-6.png",
//     name: "team.members.5.name",
//     specification: "team.members.5.specification",
//     text: "team.members.5.text",
//     level: "team.members.5.level",
//     joiningYear: "team.members.5.joiningYear",
//     line: "team.members.5.line",
//     moto: "team.members.5.moto",
//     description: "team.members.5.description",
//     avableTiming: "team.members.5.avableTiming",
//     workPlaces: "team.members.5.workPlaces",
//     education: "team.members.5.education",
//     phD: "team.members.5.education.phD",
//     masters: "team.members.5.education.masters",
//     Bachelors: "team.members.5.education.Bachelors",

//     expe: "team.members.5.expe",
//     exp1: "team.members.5.expe.exp1",
//     exp2: "team.members.5.expe.exp2",
//     exp3: "team.members.5.expe.exp3",
//     exp4: "team.members.5.expe.exp4",

//     certifition: "team.members.5.certifition",
//     langCanSpeak: "team.members.5.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/b Dr Ghasan before.JPG",
//         afterImg: "/Images/after/a Dr Ghasan after.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ghasan c2 before.JPG",
//         afterImg: "/Images/after/a Dr Ghasan c2 after.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ghasan c3 before.jpeg",
//         afterImg: "/Images/after/a Dr Ghasan c3after.jpeg",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ghasan c4 before.JPG",
//         afterImg: "/Images/after/a Dr Ghasan c4 after.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ghasan c5 before.JPG",
//         afterImg: "/Images/after/a Dr Ghasan c5 after.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ghasan c6 before.JPG",
//         afterImg: "/Images/after/a Dr Ghasan c6 after.jpeg",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ghasan c7 before.JPG",
//         afterImg: "/Images/after/a Dr Ghasan c7 after.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ghasan c8 before.jpeg",
//         afterImg: "/Images/after/a Dr Ghasan c8 after.jpeg",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-7.jpg",
//     name: "team.members.6.name",
//     specification: "team.members.6.specification",
//     text: "team.members.6.text",
//     level: "team.members.6.level",
//     joiningYear: "team.members.6.joiningYear",
//     line: "team.members.6.line",
//     moto: "team.members.6.moto",
//     description: "team.members.6.description",
//     avableTiming: "team.members.6.avableTiming",
//     workPlaces: "team.members.6.workPlaces",
//     education: "team.members.6.education",
//     phD: "team.members.6.education.phD",
//     masters: "team.members6.education.masters",
//     Bachelors: "team.members6.education.Bachelors",

//     expe: "team.members.6.expe",
//     exp1: "team.members.6.expe.exp1",
//     exp2: "team.members.6.expe.exp2",
//     exp3: "team.members.6.expe.exp3",
//     exp4: "team.members.6.expe.exp4",

//     certifition: "team.members.6.certifition",
//     langCanSpeak: "team.members.6.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-8.jpg",
//     name: "team.members.7.name",
//     specification: "team.members.7.specification",
//     text: "team.members.7.text",
//     level: "team.members.7.level",
//     joiningYear: "team.members.7.joiningYear",
//     line: "team.members.7.line",
//     moto: "team.members.7.moto",
//     description: "team.members.7.description",
//     avableTiming: "team.members.7.avableTiming",
//     workPlaces: "team.members.7.workPlaces",
//     education: "team.members.7.education",
//     phD: "team.members.7.education.phD",
//     masters: "team.members.7.education.masters",
//     Bachelors: "team.members.7.education.Bachelors",

//     expe: "team.members.7.expe",
//     exp1: "team.members.7.expe.exp1",
//     exp2: "team.members.7.expe.exp2",
//     exp3: "team.members.7.expe.exp3",
//     exp4: "team.members.7.expe.exp4",

//     certifition: "team.members.7.certifition",
//     langCanSpeak: "team.members.7.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-9.jpg",
//     name: "team.members.8.name",
//     specification: "team.members.8.specification",
//     text: "team.members.8.text",
//     level: "team.members.8.level",
//     joiningYear: "team.members.8.joiningYear",
//     line: "team.members.8.line",
//     moto: "team.members.8.moto",
//     description: "team.members.8.description",
//     avableTiming: "team.members.8.avableTiming",
//     workPlaces: "team.members.8.workPlaces",
//     education: "team.members.8.education",
//     phD: "team.members.8.education.phD",
//     masters: "team.members.8.education.masters",
//     Bachelors: "team.members.8.education.Bachelors",

//     expe: "team.members.8.expe",
//     exp1: "team.members.8.expe.exp1",
//     exp2: "team.members.8.expe.exp2",
//     exp3: "team.members.8.expe.exp3",
//     exp4: "team.members.8.expe.exp4",

//     certifition: "team.members.8.certifition",
//     langCanSpeak: "team.members.8.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-10.jpg",
//     name: "team.members.9.name",
//     specification: "team.members.9.specification",
//     text: "team.members.9.text",
//     level: "team.members.9.level",
//     joiningYear: "team.members.9.joiningYear",
//     line: "team.members.9.line",
//     moto: "team.members.9.moto",
//     description: "team.members.9.description",
//     avableTiming: "team.members.9.avableTiming",
//     workPlaces: "team.members.9.workPlaces",
//     education: "team.members.9.education",
//     phD: "team.members.9.education.phD",
//     masters: "team.members.9.education.masters",
//     Bachelors: "team.members.9.education.Bachelors",

//     expe: "team.members.9.expe",
//     exp1: "team.members.9.expe.exp1",
//     exp2: "team.members.9.expe.exp2",
//     exp3: "team.members.9.expe.exp3",
//     exp4: "team.members.9.expe.exp4",

//     certifition: "team.members.9.certifition",
//     langCanSpeak: "team.members.9.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-11.jpg",
//     name: "team.members.10.name",
//     specification: "team.members.10.specification",
//     text: "team.members.10.text",
//     level: "team.members.10.level",
//     joiningYear: "team.members.10.joiningYear",
//     line: "team.members.10.line",
//     moto: "team.members.10.moto",
//     description: "team.members.10.description",
//     avableTiming: "team.members.10.avableTiming",
//     workPlaces: "team.members.10.workPlaces",
//     education: "team.members.10.education",
//     phD: "team.members.10.education.phD",
//     masters: "team.members.10.education.masters",
//     Bachelors: "team.members.10.education.Bachelors",

//     expe: "team.members.10.expe",
//     exp1: "team.members.10.expe.exp1",
//     exp2: "team.members.10.expe.exp2",
//     exp3: "team.members.10.expe.exp3",
//     exp4: "team.members.10.expe.exp4",

//     certifition: "team.members.10.certifition",
//     langCanSpeak: "team.members.10.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-12.jpg",
//     name: "team.members.11.name",
//     specification: "team.members.11.specification",
//     text: "team.members.11.text",
//     level: "team.members.11.level",
//     joiningYear: "team.members.11.joiningYear",
//     line: "team.members.11.line",
//     moto: "team.members.11.moto",
//     description: "team.members.11.description",
//     avableTiming: "team.members.11.avableTiming",
//     workPlaces: "team.members.11.workPlaces",
//     education: "team.members.11.education",
//     phD: "team.members.11.education.phD",
//     masters: "team.members.11.education.masters",
//     Bachelors: "team.members.11.education.Bachelors",

//     expe: "team.members.11.expe",
//     exp1: "team.members.11.expe.exp1",
//     exp2: "team.members.11.expe.exp2",
//     exp3: "team.members.11.expe.exp3",
//     exp4: "team.members.11.expe.exp4",

//     certifition: "team.members.11.certifition",
//     langCanSpeak: "team.members.11.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-13.jpg",
//     name: "team.members.12.name",
//     specification: "team.members.12.specification",
//     text: "team.members.12.text",
//     level: "team.members.12.level",
//     joiningYear: "team.members.12.joiningYear",
//     line: "team.members.12.line",
//     moto: "team.members.12.moto",
//     description: "team.members.12.description",
//     avableTiming: "team.members.12.avableTiming",
//     workPlaces: "team.members.12.workPlaces",
//     education: "team.members.12.education",
//     phD: "team.members.12.education.phD",
//     masters: "team.members.12.education.masters",
//     Bachelors: "team.members.12.education.Bachelors",

//     expe: "team.members.12.expe",
//     exp1: "team.members.12.expe.exp1",
//     exp2: "team.members.12.expe.exp2",
//     exp3: "team.members.12.expe.exp3",
//     exp4: "team.members.12.expe.exp4",

//     certifition: "team.members.12.certifition",
//     langCanSpeak: "team.members.12.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/b Dr Abdullah Badhman c1 before.jpeg",
//         afterImg: "/Images/after/a Dr Abdullah Badhman c1after.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Abdullah Badhman c2before.JPG",
//         afterImg: "/Images/after/a Dr Abdullah Badhman c2after.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Abdullah Badhman c3 before.jpeg",
//         afterImg: "/Images/after/a Dr Abdullah Badhman c3after.jpeg",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-14.jpg",
//     name: "team.members.13.name",
//     specification: "team.members.13.specification",
//     text: "team.members.13.text",
//     level: "team.members.13.level",
//     joiningYear: "team.members.13.joiningYear",
//     line: "team.members.13.line",
//     moto: "team.members.13.moto",
//     description: "team.members.13.description",
//     avableTiming: "team.members.13.avableTiming",
//     workPlaces: "team.members.13.workPlaces",
//     education: "team.members.13.education",
//     phD: "team.members.13.education.phD",
//     masters: "team.members.13.education.masters",
//     Bachelors: "team.members.13.education.Bachelors",

//     expe: "team.members.13.expe",
//     exp1: "team.members.13.expe.exp1",
//     exp2: "team.members.13.expe.exp2",
//     exp3: "team.members.13.expe.exp3",
//     exp4: "team.members.13.expe.exp4",

//     certifition: "team.members.13.certifition",
//     langCanSpeak: "team.members.13.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-15.jpg",
//     name: "team.members.14.name",
//     specification: "team.members.14.specification",
//     text: "team.members.14.text",
//     level: "team.members.14.level",
//     joiningYear: "team.members.14.joiningYear",
//     line: "team.members.14.line",
//     moto: "team.members.14.moto",
//     description: "team.members.14.description",
//     avableTiming: "team.members.14.avableTiming",
//     workPlaces: "team.members.14.workPlaces",
//     education: "team.members.14.education",
//     phD: "team.members.14.education.phD",
//     masters: "team.members.14.education.masters",
//     Bachelors: "team.members.14.education.Bachelors",

//     expe: "team.members.14.expe",
//     exp1: "team.members.14.expe.exp1",
//     exp2: "team.members.14.expe.exp2",
//     exp3: "team.members.14.expe.exp3",
//     exp4: "team.members.14.expe.exp4",

//     certifition: "team.members.14.certifition",
//     langCanSpeak: "team.members.14.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-16.jpg",
//     name: "team.members.15.name",
//     specification: "team.members.15.specification",
//     text: "team.members.15.text",
//     level: "team.members.15.level",
//     joiningYear: "team.members.15.joiningYear",
//     line: "team.members.15.line",
//     moto: "team.members.15.moto",
//     description: "team.members.15.description",
//     avableTiming: "team.members.15.avableTiming",
//     workPlaces: "team.members.15.workPlaces",
//     education: "team.members.15.education",
//     phD: "team.members.15.education.phD",
//     masters: "team.members.15.education.masters",
//     Bachelors: "team.members.15.education.Bachelors",

//     expe: "team.members.15.expe",
//     exp1: "team.members.15.expe.exp1",
//     exp2: "team.members.15.expe.exp2",
//     exp3: "team.members.15.expe.exp3",
//     exp4: "team.members.15.expe.exp4",

//     certifition: "team.members.15.certifition",
//     langCanSpeak: "team.members.15.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/Dr. Ramzi Saeed c1b.JPG",
//         afterImg: "/Images/after/Dr. Ramzi Saeed c1a.JPG",
//       },
//       {
//         beforeImg: "/Images/before/Dr. Ramzi Saeed c2b.JPG",
//         afterImg: "/Images/after/Dr. Ramzi Saeed c2a.JPG",
//       },
//       {
//         beforeImg: "/Images/before/Dr. Ramzi Saeed c3b.JPG",
//         afterImg: "/Images/after/Dr. Ramzi Saeed c3a.JPG",
//       },
//       {
//         beforeImg: "/Images/before/Dr. Ramzi Saeed c4b.JPG",
//         afterImg: "/Images/after/Dr. Ramzi Saeed c4a.JPG",
//       },
//       {
//         beforeImg: "/Images/before/Dr. Ramzi Saeed c5b.JPG",
//         afterImg: "/Images/after/Dr. Ramzi Saeed c5a.JPG",
//       },
//       {
//         beforeImg: "/Images/before/Dr. Ramzi Saeed c6b.JPG",
//         afterImg: "/Images/after/Dr. Ramzi Saeed c6a.JPG",
//       },
//       {
//         beforeImg: "/Images/before/Dr. Ramzi Saeed c7b.JPG",
//         afterImg: "/Images/after/Dr. Ramzi Saeed c7a.JPG",
//       },
//       {
//         beforeImg: "/Images/before/Dr. Ramzi Saeed c8b.JPG",
//         afterImg: "/Images/after/Dr. Ramzi Saeed c8a.JPG",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-17.jpg",
//     name: "team.members.16.name",
//     specification: "team.members.16.specification",
//     text: "team.members.16.text",
//     level: "team.members.16.level",
//     joiningYear: "team.members.16.joiningYear",
//     line: "team.members.16.line",
//     moto: "team.members.16.moto",
//     description: "team.members.16.description",
//     avableTiming: "team.members.16.avableTiming",
//     workPlaces: "team.members.16.workPlaces",
//     education: "team.members.16.education",
//     phD: "team.members.16.education.phD",
//     masters: "team.members.16.education.masters",
//     Bachelors: "team.members.16.education.Bachelors",

//     expe: "team.members.16.expe",
//     exp1: "team.members.16.expe.exp1",
//     exp2: "team.members.16.expe.exp2",
//     exp3: "team.members.16.expe.exp3",
//     exp4: "team.members.16.expe.exp4",

//     certifition: "team.members.16.certifition",
//     langCanSpeak: "team.members.16.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/b wasam Before.JPG",
//         afterImg: "/Images/after/a wasam After.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b wasam c2Before.JPG",
//         afterImg: "/Images/after/a wasam c2After.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b wasam c3before also.jpeg",
//         afterImg: "/Images/after/a wasam c3After Smile.JPG",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-18.jpg",
//     name: "team.members.17.name",
//     specification: "team.members.17.specification",
//     text: "team.members.17.text",
//     level: "team.members.17.level",
//     joiningYear: "team.members.17.joiningYear",
//     line: "team.members.17.line",
//     moto: "team.members.17.moto",
//     description: "team.members.17.description",
//     avableTiming: "team.members.17.avableTiming",
//     workPlaces: "team.members.17.workPlaces",
//     education: "team.members.17.education",
//     phD: "team.members.17.education.phD",
//     masters: "team.members.17.education.masters",
//     Bachelors: "team.members.17.education.Bachelors",

//     expe: "team.members.17.expe",
//     exp1: "team.members.17.expe.exp1",
//     exp2: "team.members.17.expe.exp2",
//     exp3: "team.members.17.expe.exp3",
//     exp4: "team.members.17.expe.exp4",

//     certifition: "team.members.17.certifition",
//     langCanSpeak: "team.members.17.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-19.jpg",
//     name: "team.members.18.name",
//     specification: "team.members.18.specification",
//     text: "team.members.18.text",
//     level: "team.members.18.level",
//     joiningYear: "team.members.18.joiningYear",
//     line: "team.members.18.line",
//     moto: "team.members.18.moto",
//     description: "team.members.18.description",
//     avableTiming: "team.members.18.avableTiming",
//     workPlaces: "team.members.18.workPlaces",
//     education: "team.members.18.education",
//     phD: "team.members.18.education.phD",
//     masters: "team.members.18.education.masters",
//     Bachelors: "team.members.18.education.Bachelors",

//     expe: "team.members.18.expe",
//     exp1: "team.members.18.expe.exp1",
//     exp2: "team.members.18.expe.exp2",
//     exp3: "team.members.18.expe.exp3",
//     exp4: "team.members.18.expe.exp4",

//     certifition: "team.members.18.certifition",
//     langCanSpeak: "team.members.18.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/b Dr Ala before.jpg",
//         afterImg: "/Images/after/a Dr Ala aftter.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ala  c2before.jpg",
//         afterImg: "/Images/after/a Dr Ala c2 aftter.JPG",
//       },
//       {
//         beforeImg: "/Images/before/b Dr Ala c3 before.jpg",
//         afterImg: "/Images/after/a Dr Ala c3 aftter.JPG",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-20.jpg",
//     name: "team.members.19.name",
//     specification: "team.members.19.specification",
//     text: "team.members.19.text",
//     level: "team.members.19.level",
//     joiningYear: "team.members.19.joiningYear",
//     line: "team.members.19.line",
//     moto: "team.members.19.moto",
//     description: "team.members.19.description",
//     avableTiming: "team.members.19.avableTiming",
//     workPlaces: "team.members.19.workPlaces",
//     education: "team.members.19.education",
//     phD: "team.members.19.education.phD",
//     masters: "team.members.19.education.masters",
//     Bachelors: "team.members.19.education.Bachelors",

//     expe: "team.members.19.expe",
//     exp1: "team.members.19.expe.exp1",
//     exp2: "team.members.19.expe.exp2",
//     exp3: "team.members.19.expe.exp3",
//     exp4: "team.members.19.expe.exp4",

//     certifition: "team.members.19.certifition",
//     langCanSpeak: "team.members.19.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-21.jpg",
//     name: "team.members.20.name",
//     specification: "team.members.20.specification",
//     text: "team.members.20.text",
//     level: "team.members.20.level",
//     joiningYear: "team.members.20.joiningYear",
//     line: "team.members.20.line",
//     moto: "team.members.20.moto",
//     description: "team.members.20.description",
//     avableTiming: "team.members.20.avableTiming",
//     workPlaces: "team.members.20.workPlaces",
//     education: "team.members.20.education",
//     phD: "team.members.20.education.phD",
//     masters: "team.members.20.education.masters",
//     Bachelors: "team.members.20.education.Bachelors",
//     expe: "team.members.20.expe",
//     exp1: "team.members.20.expe.exp1",
//     exp2: "team.members.20.expe.exp2",
//     exp3: "team.members.20.expe.exp3",
//     exp4: "team.members.20.expe.exp4",
//     certifition: "team.members.20.certifition",
//     langCanSpeak: "team.members.20.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-22.jpg",
//     name: "team.members.21.name",
//     specification: "team.members.21.specification",
//     text: "team.members.21.text",
//     level: "team.members.21.level",
//     joiningYear: "team.members.21.joiningYear",
//     line: "team.members.21.line",
//     moto: "team.members.21.moto",
//     description: "team.members.21.description",
//     avableTiming: "team.members.21.avableTiming",
//     workPlaces: "team.members.21.workPlaces",
//     education: "team.members.21.education",
//     phD: "team.members.21.education.phD",
//     masters: "team.members.21.education.masters",
//     Bachelors: "team.members.21.education.Bachelors",
//     expe: "team.members.21.expe",
//     exp1: "team.members.21.expe.exp1",
//     exp2: "team.members.21.expe.exp2",
//     exp3: "team.members.21.expe.exp3",
//     exp4: "team.members.21.expe.exp4",
//     certifition: "team.members.21.certifition",
//     langCanSpeak: "team.members.21.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-23.jpg",
//     name: "team.members.22.name",
//     specification: "team.members.22.specification",
//     text: "team.members.22.text",
//     level: "team.members.22.level",
//     joiningYear: "team.members.22.joiningYear",
//     line: "team.members.22.line",
//     moto: "team.members.22.moto",
//     description: "team.members.22.description",
//     avableTiming: "team.members.22.avableTiming",
//     workPlaces: "team.members.22.workPlaces",
//     education: "team.members.22.education",
//     phD: "team.members.22.education.phD",
//     masters: "team.members.22.education.masters",
//     Bachelors: "team.members.22.education.Bachelors",
//     expe: "team.members.22.expe",
//     exp1: "team.members.22.expe.exp1",
//     exp2: "team.members.22.expe.exp2",
//     exp3: "team.members.22.expe.exp3",
//     exp4: "team.members.22.expe.exp4",
//     certifition: "team.members.22.certifition",
//     langCanSpeak: "team.members.22.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-24.jpg",
//     name: "team.members.23.name",
//     specification: "team.members.23.specification",
//     text: "team.members.23.text",
//     level: "team.members.23.level",
//     joiningYear: "team.members.23.joiningYear",
//     line: "team.members.23.line",
//     moto: "team.members.23.moto",
//     description: "team.members.23.description",
//     avableTiming: "team.members.23.avableTiming",
//     workPlaces: "team.members.23.workPlaces",
//     education: "team.members.23.education",
//     phD: "team.members.23.education.phD",
//     masters: "team.members.23.education.masters",
//     Bachelors: "team.members.23.education.Bachelors",
//     expe: "team.members.23.expe",
//     exp1: "team.members.23.expe.exp1",
//     exp2: "team.members.23.expe.exp2",
//     exp3: "team.members.23.expe.exp3",
//     exp4: "team.members.23.expe.exp4",
//     certifition: "team.members.23.certifition",
//     langCanSpeak: "team.members.23.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/RIYAD C1B.PNG",
//         afterImg: "/Images/after/RIYAD C1A.PNG",
//       },
//       {
//         beforeImg: "/Images/before/RIYAD C2B.PNG",
//         afterImg: "/Images/after/RIYAD C2A.PNG",
//       },
//       {
//         beforeImg: "/Images/before/RIYAD C3B.PNG",
//         afterImg: "/Images/after/RIYAD C3A.PNG",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-25.jpg",
//     name: "team.members.24.name",
//     specification: "team.members.24.specification",
//     text: "team.members.24.text",
//     level: "team.members.24.level",
//     joiningYear: "team.members.24.joiningYear",
//     line: "team.members.24.line",
//     moto: "team.members.24.moto",
//     description: "team.members.24.description",
//     avableTiming: "team.members.24.avableTiming",
//     workPlaces: "team.members.24.workPlaces",
//     education: "team.members.24.education",
//     phD: "team.members.24.education.phD",
//     masters: "team.members.24.education.masters",
//     Bachelors: "team.members.24.education.Bachelors",
//     expe: "team.members.24.expe",
//     exp1: "team.members.24.expe.exp1",
//     exp2: "team.members.24.expe.exp2",
//     exp3: "team.members.24.expe.exp3",
//     exp4: "team.members.24.expe.exp4",
//     certifition: "team.members.24.certifition",
//     langCanSpeak: "team.members.24.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-26.jpg",
//     name: "team.members.25.name",
//     specification: "team.members.25.specification",
//     text: "team.members.25.text",
//     level: "team.members.25.level",
//     joiningYear: "team.members.25.joiningYear",
//     line: "team.members.25.line",
//     moto: "team.members.25.moto",
//     description: "team.members.25.description",
//     avableTiming: "team.members.25.avableTiming",
//     workPlaces: "team.members.25.workPlaces",
//     education: "team.members.25.education",
//     phD: "team.members.25.education.phD",
//     masters: "team.members.25.education.masters",
//     Bachelors: "team.members.25.education.Bachelors",
//     expe: "team.members.25.expe",
//     exp1: "team.members.25.expe.exp1",
//     exp2: "team.members.25.expe.exp2",
//     exp3: "team.members.25.expe.exp3",
//     exp4: "team.members.25.expe.exp4",
//     certifition: "team.members.25.certifition",
//     langCanSpeak: "team.members.25.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-27.jpg",
//     name: "team.members.26.name",
//     specification: "team.members.26.specification",
//     text: "team.members.26.text",
//     level: "team.members.26.level",
//     joiningYear: "team.members.26.joiningYear",
//     line: "team.members.26.line",
//     moto: "team.members.26.moto",
//     description: "team.members.26.description",
//     avableTiming: "team.members.26.avableTiming",
//     workPlaces: "team.members.26.workPlaces",
//     education: "team.members.26.education",
//     phD: "team.members.26.education.phD",
//     masters: "team.members.26.education.masters",
//     Bachelors: "team.members.26.education.Bachelors",
//     expe: "team.members.26.expe",
//     exp1: "team.members.26.expe.exp1",
//     exp2: "team.members.26.expe.exp2",
//     exp3: "team.members.26.expe.exp3",
//     exp4: "team.members.26.expe.exp4",
//     certifition: "team.members.26.certifition",
//     langCanSpeak: "team.members.26.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-28.jpg",
//     name: "team.members.27.name",
//     specification: "team.members.27.specification",
//     text: "team.members.27.text",
//     level: "team.members.27.level",
//     joiningYear: "team.members.27.joiningYear",
//     line: "team.members.27.line",
//     moto: "team.members.27.moto",
//     description: "team.members.27.description",
//     avableTiming: "team.members.27.avableTiming",
//     workPlaces: "team.members.27.workPlaces",
//     education: "team.members.27.education",
//     phD: "team.members.27.education.phD",
//     masters: "team.members.27.education.masters",
//     Bachelors: "team.members.27.education.Bachelors",
//     expe: "team.members.27.expe",
//     exp1: "team.members.27.expe.exp1",
//     exp2: "team.members.27.expe.exp2",
//     exp3: "team.members.27.expe.exp3",
//     exp4: "team.members.27.expe.exp4",
//     certifition: "team.members.27.certifition",
//     langCanSpeak: "team.members.27.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-29.jpg",
//     name: "team.members.28.name",
//     specification: "team.members.28.specification",
//     text: "team.members.28.text",
//     level: "team.members.28.level",
//     joiningYear: "team.members.28.joiningYear",
//     line: "team.members.28.line",
//     moto: "team.members.28.moto",
//     description: "team.members.28.description",
//     avableTiming: "team.members.28.avableTiming",
//     workPlaces: "team.members.28.workPlaces",
//     education: "team.members.28.education",
//     phD: "team.members.28.education.phD",
//     masters: "team.members.28.education.masters",
//     Bachelors: "team.members.28.education.Bachelors",
//     expe: "team.members.28.expe",
//     exp1: "team.members.28.expe.exp1",
//     exp2: "team.members.28.expe.exp2",
//     exp3: "team.members.28.expe.exp3",
//     exp4: "team.members.28.expe.exp4",
//     certifition: "team.members.28.certifition",
//     langCanSpeak: "team.members.28.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-30.jpg",
//     name: "team.members.29.name",
//     specification: "team.members.29.specification",
//     text: "team.members.29.text",
//     level: "team.members.29.level",
//     joiningYear: "team.members.29.joiningYear",
//     line: "team.members.29.line",
//     moto: "team.members.29.moto",
//     description: "team.members.29.description",
//     avableTiming: "team.members.29.avableTiming",
//     workPlaces: "team.members.29.workPlaces",
//     education: "team.members.29.education",
//     phD: "team.members.29.education.phD",
//     masters: "team.members.29.education.masters",
//     Bachelors: "team.members.29.education.Bachelors",
//     expe: "team.members.29.expe",
//     exp1: "team.members.29.expe.exp1",
//     exp2: "team.members.29.expe.exp2",
//     exp3: "team.members.29.expe.exp3",
//     exp4: "team.members.29.expe.exp4",
//     certifition: "team.members.29.certifition",
//     langCanSpeak: "team.members.29.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-31.jpg",
//     name: "team.members.30.name",
//     specification: "team.members.30.specification",
//     text: "team.members.30.text",
//     level: "team.members.30.level",
//     joiningYear: "team.members.30.joiningYear",
//     line: "team.members.30.line",
//     moto: "team.members.30.moto",
//     description: "team.members.30.description",
//     avableTiming: "team.members.30.avableTiming",
//     workPlaces: "team.members.30.workPlaces",
//     education: "team.members.30.education",
//     phD: "team.members.30.education.phD",
//     masters: "team.members.30.education.masters",
//     Bachelors: "team.members.30.education.Bachelors",
//     expe: "team.members.30.expe",
//     exp1: "team.members.30.expe.exp1",
//     exp2: "team.members.30.expe.exp2",
//     exp3: "team.members.30.expe.exp3",
//     exp4: "team.members.30.expe.exp4",
//     certifition: "team.members.30.certifition",
//     langCanSpeak: "team.members.30.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-32.jpg",
//     name: "team.members.31.name",
//     specification: "team.members.31.specification",
//     text: "team.members.31.text",
//     level: "team.members.31.level",
//     joiningYear: "team.members.31.joiningYear",
//     line: "team.members.31.line",
//     moto: "team.members.31.moto",
//     description: "team.members.31.description",
//     avableTiming: "team.members.31.avableTiming",
//     workPlaces: "team.members.31.workPlaces",
//     education: "team.members.31.education",
//     phD: "team.members.31.education.phD",
//     masters: "team.members.31.education.masters",
//     Bachelors: "team.members.31.education.Bachelors",
//     expe: "team.members.31.expe",
//     exp1: "team.members.31.expe.exp1",
//     exp2: "team.members.31.expe.exp2",
//     exp3: "team.members.31.expe.exp3",
//     exp4: "team.members.31.expe.exp4",
//     certifition: "team.members.31.certifition",
//     langCanSpeak: "team.members.31.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-33.jpg",
//     name: "team.members.32.name",
//     specification: "team.members.32.specification",
//     text: "team.members.32.text",
//     level: "team.members.32.level",
//     joiningYear: "team.members.32.joiningYear",
//     line: "team.members.32.line",
//     moto: "team.members.32.moto",
//     description: "team.members.32.description",
//     avableTiming: "team.members.32.avableTiming",
//     workPlaces: "team.members.32.workPlaces",
//     education: "team.members.32.education",
//     phD: "team.members.32.education.phD",
//     masters: "team.members.32.education.masters",
//     Bachelors: "team.members.32.education.Bachelors",
//     expe: "team.members.32.expe",
//     exp1: "team.members.32.expe.exp1",
//     exp2: "team.members.32.expe.exp2",
//     exp3: "team.members.32.expe.exp3",
//     exp4: "team.members.32.expe.exp4",
//     certifition: "team.members.32.certifition",
//     langCanSpeak: "team.members.32.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-34.jpg",
//     name: "team.members.33.name",
//     specification: "team.members.33.specification",
//     text: "team.members.33.text",
//     level: "team.members.33.level",
//     joiningYear: "team.members.33.joiningYear",
//     line: "team.members.33.line",
//     moto: "team.members.33.moto",
//     description: "team.members.33.description",
//     avableTiming: "team.members.33.avableTiming",
//     workPlaces: "team.members.33.workPlaces",
//     education: "team.members.33.education",
//     phD: "team.members.33.education.phD",
//     masters: "team.members.33.education.masters",
//     Bachelors: "team.members.33.education.Bachelors",
//     expe: "team.members.33.expe",
//     exp1: "team.members.33.expe.exp1",
//     exp2: "team.members.33.expe.exp2",
//     exp3: "team.members.33.expe.exp3",
//     exp4: "team.members.33.expe.exp4",
//     certifition: "team.members.33.certifition",
//     langCanSpeak: "team.members.33.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-35.jpg",
//     name: "team.members.34.name",
//     specification: "team.members.34.specification",
//     text: "team.members.34.text",
//     level: "team.members.34.level",
//     joiningYear: "team.members.34.joiningYear",
//     line: "team.members.34.line",
//     moto: "team.members.34.moto",
//     description: "team.members.34.description",
//     avableTiming: "team.members.34.avableTiming",
//     workPlaces: "team.members.34.workPlaces",
//     education: "team.members.34.education",
//     phD: "team.members.34.education.phD",
//     masters: "team.members.34.education.masters",
//     Bachelors: "team.members.34.education.Bachelors",
//     expe: "team.members.34.expe",
//     exp1: "team.members.34.expe.exp1",
//     exp2: "team.members.34.expe.exp2",
//     exp3: "team.members.34.expe.exp3",
//     exp4: "team.members.34.expe.exp4",
//     certifition: "team.members.34.certifition",
//     langCanSpeak: "team.members.34.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-36.jpg",
//     name: "team.members.35.name",
//     specification: "team.members.35.specification",
//     text: "team.members.35.text",
//     level: "team.members.35.level",
//     joiningYear: "team.members.35.joiningYear",
//     line: "team.members.35.line",
//     moto: "team.members.35.moto",
//     description: "team.members.35.description",
//     avableTiming: "team.members.35.avableTiming",
//     workPlaces: "team.members.35.workPlaces",
//     education: "team.members.35.education",
//     phD: "team.members.35.education.phD",
//     masters: "team.members.35.education.masters",
//     Bachelors: "team.members.35.education.Bachelors",
//     expe: "team.members.35.expe",
//     exp1: "team.members.35.expe.exp1",
//     exp2: "team.members.35.expe.exp2",
//     exp3: "team.members.35.expe.exp3",
//     exp4: "team.members.35.expe.exp4",
//     certifition: "team.members.35.certifition",
//     langCanSpeak: "team.members.35.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-37.jpg",
//     name: "team.members.36.name",
//     specification: "team.members.36.specification",
//     text: "team.members.36.text",
//     level: "team.members.36.level",
//     joiningYear: "team.members.36.joiningYear",
//     line: "team.members.36.line",
//     moto: "team.members.36.moto",
//     description: "team.members.36.description",
//     avableTiming: "team.members.36.avableTiming",
//     workPlaces: "team.members.36.workPlaces",
//     education: "team.members.36.education",
//     phD: "team.members.36.education.phD",
//     masters: "team.members.36.education.masters",
//     Bachelors: "team.members.36.education.Bachelors",
//     expe: "team.members.36.expe",
//     exp1: "team.members.36.expe.exp1",
//     exp2: "team.members.36.expe.exp2",
//     exp3: "team.members.36.expe.exp3",
//     exp4: "team.members.36.expe.exp4",
//     certifition: "team.members.36.certifition",
//     langCanSpeak: "team.members.36.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg: "/Images/before/IMG_1794.PNG",
//         afterImg: "/Images/after/IMG_1795.PNG",
//       },
//       {
//         beforeImg: "/Images/before/befor.PNG",
//         afterImg: "/Images/after/IMG_1800.PNG",
//       },
//       {
//         beforeImg: "/Images/before/IMG_1779.PNG",
//         afterImg: "/Images/after/IMG_1780.PNG",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-37.jpg",
//     name: "team.members.37.name",
//     specification: "team.members.37.specification",
//     text: "team.members.37.text",
//     level: "team.members.37.level",
//     joiningYear: "team.members.37.joiningYear",
//     line: "team.members.37.line",
//     moto: "team.members.37.moto",
//     description: "team.members.37.description",
//     avableTiming: "team.members.37.avableTiming",
//     workPlaces: "team.members.37.workPlaces",
//     education: "team.members.37.education",
//     phD: "team.members.37.education.phD",
//     masters: "team.members.37.education.masters",
//     Bachelors: "team.members.37.education.Bachelors",
//     expe: "team.members.37.expe",
//     exp1: "team.members.37.expe.exp1",
//     exp2: "team.members.37.expe.exp2",
//     exp3: "team.members.37.expe.exp3",
//     exp4: "team.members.37.expe.exp4",
//     certifition: "team.members.37.certifition",
//     langCanSpeak: "team.members.37.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },
//   {
//     image: "/Images/cd-37.jpg",
//     name: "team.members.38.name",
//     specification: "team.members.38.specification",
//     text: "team.members.38.text",
//     level: "team.members.38.level",
//     joiningYear: "team.members.38.joiningYear",
//     line: "team.members.38.line",
//     moto: "team.members.38.moto",
//     description: "team.members.38.description",
//     avableTiming: "team.members.38.avableTiming",
//     workPlaces: "team.members.38.workPlaces",
//     education: "team.members.38.education",
//     phD: "team.members.38.education.phD",
//     masters: "team.members.38.education.masters",
//     Bachelors: "team.members.38.education.Bachelors",
//     expe: "team.members.38.expe",
//     exp1: "team.members.38.expe.exp1",
//     exp2: "team.members.38.expe.exp2",
//     exp3: "team.members.38.expe.exp3",
//     exp4: "team.members.38.expe.exp4",
//     certifition: "team.members.38.certifition",
//     langCanSpeak: "team.members.38.langCanSpeak",
//     imagePairs: [
//       {
//         beforeImg:
//           "",
//         afterImg:
//           "",
//       },
//     ],
//   },

//   // ... other members
// ];

// export default function TeamDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//   //   const member = team[id - 1];
//   const memberIndex = id ? parseInt(id, 10) - 1 : -1;
//   const member = team[memberIndex];
//   if (!member) {
//     return (
//       <div className="text-center text-white mt-16 text-2xl">
//         {t("team.notFound") || "Member not found"}
//       </div>
//     );
//   }
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 2000, // Slide every 2000ms (2 seconds)
//     draggable: false, // Disable mouse dragging
//     swipe: true, // Allow swipe on mobile
//     swipeToSlide: true, // Allow sliding with swipe
//   };

//   function getRepeatedImagePairs(imagePairs: { beforeImg: string; afterImg: string; }[], minLength = 6) {
//   const repeatedPairs = [];
//   while (repeatedPairs.length < minLength) {
//     repeatedPairs.push(...imagePairs);
//   }
//   return repeatedPairs.slice(0, minLength);
// }

//   return (
//     <div
//       className={`min-h-screen bg-black py-12 px-6 relative ${
//         isArabic ? "rtl" : "ltr"
//       }`}
//     >
//       {/* Back button in top-right corner */}
//       {/* <button
//         onClick={() => navigate(-1)}
//         className="absolute top-6 right-6 bg-[#1AB8B3] text-white px-4 py-2 rounded hover:bg-[#159693]"
//       >
//         {"← Back"}
//       </button> */}

//       <div className="max-w-6xl mx-auto  p-20 rounded-xl shadow-lg text-white flex flex-col lg:flex-row gap-8">
//         {/* Left column - Image */}
//         <div className="lg:w-1/1">
//           <img
//             src={member.image}
//             alt={t(member.name)}
//             className="w-full h-auto object-cover rounded-lg"
//           />
//         </div>

//         {/* Right column - Content */}
//         <div
//           className="lg:w-1/1 flex flex-col content-center  gap-4"
//           style={{ marginTop: "250px" }}
//         >
//           <h2 className="text-3xl font-bold">{t(member.name)}</h2>

//           <h4 className="text-lg text-[#1AB8B3]">{t(member.specification)}</h4>
//           {/* <h4 className="text-lg text-[#1AB8B3]">{t(member.specification)}</h4> */}
//           <p className="text-gray-500 text-base">{t(member.level)}</p>
//           <p className="text-gray-300 text-base">{t(member.joiningYear)}</p>
//           <i className="text-1xl font-light">{t(member.line)}</i>
//           {/* <p className="text-gray-300 text-base">{t(member.description)}</p> */}
//           <p className="text-gray-400 text-sm italic tracking-wide leading-relaxed">
//             {t(member.moto)}
//           </p>
//           <p className="text-gray-400 text-sm italic tracking-wide leading-relaxed">
//             {t(member.description)}
//           </p>
//           <p className="text-white-400 text-sm italic tracking-wide leading-relaxed">
//             {t(member.avableTiming)}
//             <br />
//             {t(member.workPlaces)}
//           </p>
//         </div>
//       </div>
//       <div className="container mx-auto mt-8 mb-20">
//         <div className="flex flex-wrap">
//           <div className="w-full md:w-1/4 ">
//             <h2 className="text-xl text-white text-center font-bold mb-1">
//               Education
//             </h2>
//             {/* <p className="text-white text-center m-1">{t(member.education)}</p> */}

//             <ul>
//               <li className="text-white text-center m-1">{t(member.phD)}</li>
//               <li className="text-white text-center m-1">
//                 {t(member.masters)}
//               </li>
//               <li className="text-white text-center m-1">
//                 {t(member.Bachelors)}
//               </li>
//               {/* <li className="text-white text-center m-1">
//                 Bachelors of Medicine and Surgery, Cairo University
//               </li> */}
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 p-4 border-l border-gray-300">
//             <h2 className="text-xl text-white text-center font-bold mb-1">
//               Experience
//             </h2>
//             {/* <p className="text-white text-center m-1">{t(member.expe)}</p> */}
//             <ul>
//               <li className="text-white text-center m-1">{t(member.exp1)}</li>
//               <li className="text-white text-center m-1">{t(member.exp2)}</li>
//               <li className="text-white text-center m-1">{t(member.exp3)}</li>
//               <li className="text-white text-center m-1">{t(member.exp4)}</li>
//               {/* <li className="text-white text-center m-1">
//                 Al Noor Specialized Hospital, Makkah Al Mukarramah / 10 years
//               </li> */}
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 p-4 border-l border-gray-300">
//             <h2 className="text-xl text-white text-center font-bold mb-1">
//               Professional certificates
//             </h2>
//             {/* <p className="text-white text-center m-1">
//               {t(member.certifition)}
//             </p> */}

//             <ul>
//               <li className="text-white text-center m-1">
//                 {t(member.certifition)}
//               </li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 p-4 border-l border-gray-300">
//             <h2 className="text-xl text-white text-center font-bold mb-1">
//               Languages ​you speak
//             </h2>
//             {/* <p className="text-white text-center m-1">
//               {t(member.langCanSpeak)}
//             </p> */}
//             <ul>
//               <li className="text-white text-center m-1">
//                 {t(member.langCanSpeak)}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       {member.imagePairs &&
//         member.imagePairs.some(
//           (pair) => pair.beforeImg !== "" && pair.afterImg !== ""
//         ) && (
//           <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row">
//               <div className="w-full md:w-1/2 p-4">
//                 {/* Left Column - Text */}
//                 <div className="flex flex-col justify-center p-8">
//                   <h2 className="text-3xl text-white font-bold mb-4">
//                     Smile Transformations
//                   </h2>
//                   <p className="text-lg text-white">
//                     Discover how our patients transformed their smiles with our
//                     advanced dental treatments. Swipe through the slider to see
//                     the before and after images.
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 p-4">
//                 {/* Right Column - Slider or Single/Multiple Images */}
//                 <div className="p-4">
//                   <Slider {...settings}>
//                     {getRepeatedImagePairs(member.imagePairs, 6).map(
//                       (pair, index) => (
//                         <div
//                           key={index}
//                           className="flex-none transition-transform"
//                         >
//                           <BeforeAfterSlider
//                             beforeImg={pair.beforeImg}
//                             afterImg={pair.afterImg}
//                           />
//                         </div>
//                       )
//                     )}
//                   </Slider>

//                   {/* {member.imagePairs.length > 2 ? (
//                 <Slider {...settings}>
//                   {member.imagePairs.map((pair, index) => (
//                     <div key={index} className="flex-none transition-transform">
//                       <BeforeAfterSlider
//                         beforeImg={pair.beforeImg}
//                         afterImg={pair.afterImg}
//                       />
//                     </div>
//                   ))}
//                 </Slider>
//               ) : (
//                 <div className="flex flex-wrap gap-4">
//                   {member.imagePairs.map((pair, index) => (
//                     <div
//                       key={index}
//                       className="flex-none transition-transform w-full"
//                     >
//                       <BeforeAfterSlider
//                         beforeImg={pair.beforeImg}
//                         afterImg={pair.afterImg}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )} */}
//                 </div>
//               </div>
//             </div>
//             <center>
//               <button
//                 onClick={() => navigate("/qualitygallery")}
//                 className=" bg-[#1ab8b3] text-white px-4 py-2 rounded hover:bg-[#159693]"
//               >
//                 {"View More"}
//               </button>
//             </center>
//           </div>
//         )}

//       {/* <BeforeAfterSlider beforeImg={""} afterImg={""}/> */}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// // import { useParams, useNavigate } from "react-router-dom";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import BeforeAfterSlider from "./BeforeAfterSlider1";
// import { useTranslation } from "react-i18next";

// interface ImagePair {
//   beforeImg: string;
//   afterImg: string;
// }

// interface Doctor {
//   name: string;
//   image: string;
//   Specialization: string;
//   classification: string;
//   year: string;
//   description: string;
//   working: string;
//   Branch: string;
//   PhD: string;
//   Master: string;
//   Bachelor: string;
//   experience: string;
//   courses: string;
//   Languages: string;
//   beforeAfterImages: ImagePair[];
// }

// function TeamDetail() {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const queryParams = new URLSearchParams(location.search);
//   const langtype = queryParams.get("langtype") || "en";
//   // const isArabic = i18n.language === "ar";
//   // const isArabics = i18n.language === "ar";

//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//   // const [doctor, setDoctor] = useState(null);
//   const [doctor, setDoctor] = useState<Doctor | null>(null);

//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!id) return;

//     const formData = new FormData();
//     formData.append("id", id);
//     formData.append("langType", i18n.language); // ✅ send current language from i18n

//     fetch(
//       "https://powderblue-bear-942381.hostingersite.com/qcc/viewDoctorById.php",
//       {
//         method: "POST",
//         body: formData,
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === "success") {
//           const doctorData: Doctor = data.data;
//           setDoctor(doctorData);
//           setError("");
//         } else {
//           setError("Member not found");
//           setDoctor(null);
//         }
//       })
//       .catch(() => {
//         setError("Failed to fetch data");
//         setDoctor(null);
//       });
//   }, [id, i18n.language]); // ✅ run on id or language change

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!doctor) return <div>Loading...</div>;

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 2000, // Slide every 2000ms (2 seconds)
//     draggable: false, // Disable mouse dragging
//     swipe: true, // Allow swipe on mobile
//     swipeToSlide: true, // Allow sliding with swipe
//     responsive: [
//       {
//         breakpoint: 768, // below 768px viewport
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false,
//           draggable: true, // optionally allow drag on mobile
//         },
//       },
//     ],
//   };

//   function getRepeatedImagePairs(
//     imagePairs: { beforeImg: string; afterImg: string }[],
//     minLength = 6
//   ) {
//     const repeatedPairs = [];
//     while (repeatedPairs.length < minLength) {
//       repeatedPairs.push(...imagePairs);
//     }
//     return repeatedPairs.slice(0, minLength);
//   }

//   return (
//     <div>
//       <div
//         className={`min-h-screen bg-black py-12 px-6 relative ${
//           langtype === "ar" ? "rtl" : "ltr"
//         }`}
//       >
//         {/* Back button in top-right corner */}
//         {/* <button
//             onClick={() => navigate(-1)}
//             className="absolute top-6 right-6 bg-[#1AB8B3] text-white px-4 py-2 rounded hover:bg-[#159693]"
//           >
//             {"← Back"}
//           </button> */}

//         <div
//           className={`max-w-6xl mx-auto  md:p-20 rounded-xl shadow-lg text-white flex  gap-8   ${
//             isArabic ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"
//           }`}
//         >
//           {/* Left column - Image */}
//           <div className="lg:w-1/1">
//             {/* <img
//               src={doctor.image}
//               src="https://powderblue-bear-942381.hostingersite.com/qcc/uploads/{item.image}"
//               alt={doctor.name}
//               className="w-full h-auto object-cover rounded-lg"
//             /> */}
//             <img
//               src={`https://powderblue-bear-942381.hostingersite.com/qcc/uploads/${doctor.image}`}
//               alt={doctor.name}
//               className="w-full h-auto object-cover rounded-lg"
//             />
//           </div>

//           {/* Right column - Content */}
//           <div className="lg:w-1/1 flex flex-col content-center  gap-4 md:mt-[250px]">
//             <h2
//               style={{
//                 textAlign: isArabic ? "right" : "left",
//               }}
//               className="text-3xl font-bold"
//             >
//               {doctor.name}
//             </h2>

//             <h4
//               style={{
//                 textAlign: isArabic ? "right" : "left",
//               }}
//               className="text-lg text-[#1AB8B3]"
//             >
//               {doctor.Specialization}
//             </h4>
//             {/* <h4   style={{
//               textAlign: isArabic ? "right" : "left",
//             }} className="text-lg text-[#1AB8B3]">{t(doctor.specification)}</h4> */}
//             <p
//               style={{
//                 textAlign: isArabic ? "right" : "left",
//               }}
//               className="text-gray-500 text-base"
//             >
//               {doctor.classification}
//             </p>
//             <p
//               style={{
//                 textAlign: isArabic ? "right" : "left",
//               }}
//               className="text-gray-300 text-base"
//             >
//               {doctor.year}
//             </p>
//             {/* <i   style={{
//               textAlign: isArabic ? "right" : "left",
//             }} className="text-1xl font-light">{doctor.line}</i> */}
//             {/* <p   style={{
//               textAlign: isArabic ? "right" : "left",
//             }} className="text-gray-300 text-base">{t(doctor.description)}</p> */}
//             {/* <p   style={{
//               textAlign: isArabic ? "right" : "left",
//             }} className="text-gray-400 text-sm italic tracking-wide leading-relaxed">
//               {doctor.moto}
//             </p> */}
//             <p
//               style={{
//                 textAlign: isArabic ? "right" : "left",
//               }}
//               className="text-gray-400 text-sm italic tracking-wide leading-relaxed"
//             >
//               {doctor.description}
//             </p>
//             <p
//               style={{
//                 textAlign: isArabic ? "right" : "left",
//               }}
//               className="text-white-400 text-sm italic tracking-wide leading-relaxed"
//             >
//               {doctor.working}
//               <br />
//               {doctor.Branch}
//             </p>
//           </div>
//         </div>
//         <div className="container mx-auto mt-8 mb-20">
//           <div className="flex flex-wrap">
//             <div className="w-full md:w-1/4 ">
//               <h2 className="text-xl text-white text-center font-bold mb-2">
//                 {t("drView.education")}
//               </h2>
//               {/* <p className="text-white text-center m-1">{t(doctor.education)}</p> */}

//               <ul>
//                 <li className="text-white text-center m-1">{doctor.PhD}</li>
//                 <li className="text-white text-center m-1">{doctor.Master}</li>
//                 <li className="text-white text-center mb-4">
//                   {doctor.Bachelor}
//                 </li>
//                 {/* <li className="text-white text-center m-1">
//                     Bachelors of Medicine and Surgery, Cairo University
//                   </li> */}
//               </ul>
//             </div>
//             <div className="w-full md:w-1/4 p-4 border-t md:border-t-0 md:border-l border-gray-300">
//               <h2 className="text-xl text-white text-center font-bold mb-2">
//                 {t("drView.experience")}
//               </h2>
//               {/* <p className="text-white text-center m-1">{t(member.expe)}</p> */}
//               <ul>
//                 <li className="text-white text-center m-1">
//                   {doctor.experience}
//                 </li>
//                 {/* <li className="text-white text-center m-1">{t(member.exp2)}</li>
//                 <li className="text-white text-center m-1">{t(member.exp3)}</li>
//                 <li className="text-white text-center m-1">{t(member.exp4)}</li> */}
//                 {/* <li className="text-white text-center m-1">
//                     Al Noor Specialized Hospital, Makkah Al Mukarramah / 10 years
//                   </li> */}
//               </ul>
//             </div>
//             <div className="w-full md:w-1/4 p-4 border-t md:border-t-0 md:border-l border-gray-300">
//               <h2 className="text-xl text-white text-center font-bold mb-1">
//                 {t("drView.certificates")}
//               </h2>
//               {/* <p className="text-white text-center m-1">
//                   {t(member.certifition)}
//                 </p> */}

//               <ul>
//                 <li className="text-white text-center m-1">{doctor.courses}</li>
//               </ul>
//             </div>
//             <div className="w-full md:w-1/4 p-4 border-t md:border-t-0 md:border-l border-gray-300">
//               <h2 className="text-xl text-white text-center font-bold mb-1">
//                 {t("drView.languages")}
//               </h2>
//               {/* <p className="text-white text-center m-1">
//                   {t(doctor.langCanSpeak)}
//                 </p> */}
//               <ul>
//                 <li className="text-white text-center m-1">
//                   {doctor.Languages}
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {doctor.beforeAfterImages.some(
//           (pair) => pair.beforeImg !== "" && pair.afterImg !== ""
//         ) && (
//           <div className="container mx-auto">
//             <div
//               className={`flex  ${
//                 isArabic ? " flex-col md:flex-row-reverse" : " flex-col md:flex-row"
//               }`}
//             >
//               <div className="w-full md:w-1/2 md:p-4">
//                 <div className="flex flex-col justify-center md:p-8">
//                   <h2
//                     style={{
//                       textAlign: isArabic ? "right" : "left",
//                     }}
//                     className="text-3xl text-white font-bold mb-4"
//                   >
//                     {t("drView.smileTransf.title")}
//                   </h2>
//                   <p
//                     style={{
//                       textAlign: isArabic ? "right" : "left",
//                     }}
//                     className="text-lg text-white"
//                   >
//                     {t("drView.smileTransf.description")}
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 md:p-4 mt-10">
//                 <div className="md:p-4">
//                   <Slider {...settings}>
//                     {getRepeatedImagePairs(doctor.beforeAfterImages, 6).map(
//                       (pair, index) => (
//                         <div
//                           key={index}
//                           className="flex-none transition-transform"
//                         >
//                           <BeforeAfterSlider
//                             beforeImg={`https://powderblue-bear-942381.hostingersite.com/qcc/uploads/before/${pair.beforeImg}`}
//                             afterImg={`https://powderblue-bear-942381.hostingersite.com/qcc/uploads/after/${pair.afterImg}`}
//                           />
//                         </div>
//                       )
//                     )}
//                   </Slider>
//                 </div>
//               </div>
//             </div>
//             <center>
//               <button
//                 onClick={() => navigate("/qualitygallery")}
//                 className="bg-[#1ab8b3] text-white px-4 py-2 rounded hover:bg-[#159693]"
//               >
//                 {t("drView.viewMore")}
//               </button>
//             </center>
//           </div>
//         )}

//         {/* <BeforeAfterSlider beforeImg={""} afterImg={""}/> */}
//       </div>
//       {/* <div
//         dir={langtype === "ar" ? "rtl" : "ltr"}
//         className="min-h-screen bg-black py-12 px-6"
//       >
//         <h1 className="text-white text-3xl font-bold mb-4">{doctor.name}</h1>
//         <p className="text-white mb-2">
//           <strong>Specialization:</strong> {doctor.Specialization}
//         </p>
//         <p className="text-white mb-2">
//           <strong>Classification:</strong> {doctor.classification}
//         </p>
//         <p className="text-white mb-2">
//           <strong>Bachelor:</strong> {doctor.Bachelor}
//         </p>
//         <p className="text-white mb-2">
//           <strong>Master:</strong> {doctor.Master}
//         </p>
//         <p className="text-white mb-2">
//           <strong>PhD:</strong> {doctor.PhD || "N/A"}
//         </p>
//         <p className="text-white mb-2">
//           <strong>Experience:</strong> {doctor.experience}
//         </p>
//         <p className="text-white mb-2">
//           <strong>Courses:</strong> {doctor.courses}
//         </p>
//         <p className="text-white mb-2">
//           <strong>Languages:</strong> {doctor.Languages}
//         </p>
//         <p className="text-white mb-2">
//           <strong>Year:</strong> {doctor.year}
//         </p>
//         <p className="text-white mb-4">
//           <strong>Description:</strong> {doctor.description}
//         </p>

//         <img
//           src={`https://powderblue-bear-942381.hostingersite.com/qcc/uploads/${doctor.image}`}
//           alt={doctor.name}
//           className="w-48 rounded-md mb-4"
//         />

//         <div>
//           <h2 className="text-white text-2xl mb-2">Before & After Images</h2>
//           {doctor.beforeAfterImages.map((item, index) => (
//             <div key={index} className="mb-6 flex flex-col md:flex-row gap-4">
//               <div>
//                 <p className="text-white mb-1">Before:</p>
//                 <img
//                   src={`https://powderblue-bear-942381.hostingersite.com/qcc/uploads/before/${item.beforeImg}`}
//                   alt={`Before ${index + 1}`}
//                   className="w-48 rounded-md"
//                 />
//               </div>
//               <div>
//                 <p className="text-white mb-1">After:</p>
//                 <img
//                   src={`https://powderblue-bear-942381.hostingersite.com/qcc/uploads/after/${item.afterImg}`}
//                   alt={`After ${index + 1}`}
//                   className="w-48 rounded-md"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default TeamDetail;

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



  console.log(doctor.working)

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
      className={`min-h-screen bg-black py-12 px-6 relative pb-40 ${langtype === "ar" ? "rtl" : "ltr"
        }`}
    >
      {/* === Sticky top‐section === */}
      <div
        className={`max-w-6xl mx-auto md:p-20 rounded-xl shadow-lg text-white flex gap-8 h-[200vh] ${isArabic ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"
          }`}
      >
        {/* Left: Smaller sticky image */}
        <div className="lg:w-4/5 sticky top-10 self-start ">
          <img
            src={`https://jawdah.yatrasaathi.in/api/uploads/${doctor.image}`}
            alt={doctor.name}
            className="w-full h-[100vh]  object-cover rounded-lg"
          />
        </div>

        {/* Right: Centered and scrollable basic info */}
        <div
          className="lg:w-3/5 flex flex-col justify-center gap-4 pl-20 overflow-y-auto"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="mt-0 md:mt-[250px]">
            <h2
              style={{ textAlign: isArabic ? "right" : "left" }}
              className="text-3xl font-bold"
            >
              {/* {doctor.name} */} {doctor.working}
            </h2>
            <h4
              style={{ textAlign: isArabic ? "right" : "left" }}
              className="text-lg text-[#1AB8B3]"
            >
              {doctor.Specialization}
            </h4>
            <p
              style={{ textAlign: isArabic ? "right" : "left" }}
              className="text-gray-500 text-base"
            >
              {doctor.classification}
            </p>
            <p
              style={{ textAlign: isArabic ? "right" : "left" }}
              className="text-gray-300 text-base"
            >
              {doctor.year}
            </p>
            <p
              style={{ textAlign: isArabic ? "right" : "left" }}
              className="text-gray-400 text-sm italic tracking-wide leading-relaxed"
            >
              {doctor.description}
            </p>
            <p
              style={{ textAlign: isArabic ? "right" : "left" }}
              className="text-white-400 text-sm italic tracking-wide leading-relaxed"
            >
              {/* {doctor.working} */}
              <br />
              {doctor.Branch}
            </p>
            <div className="w-full md:w-1/1 ">
              <h2 className="text-xl text-white text-center font-bold mb-2">
                {t("drView.education")}
              </h2>
              {/* <p className="text-white text-center m-1">{t(doctor.education)}</p> */}

              <ul>
                <li className="text-white text-center m-1">{doctor.PhD}</li>
                <li className="text-white text-center m-1">{doctor.Master}</li>
                <li className="text-white text-center mb-4">
                  {doctor.Bachelor}
                </li>
                {/* <li className="text-white text-center m-1">
                    Bachelors of Medicine and Surgery, Cairo University
                  </li> */}
              </ul>
            </div>
            <center>
              <hr style={{ width: "40%" }}></hr>
            </center>
            <div className="w-full md:w-1/1 p-4 ">
              <h2 className="text-xl text-white text-center font-bold mb-2">
                {t("drView.experience")}
              </h2>
              {/* <p className="text-white text-center m-1">{t(member.expe)}</p> */}
              <ul>
                <li className="text-white text-center m-1">
                  {doctor.experience}
                </li>
                {/* <li className="text-white text-center m-1">{t(member.exp2)}</li>
                <li className="text-white text-center m-1">{t(member.exp3)}</li>
                <li className="text-white text-center m-1">{t(member.exp4)}</li> */}
                {/* <li className="text-white text-center m-1">
                    Al Noor Specialized Hospital, Makkah Al Mukarramah / 10 years
                  </li> */}
              </ul>
            </div>
            <center>
              <hr style={{ width: "40%" }}></hr>
            </center>
            <div className="w-full md:w-1/1 p-4 ">
              <h2 className="text-xl text-white text-center font-bold mb-1">
                {t("drView.certificates")}
              </h2>
              {/* <p className="text-white text-center m-1">
                  {t(member.certifition)}
                </p> */}

              <ul>
                <li className="text-white text-center m-1">{doctor.courses}</li>
              </ul>
            </div>
            <center>
              <hr style={{ width: "40%" }}></hr>
            </center>
            <div className="w-full md:w-1/1 p-4 ">
              <h2 className="text-xl text-white text-center font-bold mb-1">
                {t("drView.languages")}
              </h2>
              {/* <p className="text-white text-center m-1">
                  {t(doctor.langCanSpeak)}
                </p> */}
              <ul>
                <li className="text-white text-center m-1">
                  {doctor.Languages}
                </li>
              </ul>
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
                    className="text-3xl text-white font-bold mb-4"
                  >
                    {t("drView.smileTransf.title")}
                  </h2>
                  <p
                    style={{ textAlign: isArabic ? "right" : "left" }}
                    className="text-lg text-white"
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
                        <div
                          key={index}
                          className="flex-none transition-transform"
                        >
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
