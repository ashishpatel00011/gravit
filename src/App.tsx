// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Pricing from "./pages/Pricing";
// import Referals from "./pages/Referals";
// import Contact from "./pages/Contact";
// import Discover from "./pages/Discover";
// import Technology from "./pages/Technology";
// import QualityGallery from "./pages/QualityGallery";
// import Careers from "./pages/Careers";
// import OurDoctors from "./pages/OurDoctors";
// import Header from "./components/Header";
// import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/Footer";
// import GetInTouch from "./components/GetInTouch";
// import Loader from "./components/Loader";
// import TeamDetail from "./components/TeamDetail";
// import { useState, useEffect } from "react";
// import {
//   FaWhatsapp
// } from "react-icons/fa";
// import Testimonials from "./components/Testimonials";
// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 6000);

//     return () => clearTimeout(timer);
//   }, []);
//     const [isOpen, setIsOpen] = useState(true);



// // const [isOpen, setIsOpen] = useState(false);

// // useEffect(() => {
// //   // Show modal after 1 minute (60000ms)
// //   const timer = setTimeout(() => {
// //     setIsOpen(true);
// //   }, 20000); // 60,000 ms = 1 minute

// //   // Clear timer on component unmount
// //   return () => clearTimeout(timer);
// // }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <Router>
//           <Header />
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home />} />

//             <Route path="/about" element={<About />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/referals" element={<Referals />} />
//             <Route path="/our-doctors" element={<OurDoctors/>} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/discover" element={<Discover />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/technology" element={<Technology />} />
//             <Route path="/qualitygallery" element={<QualityGallery />} />
//             <Route path="/team/:id" element={<TeamDetail />} />
//              <Route path="/reviews" element={<Testimonials />} />
//           </Routes>

//           <GetInTouch />
//           <Footer />
//           <a
//             href="https://api.whatsapp.com/send/?phone=966920004864&text&type=phone_number&app_absent=0" // replace with your actual WhatsApp number with country code
//             target="_blank"
//             rel="noopener noreferrer"
//             className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//             style={{ zIndex: 999 }}
//           >
//             <FaWhatsapp style={{ fontSize: "30px" }} />
//           </a>
//           {/* <div
//             style={{ display: "none" }}
//             className="h-screen flex items-center justify-center bg-gray-100"
//           > */}
//            {isOpen && (
//             <div
//               className="fixed bottom-5 left-5 z-50 w-[90%] md:w-[400px]"
//               onClick={() => setIsOpen(false)}
//             >
//               <div
//                 className="bg-white p-3 rounded-lg shadow-lg relative"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold"
//                 >
//                   &times;
//                 </button>

//                 <h2 className="text-xl font-bold text-center mb-3 text-blue-600">
//                   🎉! عرض خاص لك فقط
//                 </h2>
//                 <p className="text-gray-600 text-center mb-4 break-words leading-relaxed">
//                   احجز موعدك من خلال تطبيقنا واحصل على خصم %
//                 </p>

//                 <div className="rounded overflow-hidden mb-3">
//                   <img
//                     src="/Images/Customer Service٢.JPG"
//                     alt="Promotion"
//                     className="w-full h-48 object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//           {/* </div> */}
//         </Router>
//       )}
//     </>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Referals from "./pages/Referals";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import Technology from "./pages/Technology";
import QualityGallery from "./pages/QualityGallery";
import Careers from "./pages/Careers";
import OurDoctors from "./pages/OurDoctors";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Loader from "./components/Loader";
import TeamDetail from "./components/TeamDetail";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Testimonials from "./components/Testimonials";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  // Promotion carousel data and state
  const promotions = [
    {
      title: "🎉! عرض خاص لك فقط",
      description: "احجز موعدك من خلال تطبيقنا واحصل على خصم %",
      image: "/Images/Customer Service٢.JPG",
    },
    {
      title: "🎁 فرصة ذهبية",
      description: "سجل الآن واحصل على استشارة مجانية",
      image: "/Images/Customer Service٢.JPG",
    },
    {
      title: "🔥 خصم لفترة محدودة",
      description: "استفد من العرض قبل انتهائه",
      image: "/Images/Customer Service٢.JPG",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? promotions.length - 1 : prev - 1));
  };

  const handleNext = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === promotions.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/referals" element={<Referals />} />
            <Route path="/our-doctors" element={<OurDoctors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/qualitygallery" element={<QualityGallery />} />
            <Route path="/team/:id" element={<TeamDetail />} />
            <Route path="/reviews" element={<Testimonials />} />
          </Routes>
          <GetInTouch />
          <Footer />
          <a
            href="https://api.whatsapp.com/send/?phone=966920004864&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            style={{ zIndex: 999 }}
          >
            <FaWhatsapp style={{ fontSize: "30px" }} />
          </a>
          {isOpen && (
            <div
              className="
                fixed z-50
                bottom-10 left-1/2 transform -translate-x-1/2
                md:bottom-5 md:left-5 md:translate-x-0 md:w-[400px]
                w-auto max-w-[98%] /* MODIFIED: Changed w-full back to max-w-[98%] to prevent overlapping */
              "
              onClick={() => setIsOpen(false)}
            >
              <div
                className="bg-white rounded-lg shadow-lg relative p-2 md:p-2"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-1 right-1 text-gray-500 hover:text-black text-xl md:text-2xl font-bold"
                >
                  &times;
                </button>
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 md:p-2"
                  aria-label="Previous promotion"
                >
                  <FaChevronLeft className="text-xs md:text-sm" />
                </button>
                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-6 md:right-8 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 md:p-2"
                  aria-label="Next promotion"
                >
                  <FaChevronRight className="text-xs md:text-sm" />
                </button>
                <h2 className="text-sm md:text-xl font-bold text-center mb-0 md:mb-1 text-blue-600 mt-2">
                  {promotions[current].title}
                </h2>
                <p className="text-xs md:text-base text-gray-600 text-center mb-1 md:mb-2 break-words leading-tight md:leading-relaxed px-2 md:px-6">
                  {promotions[current].description}
                </p>
                <div className="rounded overflow-hidden mb-2 md:mb-3">
                  <img
                    src={promotions[current].image}
                    alt="Promotion"
                    className="w-full h-28 md:h-32 object-contain"
                  />
                </div>
              
                {/* Dots for navigation */}
                <div className="flex justify-center gap-1 md:gap-2 mb-1">
                  {promotions.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-1 h-1 md:w-2 md:h-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </Router>
      )}
    </>
  );
}

export default App;