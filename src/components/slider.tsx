// import React, { useRef, useEffect, useState } from "react";
// import BeforeAfterSlider from "./BeforeAfterSlider";

// interface ImagePair {
//   beforeImg: string;
//   afterImg: string;
// }

// const Carousel: React.FC = () => {
//   const imagePairs: ImagePair[] = [
//     {
//       beforeImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686482175،Before2.png",
//       afterImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686482175،After2.jpg",
//     },
//     {
//       beforeImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/before_img_1686563135،Before1.jpg",
//       afterImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-mohammed-al-hajji/after_img_1686563136،After1.jpg",
//     },
//     {
//       beforeImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-amina-al-jassem/before_img_1686638180،Before2.jpg",
//       afterImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-amina-al-jassem/after_img_1686638181،After2.jpg",
//     },
//     {
//       beforeImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-amina-al-jassem/after_img_1686638181،After2.jpg",
//       afterImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr.-amina-al-jassem/after_img_1686638401،After1.jpg",
//     },
//     {
//       beforeImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr-hashem-ghadanfari/before_img_1686640025،Before1.jpg",
//       afterImg:
//         "https://d1fela9jzizt8v.cloudfront.net/images/smiles/dr-hashem-ghadanfari/after_img_1686640025،After1.jpg",
//     },
//   ];

//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const carousel = carouselRef.current;

//     if (carousel) {
//       const autoScroll = () => {
//         if (!isPaused) {
//           const maxScroll = carousel.scrollWidth - carousel.clientWidth;
//           if (carousel.scrollLeft >= maxScroll) {
//             carousel.scrollLeft = 0; // Reset scroll position
//           } else {
//             carousel.scrollLeft += 2; // Scroll by small increments
//           }
//         }
//       };

//       const interval = setInterval(autoScroll, 20);

//       return () => clearInterval(interval); // Cleanup on unmount
//     }
//   }, [isPaused]);

//   const scroll = (direction: "left" | "right") => {
//     if (carouselRef.current) {
//       setIsPaused(true); // Pause auto-scroll on manual interaction
//       const scrollAmount = direction === "left" ? -350 : 350; // Adjust scroll amount to card width
//       carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       setTimeout(() => setIsPaused(false), 2000); // Resume auto-scroll after 2 seconds
//     }
//   };

//   const handleMouseEnter = () => setIsPaused(true);
//   const handleMouseLeave = () => setIsPaused(false);

//   const duplicatedImagePairs = [...imagePairs, ...imagePairs];

//   return (
//     <div
//       className="relative w-full mx-auto overflow-hidden"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Navigation Buttons */}
//       <div className="absolute inset-y-0 left-0 flex items-center z-10">
//         <button
//           onClick={() => scroll("left")}
//           className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
//         >
//           &#8249;
//         </button>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center z-10">
//         <button
//           onClick={() => scroll("right")}
//           className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
//         >
//           &#8250;
//         </button>
//       </div>

//       {/* Carousel */}
//       <div
//         ref={carouselRef}
//         className="flex gap-4 overflow-hidden px-5 whitespace-nowrap"
//       >
//         {duplicatedImagePairs.map((pair, index) => (
//           <div
//             key={index}
//             className="flex-none max-h-80 w-[30%] max-w-[30%] transition-transform"
//           >
//             <BeforeAfterSlider
//               beforeImg={pair.beforeImg}
//               afterImg={pair.afterImg}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
