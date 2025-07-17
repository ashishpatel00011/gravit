// import { useRef, useEffect, useState } from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface ImagePair {
  beforeImg: string;
  afterImg: string;
}

interface Doctor {
  name: string;
  title: string;
  education: string;
  profileImg: string;
  imagePairs: ImagePair[];
}

const doctors: Doctor[] = [
  {
    name: "team.members.0.specification",
    title: "team.members.0.specification",
    education: "Columbia University, New York / USA",
    profileImg: "/Images/cd-1.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/b badr c2 before.JPG",
        afterImg: "/Images/after/a badr c2 after .JPG",
      },
      {
        beforeImg: "/Images/before/b badr before1 (2).JPG",
        afterImg: "/Images/after/a badr after 1a (2).JPG",
      },
    ],
  },
  {
    name: "team.members.1.name",
    title: "team.members.1.specification",
    education: "University of London, UK",
    profileImg: "/Images/cd-2.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/before.JPG",
        afterImg: "/Images/after/after.JPG",
      },
    ],
  },
  {
    name: "team.members.2.name",
    title: "team.members.2.specification",
    education: "Harvard School of Dental Medicine, USA",
    profileImg: "/Images/cd-3.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/IMG_1681 (1).JPG",
        afterImg: "/Images/after/IMG_1690 (1).JPG",
      },
      {
        beforeImg: "/Images/before/بعد امام فيلر (1).JPG",
        afterImg: "/Images/after/قبل امام فيلر (1).JPG",
      },
      {
        beforeImg: "/Images/before/قبل٢IMG_4766 (1).JPG",
        afterImg: "/Images/after/بعد٢IMG_4882 (1).JPG",
      },
    ],
  },
  {
    name: "team.members.3.name",
    title: "team.members.3.specification",
    education: "University of Michigan, USA",
    profileImg: "/Images/cd-4.png",
    imagePairs: [
      {
        beforeImg: "/Images/before/b Dr Naif c1 before.jpg",
        afterImg: "/Images/after/a Dr Naif c1 after.jpg",
      },
      {
        beforeImg: "/Images/before/b Dr Naif c2 before.jpg",
        afterImg: "/Images/after/a Dr Naif c2 after.JPEG",
      },
      {
        beforeImg: "/Images/before/b Dr Naif c3before.jpg",
        afterImg: "/Images/after/a Dr Naif c3 after.jpg",
      },
      {
        beforeImg: "/Images/before/b Dr Naif c4 before.jpeg",
        afterImg: "/Images/after/a Dr Naif c4 after.jpeg",
      },
      {
        beforeImg: "/Images/before/b Dr Naif c5 before.jpg",
        afterImg: "/Images/after/a Dr Naif c5 after.jpg",
      },
    ],
  },
  // {
  //   name: "team.members.4.name",
  //   title: "team.members.4.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-5.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  {
    name: "team.members.5.name",
    title: "team.members.5.specification",
    education: "King’s College London, UK",
    profileImg: "/Images/cd-6.png",
    imagePairs: [
      {
        beforeImg: "/Images/before/b Dr Ghasan before.JPG",
        afterImg: "/Images/after/a Dr Ghasan after.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Ghasan c2 before.JPG",
        afterImg: "/Images/after/a Dr Ghasan c2 after.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Ghasan c3 before.jpeg",
        afterImg: "/Images/after/a Dr Ghasan c3after.jpeg",
      },
      {
        beforeImg: "/Images/before/b Dr Ghasan c4 before.JPG",
        afterImg: "/Images/after/a Dr Ghasan c4 after.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Ghasan c5 before.JPG",
        afterImg: "/Images/after/a Dr Ghasan c5 after.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Ghasan c6 before.JPG",
        afterImg: "/Images/after/a Dr Ghasan c6 after.jpeg",
      },
      {
        beforeImg: "/Images/before/b Dr Ghasan c7 before.JPG",
        afterImg: "/Images/after/a Dr Ghasan c7 after.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Ghasan c8 before.jpeg",
        afterImg: "/Images/after/a Dr Ghasan c8 after.jpeg",
      },
    ],
  },
  // {
  //   name: "team.members.6.name",
  //   title: "team.members.6.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-7.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.7.name",
  //   title: "team.members.7.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-8.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.8.name",
  //   title: "team.members.8.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-9.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.9.name",
  //   title: "team.members.9.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-10.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.10.name",
  //   title: "team.members.10.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-11.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.11.name",
  //   title: "team.members.11.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-12.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  {
    name: "team.members.12.name",
    title: "team.members.12.specification",
    education: "King’s College London, UK",
    profileImg: "/Images/cd-13.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/b Dr Abdullah Badhman c1 before.jpeg",
        afterImg: "/Images/after/a Dr Abdullah Badhman c1after.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Abdullah Badhman c2before.JPG",
        afterImg: "/Images/after/a Dr Abdullah Badhman c2after.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Abdullah Badhman c3 before.jpeg",
        afterImg: "/Images/after/a Dr Abdullah Badhman c3after.jpeg",
      },
    ],
  },
  // {
  //   name: "team.members.13.name",
  //   title: "team.members.13.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-14.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.14.name",
  //   title: "team.members.14.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-15.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  {
    name: "team.members.15.name",
    title: "team.members.15.specification",
    education: "King’s College London, UK",
    profileImg: "/Images/cd-16.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/Dr. Ramzi Saeed c1b.JPG",
        afterImg: "/Images/after/Dr. Ramzi Saeed c1a.JPG",
      },
      {
        beforeImg: "/Images/before/Dr. Ramzi Saeed c2b.JPG",
        afterImg: "/Images/after/Dr. Ramzi Saeed c2a.JPG",
      },
      {
        beforeImg: "/Images/before/Dr. Ramzi Saeed c3b.JPG",
        afterImg: "/Images/after/Dr. Ramzi Saeed c3a.JPG",
      },
      {
        beforeImg: "/Images/before/Dr. Ramzi Saeed c4b.JPG",
        afterImg: "/Images/after/Dr. Ramzi Saeed c4a.JPG",
      },
      {
        beforeImg: "/Images/before/Dr. Ramzi Saeed c5b.JPG",
        afterImg: "/Images/after/Dr. Ramzi Saeed c5a.JPG",
      },
      {
        beforeImg: "/Images/before/Dr. Ramzi Saeed c6b.JPG",
        afterImg: "/Images/after/Dr. Ramzi Saeed c6a.JPG",
      },
      {
        beforeImg: "/Images/before/Dr. Ramzi Saeed c7b.JPG",
        afterImg: "/Images/after/Dr. Ramzi Saeed c7a.JPG",
      },
      {
        beforeImg: "/Images/before/Dr. Ramzi Saeed c8b.JPG",
        afterImg: "/Images/after/Dr. Ramzi Saeed c8a.JPG",
      },
    ],
  },
  {
    name: "team.members.16.name",
    title: "team.members.16.specification",
    education: "King’s College London, UK",
    profileImg: "/Images/cd-17.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/b wasam Before.JPG",
        afterImg: "/Images/after/a wasam After.JPG",
      },
      {
        beforeImg: "/Images/before/b wasam c2Before.JPG",
        afterImg: "/Images/after/a wasam c2After.JPG",
      },
      {
        beforeImg: "/Images/before/b wasam c3before also.jpeg",
        afterImg: "/Images/after/a wasam c3After Smile.JPG",
      },
    ],
  },
  // {
  //   name: "team.members.17.name",
  //   title: "team.members.17.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-18.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  {
    name: "team.members.18.name",
    title: "team.members.18.specification",
    education: "King’s College London, UK",
    profileImg: "/Images/cd-19.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/b Dr Ala before.jpg",
        afterImg: "/Images/after/a Dr Ala aftter.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Ala  c2before.jpg",
        afterImg: "/Images/after/a Dr Ala c2 aftter.JPG",
      },
      {
        beforeImg: "/Images/before/b Dr Ala c3 before.jpg",
        afterImg: "/Images/after/a Dr Ala c3 aftter.JPG",
      },
    ],
  },
  // {
  //   name: "team.members.19.name",
  //   title: "team.members.19.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-20.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.20.name",
  //   title: "team.members.20.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-21.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.21.name",
  //   title: "team.members.21.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-22.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.22.name",
  //   title: "team.members.22.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-23.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  {
    name: "team.members.23.name",
    title: "team.members.23.specification",
    education: "King’s College London, UK",
    profileImg: "/Images/cd-24.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/RIYAD C1B.PNG",
        afterImg: "/Images/after/RIYAD C1A.PNG",
      },
      {
        beforeImg: "/Images/before/RIYAD C2B.PNG",
        afterImg: "/Images/after/RIYAD C2A.PNG",
      },
      {
        beforeImg: "/Images/before/RIYAD C3B.PNG",
        afterImg: "/Images/after/RIYAD C3A.PNG",
      },
    ],
  },
  // {
  //   name: "team.members.23.name",
  //   title: "team.members.23.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-24.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.24.name",
  //   title: "team.members.24.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-25.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.25.name",
  //   title: "team.members.25.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-26.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.26.name",
  //   title: "team.members.26.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-27.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.26.name",
  //   title: "team.members.26.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-27.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.27.name",
  //   title: "team.members.27.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-28.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.28.name",
  //   title: "team.members.28.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-29.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.29.name",
  //   title: "team.members.29.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-30.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.30.name",
  //   title: "team.members.30.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-31.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.31.name",
  //   title: "team.members.31.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-32.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.32.name",
  //   title: "team.members.32.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-33.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.33.name",
  //   title: "team.members.33.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-34.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.34.name",
  //   title: "team.members.34.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-35.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.35.name",
  //   title: "team.members.35.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-36.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  {
    name: "team.members.36.name",
    title: "team.members.36.specification",
    education: "King’s College London, UK",
    profileImg: "/Images/cd-37.jpg",
    imagePairs: [
      {
        beforeImg: "/Images/before/IMG_1794.PNG",
        afterImg: "/Images/after/IMG_1795.PNG",
      },
      {
        beforeImg: "/Images/before/befor.PNG",
        afterImg: "/Images/after/IMG_1800.PNG",
      },
      {
        beforeImg: "/Images/before/IMG_1779.PNG",
        afterImg: "/Images/after/IMG_1780.PNG",
      },
    ],
  },
  // {
  //   name: "team.members.37.name",
  //   title: "team.members.37.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-37.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "team.members.38.name",
  //   title: "team.members.38.specification",
  //   education: "King’s College London, UK",
  //   profileImg: "/Images/cd-37.jpg",
  //   imagePairs: [
  //     {
  //       beforeImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
  //       afterImg:
  //         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
  //     },
  //   ],
  // },
];

function getRepeatedImagePairs(imagePairs: ImagePair[], minLength = 6) {
  const repeatedPairs = [];
  while (repeatedPairs.length < minLength) {
    repeatedPairs.push(...imagePairs);
  }
  return repeatedPairs.slice(0, minLength);
}

export default function QualityGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every 2000ms (2 seconds)
    draggable: false, // Disable mouse dragging
    swipe: true, // Allow swipe on mobile
    swipeToSlide: true, // Allow sliding with swipe
  };

  // const carouselRef = useRef<HTMLDivElement>(null);
  // const [isPaused, setIsPaused] = useState(false);

  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   console.log("my caro");
  //   console.log(carousel);

  //   if (carousel) {
  //     const autoScroll = () => {
  //       if (!isPaused) {
  //         const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  //         if (carousel.scrollLeft >= maxScroll) {
  //           carousel.scrollLeft = 0; // Reset scroll position
  //         } else {
  //           carousel.scrollLeft += 2; // Scroll by small increments
  //         }
  //       }
  //     };

  //     const interval = setInterval(autoScroll, 20);

  //     return () => clearInterval(interval); // Cleanup on unmount
  //   }
  // }, [isPaused]);

  // const scroll = (direction: "left" | "right") => {
  //   if (carouselRef.current) {
  //     setIsPaused(true); // Pause auto-scroll on manual interaction
  //     const scrollAmount = direction === "left" ? -350 : 350; // Adjust scroll amount to card width
  //     carouselRef.current.scrollBy({
  //       left: scrollAmount,
  //       behavior: "smooth",
  //     });
  //     setTimeout(() => setIsPaused(false), 2000); // Resume auto-scroll after 2 seconds
  //   }
  // };

  // const handleMouseEnter = () => setIsPaused(true);
  // const handleMouseLeave = () => setIsPaused(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="flex flex-col items-center justify-center bg-black p-4">
      <div className=" h-[40vh] flex flex-col justify-center items-center text-center px-4 pt-12">
        <div className={isArabic ? "rtl" : "ltr"}>
          <h1 className="animate-gradient mb-4">
            <span className="bg-gradient-to-b from-[#2f886c] via-[#c0dbdf] to-[#ffffff] bg-[length:300%] bg-clip-text text-transparent text-[60px]">
              {t("qg.title.line1")}
            </span>
            <br />
            <span className="bg-gradient-to-b from-[#59bb9f] via-[#92d4e2] to-[#bff0ed] bg-[length:300%] bg-clip-text text-transparent text-[60px]">
              {t("qg.title.line2")}
            </span>
          </h1>
        </div>

        {/* <p
          className={`text-[#ffffffe0] text-[18px] font-normal-200 mb-4 max-w-2xl ${
            isArabic ? "rtl" : "ltr"
          }`}
        >
          {t("home.description")}
        </p> */}

        <div
          className="flex flex-col sm:flex-row gap-4"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <button className="p-4 border text-[14px] sm:text-[16px] border-[#1ab8b3] text-white rounded-md hover:bg-[#1ab8b3]/20 transition-all duration-300 hover:border-opacity-70 cursor-pointer">
            {t("buttons.learnMore")}
          </button>
        </div>
      </div>
      {doctors.map((doctor, doctorIndex) => (
        <div key={doctorIndex} className="mb-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 h-full	">
              <Slider {...settings}>
                {getRepeatedImagePairs(doctor.imagePairs, 6).map(
                  (pair, index) => (
                    <div
                      key={index}
                      className="flex-none max-h-140 w30 max-w30 maxwm-100 wm-100 transition-transform"
                    >
                      <BeforeAfterSlider
                        beforeImg={pair.afterImg}
                        afterImg={pair.beforeImg}
                      />
                    </div>
                  )
                )}
              </Slider>
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row gap-2 p-2 rounded-md">
              <div>
                <img
                  className="h-[300px] w-full object-contain rounded-md"
                  src={doctor.profileImg}
                  alt={doctor.name}
                />
              </div>
              <div className="flex flex-col text-white">
                <h1>{t(doctor.name)}</h1>
                <p className="mt-4">{t(doctor.title)}</p>
                <p className="mt-4">
                  <i>{t(doctor.education)}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
